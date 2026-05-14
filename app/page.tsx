import Image from "next/image";
import ServiceCard from './components/ServiceCard.jsx'
import Link from "next/link.js";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 leading-tight tracking-tight max-w-3xl">
          Every PDF & Word tool
          <br />
          <span className="text-red-500">you actually need.</span>
        </h1>
        <p className="mt-6 text-stone-500 text-base sm:text-lg max-w-xl leading-relaxed">
          Convert, split, and transform your documents — fast and private .
        </p>

      </section>
      <div className="w-full max-w-5xl mx-auto px-6 mb-2">
        <div className="h-px bg-stone-200" />
      </div>
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
          All Tools
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href={'/services/pdf_to_docx'}>
            <ServiceCard feature={'PDF to Word'} />
          </Link>
          <Link href={'/services/docx_to_pdf'}>
            <ServiceCard feature={'Word to PDF'} />
          </Link>
          <Link href={'/services/split_pdf'}>
            <ServiceCard feature={'Split PDF'} />
          </Link>
        </div>
      </section>

    </div>
  );
}
