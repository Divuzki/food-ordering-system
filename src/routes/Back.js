import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Back = () => {
    return (
        <div className="relative top-8 flex items-center justify-start">
            <Link to="/" className="px-5 py-2 bg-red-400 w-max rounded-2xl font-semibold hover:underline poppins text-gray-200 select-none flex items-center space-x-2"><MdOutlineKeyboardBackspace /> <span>Back</span></Link>
        </div>
    )
}

export default Back
