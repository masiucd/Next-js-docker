"use client";

import {Button, Flex} from "@radix-ui/themes";
import {useActionState, useRef} from "react";
import {useFormState} from "react-dom";

import {Icons} from "@/_components/icons";
import {Input} from "@/_components/input";

import {createTask} from "../actions";

type Props = {
  userId: number;
};

export function CreateTaskForm({userId}: Props) {
  let [error, action, isPending] = useActionState(createTask, null);
  let ref = useRef<HTMLFormElement | null>(null);
  return (
    <>
      <Flex asChild align="center">
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
          <Button type="submit" size="2" disabled={isPending}>
            <Icons.Add /> {isPending ? "Creating..." : "Create task"}
          </Button>
        </form>
      </Flex>
      {error && <p>ooops</p>}
    </>
  );
}
