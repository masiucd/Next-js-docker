import Link from "next/link";

import {Icons} from "@/lib/components/icons";

export default function EmailPage({
  params,
  searchParams,
}: {
  params: {name: string};
  searchParams: {[key: string]: string};
}) {
  return (
    <div className="grid flex-1  grid-cols-12 gap-4 border">
      <div className="col-span-2 border border-primary-300 px-2 py-5">
        {/* actions */}
        <ul className="mb-10 flex flex-col gap-2">
          <li className="capitalize">
            <Link
              href="/f/inbox"
              className="flex items-center justify-between gap-2 hover:text-primary-200 "
            >
              <div className="flex items-center gap-2">
                <Icons.Inbox size={14} /> <span>Inbox</span>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100">
                4
              </span>
            </Link>
          </li>
          <li className=" capitalize">
            <Link
              href="/f/flagged"
              className="flex items-center justify-between gap-2 hover:text-primary-200"
            >
              <div className="flex items-center gap-2">
                <Icons.Flag size={14} /> <span>Flagged</span>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100 opacity-50">
                0
              </span>
            </Link>
          </li>

          <li className=" capitalize">
            <Link
              href="/f/sent"
              className="flex items-center justify-between gap-2 hover:text-primary-200"
            >
              <div className="flex items-center gap-2">
                <Icons.Send size={14} /> <span>Sent</span>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100">
                2
              </span>
            </Link>
          </li>
        </ul>

        {/* folders */}
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 capitalize">
            <Icons.Folder size={14} /> <span>work</span>
          </li>
          <li className="flex items-center gap-2 capitalize">
            <Icons.Folder size={14} /> <span>personal</span>
          </li>
          <li className="flex items-center gap-2 capitalize">
            <Icons.Folder size={14} /> <span>archive</span>
          </li>
        </ul>
      </div>
      <div className="col-span-4 border border-primary-300 px-2 py-5">
        <p>{params.name}</p>
        Email list column
      </div>
      <div className="col-span-6 border border-primary-300 px-2 py-5">
        Selected email column
      </div>
    </div>
  );
}
