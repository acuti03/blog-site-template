"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Routes = "about" | "home" | "archivio";

export default function Navbar() {

  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [active, setActive] = useState<Routes | null>(null);

  useEffect(() => {
    const route =
      pathname === "/"
        ? "home"
        : (pathname.slice(1, pathname.length) as Routes);

    setActive(route);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "inline-flex justify-center left-1/2 -translate-x-1/2 w-fit gap-3 fixed bottom-4 shadow-lg rounded-3xl border bg-white cursor-pointer py-2 px-3",
        showNavbar ? "animate-fade-in" : "animate-fade-out",
        !showNavbar && "pointer-events-none",
        pathname.includes("/posts/") && "hidden",
      )}
    >
      <Link
        href="/about"
        className={cn(
          "p-1 text-black transition-all duration-300 ease-in-out rounded-xl px-3",
          active === "about" && "bg-sky-100 text-sky-500 scale-110"
        )}
      >
        About
      </Link>
      <Link
        href="/"
        className={cn(
          "p-1 text-black transition-all duration-300 ease-in-out rounded-xl px-3",
          active === "home" && "bg-sky-100 text-sky-500 scale-110"
        )}
      >
        Home
      </Link>
      <Link
        href="/archivio"
        className={cn(
          "p-1 text-black transition-all duration-300 ease-in-out rounded-xl px-3",
          active === "archivio" && "bg-sky-100 text-sky-500 scale-110"
        )}
      >
        Archivio
      </Link>
    </nav>
  );
}
