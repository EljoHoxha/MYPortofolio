import Portfolio from "@/components/pages/Portfolio/Portfolio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});
