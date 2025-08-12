import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const NavBar = async () => {
  const session = await auth();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link className="text-white text-lg font-bold" href="/">
        Home
      </Link>
      <div>
        {session && session.user ? (
          //logged in
          <div className="flex gap-4 items-center">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Sign-Out
              </button>
            </form>
          </div>
        ) : (
          //logged out
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Sign-In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NavBar;
