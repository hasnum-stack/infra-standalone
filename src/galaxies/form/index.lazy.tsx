import { Outlet, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/form/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/form/"!
      <Outlet />
    </div>
  );
}
