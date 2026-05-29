'use client'
import React, { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react'
import Link from "next/link";
function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-transparent w-full flex  justify-center sticky top-0 z-50  pt-3 ">
            <div className='w-full sm:max-w-4xl  rounded-2xl border transition-all duration-300 bg-white/40 backdrop-blur-lg border-white/30 shadow-md shadow-black/10'>
                <div className=" flex items-center   h-16 px-6">
                    <Link href={'/'} className="font-bold text-xl text-gray-800">
                        <span className="text-red-600">Doc<span className="text-gray-800">Convert</span></span>
                    </Link>
                    <nav className="hidden md:flex items-center  gap-6 text-sm text-gray-600 ml-30 mr-auto">
                        <Link href="/services/pdf_to_docx" className="hover:text-gray-800">
                            PDF to DOCX
                        </Link>
                        <Link href="/services/docx_to_pdf" className="hover:text-gray-800">
                            DOCX to PDF
                        </Link>
                        <Link href="/services/split_pdf" onClick={() => setOpen(false)}>
                            Split PDF
                        </Link>
                    </nav>
                    <button className="md:hidden ml-auto" onClick={() => setOpen(!open)}>
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
                {open && (
                    <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-700">
                        <Link href="/services/pdf_to_docx" onClick={() => setOpen(false)}>
                            PDF to DOCX
                        </Link>

                        <Link href="/services/docx_to_pdf" onClick={() => setOpen(false)}>
                            DOCX to PDF
                        </Link>
                        <Link href="/services/split_pdf" onClick={() => setOpen(false)}>
                            Split PDF
                        </Link>
                    </div>
                )}
            </div>




        </header>
    )
}

export default Header;
