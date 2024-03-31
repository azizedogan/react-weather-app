import trDescriptions from "../data/data";
import WeatherInfo from "./weather-info";
import WeatherEvents from "./weatherEvents";

export default function WeatherContent({ weatherData }) {

    function getCurrentDate() {
        return new Date().toLocaleDateString("tr-TR", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    }

    const trDescription = 
    trDescriptions[weatherData?.weather[0]?.description] || "";

    return (
        <div>
        <div className="mb-3">
            <h2 className="text-3xl">
                { weatherData?.name },
                <span>{ weatherData?.sys?.country }</span>
            </h2>
        </div>
        <div className="text-base font-medium italic">
            <span>{ getCurrentDate() }</span>
        </div>
        <WeatherEvents weatherData={weatherData} />
        <div className="text-5xl text-black font-bold text-center m-1">
            {Math.round(weatherData?.main?.temp - 273.15)} °C
        </div>
        <p className="text-black text-lg font-medium mt-0 mb-4">
            {trDescription}
        </p>
        <WeatherInfo weatherData={weatherData} />
    </div>    
    );
}