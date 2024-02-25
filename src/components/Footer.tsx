import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants/index"
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer flexCenter lg:p-10 pt-[200px]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.png" alt="logo" width={74} height={29}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              // eslint-disable-next-line react/jsx-key
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-main-2 ">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.title} className='hover:text-main-3'>
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-main-3">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-main-2 hover:text-main-3">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
                <ul className="regular-14 flex gap-4 text-main-4">
        <div className='flexCenter'>
        <Link href={"/facebook.com"} key={"facebook"} className="regular-16 ico_blue_outline text-main-4 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        <Facebook />
        </Link>
        <Link href={"/twitter.com"} key={"twitter"} className="regular-16 ico_blue_outline text-main-4 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        <Twitter />
        </Link>
        <Link href={"/twitter.com"} key={"twitter"} className="regular-16 ico_blue_outline text-main-4 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        <LinkedIn />
        </Link>
        </div>
                </ul>
            </div>
          </div>
        </div>

        <div className="border bg-main-4" />
        <p className="regular-14 w-full text-center py-[20px] text-main-4">2024 Alsakr | All rights reserved by Mohamed Khaled </p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer