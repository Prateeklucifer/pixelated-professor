import ConnectToDB from "@/DB/ConnectToDB";
import Lessons from "@/schema/Lessons";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();

    let allEntries = await Lessons.find({});

    return NextResponse.json({ data: allEntries });
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
