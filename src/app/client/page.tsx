"use client";

import { useSession } from "next-auth/react";

const ClientPage = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <p>Please log in to access this page.</p>;
  }

  return (
    <div>
      <h1>You are athenticated</h1>
    </div>
  );
};

export default ClientPage;
