import React from "react";
function ServiceCard({ feature }) {
    const content = [
        {
            title: 'PDF to Word',
            icon: '/assets/pdf-to-doc.svg',
            desc: 'Convert your PDF files into DOC or DOCX files. The converted word is almost accurate.'
        },
        {
            title: 'Word to PDF',
            icon: '/assets/doc-to-pdf.svg',
            desc: 'Make DOC and DOCX files easy to read by converting them to PDF.'
        },
        {
            title: 'Split PDF',
            icon: '/assets/split-pdf.svg',
            desc: 'Split the pages of a PDF into different seperated PDF files.'
        }
    ]
    const values = content.find((c) => c.title === feature);
    return (
        <div className="flex w-full  md:w-72 min-h-36  flex-col gap-4 border-gray-400 px-6 py-4 border hover:border-gray-800 cursor-pointer  rounded-md
        transition duration-200 ease-in-out bg-white
        ">
            <div className="flex items-center gap-3">
                <img src={values.icon} alt={values.title} className="w-8 h-8" />
                <h1 className="text-lg font-semibold text-gray-700">
                    {values.title}
                </h1>
            </div>

            <p className="text-sm text-gray-600">
                {values.desc}
            </p>
        </div>
    )
}

export default ServiceCard;
