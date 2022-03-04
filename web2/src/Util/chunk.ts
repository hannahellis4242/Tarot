const chunk = <T>(arr: T[], chunkSize: number): T[][] | null => {
  if (chunkSize <= 0) {
    return null;
  }
  const R = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    R.push(arr.slice(i, i + chunkSize));
  }
  return R;
};

export default chunk;
