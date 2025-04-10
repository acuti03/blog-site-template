"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";



type Routes = "premise" | "home" | "archive";

export default function Navbar() {
  const pathname = usePathname();

  const [active, setActive] = useState<Routes | null>(null);

  useEffect(() => {
    const route = pathname === "/" ? "home" : (pathname.slice(1, pathname.length) as Routes);

    setActive(route);

  }, [pathname])

  return (
    <nav className="inline-flex justify-center left-1/2 -translate-x-1/2 w-fit gap-3 fixed bottom-4 shadow-lg rounded-3xl border bg-white cursor-pointer py-2 px-3">
      <Link
        href="/premise"
        className={cn(
          "p-1 text-black transition-all duration-300 ease-in-out rounded-xl px-3",
          active === "premise" && "bg-black text-white scale-110 shadow-lg"
        )}
      >
        Premise
      </Link>
      <Link
        href="/"
        className={cn(
          "p-1 text-black transition-all duration-300 ease-in-out rounded-xl px-3",
          active === "home" && "bg-black text-white scale-110 shadow-lg"
        )}
      >
        Home
      </Link>
      <Link
        href="/archive"
        className={cn(
          "p-1 text-black transition-all duration-300 ease-in-out rounded-xl px-3",
          active === "archive" && "bg-black text-white scale-110 shadow-lg"
        )}
      >
        Archive
      </Link>
    </nav>
  );
}
