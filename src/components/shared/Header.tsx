"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../images/logo.svg";

export default function Header({ dict, lang }: { dict: any; lang: string }) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO - Using your uploaded logo.png */}
        <Link href={`/${lang}`} className="relative w-32 h-10">
          <Image
            src={logo}
            alt="UCT Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* NAV MENU */}
        <nav className="hidden lg:flex gap-8 text-[11px] uppercase tracking-widest text-white/70 font-medium">
          <Link
            href={`/${lang}/portfolio`}
            className="hover:text-white transition-colors"
          >
            {dict.work}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="hover:text-white transition-colors"
          >
            {dict.company}
          </Link>
          <Link
            href={`/${lang}/deals`}
            className="hover:text-white transition-colors"
          >
            {dict.promo}
          </Link>
          <Link
            href={`/${lang}/contacts`}
            className="hover:text-white transition-colors"
          >
            {dict.contacts}
          </Link>
        </nav>

        {/* ACTION */}
        <div className="flex items-center gap-6">
          <Link href={`/${lang}/login`}>
            <button className="bg-[#FF0000] text-white px-5 py-2 rounded-md text-[11px] font-bold uppercase">
              {dict.login}
            </button>
          </Link>

          <div className="flex gap-2 text-[10px] font-bold text-white/50">
            {["uz", "ru", "en"].map((l) => {
              // 1. Split the path (e.g., "/ru/portfolio" becomes ["", "ru", "portfolio"])
              const segments = pathname.split("/");

              // 2. Replace the language segment (index 1)
              segments[1] = l;

              // 3. Join it back into a valid URL
              const newPath = segments.join("/");

              return (
                <Link
                  key={l}
                  href={newPath}
                  // Prevents the page from scrolling to top on every click
                  scroll={false}
                  className={
                    lang === l
                      ? "text-red-600"
                      : "hover:text-white transition-colors"
                  }
                >
                  {l.toUpperCase()}
                </Link>
              );
            })}
          </div>x
        </div>
      </div>
    </header>
  );
}
