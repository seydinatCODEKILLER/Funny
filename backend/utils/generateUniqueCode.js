export const generateUniqueCode = () => {
  const random = Math.random().toString(36).substr(2, 9);
  const code = `game-${random}`;
  return code;
};
