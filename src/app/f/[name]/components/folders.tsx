import Link from "next/link";
import {type PropsWithChildren} from "react";

import {Icons} from "@/lib/components/icons";
import {getFoldersWithEmailCount} from "@/lib/db/queries";
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

function Total({children}: PropsWithChildren) {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs text-gray-100">
      {children}
    </span>
  );
}

type Props = {
  params: {name: string};
};

export default async function Folders({params}: Props) {
  let {topFolders, otherFolders} = await getFoldersWithEmailCount();
  return (
    <div className="col-span-2 border border-primary-300 px-2 py-5">
      <ul className="mb-10 flex flex-col gap-2">
        {topFolders.map((folder) => (
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
                <TopFolderIcon name={folder.name.toLowerCase()} />
                <span>{folder.name}</span>
              </div>
              <Total>{folder.total}</Total>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-2">
        {otherFolders.map((folder) => (
          <li key={folder.name} className="capitalize">
            <Link
              href={`/f/${folder.name}`}
              className="flex items-center justify-between gap-2 hover:text-primary-200 "
            >
              <div className="flex items-center gap-2">
                <Icons.Folder size={14} /> <span>{folder.name}</span>
              </div>
              <Total>{folder.total}</Total>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
