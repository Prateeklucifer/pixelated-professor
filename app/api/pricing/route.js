import ConnectToDB from "@/DB/ConnectToDB";
import Pricing from "@/schema/Pricing";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Pricing.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Pricing.create(
        {
          title: "title1",
          description: "paragraph1",
          price: 23,
          benifit1: "benifit",
          benifit2: "benifit",
          benifit3: "benifit",
          benifit4: "benifit",
        },
        {
          title: "title2",
          description: "paragraph1",
          price: 30,
          benifit1: "benifit",
          benifit2: "benifit",
          benifit3: "benifit",
          benifit4: "benifit",
        },
        {
          title: "title3",
          description: "paragraph1",
          price: 40,
          benifit1: "benifit",
          benifit2: "benifit",
          benifit3: "benifit",
          benifit4: "benifit",
        }
      );

      let allData = await Pricing.find({});

      return NextResponse.json({ data: allData });
    } else {
      return NextResponse.json({ data: allEntries });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
