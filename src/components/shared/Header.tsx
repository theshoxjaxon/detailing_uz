"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/buttons";

export default function Header({ dict, lang }: { dict: any; lang: string }) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <Link href={`/${lang}`} className="font-black text-xl">
          UCT<span className="text-blue-600">DETAILING</span>
        </Link>

        {/* FULL NAV MENU */}
        <nav className="hidden md:flex gap-8 font-semibold text-sm text-slate-600">
          <Link href={`/${lang}/services`} className="hover:text-blue-600">
            {dict.services} {/* Translatable text */}
          </Link>
          <Link href={`/${lang}/portfolio`} className="hover:text-blue-600">
            {dict.portfolio}
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-blue-600">
            {dict.about}
          </Link>
        </nav>

        {/* LANGUAGE SWITCHER + ACTION */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-xs font-bold uppercase">
            {["uz", "ru", "en"].map((l) => (
              <Link
                key={l}
                href={pathname.replace(`/${lang}`, `/${l}`)}
                className={lang === l ? "text-blue-600" : "text-slate-400"}
              >
                {l}
              </Link>
            ))}
          </div>

          <Link href={`/${lang}/services`}>
            <Button variant="primary" size="sm">
              {dict.book}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
