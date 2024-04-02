import React, { useState, useEffect } from "react";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";
import "react-vis/dist/style.css";

const Graph = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "7eb4b094900836478086d184113b24a6";
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            if (response.ok) {
              const data = await response.json();
              setWeatherData(data);
              setLoading(false);
            } else {
              console.error("Failed to fetch weather data");
            }
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData().catch((error) => console.error("Fetch error:", error));
  }, []);

  const getWeatherForecast = () => {
    if (loading) return "Loading...";
    if (!weatherData) return "Failed to fetch weather data.";

    const forecastsByDay = {};

    // Group forecasts by day
    weatherData.list.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();
      if (!forecastsByDay[date]) {
        forecastsByDay[date] = forecast;
      }
    });

    return (
      <div className="forecast-container" style={{ background: "#44CD71" }}>
        {Object.keys(forecastsByDay).map((date) => {
          const forecast = forecastsByDay[date];
          const temperature = Math.round(forecast.main.temp - 273.15);
          const weatherCondition = forecast.weather[0].main;
          let advice = "";

          // Weather condition advice
          if (weatherCondition === "Rain") {
            advice =
              "Prioritize drainage & shelter for crops & livestock. Adjust planting schedules & implement pest control measures.";
          } else if (weatherCondition === "Thunderstorm") {
            advice =
              "Seek shelter indoors, secure equipment & monitor forecasts closely. Assess damage & make repairs promptly.";
          } else if (weatherCondition === "Snow") {
            advice =
              "Ensure shelter & water for livestock, protect crops & infrastructure. Monitor forecasts & prepare for power outages.";
          } else if (weatherCondition === "Clear") {
            advice =
              "Assess damage, ensure water access for livestock, clear snow from roads & pathways. Monitor forecasts for follow-up storms.";
          } else if (weatherCondition === "Clouds") {
            advice =
              "Monitor moisture levels, adjust schedules, protect against frost, maximize energy efficiency & perform equipment maintenance.";
          } else if (
            weatherCondition === "Mist" ||
            weatherCondition === "Fog"
          ) {
            advice =
              "Monitor crop health, adjust irrigation, implement pest control measures, plan harvesting activities carefully.";
          } else if (
            weatherCondition === "Smoke" ||
            weatherCondition === "Haze"
          ) {
            advice =
              "Monitor air quality, provide clean air & shelter for livestock, increase water availability, minimize outdoor activities.";
          } else if (
            weatherCondition === "Dust" ||
            weatherCondition === "Sand"
          ) {
            advice =
              "Implement erosion control practices, ensure adequate irrigation, wear protective gear, schedule outdoor activities wisely.";
          } else if (weatherCondition === "Ash") {
            advice =
              "Cover sensitive crops, shelter livestock, prevent ash contamination of water sources, wear protective gear.";
          } else {
            advice =
              "Monitor weather conditions closely and take appropriate measures to protect your crops.";
          }

          return (
            <div className="forecast-box" key={date}>
              <div className="weather-condition-box">
                <h3>{date}</h3>
                <p>
                  <strong>{weatherCondition}</strong>
                </p>
                <p>{temperature}°C</p>
              </div>
              <div className="advice-box">
                <h3>Advice</h3>
                <p>{advice}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const getLineGraph = () => {
    if (loading || !weatherData) return null;

    const data = weatherData.list.map((forecast) => ({
      x: new Date(forecast.dt * 1000),
      y: Math.round(forecast.main.temp - 273.15),
    }));

    return (
      <div className="line-graph-container" style={{ background: "#44CD71" }}>
        {/* <h2 style={{ color: '#000' }}>Upcoming Weather</h2> */}
        <XYPlot
          xType="time"
          width={800}
          height={400}
          margin={{ left: 80, right: 80, top: 40, bottom: 60 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            title="Date"
            tickLabelAngle={-45}
            tickFormat={(v) => new Date(v).toLocaleDateString()}
            style={{ fontSize: "14px", fill: "#000" }}
          />
          <YAxis
            title="Temperature (°C)"
            style={{ fontSize: "14px", fill: "#000" }}
          />
          <LineSeries
            data={data}
            style={{
              strokeLinejoin: "round",
              strokeWidth: 3,
              fill: "none",
              stroke: "#00a8cc",
            }}
            curve={"curveMonotoneX"}
          />
          <LineSeries
            data={data.map(({ x, y }) => ({ x, y: y + 5 }))}
            style={{
              strokeLinejoin: "round",
              strokeWidth: 1,
              fill: "none",
              stroke: "#ffb997",
            }}
            curve={"curveMonotoneX"}
          />
          <LineSeries
            data={data.map(({ x, y }) => ({ x, y: y - 5 }))}
            style={{
              strokeLinejoin: "round",
              strokeWidth: 1,
              fill: "none",
              stroke: "#ffb997",
            }}
            curve={"curveMonotoneX"}
          />
        </XYPlot>
      </div>
    );
  };

  return (
    <div>
      <div style={{ marginTop: "20px", marginLeft: "32rem", height: '25rem', marginBottom: '3rem', maxWidth: '30rem' }}>
        {getLineGraph()}
      </div>
    </div>
  );
};

export default Graph;
