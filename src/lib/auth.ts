import "server-only";

import {parseISO} from "date-fns";
import {cookies} from "next/headers";

import {decrypt} from "./jwt";

export async function isAuthorized() {
  let cookieStore = cookies();
  let session = cookieStore.get("session");
  if (session) {
    let {expires} = await decrypt(session.value);
    if (expires && parseISO(expires) > new Date()) return true;
  }
  return false;
}
