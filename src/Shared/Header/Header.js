import React from 'react';
import Logo from "../../assets/navLogo/Logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <div className=''>
            <nav className='flex items-center justify-between bg-white h-16 w-full px-4 lg:px-8'>
                <img className='lg:pl-12 w-26 h-16' src={Logo} alt="" />
                
                <div className='flex items-center'>
                    <AiOutlineShoppingCart className='hidden lg:block mr-6 text-xl text-gray-700 hover:text-black'></AiOutlineShoppingCart>
                    <button className='text-lg hover:text-gray-500'>Login</button>
                    <button className='ml-4 bg-red-600 hover:bg-rose-800 rounded-xl py-1 px-2 text-white'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;