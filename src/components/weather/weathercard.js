import React, { useEffect, useState } from "react";

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = React.useState("");
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          setImage(require("../../images/cloud.gif"))
          break;
        case "Haze":
          setWeatheState("wi-fog");
          setImage(require("../../images/foggy.gif"))

          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          setImage(require("../../images/clouds-moving.gif"))
          break;
          case "Rain":
            setWeatheState("wi-rain");
            setImage(require("../../images/rain.gif"))

          break;
        case "Mist":
          setWeatheState("wi-dust");
          setImage(require("../../images/dust.gif"))

          break;

        default:
          setWeatheState("wi-day-sunny");
          setImage(require("../../images/clouds-moving.gif"))

          break;
      }
    }
  }, [weathermood]);

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <img className="bg-img" src={image} />
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>

    </>
  );
};

export default Weathercard;
