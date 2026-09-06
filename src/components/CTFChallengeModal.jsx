import React, { useState } from 'react';

export default function CTFChallengeModal({ isOpen, onClose }) {
  const [inputFlag, setInputFlag] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  if (!isOpen) return null;

  const EXPECTED_FLAG = 'BSIDES_DHARAMSHALA_2026{H4CK_THE_HIMALAYAS}';
  const CIPHER_STR = 'QlNJREVTX0RIQVJBTVNIQUxBXzIwMjZ7SDRDS19USEVfSElNQUxBWUFTfQ==';

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = inputFlag.trim();
    if (clean.toUpperCase() === EXPECTED_FLAG.toUpperCase()) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="ctf-modal-overlay" onClick={onClose}>
      <div className="ctf-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="ctf-modal-header">
          <div className="ctf-modal-title">
            <span className="ctf-icon">🚩</span>
            <span>BSIDES DHARAMSHALA // SECRET CTF CHALLENGE</span>
          </div>
          <button className="ctf-modal-close" onClick={onClose}>✕</button>
        </div>

        {/* BODY */}
        <div className="ctf-modal-body">
          <div className="ctf-challenge-box">
            <span className="ctf-tag">CHALLENGE 01 // DECODE THE CIPHER</span>
            <p className="ctf-prompt">
              Welcome hacker! Decode the Base64 payload below to reveal the official conference CTF flag:
            </p>
            <div className="ctf-cipher-code">
              <code>{CIPHER_STR}</code>
            </div>
            <div className="ctf-hint">
              💡 <strong>HINT:</strong> Use <code>atob()</code>, <code>base64 -d</code>, or CyberChef to decode. Format: <code>BSIDES_DHARAMSHALA_2026&#123;...&#125;</code>
            </div>
          </div>

          {/* INPUT FORM */}
          <form className="ctf-flag-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="ctf-flag-input"
              placeholder="Enter flag format: BSIDES_DHARAMSHALA_2026{...}"
              value={inputFlag}
              onChange={(e) => {
                setInputFlag(e.target.value);
                setStatus(null);
              }}
              autoFocus
              spellCheck={false}
            />
            <button type="submit" className="ctf-submit-btn">
              SUBMIT FLAG
            </button>
          </form>

          {/* FEEDBACK STATUS */}
          {status === 'success' && (
            <div className="ctf-status-msg success">
              🎉 <strong>[FLAG CAPTURED!]</strong> Congratulations Hacker! You solved the secret CTF challenge: <code>{EXPECTED_FLAG}</code>
            </div>
          )}

          {status === 'error' && (
            <div className="ctf-status-msg error">
              ❌ <strong>[ACCESS DENIED]</strong> Invalid flag. Check your Base64 decoding and try again!
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="ctf-modal-footer">
          <span>PRESS <kbd>ESC</kbd> OR <kbd>SHIFT+F+L</kbd> TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
