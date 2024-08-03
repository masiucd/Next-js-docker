"use client";

import {Button, Flex} from "@radix-ui/themes";
import {useActionState, useRef} from "react";

import {Callout} from "@/_components/callout";
import {Icons} from "@/_components/icons";
import {Input} from "@/_components/input";
import {Span} from "@/_components/typography";

import {createTask} from "../actions";

type Props = {
  userId: number;
};

export function CreateTaskForm({userId}: Props) {
  let [error, action, isPending] = useActionState(createTask, null);
  let ref = useRef<HTMLFormElement | null>(null);
  return (
    <>
      <Flex asChild direction="column" gap="1">
        <form
          action={async (data) => {
            await action(data);
            if (ref.current) {
              ref.current.reset();
            }
          }}
          ref={ref}
        >
          <Input
            name="task"
            placeholder="Your task..."
            required
            size="2"
            disabled={isPending}
          />
          <input type="hidden" name="userId" value={userId} />
          <Button type="submit" size="2" variant="soft" disabled={isPending}>
            <Icons.Add /> {isPending ? "Creating..." : "Create task"}
          </Button>
        </form>
      </Flex>
      {error && (
        <Callout type="info">
          <Span>Could not create new task</Span>
        </Callout>
      )}
    </>
  );
}
