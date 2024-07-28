import "server-only";

import {format} from "date-fns";
import {cookies} from "next/headers";

import {encrypt} from "./jwt";

/**
 * Calculates the expiration date based on the current time and the given number of seconds.
 *
 * @param {number} [seconds=3600] - The number of seconds from now until the expiration date. Defaults to 3600 seconds (1 hour).
 * @returns {Date} The calculated expiration date.
 */
export function getExpires(seconds: number = 3600): Date {
  let milliseconds = 1000;
  return new Date(Date.now() + seconds * milliseconds); // 1 hour
}

export async function setAuthSession(userFields: {
  userId: number;
  password: string;
  email: string;
}) {
  let expires = getExpires();
  let cookieStore = cookies();
  cookieStore.set({
    name: "session",
    value: await encrypt({
      userId: userFields.userId,
      email: userFields.email,
      expires: format(expires, "yyyy-MM-dd'T'HH:mm:ssxxx"),
    }),
    expires,
  });
}
