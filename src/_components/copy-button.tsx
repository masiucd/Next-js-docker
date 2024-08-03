"use client";
import {IconButton} from "@radix-ui/themes";
import type {PropsWithChildren} from "react";

import {ICON_SIZE, Icons} from "./icons";
import {notifySuccess, Toast} from "./toast";

type Props = {
  text: string;
};

export function CopyButton({children, text}: PropsWithChildren<Props>) {
  return (
    <>
      <IconButton
        size="1"
        aria-label="Copy value"
        color="gray"
        variant="ghost"
        onClick={() => {
          navigator.clipboard.writeText(text);
          notifySuccess("Copied to clipboard");
        }}
      >
        <Icons.Copy size={ICON_SIZE} />
        {children}
      </IconButton>
      <Toast />
    </>
  );
}
