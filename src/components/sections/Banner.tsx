'use client'; // Necessário para usar Framer Motion no Next.js App Router

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import thallya from '@/images/thallya.png';
import Link from 'next/link';

export default function Banner() {
  return (
    <motion.div
      id="banner"
      className="banner pb-8 pt-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col mx-auto h-screen justify-center items-center p-5">
        {/* Ícone Instagram */}
        <div className="hidden fixed right-4 top-1/2 -translate-y-1/2 md:flex flex-col items-center gap-2">
          <a
            href="https://www.instagram.com/thallyakaroliineunhas"
            target="_blank"
            rel="noopener noreferrer"
            className="paragraphy flex flex-row items-center text-mainColor text-sm font-semibold rotate-90"
          >
            <FaInstagram className="text-mainColor" size={25} />
            <p className="px-2">@thallyakaroliineunhas</p>
          </a>
        </div>

        <div className="flex flex-col mdl:flex-row justify-center items-center gap-2">
          <motion.div
            className="order-1 mdl:order-2 pt-10 mdl:pt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image src={thallya} alt="Thallya" width={250} />
            <div className="hidden mdl:block h-1 bg-zinc-400 opacity-40 shadow-xl"></div>
          </motion.div>

          <motion.div
            className="order-2 mdl:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="text-5xl md:text-9xl text-zinc-600 font-lovelace">
              Molde Russo
            </h1>
            <p className="text-xl md:text-3xl mdl:pl-8 text-mainColor font-lovelace">
              By: Thallya Karoline
            </p>

            <motion.div
              className="btn-main"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                className="text-md font-bold px-6 py-4 cursor-pointer uppercase bg-mainColor hover:bg-[#f2b5b5] rounded-xl inline-block border-2 border-zinc-600"
                href="#"
              >
                Quero começar
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
