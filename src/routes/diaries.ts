import express from "express";
import * as diaryServices from "../services/diaryServices";
import toNewDiaryEntry from "../utils";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(addDiaryEntry);
  } catch (error) {
    res.status(404).send(error);
  }
});

// router.get(`/:id`, (req, res) => {
//   const idParam = req.params.id;
//   const ID = parseInt(idParam, 10);
//   const diary = diaryServices.findById(ID);
//   return diary !== undefined
//     ? res.send(diary)
//     : res.status(404).send("diary not found");
// });
export default router;
