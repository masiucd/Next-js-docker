import {Box, type BoxProps, TextField} from "@radix-ui/themes";
import type {RootProps} from "@radix-ui/themes/src/components/text-field.jsx";

import {Label, type LabelProps} from "./typography";

export function Input(props: RootProps) {
  return <TextField.Root type="text" size="3" {...props} />;
}

export function InputGroup(props: BoxProps) {
  return <Box py="1" px="1" {...props} />;
}

export function InputLabel(props: LabelProps) {
  return <Label weight="medium" {...props} />;
}
