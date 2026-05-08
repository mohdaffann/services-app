'use client';

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { X, Paperclip } from 'lucide-react'

function FileUploader({ fileType }) {
    const fileRef = useRef(null);
    const { register, setValue, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
    const [fileName, setFileName] = useState('');
    const [serverError, setServerError] = useState('');
    const fileWatch = watch('document');
    const onSubmit = async (data) => {
        const form = new FormData();
        try {
            if (data.document) {
                form.append('document', data.document[0]);
            }

        } catch (error) {
            setServerError('File upload failed!')
        }
    }
    const fileTrigger = (e) => {
        console.log('filetrigger clicked')
        e.stopPropagation();
        e.preventDefault();
        console.log(fileRef)
        fileRef.current?.click();

    }
    const fileHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(e.target.files);
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setValue('document', e.target.files);
        } else {
            setFileName('');
        }
    }
    const clearFile = (e) => {
        e.preventDefault();
        setFileName('');
        setValue('document', null);
        if (fileRef.current) {
            fileRef.current.value = null;
        }
    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="items-center gap-4 flex flex-col">
                <input type="file"
                    accept={fileType}
                    hidden
                    ref={fileRef}
                    onChange={fileHandler}
                />
                <button type="button" className="flex items-center gap-1 px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-lg
                transition duration-200 ease-in-out cursor-pointer
                "
                    onClick={fileTrigger}
                >
                    <Paperclip />
                    Select File
                </button>
                {fileName && (
                    <div className="flex items-center gap-3 ">
                        <span className="trext-sm text-gray-600">
                            {fileName}
                        </span>
                        <button onClick={clearFile}>
                            <X />
                        </button>
                    </div>
                )}
                <button className="bg-blue-300 hover:bg-blue-400 text-white px-4 py-2 rounded cursor-pointer"
                    disabled={!fileWatch || isSubmitting}
                >
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
                {serverError && (
                    <p className="text-red-400 text-sm">{serverError}</p>
                )}
            </form>
        </div>
    )

}

export default FileUploader;
