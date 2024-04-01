import React, { useState, useEffect } from 'react';
import './Styles//WeatherComponent.css';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = '7eb4b094900836478086d184113b24a6';
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(async position => {
                        const { latitude, longitude } = position.coords;
                        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                        const response = await fetch(apiUrl);
                        if (response.ok) {
                            const data = await response.json();
                            setWeatherData(data);
                            setLoading(false);
                        } else {
                            console.error('Failed to fetch weather data');
                        }
                    });
                } else {
                    console.error('Geolocation is not supported by this browser.');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData().catch(error => console.error('Fetch error:', error));
    }, []);

    const getWeatherForecast = () => {
        if (loading) return 'Loading...';
        if (!weatherData) return 'Failed to fetch weather data.';

        const forecastsByDay = {};

        // Group forecasts by day
        weatherData.list.forEach(forecast => {
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            if (!forecastsByDay[date]) {
                forecastsByDay[date] = forecast;
            }
        });

        return (
            <div className="forecast-container">
                {Object.keys(forecastsByDay).map(date => {
                    const forecast = forecastsByDay[date];
                    const temperature = Math.round(forecast.main.temp - 273.15);
                    const weatherCondition = forecast.weather[0].main;
                    let advice = '';

                    if (weatherCondition === 'Rain') {
                        advice = 'During rainy weather, you must prioritize several key actions to safeguard their crops and livestock. Firstly, ensure that drainage systems are clear and functioning optimally to prevent waterlogging and soil erosion. Adequately shelter livestock to protect them from rain and cold, ensuring access to clean water. Adjust planting schedules to accommodate wet conditions and consider crops more tolerant to excess moisture. Implement pest and disease control measures promptly, as damp conditions can exacerbate their spread. Regularly inspect farm infrastructure for any damage or vulnerabilities caused by heavy rain and wind. Stay informed through weather forecasts and agricultural resources to make timely decisions for farm management during rainy periods.';
                    } else if (weatherCondition === 'Thunderstorm') {
                        advice = 'During thunderstorms, farmers should prioritize safety measures for both themselves and their livestock. Seek shelter indoors or in a sturdy building to avoid lightning strikes. Ensure that all farm equipment and infrastructure are secure to prevent damage from strong winds and hail. Keep livestock sheltered and away from tall objects, such as trees, which can attract lightning. Monitor weather forecasts closely and be prepared to take action if severe weather is expected. After the storm passes, assess any damage to crops, structures, or equipment and make necessary repairs promptly.';
                    } else if (weatherCondition === 'Snow') {
                        advice = 'During snowfall, farmers need to take several precautions to protect their crops, livestock, and infrastructure. Firstly, ensure that livestock have access to shelter and unfrozen water sources to prevent hypothermia and dehydration. Protect crops by covering sensitive plants or harvesting them before heavy snowfall if possible. Insulate vulnerable infrastructure such as water pipes and barns to prevent freezing and damage. Use snow removal equipment to clear pathways and access roads for essential farm operations. Monitor weather forecasts and prepare for potential power outages by having backup generators and supplies on hand. After the snowstorm, assess any damage and prioritize cleanup efforts to minimize losses and ensure the safety of animals and workers.';
                    } else if (weatherCondition === 'Clear') {
                        advice = 'After snowfall clears, farmers should assess any potential damage to crops, livestock, and infrastructure. Check for any snow accumulation on greenhouses, barns, or other structures and remove it to prevent collapse. Ensure that livestock have access to unfrozen water sources and provide additional bedding if needed. Inspect crops for damage caused by heavy snow or ice, and take necessary measures to salvage or replant affected areas. Clear snow from access roads and pathways to facilitate farm operations and prevent accidents. Monitor weather forecasts for potential follow-up storms and prepare accordingly to mitigate further risks.';
                    } else if (weatherCondition === 'Clouds') {
                        advice = 'During cloudy weather, farmers should monitor moisture levels, adjust planting and harvesting schedules, and protect against frost. They should also maximize energy efficiency, optimize crop rotation, and perform equipment maintenance.';
                    } else if (weatherCondition === 'Mist' || weatherCondition === 'Fog') {
                        advice = 'During misty conditions, farmers should closely monitor crop health for fungal diseases and adjust irrigation as needed. Pest control measures should be implemented, and caution exercised with equipment due to reduced visibility. Soil erosion prevention is important, along with careful planning of harvesting activities to maintain crop quality. Greenhouses can be utilized effectively, while infrastructure maintenance is crucial to prevent damage from increased moisture.';
                    } else if (weatherCondition === 'Smoke' || weatherCondition === 'Haze') {
                        advice = 'During smoky conditions, farmers must prioritize the health and safety of their crops, livestock, and themselves. Monitoring air quality is crucial to make informed decisions about farm activities and protective measures. Livestock should be provided with clean air and adequate shelter, potentially moving them indoors or improving ventilation in their shelters. Increasing water availability for both crops and animals can help mitigate the effects of smoke exposure. Outdoor activities should be minimized, especially during heavy smoke, with tasks scheduled during times of better air quality when possible. Regular monitoring of conditions and adapting farm practices accordingly is essential to minimize the impact of smoke on farm operations and the well-being of both plants and animals.';
                    } else if (weatherCondition === 'Dust' || weatherCondition === 'Sand') {
                        advice = 'When dealing with dusty conditions, farmers should prioritize measures to protect both their crops and their own health. Implementing erosion control practices such as cover cropping and mulching can help reduce soil disturbance and minimize dust generation. Adequate irrigation can also help keep soil particles in place and prevent them from becoming airborne. Protective measures such as wearing masks or respirators and using enclosed equipment can help reduce inhalation of dust particles for both farmers and farm workers. Additionally, scheduling outdoor activities during times of lower wind speeds or using windbreaks can help mitigate the spread of dust. Regular maintenance of equipment to minimize dust emissions and proper soil management practices are essential for long-term dust control on the farm.';
                    } else if (weatherCondition === 'Ash') {
                        advice = 'When facing ash fallout from nearby fires or volcanic eruptions, farmers should prioritize protecting their crops, livestock, and themselves. Immediate actions include covering sensitive crops and providing shelter for livestock to minimize exposure. Preventing ash from contaminating water sources is crucial, as it can affect both drinking water for animals and irrigation water for crops. Additionally, farmers should wear protective gear such as masks to avoid inhaling ash particles while working outdoors. Regularly monitoring ash levels on crops, pastures, and infrastructure is essential to assess potential damage and take appropriate measures for cleanup and recovery. Collaborating with agricultural extension services or local authorities for guidance on managing ash fallout can also be beneficial.';
                    } else {
                        advice = 'Monitor weather conditions closely and take appropriate measures to protect your crops.';
                    }

                    return (
                        <div className="forecast-box" key={date}>
                            <h3>{date}</h3>
                            <p><strong>{weatherCondition}</strong></p>
                            <p>{temperature}°C</p>
                            <p>{advice}</p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div>
            {getWeatherForecast()}
        </div>
    );
};

export default WeatherComponent;
