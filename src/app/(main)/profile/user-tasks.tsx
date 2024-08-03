"use client";

import {Box, Button, Flex, Radio, Tooltip} from "@radix-ui/themes";
import {type PropsWithChildren, useActionState, useState} from "react";
import {useFormState} from "react-dom";

import {Callout} from "@/_components/callout";
import {Dialog} from "@/_components/dialog";
import {ICON_SIZE, Icons} from "@/_components/icons";
import {Input} from "@/_components/input";
import {PopOver} from "@/_components/popover";
import {Label, Span} from "@/_components/typography";

import {completeTask, deleteTask, updateTask} from "./actions";
import type {TaskType} from "./api";

export function UserTasks({tasks}: {tasks: TaskType[]}) {
  let [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  let enabled = tasks.length > 0 && selectedTaskId !== null;

  return (
    <Flex direction="column" gap="5">
      {tasks.length === 0 ? (
        <Box width="200px">
          <Callout>
            <Span>You have no tasks.</Span>
          </Callout>
        </Box>
      ) : (
        <TaskItems
          onValueChange={(value: string) => setSelectedTaskId(value)}
          selectedTaskId={selectedTaskId}
          tasks={tasks}
        />
      )}

      <TaskActionsWrapper>
        <EditTask enabled={enabled} selectedTaskId={selectedTaskId} />
        <DeleteTask
          selectedTaskId={selectedTaskId}
          enabled={enabled}
          clearClientStateTask={() => {
            setSelectedTaskId(null);
          }}
        />
        <CompleteTask enabled={enabled} selectedTaskId={selectedTaskId} />
      </TaskActionsWrapper>
    </Flex>
  );
}

function TaskItems(props: {
  selectedTaskId: string | null;
  tasks: TaskType[];
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: string) => void;
}) {
  return (
    <Flex asChild direction="column" gap="2">
      <ul>
        {props.tasks.map((t) => (
          <Label as="label" size="2" key={t.id} asChild>
            <li>
              <Label>
                <Flex gap="2">
                  <Radio
                    value={t.id.toString()}
                    onValueChange={props.onValueChange}
                    checked={props.selectedTaskId === t.id.toString()}
                  />
                  {t.task}
                </Flex>
              </Label>
            </li>
          </Label>
        ))}
      </ul>
    </Flex>
  );
}

function TaskActionsWrapper(props: PropsWithChildren) {
  return (
    <Flex align="start" direction="column" gap="4">
      <Flex>{props.children}</Flex>
    </Flex>
  );
}

// TODO
function CompleteTask(props: {
  enabled: boolean;
  selectedTaskId: string | null;
  completed: boolean;
}) {
  let [state, action, isPending] = useFormState(completeTask, null);
  return (
    <form action={action} className="flex-1">
      {props.selectedTaskId && (
        <>
          <input type="hidden" name="taskId" value={props.selectedTaskId} />
          <input
            type="hidden"
            name="completed"
            value={props.completed.toString()}
          />
        </>
      )}
      <Button
        type="submit"
        name="complete"
        radius="none"
        color="gray"
        variant="outline"
        disabled={isPending || !props.enabled}
      >
        <Icons.Complete /> {isPending ? "Completing..." : "Complete"}
      </Button>
    </form>
  );
}

function DeleteTask(props: {
  selectedTaskId: string | null;
  enabled: boolean;
  clearClientStateTask: () => void;
}) {
  return (
    <PopOver
      actionButton={
        <form
          action={async (data) => {
            deleteTask(data);
            props.clearClientStateTask();
          }}
        >
          <Button
            type="submit"
            size="1"
            name="delete"
            value={props.selectedTaskId ?? undefined}
          >
            Delete
          </Button>
        </form>
      }
      triggerButton={
        <Button
          radius="none"
          color="red"
          variant="outline"
          disabled={!props.enabled}
        >
          <Icons.Delete size={ICON_SIZE} /> Delete
        </Button>
      }
    />
  );
}

function EditTask(props: {enabled: boolean; selectedTaskId: string | null}) {
  let [state, action, isPending] = useActionState(updateTask, null);
  console.log("state", state);
  return (
    <Tooltip content="Edit">
      <Dialog
        buttonComponent={
          <Button
            name="edit"
            radius="none"
            variant="outline"
            disabled={isPending || !props.enabled}
          >
            <Icons.Edit size={ICON_SIZE} /> Edit
          </Button>
        }
        title="Edit task"
        description="Edit the task description"
      >
        <Flex asChild direction="column" gap="1">
          <form action={action}>
            <Input type="text" name="task-value" />
            {props.selectedTaskId && (
              <input
                type="hidden"
                name="task-id"
                value={props.selectedTaskId}
              />
            )}

            <Button disabled={isPending} type="submit">
              <Icons.Edit /> {isPending ? "Editing" : "Edit"}
            </Button>
          </form>
        </Flex>
      </Dialog>
    </Tooltip>
  );
}
