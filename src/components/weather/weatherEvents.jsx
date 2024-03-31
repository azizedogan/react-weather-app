import React from 'react';
import weatherIcons from '../data/weatherIcons';

export default function WeatherEvents({ weatherData }) {

    const { description } = weatherData.weather[0];

    const icon = weatherIcons[description] || null;

    return (
        <div className="flex flex-row justify-around">
            {icon && <img className="flex items-center" src={icon} 
            alt={description} />}
        </div>
    );
}
