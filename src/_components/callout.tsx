import {Callout as RadixCallout} from "@radix-ui/themes";
import type {RootProps} from "@radix-ui/themes/src/components/callout.jsx";
import {type PropsWithChildren, type ReactNode} from "react";

import {Icons, type IconsProps} from "./icons";

type Props = {
  options?: RootProps;
  type?: "info" | "warning" | "error";
};

export function Callout({
  children,
  options,
  type = "info",
}: PropsWithChildren<Props>) {
  let {color, IconComponent} = getCalloutStyle(type);
  return (
    <RadixCallout.Root {...options} color={color}>
      <RadixCallout.Icon>
        <IconComponent size={16} />
      </RadixCallout.Icon>
      <RadixCallout.Text>{children}</RadixCallout.Text>
    </RadixCallout.Root>
  );
}

type Color =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";

function getCalloutStyle(type: "info" | "warning" | "error"): {
  color: Color;
  // eslint-disable-next-line no-unused-vars
  IconComponent: (props: IconsProps) => ReactNode;
} {
  switch (type) {
    case "warning":
      return {
        color: "yellow",
        IconComponent: Icons.Warning,
      };

    case "error":
      return {
        color: "red",
        IconComponent: Icons.Error,
      };
    case "info":
    default:
      return {
        color: "iris",
        IconComponent: Icons.Info,
      };
  }
}
