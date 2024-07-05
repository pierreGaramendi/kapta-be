import { scryptSync, randomBytes } from "node:crypto";

const encryptPassword = (password: string, salt:string) => scryptSync(password, salt, 32).toString("hex");
export const hashPassword = (password: string): string => {
  const salt = randomBytes(16).toString('hex');
  return encryptPassword(password, salt) + salt;
};

export const matchPassword = (password: string, hash: string): Boolean => {
  // extract salt from the hashed string
  // our hex password length is 32*2 = 64
  const salt = hash.slice(64);
  const originalPassHash = hash.slice(0, 64);
  const currentPassHash = encryptPassword(password, salt);
  return originalPassHash === currentPassHash;
};