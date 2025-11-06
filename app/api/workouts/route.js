export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Workout from "@/models/Workout";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const file = formData.get("video");

    if (!file) {
      return NextResponse.json(
        { message: "No video uploaded" },
        { status: 400 }
      );
    }

    // مسار المجلد لحفظ الفيديوهات
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // لو المجلد مش موجود، اعمله
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // اسم فريد للفيديو عشان مايتكررش
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    // احفظ الفيديو داخل مجلد uploads
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // خزن المسار في قاعدة البيانات (مش الملف نفسه)
    const workout = new Workout({
      name,
      description,
      video: `/uploads/${fileName}`, // فقط الرابط
    });

    await workout.save();

    return NextResponse.json(
      { message: "Workout created successfully", workout },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

// GET => عرض كل الـ workouts
export async function GET() {
  try {
    await connectDB();

    const workouts = await Workout.find();

    return NextResponse.json({ workouts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
