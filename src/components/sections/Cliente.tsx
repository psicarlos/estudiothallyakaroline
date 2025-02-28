'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import cliente1 from '@/images/servico-1.jpg';
import cliente2 from '@/images/servico-2.jpg';
import cliente3 from '@/images/servico-3.jpg';

export default function Cliente() {
  return (
    <Container id="cliente">
      <motion.div
        className="flex flex-col md:flex-row gap-4 m-auto md:m-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col gap-8">
          <div className=" text-center flex flex-col gap-4">
            <h2 className="text-4xl mdl:text-7xl text-mainColor font-bold font-lovelace">
              E PARA VOCÊ QUE DESEJA
            </h2>
            <p className="text-xl">
              SE <span className=" font-bold">DESTACAR</span> NO MERCADO DAS
              UNHAS E ALCANÇAR SUA{' '}
              <span className=" font-bold">LIBERDADE FINANCEIRA</span>
            </p>
          </div>

          <motion.div
            className="flex flex-col lg:flex-row justify-between gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div>
              <Image
                src={cliente1}
                alt="Unha feita"
                className=" rounded-t-full m-auto  mdl:w-[200px] w-[300px]"
              />
              <p className=" title-service">Marmorizado com Folha de Ouro</p>
            </div>
            <div>
              <Image
                src={cliente2}
                alt="Unha Feita"
                className=" rounded-t-full m-auto mdl:w-[200px] w-[300px]"
              />
              <p className=" title-service">Baby boomer com Glitter</p>
            </div>
            <div>
              <Image
                src={cliente3}
                alt="Unha Feita"
                className=" rounded-t-full m-auto mdl:w-[200px] w-[300px]"
              />
              <p className=" title-service">Esmaltação em Gel</p>
            </div>
          </motion.div>

          <div className="w-full mdl:w-[80%] m-auto">
            <p className=" text-xl text-start mdl:text-justify tracking-wider space-y-4">
              E muito mais para que você fique <b>apta</b> em pouco <b>tempo</b>{' '}
              não somente em alongamento de unhas mas também em{' '}
              <b>decorações</b> que vão te fazer <b>faturar</b> muito ao final
              do <b>mês</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
