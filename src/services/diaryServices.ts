import diaryData from "./diaries.json";
import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  NewDiaryEntry,
} from "../types";
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      };
    });
  };

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1, //busca el id mas grande del array el le suma 1 al asignarlo
    // id: diaries.length + 1, // cuenta la cantidad de elementos en array y le suma uno al asignarlo
    ...newDiaryEntry,
  };
  diaries.push(newDiary);
  return newDiary;
};

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};
