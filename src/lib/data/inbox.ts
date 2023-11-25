import {z} from "zod";

export let InboxItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  label: z.string(),
  date: z.string(),
  message: z.string(),
  content: z.string(),
});
export let InboxItemsSchema = z.array(InboxItemSchema);

export type InboxItem = z.infer<typeof InboxItemSchema>;
export type InboxItems = z.infer<typeof InboxItemsSchema>;

export let inboxData = Object.freeze([
  {
    id: 1,
    title: "MEDS Apotek",
    label: "meds",
    date: "Today",
    message: "Order confirmation - 123991312",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vel iusto excepturi, consequuntur sit eligendi? Quia adipisci esse error rerum iure, assumenda deleniti qui! Praesentium enim asperiores eveniet accusantium iure.",
  },
  {
    id: 2,
    title: "Skelp Legii",
    label: "legia",
    date: "2023-11-25",
    message: "Order confirmation - 99002122",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vel iusto excepturi, consequuntur sit eligendi? Quia adipisci esse error rerum iure, assumenda deleniti qui! Praesentium enim asperiores eveniet accusantium iure.",
  },
]);
