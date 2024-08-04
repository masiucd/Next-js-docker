import "server-only";

import {parseISO} from "date-fns";
import {cookies} from "next/headers";

import {decrypt} from "./jwt";

export async function getUserFromSession() {
  let cookieStore = cookies();
  let session = cookieStore.get("session");
  if (session) {
    let {success, data} = await decrypt(session.value);
    if (success && data) {
      if (data.expires && parseISO(data.expires) > new Date()) return data;
    }
  }
  return null;
}
