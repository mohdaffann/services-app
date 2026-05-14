import React from "react";
import FileUploader from "../../components/FileUploader.jsx";
function page() {
    return (
        <div className="w-full flex py-3  items-center justify-center">
            <div className="flex flex-col gap-5">
                <p className="text-3xl text-center md:text-3xl text-gray-700 font-semibold">Split PDF file.</p>
                <p className="text-gray-600 text-xl md:text-2xl text-center">Separate one page or a whole set for easy conversion into independent PDF files.</p>
                <FileUploader fileType={'.pdf'} />
            </div>

        </div>
    )
}

export default page;
