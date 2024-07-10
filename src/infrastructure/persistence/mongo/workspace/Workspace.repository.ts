import { IWorkspace } from "../../../../core/entities/Workspace.model";
import WorkspaceDocument from "./Workspace.document";

export const WorkspaceRepository = {
  getWorkspacesById: async (memberId: string): Promise<any> => {
    const workspaces: any = await WorkspaceDocument.find({ members: memberId });
    return workspaces;
  },

  createWorkspace: async (workspace: IWorkspace): Promise<IWorkspace> => {
    const newWorkspaceDoc = new WorkspaceDocument({
      name: workspace.name,
      description: workspace.description,
      boards: workspace.boards,
      members: workspace.members,
    });
    const savedworkspace = await newWorkspaceDoc.save();
    return savedworkspace;
  },
};
