'use client'
import React, { useState } from "react";
import { Menu, X } from 'lucide-react'
import Link from "next/link";
function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 border-b bg-white">
            <div className="w-full flex items-center   h-16 px-6">
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
                </div>
            )}

        </header>
    )
}

export default Header;
