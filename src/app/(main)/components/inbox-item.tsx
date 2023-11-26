"use client";

import {format} from "date-fns";
import Link from "next/link";
import {useParams} from "next/navigation";

import {type InboxItem} from "@/lib/data/inbox";
import {cn} from "@/lib/utils/cn";

type Props = {
  item: InboxItem;
};

export default function InboxItem({item}: Props) {
  let params = useParams();
  return (
    <li
      className={cn(
        "flex h-[7rem] flex-col hover:opacity-50 p-2 rounded-md",
        params?.mail === item.label && "bg-gray-700/50 hover:opacity-95"
      )}
    >
      <Link href={`/preview/${item.label}`}>
        <div className="flex justify-between">
          <strong className="font-bold">{item.title}</strong>
          <span className="text-gray-300/70">
            {format(item.date, "dd/MM/yyyy")}
          </span>
        </div>
        <p className="font-semibold text-gray-50/90">{item.subject}</p>
        <p className="line-clamp-2 overflow-hidden text-gray-300/70">
          {item.content}
        </p>
      </Link>
    </li>
  );
}
