import {inboxData} from "@/lib/data/inbox";

export default function Mail({params}: {params: {mail: string}}) {
  let {mail} = params;
  let item = inboxData.find((item) => item.label === mail);
  if (!item) {
    return <div>Mail not found</div>;
  }
  return (
    <div className="flex flex-col items-center border">
      <div className="flex w-full flex-col border px-2 py-4">
        <p>{item.title}</p>
        <p>{item.date}</p>
        <p>{item.message}</p>
        <p>
          <strong>{item.label}</strong>
        </p>
      </div>
      <article className="prose prose-stone dark:prose-invert">
        <p>{item.content}</p>
      </article>
    </div>
  );
}
