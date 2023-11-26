import {z} from "zod";

export let InboxItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  label: z.string(),
  date: z.date() as z.ZodType<Date, z.ZodTypeDef, Date>,
  subject: z.string(),
  content: z.string(),
});
export let InboxItemsSchema = z.array(InboxItemSchema);

export type InboxItem = z.infer<typeof InboxItemSchema>;
export type InboxItems = z.infer<typeof InboxItemsSchema>;
