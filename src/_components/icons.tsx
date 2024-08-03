import {
  Bomb,
  Check,
  Clock,
  Copy,
  Delete,
  Edit,
  Info,
  type LucideProps,
  Plus,
  TriangleAlert,
} from "lucide-react";

export let Icons = Object.freeze({
  Add: (props: LucideProps) => <Plus size={ICON_SIZE} {...props} />,
  Complete: (props: LucideProps) => <Check size={ICON_SIZE} {...props} />,
  Copy: (props: LucideProps) => <Copy size={ICON_SIZE} {...props} />,
  Delete: (props: LucideProps) => <Delete size={ICON_SIZE} {...props} />,
  Edit: (props: LucideProps) => <Edit size={ICON_SIZE} {...props} />,
  Info: (props: LucideProps) => <Info size={ICON_SIZE} {...props} />,
  Snooze: (props: LucideProps) => <Clock size={ICON_SIZE} {...props} />,
  Warning: (props: LucideProps) => (
    <TriangleAlert size={ICON_SIZE} {...props} />
  ),
  Error: (props: LucideProps) => <Bomb size={ICON_SIZE} {...props} />,
});

export type {LucideProps as IconsProps};

export const ICON_SIZE = 16;
