"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Nasext.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {/* {status === "loading" && <div>LoaDinG...</div>} */}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      <Link href="/api/products" className="mr-5">
        Products
      </Link>
      <Link href="/upload" className="mr-5">
        Upload
      </Link>
      <Link href="/admin">Admin </Link>
      <Link href="/api/auth/token" className="mr-5">
        Session Token
      </Link>
    </div>
  );
};

export default NavBar;
