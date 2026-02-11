import Header from "@/components/shared/Header";
import { getDictionary } from "@/lib/dictionaries";
interface PublicLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function PublicLayout({
  children,
  params,
}: PublicLayoutProps) {
  const { lang } = await params;

  const dict = await getDictionary(lang as "en" | "ru" | "uz");

  return (
    <>
      <Header dict={dict.header} lang={lang} />

      <main className="pt-20">{children}</main>
    </>
  );
}
