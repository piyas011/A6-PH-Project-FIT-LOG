"use client";
import { context } from "@/context/contextProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const HeaderSection = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { planCount, saveCount } = useContext(context);

  const handelToggleMenu = (menuClicked: boolean) => {
    setMenuOpen(menuClicked);
  };

  const navLinkClass =
    "rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200";
  const badgeClass =
    "ml-2 inline-flex min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-2 py-0.5 text-xs font-extrabold text-black";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl ">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN NAVBAR ================= */}{" "}
        <div className="flex h-18 items-center justify-between">
          {/* ================= LOGO ================= */}{" "}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#C2F800] ">
              <Image
                src="/favicon.ico"
                alt="FitLog Logo"
                width={25}
                height={25}
                className="rounded-md"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-white sm:text-2xl">
              FIT<span className="text-[#C2F800]">LOG</span>{" "}
            </span>
          </Link>
          {/* ================= DESKTOP NAVIGATION ================= */}{" "}
          <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/3 p-1 sm:flex">
            <Link
              href="/"
              className={`${navLinkClass} ${pathName === "/" ? "bg-[#C2F800] font-bold text-black" : "text-gray-400 hover:bg-white/10 hover:text-white"}`}
            >
              Workouts
            </Link>
            <Link
              href="/myPlan"
              className={`${navLinkClass} ${pathName === "/myPlan" ? "bg-[#C2F800] font-bold text-black" : "text-gray-400 hover:bg-white/10 hover:text-white"}`}
            >
              My Plan
            </Link>
          </nav>
          {/* ================= DESKTOP COUNTERS ================= */}{" "}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/myPlan"
              className="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm font-medium text-gray-300 transition hover:border-[#C2F800]/50 hover:bg-[#C2F800]/10 hover:text-white"
            >
              Plan <span className={badgeClass}>{planCount}</span>{" "}
            </Link>
            <Link
              href="/myPlan"
              className="rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm font-medium text-gray-300 transition hover:border-[#C2F800]/50 hover:bg-[#C2F800]/10 hover:text-white"
            >
              Saved <span className={badgeClass}>{saveCount}</span>{" "}
            </Link>
          </div>
          {/* ================= MOBILE MENU BUTTON ================= */}{" "}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            type="button"
            onClick={() => handelToggleMenu(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-xl text-white transition hover:border-[#C2F800]/50 hover:text-[#C2F800] sm:hidden"
          >
            {menuOpen ? <MdClose /> : <FaBarsStaggered />}{" "}
          </button>
        </div>
        {/* ================= MOBILE MENU ================= */}{" "}
        {menuOpen && (
          <div className="border-t border-white/10 py-5 sm:hidden">
            {/* Mobile Navigation */}{" "}
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => handelToggleMenu(false)}
                className={`rounded-xl px-4 py-3.5 text-center text-sm font-semibold transition ${pathName === "/" ? "bg-[#C2F800] text-black" : "border border-white/10 bg-white/3 text-gray-300 hover:bg-white/10 hover:text-white"}`}
              >
                Workouts
              </Link>
              <Link
                href="/myPlan"
                onClick={() => handelToggleMenu(false)}
                className={`rounded-xl px-4 py-3.5 text-center text-sm font-semibold transition ${pathName === "/myPlan" ? "bg-[#C2F800] text-black" : "border border-white/10 bg-white/3 text-gray-300 hover:bg-white/10 hover:text-white"}`}
              >
                My Plan
              </Link>
            </nav>
            {/* Mobile Counters */}
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-5">
              {" "}
              <Link
                href="/myPlan"
                onClick={() => handelToggleMenu(false)}
                className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-center text-sm font-semibold text-gray-300 transition hover:border-[#C2F800]/50 hover:bg-[#C2F800]/10 hover:text-white"
              >
                Plan <span className={badgeClass}>{planCount}</span>{" "}
              </Link>
              <Link
                href="/myPlan"
                onClick={() => handelToggleMenu(false)}
                className="rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-center text-sm font-semibold text-gray-300 transition hover:border-[#C2F800]/50 hover:bg-[#C2F800]/10 hover:text-white"
              >
                Saved <span className={badgeClass}>{saveCount}</span>{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default HeaderSection;
