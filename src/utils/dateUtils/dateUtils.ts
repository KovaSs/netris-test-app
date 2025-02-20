/**
 * Приводит временную timestamp метку к текстовому формату MM:SS:sss 
 * @param timestamp number
 * @returns string
 */
export const formatTimestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
};