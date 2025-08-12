import { auth } from "auth";

const ServerPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return <p>Please log in to access this page. Server</p>;
  }
  return <div>Welcome to server page</div>;
};

export default ServerPage;
