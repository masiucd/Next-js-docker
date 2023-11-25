import {type PropsWithChildren} from "react";

import {Icons} from "@/lib/components/icons";

export default function Layout({children}: PropsWithChildren) {
  return (
    <main className="flex min-h-[100dvh] border">
      <aside className="flex basis-[20rem] flex-col gap-10 border border-red-300 py-10 pl-3 pr-10 ">
        {/* actions */}
        <ul className="flex flex-col gap-2">
          <li className="flex items-center justify-between gap-2 capitalize">
            <div className="flex items-center gap-2">
              <Icons.Inbox size={14} /> <span>Inbox</span>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100">
              4
            </span>
          </li>
          <li className="flex items-center justify-between gap-2 capitalize">
            <div className="flex items-center gap-2">
              <Icons.Flag size={14} /> <span>Flagged</span>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100 opacity-50">
              0
            </span>
          </li>

          <li className="flex items-center justify-between gap-2 capitalize">
            <div className="flex items-center gap-2">
              <Icons.Send size={14} /> <span>Sent</span>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-gray-100">
              2
            </span>
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
      </aside>

      {/* inbox */}
      <section className=" basis-[25rem] border border-red-300 py-5">
        <ul className="flex flex-col gap-2 p-4">
          <li className="flex h-[7rem] flex-col ">
            <div className="flex justify-between">
              <strong className="font-bold">MEDS Apotek</strong>
              <span className="text-gray-300/70">Today</span>
            </div>
            <p className="font-semibold text-gray-50/90">
              Order confirmation - 123991312
            </p>
            <p className="line-clamp-2 overflow-hidden text-gray-300/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vel
              iusto excepturi, consequuntur sit eligendi? Quia adipisci esse
              error rerum iure, assumenda deleniti qui! Praesentium enim
              asperiores eveniet accusantium iure.
            </p>
          </li>
          <li className="flex h-[7rem] flex-col ">
            <div className="flex justify-between">
              <strong className="font-bold">MEDS Apotek</strong>
              <span className="text-gray-300/70">2023-11-25</span>
            </div>
            <p className="font-semibold text-gray-50/90">
              Order confirmation - 123991312
            </p>
            <p className="line-clamp-2 overflow-hidden text-gray-300/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vel
              iusto excepturi, consequuntur sit eligendi? Quia adipisci esse
              error rerum iure, assumenda deleniti qui! Praesentium enim
              asperiores eveniet accusantium iure.
            </p>
          </li>
        </ul>
      </section>
      {children}
    </main>
  );
}
