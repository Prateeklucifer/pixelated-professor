import ConnectToDB from "@/DB/ConnectToDB";
import Checkout from "@/schema/Checkout";
import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(req, res) {
  const { firstName, lastName, email, phone, amount } = await req.json();
  try {
    ConnectToDB();

    if (validator.isEmail(email) && phone.length == 10) {
      await Checkout.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        amount: amount
      });
      return NextResponse.json({ status: 200 });
    } else {
      return NextResponse.json({ message: "invailed format" }, { status: 403 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { messege: "something went wrong" },
      { status: 500 }
    );
  }
}
