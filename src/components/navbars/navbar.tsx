'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import logo from '@/images/moldeRusso.png';
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
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
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
        <ScrollLink to="banner" onClick={handleSmallerScreensNavigation}>
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

        <ul className=" hidden md:flex uppercase font-semibold text-xl lg:text-xl text-white">
          {navigation.main.map((item) => (
            <li
              key={item.name}
              className="mr-4 lg:mr-8 cursor-pointer hover:text-slate-200"
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="text-sm font-semibold text-white hover:text-red-400"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

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

        <div
          className={
            menuIcon
              ? 'md:hidden absolute top-0 bottom-0 left-0  items-center w-full h-screen bg-mainColor text-white ease-in duration-300 text-center flex flex-col justify-between'
              : 'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-mainColor text-white ease-in duration-300'
          }
        >
          <div className="w-full">
            <div className="flex flex-col items-center justify-center my-14">
              <Image
                src={logo}
                alt="Logotipo"
                width={80}
                height={35}
                className="h-auto w-auto ml-3"
              />
              <span className="font-extrabold text-xl uppercase ">
                Estudio Thellya Karoline
              </span>
            </div>

            <ul className=" uppercase font-bold text-2xl">
              {navigation.main.map((item) => (
                <li
                  key={item.name}
                  onClick={handleSmallerScreensNavigation}
                  className="p-5 hover:text-mainColor cursor-pointer"
                >
                  <Link href={`#${item.to}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
