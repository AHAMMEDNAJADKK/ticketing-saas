import mongoose from "mongoose";

const orgSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Organization", orgSchema);
