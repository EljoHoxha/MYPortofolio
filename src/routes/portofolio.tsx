import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portofolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/portofolio"!</div>
}
