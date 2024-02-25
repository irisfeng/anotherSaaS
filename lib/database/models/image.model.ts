import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string; // required
    transformationType: string; // required
    publicId: string; // required
    secureURL: string; // required, assuming URL can be represented as string
    width?: number; // optional
    height?: number; // optional
    config?: object; // optional, could be further detailed with a specific interface
    transformationUrl?: string; // optional, assuming URL can be represented as string
    aspectRatio?: string; // optional
    color?: string; // optional
    prompt?: string; // optional
    author: {
        _id: String;
        firstName: String;
        lastName: String;
    };
    createdAt?: Date; // optional, default value provided in schema
    updatedAt?: Date; // optional, default value provided in schema
  }
  

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureURL: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;