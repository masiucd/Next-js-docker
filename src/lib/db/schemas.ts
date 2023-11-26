import {z} from "zod";

export let EmailForFolder = z.object({
  id: z.number(),
  sender_id: z.number(),
  recipient_id: z.number(),
  subject: z.string(),
  body: z.string(),
  sent_date: z.date(),
  name: z.string(),
  email: z.string(),
});
export let EmailForFolderList = z.array(EmailForFolder);

export type EmailForFolderType = z.infer<typeof EmailForFolder>;

export let EmailWithFolderCount = z.object({
  name: z.string(),
  total: z.string(),
});
export let EmailWithFolderCountList = z.array(EmailWithFolderCount);
export type Folder = z.infer<typeof EmailWithFolderCount>;
