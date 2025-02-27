'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import sobre from '@/images/sobre.jpg';
import Link from 'next/link';

export default function Sobre() {
  return (
    <Container id="sobre" className="">
      <motion.div
        className="flex flex-col md:flex-row gap-4 m-auto md:m-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} // Ativa a animação quando 30% da seção aparece
      >
        <div className="m-auto mdl:m-0">
          <Image src={sobre} alt="unha" width={300} />
        </div>

        <div className="w-full mdl:w-[70%]">
          <h2 className="text-4xl mdl:text-6xl mdl:text-start text-center font-lovelace">
            Muito mais <br />
            <span className="font-bold">PRATICIDADE</span>
          </h2>

          <div className="w-full mdl:w-[70%] tracking-wider space-y-4">
            <p>
              O extensor que está <b>revolucionando o mercado das unhas</b>, ele
              veio para lhe proporcionar mais{' '}
              <b>agilidade, menos desgaste físico</b> e por consequência muito
              mais <b>qualidade de vida</b>.
            </p>
            <p>
              A melhor opção para substituir a fibra de vidro pois possui{' '}
              <b>menos etapas</b> em seu processo.
            </p>
            <p>
              Prazer eu sou a <b>Thallya Karoline</b> instrutora{' '}
              <b>especialista</b> em Alongamento de Unhas com{' '}
              <b>Naturalidade</b> e vou te ensinar todo
              <b>conhecimento</b> que adquiri em anos de profissão.
            </p>
          </div>

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
