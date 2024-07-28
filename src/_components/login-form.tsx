"use client";
import {Box, Button, Callout, Flex} from "@radix-ui/themes";
import {redirect} from "next/navigation";
import {useFormState} from "react-dom";

import {cn} from "@/lib/cn";

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
        <Flex asChild direction="column" gap="2">
          <fieldset>
            <InputGroup>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                type="email"
                name="email"
                required
                placeholder="name@ex.com"
                size="3"
                className={cn(state && !state.ok && "border border-red-500")}
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
                className={cn(state && !state.ok && "border border-red-500")}
              />
            </InputGroup>
            <Button type="submit" size="3">
              <Span weight="bold">Sign in</Span>
            </Button>
          </fieldset>
        </Flex>
      </form>
      {state !== null && !state.ok && <Message message={state.message} />}
    </Box>
  );
}

function Message({message}: {message: string}) {
  return (
    <Callout.Root color="red" mt="3" className="animate-bounce">
      <Callout.Icon>
        <Icons.Info size={ICON_SIZE} />
      </Callout.Icon>
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
}
