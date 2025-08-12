import { auth, signIn, signOut } from "auth";
import Link from "next/link";

const NavBar = async () => {
  const session = await auth();

  return (
    <div>
      <Link href="/">Home</Link>
      <div>
        {session && session.user ? (
          //logged in
          <div>
            <p>{session.user.name}</p>
          </div>
        ) : (
          //logged out
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit">Sign-In</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NavBar;
