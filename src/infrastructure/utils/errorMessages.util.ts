export const getErrorMessageZod = (validated: any) => {
  return validated?.error?.issues?.[0]?.message || "Error";
};

export const getErrorMessageMongo = (error: any) => {
  let message = "Error";
  if (error.code === 11000) {
    message = "Se han detectado valor duplicados";
  }
  return message;
};
