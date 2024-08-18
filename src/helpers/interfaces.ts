export interface IParams {
  lat?: number;
  lon?: number;
  city?: string;
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
  weather: [
    {
      id: number;
      title: {
        uz: string;
        oz: string;
        en: string;
        ru: string;
      };
      description: {
        uz: string;
        oz: string;
        en: string;
        ru: string;
      };
      icon: {
        name: string;
        path: string;
      };
    },
  ];
  wind: { deg: number; speed: number };
}
