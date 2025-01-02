import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    paragraph: {
      type: String,
      required: [true, "Sub Text is required"],
    },
  },
  { timestamps: true }
);

const Features = models.features || model("features", userSchema);

export default Features;
