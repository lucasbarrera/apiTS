import { DiaryEntry, Visibility, Weather } from "../types";

export const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: "2017-01-01",
    weather: Weather.Cloudy,
    visibility: Visibility.Poor,
    comment: "Prety scary flight, I'm glad I'm alive",
  },
  {
    id: 2,
    date: "2018-05-15",
    weather: Weather.Sunny,
    visibility: Visibility.Great,
    comment: "Smooth flight with beautiful views",
  },
  {
    id: 3,
    date: "2019-11-22",
    weather: Weather.Cloudy,
    visibility: Visibility.Ok,
    comment: "A bit bumpy, but overall not too bad",
  },
  {
    id: 4,
    date: "2020-07-04",
    weather: Weather.Stormy,
    visibility: Visibility.Poor,
    comment: "Terrifying turbulence, a memorable experience",
  },
  {
    id: 5,
    date: "2021-12-10",
    weather: Weather.Rainy,
    visibility: Visibility.Poor,
    comment:
      "Landed safely despite low visibility, grateful for the pilot's skills",
  },
];
