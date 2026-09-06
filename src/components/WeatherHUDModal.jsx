import React, { useState, useEffect } from 'react';

export default function WeatherHUDModal({ isOpen, onClose }) {
  const [unit, setUnit] = useState('C');
  const [weatherData, setWeatherData] = useState({
    tempC: 16,
    humidity: 62,
    windSpeed: 12,
    condition: 'Cool Mountain Air',
    snowRisk: 'Moderate'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    // Fetch live Dharamshala weather from Open-Meteo
    fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2190&longitude=76.3234&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current) {
          const c = Math.round(data.current.temperature_2m);
          const humidity = data.current.relative_humidity_2m || 60;
          const wind = Math.round(data.current.wind_speed_10m || 10);
          const code = data.current.weather_code || 0;

          let cond = 'Clear Mountain Sky';
          let snowRisk = 'Low';
          if (c <= 12) {
            cond = 'Cold Himalayan Breeze';
            snowRisk = 'High';
          } else if (c <= 18) {
            cond = 'Crisp Alpine Weather';
            snowRisk = 'Moderate';
          } else {
            cond = 'Pleasant Mountain Sun';
            snowRisk = 'Low';
          }

          if (code >= 71) {
            cond = 'Active Snowfall';
            snowRisk = 'Active';
          } else if (code >= 51) {
            cond = 'Mountain Drizzle';
          }

          setWeatherData({
            tempC: c,
            humidity: humidity,
            windSpeed: wind,
            condition: cond,
            snowRisk: snowRisk
          });
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [isOpen]);

  if (!isOpen) return null;

  const displayTemp = unit === 'C' ? weatherData.tempC : Math.round((weatherData.tempC * 9) / 5 + 32);

  return (
    <div className="weather-hud-overlay" onClick={onClose}>
      <div className="weather-hud-card" onClick={(e) => e.stopPropagation()}>
        {/* HUD HEADER */}
        <div className="weather-hud-header">
          <div className="weather-hud-title">
            <span className="hud-icon">🏔️</span>
            <span>DHARAMSHALA EXPEDITION // WEATHER & ALTITUDE HUD</span>
          </div>
          <button className="weather-hud-close" onClick={onClose}>✕</button>
        </div>

        {/* HUD BODY */}
        <div className="weather-hud-body">
          {/* TOP METRIC CARDS */}
          <div className="weather-main-row">
            <div className="weather-temp-box">
              <span className="temp-value">{loading ? '--' : displayTemp}°{unit}</span>
              <span className="temp-label">{weatherData.condition}</span>
              <button
                className="unit-toggle-btn"
                onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
              >
                Switch to °{unit === 'C' ? 'F' : 'C'}
              </button>
            </div>

            <div className="weather-altitude-box">
              <span className="alt-tag">GPS LOCATION</span>
              <span className="alt-name">McLeod Ganj, Dharamshala</span>
              <span className="alt-coord">32.2190° N, 76.3234° E</span>
              <div className="alt-metric">
                <span className="alt-value">1,457 m</span>
                <span className="alt-sub">(4,780 ft Elevation)</span>
              </div>
            </div>
          </div>

          {/* GRID METRICS */}
          <div className="weather-grid">
            <div className="hud-metric-card">
              <span className="metric-icon">💧</span>
              <div className="metric-info">
                <span className="metric-title">HUMIDITY</span>
                <span className="metric-val">{weatherData.humidity}%</span>
              </div>
            </div>

            <div className="hud-metric-card">
              <span className="metric-icon">💨</span>
              <div className="metric-info">
                <span className="metric-title">WIND SPEED</span>
                <span className="metric-val">{weatherData.windSpeed} km/h</span>
              </div>
            </div>

            <div className="hud-metric-card">
              <span className="metric-icon">❄️</span>
              <div className="metric-info">
                <span className="metric-title">SNOW / FROST RISK</span>
                <span className="metric-val">{weatherData.snowRisk}</span>
              </div>
            </div>

            <div className="hud-metric-card">
              <span className="metric-icon">🧥</span>
              <div className="metric-info">
                <span className="metric-title">GEAR ADVICE</span>
                <span className="metric-val">
                  {weatherData.tempC <= 15 ? 'Warm Layer & Jacket' : 'Light Thermal Wear'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* HUD FOOTER */}
        <div className="weather-hud-footer">
          <span>PRESS <kbd>ESC</kbd> OR <kbd>SHIFT+W</kbd> TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
