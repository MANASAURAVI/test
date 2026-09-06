import React, { useState, useEffect } from 'react';

export default function DharamshalaTempWidget() {
  const [dharamshalaTemp, setDharamshalaTemp] = useState(null);
  const [tempState, setTempState] = useState('loading'); // 'cold' | 'cool' | 'warm'

  useEffect(() => {
    // Read instant session cache for 0ms page load speed
    try {
      const cached = sessionStorage.getItem('dharamshala_weather_cache');
      if (cached) {
        const { temp, ts } = JSON.parse(cached);
        if (Date.now() - ts < 600000) {
          setDharamshalaTemp(temp);
          setTempState(temp <= 15 ? 'cold' : temp <= 20 ? 'cool' : 'warm');
        }
      }
    } catch (e) {}

    const fetchLiveTemp = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=32.2190&longitude=76.3234&current=temperature_2m'
        );
        if (res.ok) {
          const data = await res.json();
          if (data && data.current && typeof data.current.temperature_2m === 'number') {
            const currentTemp = Math.round(data.current.temperature_2m);
            setDharamshalaTemp(currentTemp);
            setTempState(currentTemp <= 15 ? 'cold' : currentTemp <= 20 ? 'cool' : 'warm');
            try {
              sessionStorage.setItem(
                'dharamshala_weather_cache',
                JSON.stringify({ temp: currentTemp, ts: Date.now() })
              );
            } catch (e) {}
          }
        }
      } catch (err) {
        console.warn('Weather fetch fallback', err);
        setDharamshalaTemp(19);
        setTempState('cool');
      }
    };

    fetchLiveTemp();
    const interval = setInterval(fetchLiveTemp, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`dharamshala-page-temp-widget mode-${tempState}`}
      title={`LIVE DHARAMSHALA WEATHER: ${dharamshalaTemp !== null ? dharamshalaTemp : '--'}°C`}
    >
      <span className="temp-pulse-indicator" />
      <span className="temp-degree-value">{dharamshalaTemp !== null ? `${dharamshalaTemp}°C` : '--°C'}</span>
      <span className="temp-city-label">DHARAMSHALA</span>
    </div>
  );
}


