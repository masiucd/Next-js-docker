import {Dialog as RadixDialog} from "@radix-ui/themes";
import type {PropsWithChildren, ReactNode} from "react";

type Props = {
  buttonComponent: ReactNode;
  title: string;
  description: string;
  open?: boolean;
};

export function Dialog(props: PropsWithChildren<Props>) {
  return (
    <RadixDialog.Root open={props.open}>
      <RadixDialog.Trigger>{props.buttonComponent}</RadixDialog.Trigger>
      <RadixDialog.Content maxWidth="450px">
        <RadixDialog.Title>{props.title}</RadixDialog.Title>
        <RadixDialog.Description size="2" mb="4">
          {props.description}
        </RadixDialog.Description>
        {props.children}
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
}

function DialogClose(props: PropsWithChildren) {
  return <RadixDialog.Close>{props.children}</RadixDialog.Close>;
}

Dialog.Close = DialogClose;
