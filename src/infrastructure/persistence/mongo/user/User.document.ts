import { Schema, Document, model } from "mongoose";
import { IUser } from "../../../../core/entities/User.model";

interface IUserDocument extends Document, IUser {
  username: string;
  email: string;
  passwordHash: string;
  avatarUrl: string;
  roles: string[];
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  avatarUrl: { type: String, required: false },
  roles: { type: [String], required: false },
});
//export default mongoose.model<UserDocument>("User", UserSchema);
export const UserDocument = model<IUserDocument>("User", UserSchema);
