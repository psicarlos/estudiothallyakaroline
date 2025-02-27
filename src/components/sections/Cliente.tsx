import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';

export default async function Cliente() {
  return (
    <Container id="cliente">
      <div className="flex flex-col">
        <div className=" text-center ">
          <h2 className="text-4xl">E PARA VOCÊ QUE DESEJA</h2>
          <p className="text-2xl">
            SE <span>DESTACAR</span> NO MERCADO DAS UNHAS E ALCANÇAR SUA{' '}
            <span>LIBERDADE FINANCEIRA</span>
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
            <p className=" bg-pink-400 py-4 px-8 text-center">
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
            <p className=" bg-pink-400 py-4 px-8 text-center">
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
            <p className=" bg-pink-400 py-4 px-8 text-center">
              Manutenção com pó cromo
            </p>
          </div>
        </div>
        <p>
          E muito mais para que você fique apta em pouco tempo não somente em
          alongamento de unhas mas também em decorações que vão te fazer faturar
          muito ao final do mês
        </p>
      </div>
    </Container>
  );
}
