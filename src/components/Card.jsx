import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, Thermometer } from 'lucide-react';

const WeatherCard = ({weatherData}) => {

    weatherData = {
    location: "San Francisco, CA",
    temperature: 72,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 75,
    high: 78,
    low: 65,
    icon: "partly-cloudy"
  };

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
    <div className="max-w-md w-md mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-300 hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-medium opacity-90">{weatherData.location}</h2>
          <p className="text-sm opacity-70">Today</p>
        </div>
        <div className="animate-pulse">
          {getWeatherIcon(weatherData.icon)}
        </div>
      </div>

      {/* Main Temperature */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-6xl font-thin">{weatherData.temperature}</span>
          <span className="text-2xl font-light ml-1">°F</span>
        </div>
        <p className="text-lg opacity-90 mt-1">{weatherData.condition}</p>
        <div className="flex items-center gap-4 mt-2 text-sm opacity-80">
          <span>H: {weatherData.high}°</span>
          <span>L: {weatherData.low}°</span>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="w-4 h-4 opacity-70" />
            <span className="text-xs uppercase tracking-wide opacity-70">Feels Like</span>
          </div>
          <span className="text-xl font-medium">{weatherData.feelsLike}°</span>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 opacity-70" />
            <span className="text-xs uppercase tracking-wide opacity-70">Humidity</span>
          </div>
          <span className="text-xl font-medium">{weatherData.humidity}%</span>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-4 h-4 opacity-70" />
            <span className="text-xs uppercase tracking-wide opacity-70">Wind</span>
          </div>
          <span className="text-xl font-medium">{weatherData.windSpeed} mph</span>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transition-all duration-200 hover:bg-white/20">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 opacity-70" />
            <span className="text-xs uppercase tracking-wide opacity-70">Visibility</span>
          </div>
          <span className="text-xl font-medium">{weatherData.visibility} mi</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;