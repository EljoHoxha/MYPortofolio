import About from "@/components/pages/About/About";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: About,
});
