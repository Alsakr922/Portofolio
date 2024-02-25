"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { NAV_LINKS } from "../constants/index"
import Button from './Button'
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import MenuOverlay from './MenuOverlay'
import { FaXmark } from 'react-icons/fa6'
import { BiMenu } from 'react-icons/bi'
// import "../src/index"





const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value : string) => {
    setActiveLink(value);
  }

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-transparent bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-main-3 font-semibold"
        >
        <Image src="/logo.png" alt="logo" width={74} height={20} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-main-2 text-main-4 hover:text-main-4 hover:border-main-4"
            >
              <BiMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-main-2 text-main-4 hover:text-main-4 hover:border-main-4"
            >
              <FaXmark className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className={activeLink === `${link.key}` ? 'activelink' : 'link'} onClick={() => onUpdateActiveLink(`${link.key}`)}>
                {link.label}
              </Link>
            ))}
      <div className='flexCenter'>
        <Link href={"/facebook.com"} key={"facebook"} className="regular-16 ico_blue_outline text-main-4 flexCenter cursor-pointer transition-all hover:text-main-3 hover:scale-105">
        <Facebook />
        </Link>
        <Link href={"/twitter.com"} key={"twitter"} className="regular-16 ico_blue_outline text-main-4 flexCenter cursor-pointer transition-all hover:text-main-3 hover:scale-105">
        <Twitter />
        </Link>
        <Link href={"/twitter.com"} key={"twitter"} className="regular-16 ico_blue_outline text-main-4 flexCenter cursor-pointer transition-all hover:text-main-3 hover:scale-105">
        <LinkedIn />
        </Link>
      </div>
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Contact Me"
          icon="/user.svg"
          theme="btn_gray "
        />
      </div>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
}

export default Navbar