export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export interface SpacialdiaryEntry extends DiaryEntry {
  flightNumber: number;
}

// utilizo la funcion Pick para tomar los valores deseados del array
// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry,
//   "id" | "date" | "weather" | "visibility"
// >;

// utilizo la funcion Omit para no tomar los valores indicados del arrray
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
