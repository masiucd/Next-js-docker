import "server-only";

export function getExpires(seconds: number = 600): Date {
  let milliseconds = 1000;
  return new Date(Date.now() + seconds * milliseconds); // 10 minutes
}
