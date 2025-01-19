import Contact from "@/components/pages/Contact/Contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});
