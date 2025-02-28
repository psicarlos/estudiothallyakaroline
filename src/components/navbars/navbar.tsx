'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import logo from '@/images/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { navigation } from '@/data/navigation';
import Link from 'next/link';

export default function Menu() {
  const [menuIcon, setMenuIcon] = useState(false);
  const handleSmallerScreensNavigation = () => {
    setMenuIcon(!menuIcon);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="text-mainColor w-full h-16 ease-in duration-300 fixed top-0 z-50 mb-10">
      <nav
        className={`${
          sticky
            ? 'bg-mainColor bg-opacity-90 py-1 px-4 text-white w-full flex items-center justify-between duration-500'
            : 'p-8 text-white w-full items-center justify-between hidden mdl:flex mx-auto bg-slate-800 bg-opacity-0 duration-500'
        }`}
      >
        <ScrollLink to="banner" smooth={true} duration={500}>
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo da empresa"
                width={80}
                height={35}
                className="mr-3 w-auto h-auto"
              />
            </Link>
          </div>
        </ScrollLink>

        {/* Menu desktop */}
        <ul className="hidden md:flex uppercase font-semibold text-xl lg:text-xl text-white">
          {navigation.main.map((item) => (
            <li
              key={item.name}
              className="mr-4 lg:mr-8 cursor-pointer hover:text-slate-200"
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-red-400"
                >
                  {item.name}
                </a>
              ) : (
                <ScrollLink
                  to={item.to ?? ''}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  className="text-sm font-semibold text-white hover:text-red-400"
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>

        {/* Botão de menu mobile */}
        <div
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden z-30"
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-mainColor text-white flex flex-col items-center justify-center transition-all duration-300 ${
            menuIcon ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="w-full flex flex-col items-center my-14">
            <Image
              src={logo}
              alt="Logotipo"
              width={80}
              height={35}
              className="h-auto w-auto ml-3"
            />
            <span className="font-extrabold text-xl uppercase">
              Estudio Thellya Karoline
            </span>
          </div>

          <ul className="uppercase font-bold text-2xl">
            {navigation.main.map((item) => (
              <li
                key={item.name}
                onClick={handleSmallerScreensNavigation}
                className="p-5 hover:text-red-400 cursor-pointer"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400"
                  >
                    {item.name}
                  </a>
                ) : (
                  <ScrollLink
                    to={item.to ?? ''}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    className="text-white hover:text-red-400"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
