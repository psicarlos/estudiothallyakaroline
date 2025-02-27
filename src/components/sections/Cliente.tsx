import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';

export default async function Cliente() {
  return (
    <Container id="cliente">
      <div className="flex flex-col gap-8">
        <div className=" text-center ">
          <h2 className="text-7xl text-mainColor font-bold">
            E PARA VOCÊ QUE DESEJA
          </h2>
          <p className="text-xl">
            SE <span className=" font-bold">DESTACAR</span> NO MERCADO DAS UNHAS
            E ALCANÇAR SUA{' '}
            <span className=" font-bold">LIBERDADE FINANCEIRA</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div>
            <Image
              src={thallya}
              alt="Thallya"
              width={300}
              className=" rounded-t-full m-auto"
            />
            <p className=" bg-mainColor text-zinc-50 py-4 px-6 text-center font-bold">
              Baby boomer com Glitter
            </p>
          </div>
          <div>
            <Image
              src={thallya}
              alt="Thallya"
              width={300}
              className=" rounded-t-full m-auto"
            />
            <p className=" bg-mainColor text-zinc-50 py-4 px-6 text-center font-bold">
              Marmorizado com Folha de Ouro
            </p>
          </div>
          <div>
            <Image
              src={thallya}
              alt="Thallya"
              width={300}
              className=" rounded-t-full m-auto"
            />
            <p className=" bg-mainColor text-zinc-50 py-4 px-6 text-center font-bold">
              Manutenção com pó cromo
            </p>
          </div>
        </div>

        <div className="w-full mdl:w-[80%] m-auto">
          <p className=" text-xl">
            E muito mais para que você fique <b>apta</b> em pouco <b>tempo</b>{' '}
            não somente em alongamento de unhas mas também em <b>decorações</b>{' '}
            que vão te fazer <b>faturar</b>
            muito ao final do <b>mês</b>
          </p>
        </div>
      </div>
    </Container>
  );
}
