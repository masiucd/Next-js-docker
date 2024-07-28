"use client";

import {Button, Flex, Radio, Tooltip} from "@radix-ui/themes";
import {useState} from "react";

import {ICON_SIZE, Icons} from "@/_components/icons";
import {Label} from "@/_components/typography";

import type {TaskType} from "./api";

export function UserTasks({tasks}: {tasks: TaskType[]}) {
  let [selectedTask, setSelectedTask] = useState<string | null>(null);
  let enabled = selectedTask !== null;
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
      <Flex align="start" direction="column" gap="4">
        <Flex>
          <Tooltip content="Edit">
            <Button
              value="edit"
              onClick={() => {
                console.log("Edit task", selectedTask);
              }}
              radius="none"
              variant="outline"
              disabled={!enabled}
            >
              <Icons.Edit size={ICON_SIZE} />
            </Button>
          </Tooltip>
          <Tooltip content="Delete">
            <Button
              value="delete"
              radius="none"
              variant="outline"
              disabled={!enabled}
            >
              <Icons.Delete size={ICON_SIZE} />
            </Button>
          </Tooltip>
          <Tooltip content="Snooze">
            <Button
              value="snooze"
              radius="none"
              variant="outline"
              disabled={!enabled}
            >
              <Icons.Snooze size={ICON_SIZE} />
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
