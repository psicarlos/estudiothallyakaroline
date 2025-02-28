'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';
import Link from 'next/link';

export default function Servicos() {
  return (
    <Container id="servicos" className=" bg-bgFundo">
      <motion.div
        className="flex flex-col md:flex-row gap-4 m-auto md:m-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }} // Ativa a animação quando 30% da seção aparece
      >
        <div className=" m-auto mdl:m-0">
          <Image src={thallya} alt="Thallya" width={800} />
        </div>

        <div className="text-zinc-50">
          <h2 className="text-4xl mdl:text-7xl text-zinc-50 font-bold text-center mdl:text-start font-lovelace">
            Quem será sua mentora?
          </h2>
          <p className=" text-xl text-mainColor pb-4 font-lovelace">
            Thallya Karoline
          </p>
          <div className="w-full mdl:w-[70%]  tracking-wider space-y-4">
            <p>
              <b>Especialista</b> em técnicas avançadas como Molde Russo,{' '}
              <b>Molde F1 e Fibra de Vidro</b>, proporcionando unhas impecáveis
              e duradouras. <b>Minha missão</b> é elevar o nível do alongamento
              de unhas no Brasil, unindo
              <b>precisão, sofisticação</b> e <b>inovação</b>.
            </p>
            <p>
              Além de atender clientes <b>exigentes</b>, também compartilho meu
              <b>conhecimento</b> através de cursos online, ajudando outras
              profissionais a <b>dominarem as melhores técnicas</b> e se
              <b>destacarem no mercado</b>. Se você busca <b>excelência</b>,
              está no lugar certo!
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
