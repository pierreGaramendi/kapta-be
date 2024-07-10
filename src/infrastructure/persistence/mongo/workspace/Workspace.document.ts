import mongoose, { Schema, Document } from "mongoose";
import { IBoard, IWorkspace } from "../../../../core/entities/Workspace.model";

interface WorkspaceDocument extends Document, IWorkspace {}

const BoardSchema = new Schema<IBoard>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  lists: [{ type: String, required: true }],
  members: [{ type: String, required: true }],
});

const WorkspaceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  boards: [BoardSchema],
  members: [{ type: String, required: true }],
});

export default mongoose.model<WorkspaceDocument>("Workspace", WorkspaceSchema);
