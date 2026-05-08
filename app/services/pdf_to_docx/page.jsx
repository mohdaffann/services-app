import React from "react";
import FileUploader from '../../../components/FileUploader.jsx'
function page() {
    return (
        <div className="w-full flex items-center justify-center">
            <FileUploader fileType={'.pdf'} />
        </div>
    )
}

export default page;
