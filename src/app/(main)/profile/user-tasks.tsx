"use client";

import {Box, Button, Flex} from "@radix-ui/themes";
import {
  type PropsWithChildren,
  useActionState,
  useEffect,
  useState,
} from "react";
import {useFormState} from "react-dom";

import {Callout} from "@/_components/callout";
import {Dialog} from "@/_components/dialog";
import {ICON_SIZE, Icons} from "@/_components/icons";
import {Input} from "@/_components/input";
import {PopOver} from "@/_components/popover";
import {notifyError, Toast} from "@/_components/toast";
import {Label, P, Span} from "@/_components/typography";
import {cn} from "@/lib/cn";

import {completeTask, deleteTask, updateTask} from "./actions";
import type {TaskType} from "./api";

export function UserTasks({tasks}: {tasks: TaskType[]}) {
  let [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  let enabled = tasks.length > 0 && selectedTask !== null;

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
          setTask={(task) => {
            setSelectedTask(task);
          }}
          selectedTask={selectedTask}
          tasks={tasks}
        />
      )}

      <TaskActionsWrapper>
        <EditTask enabled={enabled} selectedTask={selectedTask} />
        <DeleteTask
          selectedTask={selectedTask}
          enabled={enabled}
          clearClientStateTask={() => {
            setSelectedTask(null);
          }}
        />
        <CompleteTask enabled={enabled} selectedTask={selectedTask} />
      </TaskActionsWrapper>
    </Flex>
  );
}

type Variant = "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
function getTaskVariant(
  task: TaskType,
  selectedTask: TaskType | null
): Variant {
  // props.selectedTask?.id === t.id ? "solid" : "soft"
  if (selectedTask?.id === task.id) {
    return "solid";
  }
  if (task.completed) {
    return "outline";
  }
  return "ghost";
}
function TaskItems(props: {
  selectedTask: TaskType | null;
  tasks: TaskType[];
  // eslint-disable-next-line no-unused-vars
  setTask: (task: TaskType) => void;
}) {
  return (
    <Flex asChild direction="column" gap="2">
      <ul>
        {props.tasks.map((t) => (
          <Label as="label" size="2" key={t.id} asChild>
            <li>
              <Label>
                <Flex gap="2">
                  <Button
                    size="1"
                    type="button"
                    variant={getTaskVariant(t, props.selectedTask)}
                    onClick={() => props.setTask(t)}
                  >
                    <Span
                      weight="medium"
                      size="2"
                      className={cn(t.completed && "line-through")}
                    >
                      {t.task}
                    </Span>
                  </Button>
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
  selectedTask: TaskType | null;
}) {
  let [error, action, isPending] = useFormState(completeTask, null);
  useEffect(() => {
    if (error) {
      notifyError("Something went wrong. Please try again.");
    }
  }, [error]);

  return (
    <form action={action} className="flex-1">
      {props.selectedTask && (
        <>
          <input type="hidden" name="task-id" value={props.selectedTask.id} />
          <input
            type="hidden"
            name="completed"
            value={props.selectedTask.completed.toString()}
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
        <Icons.Complete />
        {getCompleteText(props.selectedTask?.completed ?? false, isPending)}
      </Button>
      <Toast />
    </form>
  );
}

function getCompleteText(completed: boolean, isPending: boolean) {
  if (completed) {
    return "Uncomplete";
  }
  if (isPending) {
    return "Completing";
  }
  return "Complete";
}

function DeleteTask(props: {
  selectedTask: TaskType | null;
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
            value={props.selectedTask?.id}
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
    >
      <P>
        Are you sure you want to delete this task? This action cannot be undone.
      </P>
    </PopOver>
  );
}

function EditTask(props: {enabled: boolean; selectedTask: TaskType | null}) {
  let [error, action, isPending] = useActionState(updateTask, null);
  return (
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
      title={`Edit task "${props.selectedTask?.task}"`}
      description="Edit the task description"
    >
      <Flex asChild direction="column" gap="1">
        <form action={action}>
          <Input type="text" name="task-value" />
          {props.selectedTask && (
            <input type="hidden" name="task-id" value={props.selectedTask.id} />
          )}
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button disabled={isPending} type="submit" variant="solid">
                <Icons.Edit /> {isPending ? "Editing" : "Edit"}
              </Button>
            </Dialog.Close>
          </Flex>
          {error && (
            <Callout type="error">
              Something went wrong. Please try again.
            </Callout>
          )}
        </form>
      </Flex>
    </Dialog>
  );
}
