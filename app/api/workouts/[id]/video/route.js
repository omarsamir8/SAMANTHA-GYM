import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Workout from "@/models/Workout";

// ✅ جلب تمرين واحد (بما في ذلك رابط الفيديو)
export async function GET(req, { params }) {
  try {
    await connectDB();
    const workout = await Workout.findById(params.id);

    if (!workout) {
      return NextResponse.json({ message: "Workout not found" }, { status: 404 });
    }

    // ✅ بما إن الفيديو أصبح رابط فقط
    return NextResponse.json(
      {
        _id: workout._id,
        name: workout.name,
        description: workout.description,
        video: workout.video, // ده بيكون مثلاً "/uploads/1730444840000-gym.mp4"
        createdAt: workout.createdAt,
        updatedAt: workout.updatedAt,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch workout error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
