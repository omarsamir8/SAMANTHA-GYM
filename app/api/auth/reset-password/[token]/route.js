export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req, { params }) {
  try {
    await connectDB();

    const { token } = params; // من URL
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ message: "Password is required" }, { status: 400 });
    }

    // نلاقي اليوزر بالتوكن ولسه التوكن صالح
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }

    // hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
  } catch (error) {
    console.error("❌ Reset Password error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
