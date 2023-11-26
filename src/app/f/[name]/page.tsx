import {Suspense} from "react";

import {Icons} from "@/lib/components/icons";
import {getEmailsForFolder} from "@/lib/db/queries";

import Folders from "./components/folders";

export default async function EmailPage({
  params,
  searchParams,
}: {
  params: {name: string};
  searchParams: {[key: string]: string};
}) {
  return (
    <div className="grid flex-1  grid-cols-12 gap-4 border">
      <Folders params={params} />
      <div className="col-span-4 flex flex-col border border-primary-300 px-2 py-5">
        <EmailList name={params.name} />
      </div>
      <div className="col-span-6 flex flex-col border border-primary-300">
        <Suspense fallback={<div>No Email selected</div>}>
          <SelectedEmail searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

async function EmailList({name}: {name: string}) {
  let emails = await getEmailsForFolder(name);
  if (emails.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h3 className="text-2xl font-bold capitalize tracking-tight text-primary-300">
          no emails
        </h3>
      </div>
    );
  }
  console.log(emails);
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {emails.map((email) => (
          <li key={email.id}>
            <div>{email.subject}</div> <div>{email.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="flex gap-2 border px-2 py-4">
      <button type="button" className="hover:opacity-50">
        <Icons.Send size={18} />
      </button>
      <button type="button" className="hover:opacity-50">
        <Icons.Trash size={18} />
      </button>
      <button type="button" className="hover:opacity-50">
        <Icons.CornerUpLeft size={18} />
      </button>
      <button type="button" className="hover:opacity-50">
        <Icons.CornerUpRight size={18} />
      </button>
    </div>
  );
}
function EmptyEmailView() {
  return (
    <div className="flex flex-1 flex-col border">
      <Toolbar />
      <div className="flex  flex-1 items-center justify-center">
        <h3 className="text-2xl font-bold capitalize tracking-tight text-primary-300">
          no email selected
        </h3>
      </div>
    </div>
  );
}

function SelectedEmail({
  searchParams,
}: {
  searchParams: {[key: string]: string};
}) {
  if (!searchParams.id) return <EmptyEmailView />;
  return <div>Selected Email</div>;
}
