import toast, {
  Toaster,
  type ToasterProps,
  type ToastOptions,
} from "react-hot-toast";

export const notify = (text: string, options?: ToastOptions) =>
  toast(text, {
    duration: 3000,
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
    ...options,
  });
export const notifySuccess = (text: string, options?: ToastOptions) =>
  toast.success(text, {
    duration: 3000,
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
    ...options,
  });
export const notifyError = (text: string, options?: ToastOptions) =>
  toast.error(text, {
    duration: 3000,
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
    ...options,
  });

export function Toast(props: ToasterProps) {
  return <Toaster {...props} />;
}
