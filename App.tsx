import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

import { IParams, IWeather } from "@/helpers/interfaces";
import { emptyWeather } from "@/helpers/objects";
import { endpoints } from "@/helpers/constants";
import { Loader, Weather } from "@/components";
import { http } from "@/lib";

const App = () => {
  const [city, setCity] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [weather, setWeather] = useState<IWeather>(emptyWeather);

  const getWeather = async (params: IParams) => {
    setisLoading(true);
    try {
      const { data: weather } = await http.get<{ data: IWeather }>(endpoints.base, { params });
      return weather.data;
    } catch (err) {
      if (err instanceof Error) {
        Alert.alert(err.message);
      }
    } finally {
      setisLoading(false);
    }
  };

  const getLocation = async () => {
    try {
      // send request for getting location access
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (city) {
        if (status !== "granted") {
          Alert.alert("Joylashuvga kirishga ruxsat berilmadi");
          return;
        }
      }

      if (!city) {
        const { coords } = await Location.getCurrentPositionAsync();
        const weather = await getWeather({ lat: coords.latitude, lon: coords.longitude });
        setWeather(weather!);
      } else {
        const weather = await getWeather({ city });
        setWeather(weather!);
      }
    } catch (err) {
      if (err instanceof Error) {
        Alert.alert(err.message || "Uzr! Sizning hozirgi joylashuvingizni olishning iloji bo'lmadi");
      }
    }
  };

  useEffect(() => {
    getLocation();
  }, [city]);

  return isLoading ? <Loader /> : <Weather {...{ weather, setCity }} />;
};

export default App;
