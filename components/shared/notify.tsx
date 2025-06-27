// lib/notifications.ts أو components/ui/notifications.ts
import { toast } from "sonner";

export const notifySuccess = (message: string) => {
  toast.success(message, {
    description: "Everything went as expected!",
    duration: 3000,
  });
};

export const notifyError = (message: string) => {
  toast.error(message, {
    description: "Something went wrong.",
    duration: 3000,
  });
};
