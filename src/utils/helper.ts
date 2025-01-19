export const classMapping = (...arrays: Array<string | boolean | undefined>) =>
  arrays
    .filter((item) => item)
    .join(' ')
    .trim()
    .replace(/\s{2,}/g, ' ');
