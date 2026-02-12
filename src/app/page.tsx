import { getDictionary } from "@/lib/dictionaries";
import Image from "next/image";
import bgImage from "@/images/bgimage.png";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="relative w-full h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt="Background" fill className="object-cover opacity-50" priority />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Using dictionary keys so text changes on click */}
        <h1 className="text-7xl md:text-9xl font-black italic uppercase text-white">
          {dict.hero.title_top}
          <br />
          <span className="text-[#FF0000]">{dict.hero.title_bottom}</span>
        </h1>
        
        <p className="text-gray-400 mt-6 max-w-md uppercase tracking-widest text-sm">
          {dict.hero.description}
        </p>

        <button className="mt-10 bg-[#FF0000] text-white px-8 py-4 font-bold uppercase text-xs tracking-widest w-fit">
          {dict.hero.btn_book}
        </button>
      </div>
    </section>
  );
}