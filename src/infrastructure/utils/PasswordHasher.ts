import { scryptSync, randomBytes } from "node:crypto";

const encryptPassword = (password: string, salt:string) => scryptSync(password, salt, 32).toString("hex");
export const hashPassword = (password: string): string => {
  const salt = randomBytes(16).toString('hex');
  return encryptPassword(password, salt) + salt;
};
