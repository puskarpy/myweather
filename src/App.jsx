import React, { useEffect,useState } from 'react'
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, Thermometer } from 'lucide-react';
import axios from 'axios';
import dotenv from 'dotenv'

export default function App() {

  const [weatherData, setWeatherData] = useState({})
useEffect(() => {

  const API = import.meta.env.VITE_WEATHER_API;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`
          );
          console.log(response.data);
          setWeatherData(response.data)
        } catch (error) {
          console.log(error);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  
}, []);

const getWeatherIcon = (condition) => {
      switch (condition) {
        case 'sunny':
          return <Sun className="w-16 h-16 text-yellow-400" />;
        case 'partly-cloudy':
          return <Cloud className="w-16 h-16 text-gray-300" />;
        case 'rainy':
          return <CloudRain className="w-16 h-16 text-blue-400" />;
        default:
          return <Sun className="w-16 h-16 text-yellow-400" />;
      }
    };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className='flex flex-col gap-8 sm:gap-12 pt-4 sm:pt-6 px-4 sm:px-0'>
        <h1 className='text-3xl sm:text-4xl font-bold mx-auto text-white'>
        My Weather
        </h1>
        <div className="max-w-md w-full mx-auto bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl transform transition-all duration-300 hover:scale-105 border border-slate-600/50">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-medium opacity-90">{weatherData?.name}</h2>
              <p className="text-sm opacity-70">Today</p>
            </div>
            <div className="animate-pulse">
              {getWeatherIcon(weatherData?.weather?.[0]?.icon)}
            </div>
          </div>
    
          {/* Main Temperature */}
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-6xl font-thin">{Math.floor(weatherData?.main?.temp)}</span>
              <span className="text-2xl font-light ml-1">°C</span>
            </div>
            <p className="text-lg opacity-90 mt-1">{weatherData?.weather?.[0]?.main}</p>
            <div className="flex items-center gap-4 mt-2 text-sm opacity-80">
              <span>H: {Math.floor(weatherData?.main?.temp_max)}°C</span>
              <span>L: {Math.floor(weatherData?.main?.temp_min)}°C</span>
            </div>
          </div>
    
          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Thermometer className="w-4 h-4 opacity-70" />
                <span className="text-xs uppercase tracking-wide opacity-70">Feels Like</span>
              </div>
              <span className="text-xl font-medium">{Math.floor(weatherData?.main?.feels_like)}°C</span>
            </div>
    
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-4 h-4 opacity-70" />
                <span className="text-xs uppercase tracking-wide opacity-70">Humidity</span>
              </div>
              <span className="text-xl font-medium">{weatherData?.main?.humidity}%</span>
            </div>
    
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Wind className="w-4 h-4 opacity-70" />
                <span className="text-xs uppercase tracking-wide opacity-70">Wind</span>
              </div>
              <span className="text-xl font-medium">{weatherData?.wind?.speed} m/s</span>
            </div>
    
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 opacity-70" />
                <span className="text-xs uppercase tracking-wide opacity-70">Visibility</span>
              </div>
              <span className="text-xl font-medium">{weatherData?.visibility / 1000} km</span>
            </div>
          </div>
        </div>
        <div className='mx-auto mb-4'>
        Created by <a className="underline" href="https://www.pushkarniraula.co.np" target='_blank_' >Pushkar Niraula</a>
      </div>
      </div>
    </div>
  )
}