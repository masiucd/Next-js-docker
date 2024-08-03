"use client";

import {Box, Button, Flex, Radio, Tooltip} from "@radix-ui/themes";
import {useState} from "react";

import {Callout} from "@/_components/callout";
import {Dialog} from "@/_components/dialog";
import {ICON_SIZE, Icons} from "@/_components/icons";
import {PopOver} from "@/_components/popover";
import {Label, Span} from "@/_components/typography";

import {deleteTask} from "./actions";
import type {TaskType} from "./api";

export function UserTasks({tasks}: {tasks: TaskType[]}) {
  let [selectedTask, setSelectedTask] = useState<string | null>(null);
  return (
    <Flex direction="column" gap="5">
      {tasks.length === 0 ? (
        <Box width="200px">
          <Callout>
            <Span>You have no tasks.</Span>
          </Callout>
        </Box>
      ) : (
        <Flex asChild direction="column" gap="2">
          <ul>
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
        </Flex>
      )}

      <TaskActions
        enabled={tasks.length > 0 || selectedTask !== null}
        selectedTask={selectedTask}
        clearClientStateTask={() => setSelectedTask(null)}
      />
    </Flex>
  );
}

function TaskActions({
  selectedTask,
  enabled,
  clearClientStateTask,
}: {
  selectedTask: string | null;
  enabled: boolean;
  clearClientStateTask: () => void;
}) {
  return (
    <Flex align="start" direction="column" gap="4">
      <Flex>
        <Tooltip content="Edit">
          <Dialog
            buttonComponent={
              <Button
                name="edit"
                radius="none"
                variant="outline"
                disabled={!enabled}
              >
                <Icons.Edit size={ICON_SIZE} /> Edit
              </Button>
            }
            title="Edit task"
            description="Edit the task description"
          >
            <h1>hello</h1>
          </Dialog>
        </Tooltip>
        <Tooltip content="Delete">
          <PopOver
            actionButton={
              <form
                action={async (data) => {
                  deleteTask(data);
                  clearClientStateTask();
                }}
              >
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
              <Button radius="none" variant="outline" disabled={!enabled}>
                <Icons.Delete size={ICON_SIZE} /> Delete
              </Button>
            }
          />
        </Tooltip>
        <Tooltip content="Snooze">
          <Button
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
