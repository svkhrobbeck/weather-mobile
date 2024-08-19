import { weatherConditions } from "./constants";

export interface IParams {
  lat?: number;
  lon?: number;
  city?: string | null;
}

export type ICondition = keyof typeof weatherConditions;

export interface ILangs {
  uz: string;
  oz: string;
  en: string;
  ru: string;
}

export interface TypeIcon {
  name: string;
  path: string;
}

export interface IWeather {
  country: string;
  lat: number;
  lon: number;
  name: string;
  sunrise: number;
  sunset: number;
  temp: {
    clouds: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    value: number;
  };
  timezone: number;
  visibility: number;
  weather:
    | [
        {
          id: number;
          title: ILangs;
          description: ILangs;
          icon: TypeIcon;
        },
      ]
    | [];
  wind: { deg: number; speed: number };
}
