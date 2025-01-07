// "use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className= "fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur flex items-center justify-between px-4 h-14"
    >
      <div className="py-2 text-center text-sm font-bold">
        BLOGSITE
      </div>

      <nav className="flex space-x-4 font-bold">
        <Link className = "hover:text-blue-600" href="/">Home</Link>
        <Link className = "hover:text-blue-600" href="/about">About</Link>
        <Link className = "hover:text-blue-600" href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
