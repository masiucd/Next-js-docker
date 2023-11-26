import Link from "next/link";

import {Icons} from "@/lib/components/icons";
import {getEmailsForFolder, getFoldersWithEmailCount} from "@/lib/db/queries";
import {cn} from "@/lib/utils/cn";

function TopFolderIcon({name}: {name: string}) {
  switch (name) {
    case "inbox":
      return <Icons.Inbox size={14} />;
    case "flagged":
      return <Icons.Flag size={14} />;
    case "sent":
      return <Icons.Send size={14} />;
    default:
      return <Icons.Folder size={14} />;
  }
}

export default async function EmailPage({
  params,
  searchParams,
}: {
  params: {name: string};
  searchParams: {[key: string]: string};
}) {
  let {topFolders, otherFolders} = await getFoldersWithEmailCount();

  return (
    <div className="grid flex-1  grid-cols-12 gap-4 border">
      <div className="col-span-2 border border-primary-300 px-2 py-5">
        {/* folders */}
        <ul className="mb-10 flex flex-col gap-2">
          {topFolders.map((folder) => {
            return (
              <li
                key={folder.name}
                className={cn(
                  "capitalize",
                  params.name === folder.name && "text-primary-300"
                )}
              >
                <Link
                  href={`/f/${folder.name}`}
                  className="flex items-center justify-between gap-2 hover:text-primary-200 "
                >
                  <div className="flex items-center gap-2">
                    {/* <Icons.Folder size={14} /> */}
                    <TopFolderIcon name={folder.name.toLowerCase()} />

                    <span>{folder.name}</span>
                  </div>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100">
                    {folder.total}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col gap-2">
          {otherFolders.map((folder) => {
            return (
              <li key={folder.name} className="capitalize">
                <Link
                  href={`/f/${folder.name}`}
                  className="flex items-center justify-between gap-2 hover:text-primary-200 "
                >
                  <div className="flex items-center gap-2">
                    <Icons.Folder size={14} /> <span>{folder.name}</span>
                  </div>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100">
                    {folder.total}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-4 border border-primary-300 px-2 py-5">
        <EmailList name={params.name} />
      </div>
      <div className="col-span-6 border border-primary-300 px-2 py-5">
        Selected email column
      </div>
    </div>
  );
}

async function EmailList({name}: {name: string}) {
  let emails = await getEmailsForFolder(name);
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {emails.map((email) => {
          return (
            <li key={email.id}>
              <div>{email.subject}</div> <div>{email.body}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
