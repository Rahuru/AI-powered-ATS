export const formatSize = (bytes: number): string => {
  if (typeof bytes !== "number" || Number.isNaN(bytes) || bytes < 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB", "TB"];

  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, index);
  const formatted = value.toFixed(2).replace(/\.00$/, "");

  return `${formatted} ${units[index]}`;
};
