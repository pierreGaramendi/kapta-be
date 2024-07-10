import { WorkspaceRepository } from "../../infrastructure/persistence/mongo/workspace/Workspace.repository";
import { IWorkspace } from "../entities/Workspace.model";

export const GetOneWorkspaceUsecase = async (member: string): Promise<any> => {
  return await WorkspaceRepository.getWorkspacesById(member);
};

export const CreateWorkspaceUsecase = async (workspace: IWorkspace): Promise<IWorkspace> => {
  return await WorkspaceRepository.createWorkspace(workspace);
};