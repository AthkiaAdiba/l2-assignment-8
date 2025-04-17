export const mapStatus = (status: string) => {
  const statusMap: Record<string, "pending" | "in_progress" | "done"> = {
    pending: "pending",
    "in-progress": "in_progress",
    done: "done",
  };

  return statusMap[status];
};
