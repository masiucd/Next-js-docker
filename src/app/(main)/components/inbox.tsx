import {InboxItemsSchema} from "@/lib/data/inbox";
import {sql} from "@/lib/db/clinet";

import InboxItem from "./inbox-item";

async function getMails() {
  let rows = await sql`SELECT * FROM emails LIMIT 10`;
  return InboxItemsSchema.parse(rows);
}

export default async function Inbox() {
  let rows = await getMails();
  return (
    <ul className="flex flex-col gap-2 p-4">
      {rows.map((item) => (
        <InboxItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
