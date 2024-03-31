import Wind from "../../assets/wind.png";
import Humidity from "../../assets/humidity.png";
 
export default function WeatherInfo({weatherData}) {
  return (
    <div className="flex justify-evenly items-center mt-5 mb-5 px-10 text-lg font-bold text-center">
      <div className="flex items-center">
        <img src={Wind} alt="wind" className="h-12" />
        <div className="ms-2">
          <p>{weatherData?.wind?.speed} km/h</p>
          <p>Rüzgar</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={Humidity} alt="humidity" className="h-12" />
        <div className="ms-2">
          <p>{weatherData?.main?.humidity} %</p>
          <p>Nem</p>
        </div>
      </div>
    </div>
  );
}
