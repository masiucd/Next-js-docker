"use client";

import {
  Button,
  Flex,
  Popover as RadixPopOver,
  Radio,
  Tooltip,
} from "@radix-ui/themes";
import {type ReactNode, useState} from "react";

import {ICON_SIZE, Icons} from "@/_components/icons";
import {Label, P} from "@/_components/typography";

import {deleteTask} from "./actions";
import type {TaskType} from "./api";

export function UserTasks({tasks}: {tasks: TaskType[]}) {
  let [selectedTask, setSelectedTask] = useState<string | null>(null);
  return (
    <Flex direction="column" gap="5">
      <ul className="flex flex-col gap-2">
        {tasks.map((t) => (
          <Label as="label" size="2" key={t.id} asChild>
            <li>
              <Label>
                <Flex gap="2">
                  <Radio
                    value={t.id.toString()}
                    onValueChange={(value) => setSelectedTask(value)}
                    checked={selectedTask === t.id.toString()}
                  />
                  {t.task}
                </Flex>
              </Label>
            </li>
          </Label>
        ))}
      </ul>
      <TaskActions selectedTask={selectedTask} />
    </Flex>
  );
}

function TaskActions({selectedTask}: {selectedTask: string | null}) {
  let enabled = selectedTask !== null;
  return (
    <Flex align="start" direction="column" gap="4">
      <Flex>
        <Tooltip content="Edit">
          <Button
            // value={selectedTask}
            name="edit"
            radius="none"
            variant="outline"
            disabled={!enabled}
          >
            <Icons.Edit size={ICON_SIZE} /> Edit
          </Button>
        </Tooltip>
        <Tooltip content="Delete">
          <PopOver
            actionButton={
              <form action={deleteTask}>
                <Button
                  type="submit"
                  size="1"
                  name="delete"
                  value={selectedTask ?? undefined}
                >
                  Delete
                </Button>
              </form>
            }
            triggerButton={
              <Button
                // value={selectedTask}
                name="delete"
                radius="none"
                variant="outline"
                disabled={!enabled}
              >
                <Icons.Delete size={ICON_SIZE} /> Delete
              </Button>
            }
          />
        </Tooltip>
        <Tooltip content="Snooze">
          <Button
            // value={selectedTask}
            name="snooze"
            radius="none"
            variant="outline"
            disabled={!enabled}
          >
            <Icons.Snooze size={ICON_SIZE} /> Snooze
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
}

function PopOver({
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
