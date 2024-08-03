import {Button, Flex, Popover as RadixPopOver} from "@radix-ui/themes";
import type {ReactNode} from "react";

import {P} from "./typography";

export function PopOver({
  triggerButton,
  actionButton,
}: {
  triggerButton: ReactNode;
  actionButton: ReactNode;
}) {
  return (
    <RadixPopOver.Root>
      <RadixPopOver.Trigger>{triggerButton}</RadixPopOver.Trigger>
      <RadixPopOver.Content width="360px">
        <Flex gap="3" direction="column">
          <P>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </P>
          <Flex gap="3" mt="3" justify="between" className="ml-auto ">
            <RadixPopOver.Close>{actionButton}</RadixPopOver.Close>
            <RadixPopOver.Close>
              <Button size="1" variant="outline">
                Cancel
              </Button>
            </RadixPopOver.Close>
          </Flex>
        </Flex>
      </RadixPopOver.Content>
    </RadixPopOver.Root>
  );
}
