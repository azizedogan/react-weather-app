import { useEffect, useState } from "react";
import Search from "../search";
import WeatherContent from "./weather-content";

export default function Weather() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid={API_KEY}`); // API key here

            const data = await response.json();

            if (data && data.main) {
                setWeatherData(data);
                setLoading(false);
            }

        } catch (e) {
            setLoading(false);
        }
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData("ankara");
    }, []);

    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading ? (
                <div className="text-3xl font-bold text-black">
                    Yükleniyor...
                </div> ) 
                : <WeatherContent weatherData={weatherData} />
            }
        </div>
    );
}