import React, { useState, useEffect, useRef } from 'react';
import {
  verifyAdminPassphrase,
  setSecurityGuardBypass,
  isSecurityGuardBypassed,
  getLockoutStatus,
  recordFailedAttempt,
  clearLockoutOnSuccess
} from '../utils/disableDevTools';

export default function AdminTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Lockout state
  const [lockout, setLockout] = useState({ isLockedOut: false, remainingMs: 0 });

  const [logs, setLogs] = useState([]);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Check lockout timer on interval
  useEffect(() => {
    const checkLock = () => {
      const status = getLockoutStatus();
      setLockout(status);
    };

    checkLock();
    const interval = setInterval(checkLock, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // AUTO-LOCK ON TERMINAL CLOSE: When terminal closes, automatically lock session & re-enforce security
  useEffect(() => {
    if (!isOpen) {
      setSecurityGuardBypass(false);
      setIsAuthenticated(false);
      setInputVal('');
      setHistoryIndex(-1);
    } else {
      // When terminal opens, initialize auth prompt
      const lockStatus = getLockoutStatus();
      setLockout(lockStatus);

      if (lockStatus.isLockedOut) {
        const mins = Math.ceil(lockStatus.remainingMs / 60000);
        setLogs([
          { type: 'sys', text: 'BSIDES DHARAMSHALA // SECURITY KERNEL v3.0 [PQ-ENCRYPTED]' },
          { type: 'error', text: '[SYSTEM LOCKDOWN] Too many failed authentication attempts.' },
          {
            type: 'error',
            text: `[LOCKOUT ACTIVE] Terminal locked for next ${mins} minute(s). Please wait.`
          }
        ]);
      } else {
        setLogs([
          { type: 'sys', text: 'BSIDES DHARAMSHALA // SECURITY KERNEL v3.0 [PQ-ENCRYPTED]' },
          { type: 'warning', text: '------------------------------------------------------------------' },
          { type: 'warning', text: '[ADMIN AUTHENTICATION REQUIRED] Enter Master Passphrase:' }
        ]);
      }
    }
  }, [isOpen]);

  // Global Shift + Z + X Keyboard Shortcut Listener
  useEffect(() => {
    const activeKeys = new Set();

    const handleKeyDown = (e) => {
      const key = e.key ? e.key.toLowerCase() : '';
      const code = e.code ? e.code.toLowerCase() : '';

      if (e.shiftKey) activeKeys.add('shift');
      if (key === 'z' || code === 'keyz') activeKeys.add('z');
      if (key === 'x' || code === 'keyx') activeKeys.add('x');

      // Trigger terminal toggle on Shift + Z + X
      if (activeKeys.has('shift') && activeKeys.has('z') && activeKeys.has('x')) {
        e.preventDefault();
        e.stopPropagation();
        activeKeys.clear();
        setIsOpen((prev) => !prev);
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key ? e.key.toLowerCase() : '';
      const code = e.code ? e.code.toLowerCase() : '';
      if (!e.shiftKey) activeKeys.delete('shift');
      if (key === 'z' || code === 'keyz') activeKeys.delete('z');
      if (key === 'x' || code === 'keyx') activeKeys.delete('x');
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
    };
  }, []);

  // Auto-scroll terminal log to bottom & focus input
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [logs, isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const printHelp = () => {
    return [
      { type: 'info', text: 'Available Tactical Commands:' },
      { type: 'info', text: '  unlock          - Bypass security guards & enable DevTools' },
      { type: 'info', text: '  lock            - Re-enable security guards & DevTools block' },
      { type: 'info', text: '  status          - Check active security enforcement status' },
      { type: 'info', text: '  clear           - Clear console log screen' },
      { type: 'info', text: '  exit            - Close admin terminal window' }
    ];
  };

  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    if (lockout.isLockedOut) return;

    const rawInput = inputVal;
    setInputVal('');
    setHistoryIndex(-1);

    // Initial Passphrase Authentication Flow
    if (!isAuthenticated) {
      setLogs((prev) => [
        ...prev,
        { type: 'user', text: '[PASSPHRASE SUBMITTED]: ••••••••••••' },
        { type: 'sys', text: '[POST-QUANTUM KDF] Verifying 100,000-iteration SHA-512 key hash...' }
      ]);

      const isValid = await verifyAdminPassphrase(rawInput);

      if (isValid) {
        clearLockoutOnSuccess();
        setIsAuthenticated(true);
        setSecurityGuardBypass(true);
        setLogs((prev) => [
          ...prev,
          { type: 'success', text: '[AUTHENTICATED] Master passphrase verified via Post-Quantum KDF!' },
          { type: 'success', text: '[STATUS] Security guards BYPASSED. DevTools & selection ENABLED.' },
          { type: 'sys', text: '------------------------------------------------------------------' },
          ...printHelp()
        ]);
      } else {
        const failure = recordFailedAttempt();
        setLockout(getLockoutStatus());

        if (failure.isLockedOut) {
          setLogs((prev) => [
            ...prev,
            {
              type: 'error',
              text: `[SYSTEM LOCKDOWN] 4+ failed attempts detected! Terminal locked for ${failure.lockoutMinutes} minute(s).`
            }
          ]);
        } else {
          setLogs((prev) => [
            ...prev,
            {
              type: 'error',
              text: `[ACCESS DENIED] Invalid passphrase. Attempt ${failure.failedCount} of 4.`
            }
          ]);
        }
      }
      return;
    }

    // Authenticated Menu Command Flow
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setLogs((prev) => [...prev, { type: 'cmd', text: `admin@bsides-dharamshala:~$ ${trimmed}` }]);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();

    switch (cmd) {
      case 'help':
        setLogs((prev) => [...prev, ...printHelp()]);
        break;

      case 'unlock':
      case 'enable':
        setSecurityGuardBypass(true);
        setLogs((prev) => [
          ...prev,
          { type: 'success', text: '[STATUS] DevTools, right-click, selection & inspect are now ENABLED.' }
        ]);
        break;

      case 'lock':
      case 'disable':
        setSecurityGuardBypass(false);
        setLogs((prev) => [
          ...prev,
          { type: 'warning', text: '[LOCKED] Security guards re-activated.' },
          { type: 'warning', text: '[STATUS] DevTools, selection, right-click & shortcuts are ENFORCED.' }
        ]);
        break;

      case 'status':
        const isCurrentBypassed = isSecurityGuardBypassed();
        setLogs((prev) => [
          ...prev,
          {
            type: isCurrentBypassed ? 'success' : 'warning',
            text: `[SYSTEM STATUS] Guards are currently: ${
              isCurrentBypassed ? 'BYPASSED (DevTools Enabled)' : 'ENFORCED (DevTools Blocked)'
            }`
          }
        ]);
        break;

      case 'clear':
      case 'cls':
        setLogs([]);
        break;

      case 'exit':
      case 'quit':
      case 'close':
        setIsOpen(false);
        break;

      default:
        setLogs((prev) => [
          ...prev,
          { type: 'error', text: `Command not recognized: '${cmd}'. Type "help" for command list.` }
        ]);
        break;
    }
  };

  // Command History Navigation via Up / Down arrows
  const handleKeyDownInput = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Format remaining lockout time into MM:SS
  const formatLockoutTimer = (ms) => {
    if (!ms || ms <= 0) return '00:00';
    const totalSecs = Math.ceil(ms / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div
      className="admin-terminal-overlay"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="admin-terminal-window" onClick={(e) => e.stopPropagation()}>
        {/* TERMINAL HEADER */}
        <div className="terminal-header">
          <div className="terminal-title">
            <span className="terminal-icon">⚡</span>
            <span>BSIDES DHARAMSHALA // SECURITY KERNEL (SHIFT+Z+X)</span>
          </div>
          <div className="terminal-header-controls">
            {lockout.isLockedOut ? (
              <span className="terminal-badge lockout">
                <span className="badge-dot"></span>
                LOCKOUT ({formatLockoutTimer(lockout.remainingMs)})
              </span>
            ) : (
              <span className={`terminal-badge ${isAuthenticated ? 'bypassed' : 'enforced'}`}>
                <span className="badge-dot"></span>
                {isAuthenticated ? 'BYPASSED' : 'ENFORCED'}
              </span>
            )}
            <button
              className="terminal-close-btn"
              onClick={() => setIsOpen(false)}
              title="Close Terminal (Shift+Z+X)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* TERMINAL LOG OUTPUT BODY */}
        <div className="terminal-body">
          <div className="terminal-scanlines"></div>
          {logs.map((log, i) => (
            <div key={i} className={`terminal-line ${log.type}`}>
              {log.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* TERMINAL INPUT FORM */}
        <form className="terminal-input-bar" onSubmit={handleCommandSubmit}>
          <span className="terminal-prompt">
            {lockout.isLockedOut
              ? '[LOCKOUT]:'
              : !isAuthenticated
              ? '[PASSPHRASE]:'
              : 'admin@bsides-dharamshala:~$'}
          </span>
          <input
            ref={inputRef}
            type={!isAuthenticated ? 'password' : 'text'}
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDownInput}
            disabled={lockout.isLockedOut}
            placeholder={
              lockout.isLockedOut
                ? `Terminal locked for ${formatLockoutTimer(lockout.remainingMs)}...`
                : !isAuthenticated
                ? 'Enter master passphrase & press Enter...'
                : 'Type command (e.g. unlock, status, help, exit)...'
            }
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
