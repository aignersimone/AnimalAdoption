import { Navigate } from '@remix-run/react';

//Indexpage festlegen (von der man weiternavigiert)
export default function Page() {
  return <Navigate to="/app"></Navigate>;
}
