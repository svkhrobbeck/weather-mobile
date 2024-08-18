import { IWeather } from "./interfaces";

export const emptyWeather: IWeather = {
  lon: 0,
  lat: 0,
  weather: [
    {
      id: 0,
      title: {
        uz: "",
        oz: "",
        en: "",
        ru: "",
      },
      description: {
        uz: "",
        oz: "",
        en: "",
        ru: "",
      },
      icon: {
        name: "",
        path: "",
      },
    },
  ],
  temp: {
    value: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    clouds: 0,
  },
  wind: {
    speed: 0,
    deg: 0,
  },
  visibility: 0,
  name: "",
  country: "",
  sunrise: 0,
  sunset: 0,
  timezone: 0,
};
