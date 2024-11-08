"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Apple,
  Facebook,
  Instagram,
  Linkedin,
  Smartphone,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="bg-gray-100 py-8"
    >
      <div className="container mx-auto px-4">
        {/* Top Footer Row for Logo and Dropdowns */}
        <div className="flex items-center justify-between mb-8">
          {/* Zomato Logo */}
          <Link href="/" className="text-2xl font-black text-black">
            ZOMATO
          </Link>

          {/* Country and Language Dropdowns */}
          <div className="flex space-x-4">
            {/* Country Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-200">
                <span role="img" aria-label="India Flag">
                  🇮🇳
                </span>
                <span>India</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md">
                <DropdownMenuItem>🇺🇸 United States</DropdownMenuItem>
                <DropdownMenuItem>🇬🇧 United Kingdom</DropdownMenuItem>
                <DropdownMenuItem>🇨🇦 Canada</DropdownMenuItem>
                <DropdownMenuItem>🇦🇺 Australia</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-200">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिन्दी</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-8 md:grid-cols-4 text-center md:text-left">
          {/* About Zomato Column */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-4">
              About Zomato
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Work With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Zomaverse Column */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-4">
              Zomaverse
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Zomato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Blinkit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Feeding India
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Hyperpure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Zomaland
                </a>
              </li>
            </ul>
          </div>

          {/* For Restaurants Column */}
          <div>
            <h5 className="text-lg font-semibold text-gray-900 mb-4">
              For Restaurants
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-500">
                  Apps For You
                </a>
              </li>
            </ul>
          </div>

          {/* Social and Download Links Column */}
          <div>
            <h5 className="text-lg font-semibold  text-gray-900 mb-4">
              Social Links
            </h5>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="#"
                className="text-white bg-slate-900 p-1 rounded-full hover:text-red-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white bg-slate-900 p-1 rounded-full hover:text-red-500"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white bg-slate-900 p-1 rounded-full hover:text-red-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white bg-slate-900 p-1 rounded-full hover:text-red-500"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white bg-slate-900 p-1 rounded-full hover:text-red-500"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Download App Links */}
            <div className="flex flex-col space-y-4 mt-4">
              <Badge
                variant="outline"
                className="bg-slate-900 text-white flex items-center p-2 rounded-lg space-x-2 hover:bg-slate-700"
              >
                <Apple className="w-6 h-6 mr-2" />
                <div className="flex flex-col text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold text-sm">App Store</span>
                </div>
              </Badge>

              <Badge
                variant="outline"
                className="bg-slate-900 text-white flex items-center p-2 rounded-lg space-x-2 hover:bg-slate-700"
              >
                <Smartphone className="w-6 h-6 mr-2" />
                <div className="flex flex-col text-left">
                  <span className="text-xs">Get it on</span>
                  <span className="font-semibold text-sm">Google Play</span>
                </div>
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4">
          <p className="text-xs text-gray-600 text-center">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Policies. &copy;{" "}
            {new Date().getFullYear()} Zomato™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
