import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    video: { type: String, required: true }, // نخزن رابط الفيديو فقط
  },
  { timestamps: true }
);

const Workout =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);

export default Workout;
