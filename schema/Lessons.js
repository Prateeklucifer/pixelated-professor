import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    lessonTag: {
      type: String,
      required: [true, "Lesson Tag is required"],
    },
    title: {
      type: String,
      required: [true, "Lesson title is required"],
    },
    imageURL: {
      type: String,
      required: [true, "Lesson image url is required"],
    },
    videoURL: {
      type: String,
      required: [true, "Lesson video url is required"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Lessons = models.lessons || model("lessons", userSchema);

export default Lessons;
