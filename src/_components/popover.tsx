import {Button, Flex, Popover as RadixPopOver} from "@radix-ui/themes";
import type {PropsWithChildren, ReactNode} from "react";

type Props = {
  triggerButton: ReactNode;
  actionButton: ReactNode;
};
export function PopOver(props: PropsWithChildren<Props>) {
  return (
    <RadixPopOver.Root>
      <RadixPopOver.Trigger>{props.triggerButton}</RadixPopOver.Trigger>
      <RadixPopOver.Content width="360px">
        <Flex gap="3" direction="column" className="bg-red-200">
          {props.children}
          <Flex gap="2" ml="auto" width="200px" justify="end">
            <RadixPopOver.Close>
              <Button size="1" variant="outline">
                Cancel
              </Button>
            </RadixPopOver.Close>
            <RadixPopOver.Close>{props.actionButton}</RadixPopOver.Close>
          </Flex>
        </Flex>
      </RadixPopOver.Content>
    </RadixPopOver.Root>
  );
}
