import {inboxData, InboxItemSchema} from "@/lib/data/inbox";

import InboxItem from "./inbox-item";

export default function Inbox() {
  return (
    <ul className="flex flex-col gap-2 p-4">
      {inboxData.map((item) => (
        <InboxItem key={item.id} item={InboxItemSchema.parse(item)} />
      ))}
    </ul>
  );
}
