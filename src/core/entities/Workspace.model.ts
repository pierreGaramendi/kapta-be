export interface IBoard {
  name: string;
  description: string;
  lists: string[];
  members: string[];
}

export interface IWorkspace {
  name: string;
  description: string;
  boards: IBoard[];
  members: string[];
}
