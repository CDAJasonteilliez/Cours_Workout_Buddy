import express from "express";
import {
    getWorkouts,
    postWorkouts,
    getWorkoutsId,
    deleteWorkoutsId,
    patchWorkoutsId
} from "../controllers/workouts.js";

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', postWorkouts);
router.get('/:id', getWorkoutsId);
router.delete('/:id', deleteWorkoutsId);
router.patch('/:id', patchWorkoutsId);

export default router;