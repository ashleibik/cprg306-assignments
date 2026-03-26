"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week10Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Week 10 - Firestore</h1>

      {!user ? (
        <div>
          <p className="mb-4">Please login with GitHub</p>
          <button
            onClick={handleLogin}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            Logout
          </button>

          <div>
            <Link
              href="/week-10/shopping-list"
              className="text-blue-600 underline"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}