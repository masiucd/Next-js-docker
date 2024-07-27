"use server";
import "server-only";

import {jwtVerify, SignJWT} from "jose";
import {z} from "zod";

let secretKey = "secret";
let key = new TextEncoder().encode(secretKey);

let payloadSchema = z.object({
  userId: z.number(),
  email: z.string(),
  expires: z.date(),
});
export type Payload = z.infer<typeof payloadSchema>;

export async function encrypt(payload: Payload) {
  return await new SignJWT(payloadSchema.parse(payload))
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

export async function decrypt(input: string) {
  let {payload} = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
