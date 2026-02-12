import Header from "@/components/shared/Header";
import { getDictionary } from "@/lib/dictionaries";
import "@/app/globals.css";

export default async function PublicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className="bg-[#1E1E1E] text-white antialiased">
        {/* FIX: Use .header instead of .head */}
        <Header dict={dict.header} lang={lang} />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}