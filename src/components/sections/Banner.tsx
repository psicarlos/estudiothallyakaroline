import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import thallya from '@/images/thallya.png';
import Button from '@/shared/Button';

export default async function Banner() {
  return (
    <>
      <div id="banner" className="banner">
        <div className="flex flex-col mx-auto h-screen justify-center items-center p-5">
          <div className=" hidden fixed right-4 top-1/2 -translate-y-1/2 md:flex flex-col items-center gap-2">
            <a
              href="https://www.instagram.com/thallyakaroliineunhas"
              target="_blank"
              rel="noopener noreferrer"
              className="paragraphy flex flex-row  items-center text-mainColor text-sm font-semibold rotate-90 "
            >
              <FaInstagram className="text-mainColor" size={25} />
              <p className=" px-2">@thallyakaroliineunhas</p>
            </a>
          </div>

          <div className="flex flex-col mdl:flex-row justify-center items-center">
            <div className=" order-1 mdl:order-2">
              <Image src={thallya} alt="Thallya" width={250} />
            </div>
            <div className=" order-2 mdl:order-1">
              <h1 className="text-2xl md:text-9xl text-zinc-700">
                Molde Russo
              </h1>

              <p className="text-lg md:text-4xl pl-8 text-[#FFCCC5]">
                By: Thallya Karoline
              </p>

              <div>
                <Button url="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
