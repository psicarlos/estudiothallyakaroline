'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import unha from '@/images/final.jpg';
import Link from 'next/link';

export default function Contato() {
  return (
    <Container id="contato">
      <motion.div
        className="flex flex-col md:flex-row gap-4 m-auto md:m-0"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }} // Ativa a animação quando 30% da seção aparece
      >
        <div className="m-auto mdl:m-0 order-2 mdl:order-1 inline-block items-center">
          <Image src={unha} alt="Unha finalizada" width={300} />
        </div>

        <div className=" order-3 mdl:order-3">
          <div className="">
            <h2 className=" text-4xl mdl:text-5xl font-bold text-mainColor text-center mdl:text-start">
              O que vou aprender?
            </h2>
          </div>

          <ul className="list-disc pl-12 text-gray-800 text-xl py-4 tracking-wider space-y-2">
            <li>
              Teoria das unhas <b>naturais</b>
            </li>
            <li>
              Aula teórica sobre <b>materiais e funções</b>
            </li>
            <li>
              Aula teórica sobre <b>tipos de pele</b> e brocas para cada uma
            </li>
            <li>
              Tipos de <b>molde</b>
            </li>
            <li>
              Aula prática de <b>manicure</b> com efeito <b>fotoshop</b>
            </li>
            <li>
              Aula teórica sobre o <b>lixamento</b>
            </li>
            <li>Aula preparação da lâmina</li>
            <li>
              <b>Controle de Produto</b>
            </li>
            <li>
              Aula prática de <b>aplicação</b> quadrada
            </li>
            <li>
              Aula de aplicação <b>almond</b>
            </li>
            <li>
              Aula de aplicação <b>bailarina</b>
            </li>
            <li>
              <b>Decorações</b>
            </li>
            <li>
              <b>Manutenção</b>
            </li>
            <li>
              Aula de <b>troca de formato</b> almond para bailarina
            </li>
            <li>
              Manutenção com <b>molde F1.</b>
            </li>
            <li>
              <b>Remoção</b>
            </li>
          </ul>
          <p className="text-xl uppercase">
            <b>E muito mais ...</b>
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
        </div>
      </motion.div>
    </Container>
  );
}
