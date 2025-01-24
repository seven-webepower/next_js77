import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaTelegram,
  FaDesktop,
 
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" h-56 flex flex-col items-center justify-center gap-8">
      <div className="flex justify-between items-center gap-6 ">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/press">Press</Link>
        <Link href="/accessabillity">Accessabillity</Link>
        <Link href="/partners">Partners</Link>
      </div>
      <div className="flex  gap-5">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-700 w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaDesktop className="text-gray-700 w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-gray-700 w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-700 w-5 h-5" />
        </a>
      </div>
      <div>© 2024 Your Company inc . All Rights Reserved</div>
    </div>
  );
}
