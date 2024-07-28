import {
  Clock,
  Copy,
  Delete,
  Edit,
  Info,
  type LucideProps,
  Plus,
} from "lucide-react";

export let Icons = Object.freeze({
  Copy: (props: LucideProps) => <Copy size={ICON_SIZE} {...props} />,
  Delete: (props: LucideProps) => <Delete size={ICON_SIZE} {...props} />,
  Edit: (props: LucideProps) => <Edit size={ICON_SIZE} {...props} />,
  Info: (props: LucideProps) => <Info size={ICON_SIZE} {...props} />,
  Snooze: (props: LucideProps) => <Clock size={ICON_SIZE} {...props} />,
  Add: (props: LucideProps) => <Plus size={ICON_SIZE} {...props} />,
});

export const ICON_SIZE = 16;
