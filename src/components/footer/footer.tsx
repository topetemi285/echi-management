import React from "react";
import Container from "../Container";
import FooterList from "../footer/footerList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="font-bold text-lg mb-3 ">Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Service</Link>
            <Link href="/">Contact Us</Link>
          </FooterList>

          <div className="w-full md: md: mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-4">
              ECHI in an effort to provoide affordable and accessible health
              care to the under priviledged communities in Nigeria and beyond,
              has collaborated with various agencies, NGOs and organizations in
              diverse ways to reach out to these communities.
            </p>
            <p className="py-5">
              &copy; {new Date().getFullYear()} ECHI. All rights reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="">
                <MdFacebook size={24} />
              </Link>
              <Link href="">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
