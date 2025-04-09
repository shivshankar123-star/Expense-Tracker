import axios, { CanceledError } from "axios";
import styles from "../App.module.css";
import { useEffect, useState } from "react";

interface Coord {
  lat: number;
  lon: number;
}

interface Main {
  temp: number;
}

interface Weather {
  description: string;
}

interface WeatherData {
  coord: Coord;
  main: Main;
  name: string;
  weather: Weather[];
}

const ExpenseWeather = () => {
  const [weatherDetails, setWeatherDetails] = useState<WeatherData>();

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=57.1482429&lon=-2.0928095&appid=d4336ae6db8eb58d6605b1f0f34032f5",
        { signal: controller.signal }
      )
      .then((res) => setWeatherDetails(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.error(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      <div className={styles.weatherImage}></div>
      <span className={styles.cityStyle}>
        {weatherDetails?.name} <span style={{ color: "red" }}>=&gt;</span>{" "}
      </span>

      <span>{weatherDetails?.main.temp} &deg;F</span>
      <span>Ln: {weatherDetails?.coord.lon} </span>
      <span>Lt: {weatherDetails?.coord.lat}</span>
      <span>{weatherDetails?.weather[0].description}</span>
    </div>
  );
};

export default ExpenseWeather;
