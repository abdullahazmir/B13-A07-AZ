import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto shadow-sm">
            <div className="navbar-start">
               
               <Image src='/assets/logo.png'
                  width={150}
                  height={60}
                  
                  alt=""/>
            </div>
           
            <div className="navbar-end gap-4">
                <Link href="/" className="btn"> <IoIosHome />Home</Link>
                <Link href="/timeline" className="btn"> <RiTimeLine />Timeline</Link>
                <Link href={'/stats'} className="btn"> <TfiStatsUp/>Stats</Link>
            </div>
        </div>
    );
};

export default Navbar;