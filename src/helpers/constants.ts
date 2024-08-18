export enum endpoints {
  base = "/api/open/weather",
}

export const weatherConditions = {
  clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Ajoyib ob-havo",
    description: "Sayrga chiqing, uyda o'tirmang!",
  },
  thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Uyda o'tiring",
    description: "Ko'chada nima bo'layotganini ko'ryapsizmi?",
  },
  drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Soyabon oling",
    description: "Balki yomg'ir kuchayishi mumkin",
  },
  rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "Tashqarida yomg'ir yog'moqda",
    description: "Tez orada kamalak chiqadi!",
  },
  snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Tashqarida qor yog'moqda!",
    description: "Issiq kiying, qor odamlar yasang",
  },
  dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Changli",
    description: "Yaxshisi derazalarni yopib qo'ying",
  },
  smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Tashqarida tutun bor :(",
    description: "Keraksiz chiqmaslikni maslahat beraman",
  },
  haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Tashqarida tuman bor!",
    description: "Issiq kiying, qor odamlar yasang",
  },
  mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Tuman ichida hech narsa ko'rinmaydi",
    description: "Ko'chada nima bo'layotganini ko'ryapsizmi?",
  },
  clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Bulutlar",
    description: "Sayrga chiqing, uyda o'tirmang!",
  },
} as const;
