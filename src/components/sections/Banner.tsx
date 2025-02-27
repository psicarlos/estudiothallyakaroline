import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import thallya from '@/images/thallya.png';

export default async function Banner() {
  return (
    <>
      <div id="banner" className="banner">
        <div className="flex flex-col mx-auto h-screen justify-center items-center p-5">
          <div className=" hidden fixed left-4 top-1/2 -translate-y-1/2 md:flex flex-col items-center gap-2">
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

          <div className="flex flex-row justify-center items-center">
            <div>
              <p className="text-[1.2em] md:text-3xl mb-10">Thallya</p>
            </div>
            <div>
              <Image src={thallya} alt="Thallya" width={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
