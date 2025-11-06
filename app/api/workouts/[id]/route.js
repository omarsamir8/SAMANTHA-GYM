import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Workout from "@/models/Workout";

// ✅ تحديث تمرين
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const formData = await req.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const file = formData.get("video");

    const updateData = { name, description };
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      updateData.video = {
        data: buffer,
        contentType: file.type,
      };
    }

    await Workout.findByIdAndUpdate(params.id, updateData);

    return NextResponse.json({ message: "Workout updated successfully" });
  } catch (err) {
    return NextResponse.json({ message: "Error updating workout" }, { status: 500 });
  }
}

// ✅ حذف تمرين
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await Workout.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Workout deleted successfully" });
  } catch (err) {
    return NextResponse.json({ message: "Error deleting workout" }, { status: 500 });
  }
}
