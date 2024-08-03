import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { Pagination, Stack } from "@mui/material";
import Loader from "./Loader";
import "../news.css";
import { Link } from "react-router-dom";
import Clock from "./Clock";

//news json data
import sdg from "../Data/sdg.json";
import poverty from "../Data/poverty.json";
import hunger from "../Data/hunger.json";
import health from "../Data/health.json";
import education from "../Data/education.json";
import genderequality from "../Data/genderequality.json";
import sanitation from "../Data/sanitation.json";
import inflation from "../Data/inflation.json";
import economy from "../Data/economy.json";
import infrastructure from "../Data/infrastructure.json";
import reducedinequality from "../Data/reducedinequality.json";
import cities from "../Data/cities.json";
import consumption from "../Data/consumption.json";
import climate from "../Data/climate.json";
import water from "../Data/water.json";
import land from "../Data/land.json";
import law from "../Data/law.json";
//icons
import { FaHome } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function NewNews() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [weatherData, setWeatherData] = useState(false);
  const [keyword, setKeyword] = useState("sustainable development goals");
  useEffect(() => {
    const fetchNews = async () => {
      setArticles(sdg);
      try {
        const lat = "28.6139";
        const lon = "77.2088";
        const weatherApiKey = "b8ce742ac6484e3440a7b8eb2d250758";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric#`
        );
        setWeatherData(response.data);
      } catch (err) {
        throw err;
      } 
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      switch (keyword) {
        case "Poverty": {
          setArticles(poverty);
          break;
        }
        case "Hunger": {
          setArticles(hunger);
          break;
        }
        case "Health": {
          setArticles(health);
          break;
        }
        case "Education": {
          setArticles(education);
          break;
        }
        case "Gender Equality": {
          setArticles(genderequality);
          break;
        }
        case "Sanitation": {
          setArticles(sanitation);
          break;
        }
        case "Inflation": {
          setArticles(inflation);
          break;
        }
        case "Economic Growth": {
          setArticles(economy);
          break;
        }
        case "Infrastructure": {
          setArticles(infrastructure);
          break;
        }
        case "Reduced Inequality": {
          setArticles(reducedinequality);
          break;
        }
        case "Sustainable Cities": {
          setArticles(cities);
          break;
        }
        case "Responsible Consumption": {
          setArticles(consumption);
          break;
        }
        case "Climate Action": {
          setArticles(climate);
          break;
        }
        case "Life Below Water": {
          setArticles(water);
          break;
        }
        case "Life on Land": {
          setArticles(land);
          break;
        }
        case "Strong Institutions": {
          setArticles(law);
          break;
        }
      }
    };
    fetchNews();
  }, [keyword]);
  const [togglebar, setToggleBar] = useState(false);
  const newsPerPage = 6;

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  const lastIndexOfNews = currentPage * newsPerPage;
  const firstIndexOfNews = lastIndexOfNews - newsPerPage;

  const currentNews = articles.slice(firstIndexOfNews, lastIndexOfNews);
  if (!articles.length) {
    return <Loader />;
  }

  const changeTopic = (e) => {
    setKeyword(e.target.id);
  };

  return (
    <>
      <div className="main-container">
        {/* <header className="header-container">
          <h1 className="header-heading">SDG</h1>
          <div className="link-container">
            <span className="icon-container">
              <FaHome />
              <Link to="/">Home</Link>
            </span>
            <span className="icon-container">
              <FaBookAtlas />
              <Link to="/article">Educational</Link>
            </span>
            <span className="icon-container">
              <FaUserPlus />
              <Link to="/aboutus">About</Link>
            </span>
          </div>
        </header> */}
        <div className="news-container">
          <div className="wheather-news-container">
            <div className="">
              <div className="wheather-card-container">
                {weatherData && (
                  <div className="wheather-card-desk">
                    <h1 className="self-center md:block hidden">
                      {weatherData.name}
                    </h1>
                    <div className="self-center">
                      <Clock />
                    </div>
                    <div className="self-center flex justify-center items-center">
                      <img
                        className="rounded-full w-20 h-20 brightness-[1000%]"
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      />
                      <p className="s">{weatherData.weather[0].main}</p>
                    </div>
                    <div className="gap-2 grid grid-cols-2">
                      <div
                        className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                        title="temperature"
                      >
                        <FaTemperatureHigh />
                        <span>{weatherData.main.temp}° C</span>
                      </div>
                      <div
                        className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                        title="humidity"
                      >
                        <FaDroplet />
                        <span>{weatherData.main.humidity}%</span>
                      </div>
                      <div
                        className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                        title="wind speed"
                      >
                        <FaWind />
                        <span>{weatherData.wind.speed} m/s</span>
                      </div>
                      <div
                        className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                        title="visibilty"
                      >
                        <MdVisibility />
                        <span>{weatherData.visibility} m</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-4 md:hidden rounded-2xl text-center">
                  {togglebar == false && (
                    <IoIosArrowDown
                      className="bg-[#101f77] p-1 text-4xl rounded-full self-start border-2 border-black"
                      onClick={() => {
                        setToggleBar(!togglebar);
                      }}
                    />
                  )}
                  {togglebar == true && (
                    <IoIosArrowUp
                      className="bg-[#101f77] p-1 text-4xl rounded-full self-start border-2 border-black"
                      onClick={() => {
                        setToggleBar(!togglebar);
                      }}
                    />
                  )}
                  {togglebar && (
                    <div className="topic-button-container-mb">
                      <button
                        id="Poverty"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Poverty
                      </button>
                      <button
                        id="Hunger"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Hunger
                      </button>
                      <button
                        id="Health"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Health
                      </button>
                      <button
                        id="Education"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Education
                      </button>
                      <button
                        id="Gender Equality"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Gender Equality
                      </button>
                      <button
                        id="Sanitation"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Sanitation
                      </button>
                      <button
                        id="Inflation"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Affordabilty
                      </button>
                      <button
                        id="Economic Growth"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Economic Growth
                      </button>
                      <button
                        id="Infrastructure"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Infrastructure
                      </button>
                      <button
                        id="Reduced Inequality"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Reduced Inequality
                      </button>
                      <button
                        id="Sustainable Cities"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Sustainable Cities
                      </button>
                      <button
                        id="Responsible Consumption"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Responsible Consumption
                      </button>
                      <button
                        id="Climate Action"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Climate Action
                      </button>
                      <button
                        id="Life Below Water"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Life Below Water
                      </button>
                      <button
                        id="Life on Land"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Life on Land
                      </button>
                      <button
                        id="Strong Institutions"
                        className="topic-button"
                        onClick={changeTopic}
                      >
                        Strong Institutions
                      </button>
                    </div>
                  )}
                </div>

                <div className="topic-button-container-desk">
                  <button
                    id="Poverty"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Poverty
                  </button>
                  <button
                    id="Hunger"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Hunger
                  </button>
                  <button
                    id="Health"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Health
                  </button>
                  <button
                    id="Education"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Education
                  </button>
                  <button
                    id="Gender Equality"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Gender Equality
                  </button>
                  <button
                    id="Sanitation"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Sanitation
                  </button>
                  <button
                    id="Inflation"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Affordabilty
                  </button>
                  <button
                    id="Economic Growth"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Economic Growth
                  </button>
                  <button
                    id="Infrastructure"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Infrastructure
                  </button>
                  <button
                    id="Reduced Inequality"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Reduced Inequality
                  </button>
                  <button
                    id="Sustainable Cities"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Sustainable Cities
                  </button>
                  <button
                    id="Responsible Consumption"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Responsible Consumption
                  </button>
                  <button
                    id="Climate Action"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Climate Action
                  </button>
                  <button
                    id="Life Below Water"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Life Below Water
                  </button>
                  <button
                    id="Life on Land"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Life on Land
                  </button>
                  <button
                    id="Strong Institutions"
                    className="topic-button"
                    onClick={changeTopic}
                  >
                    Strong Institutions
                  </button>
                </div>

                {weatherData && (
                  <div className="wheather-card-mb">
                    <div className="flex">
                      <Clock />
                      <img
                        className="rounded-full w-20 h-20 self-center brightness-[1000%]"
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="gap-4 grid grid-cols-2 text-xs font-semibold">
                        <div
                          className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                          title="temperature"
                        >
                          <FaTemperatureHigh />
                          <span>{weatherData.main.temp}° </span>
                        </div>
                        <div
                          className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                          title="humidity"
                        >
                          <FaDroplet />
                          <span>{weatherData.main.humidity}%</span>
                        </div>
                        <div
                          className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                          title="wind speed"
                        >
                          <FaWind />
                          <span>{weatherData.wind.speed}m/s</span>
                        </div>
                        <div
                          className="flex flex-col gap-2 justify-center items-center cursor-pointer"
                          title="visibilty"
                        >
                          <MdVisibility />
                          <span>{weatherData.visibility}m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="newscard-container">
              {currentNews.map((item, index) => (
                <NewsCard key={index} news={item} />
              ))}
            </div>
          </div>
          <Stack className="paginate-stack">
            {articles.length > newsPerPage && (
              <Pagination
                className="white"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(articles.length / newsPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#101f77",
                  },
                  "& .Mui-selected": {
                    fontSize: "1.4rem", // Optionally, make selected item even larger
                    fontWeight: "bolder", // And bolder
                  },
                }}
              />
            )}
          </Stack>
        </div>
      </div>
    </>
  );
}

export default NewNews;
