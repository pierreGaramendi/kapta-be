import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../../../core/entities/User.model";

interface UserDocument extends Document,IUser {
    username: string;
    email: string;
    passwordHash: string;
    roles: string[];
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    roles: { type: [String], required: false },
});

export default mongoose.model<UserDocument>("User", UserSchema);
