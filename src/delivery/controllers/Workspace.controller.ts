import { Request, Response } from "express";
import { CreateWorkspaceUsecase, GetOneWorkspaceUsecase } from "../../core/use_cases/Workspace.usecase";
import { IWorkspace } from "../../core/entities/Workspace.model";
import { AuthRequest } from "../middlewares/auth";

export const getWorkspacesByUser = async (req: AuthRequest, res: Response): Promise<void> => {
  const {
    user: { userId },
  } = Object(req);
  const workspace = await GetOneWorkspaceUsecase(userId);
  res.json(workspace);
};

export const createWorkspace = async (req: AuthRequest, res: Response): Promise<void> => {
  const { name, description, boards, members } = req.body;
  const newWorkspace: IWorkspace = {
    name,
    description,
    boards,
    members,
  };
  const workspace = await CreateWorkspaceUsecase(newWorkspace);
  res.json(workspace);
};
