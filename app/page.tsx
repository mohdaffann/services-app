import Image from "next/image";
import ServiceCard from '../components/ServiceCard.jsx'
import Link from "next/link.js";
export default function Home() {
  return (
    <div className="w-full px-6">
      <h1 className="text-center font-bold text-gray-800 text-2xl md:text-4xl mb-6">
        Tools to work around with for PDF and WORD files at one place.
      </h1>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
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
    </div>
  );
}
