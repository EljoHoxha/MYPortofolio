import Resume from "@/components/pages/Resume/Resume";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  component: Resume,
});
