import {format} from "date-fns";

import {InboxItemSchema} from "@/lib/data/inbox";
import {sql} from "@/lib/db/clinet";

async function getEmailByLabel(label: string) {
  let rows = await sql`SELECT * FROM emails WHERE label = ${label}`;
  return InboxItemSchema.parse(rows[0]);
}

export default async function Mail({params}: {params: {label: string}}) {
  let {label} = params;
  let item = await getEmailByLabel(label);
  if (!item) {
    return <div>Mail not found</div>;
  }
  return (
    <div className="flex w-full flex-col items-center border">
      <div className="flex w-full flex-col border px-2 py-4">
        <div className="flex gap-5">
          <p>{item.title}</p>
          <p>{format(item.date, "dd/MM/yyyy")}</p>
        </div>
        <p>{item.subject}</p>
        <p>
          <strong>{item.label}</strong>
        </p>
      </div>
      <article className="prose prose-stone p-2 dark:prose-invert">
        <p>{item.content}</p>
      </article>
    </div>
  );
}
