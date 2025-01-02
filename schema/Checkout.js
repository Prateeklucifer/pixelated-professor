import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    phone:{
        type: Number
    }, 
    amount:{
        type: Number,
        required: true
    }, 
  },
  { timestamps: true }
);

const Checkout = models.checkout || model("checkout", userSchema);

export default Checkout;
