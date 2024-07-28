"use client";
import {Box, Button, Callout} from "@radix-ui/themes";
import {redirect} from "next/navigation";
import {useFormState} from "react-dom";

import {ICON_SIZE, Icons} from "./icons";
import {Input, InputGroup, InputLabel} from "./input";
import {Span} from "./typography";

type Props = {
  login(
    // eslint-disable-next-line no-unused-vars
    prevState: null | {
      ok: boolean;
      message: string;
    },
    // eslint-disable-next-line no-unused-vars
    data: FormData
  ): Promise<{
    ok: boolean;
    message: string;
  } | null>;
};
export function LoginForm({login}: Props) {
  let [state, action] = useFormState(login, null, "");
  if (state?.ok) {
    redirect("/profile");
  }
  return (
    <Box>
      <form action={action}>
        <fieldset className="flex flex-col gap-2">
          <InputGroup>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              name="email"
              required
              placeholder="name@ex.com"
              size="3"
            />
          </InputGroup>
          <InputGroup>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              name="password"
              required
              placeholder="secret password..."
              size="3"
            />
          </InputGroup>
          <Button type="submit" size="3">
            <Span weight="bold">Sign in</Span>
          </Button>
        </fieldset>
      </form>
      {state !== null && !state.ok && (
        <Callout.Root color="red">
          <Callout.Text>{state.message}</Callout.Text>
          <Callout.Icon>
            <Icons.Info size={ICON_SIZE} />
          </Callout.Icon>
        </Callout.Root>
      )}
    </Box>
  );
}
