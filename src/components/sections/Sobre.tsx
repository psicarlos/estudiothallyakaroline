import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';
import Button from '@/shared/Button';

export default async function Sobre() {
  return (
    <Container id="sobre">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div>
          <Image src={thallya} alt="Thallya" width={300} />
        </div>

        <div className="">
          <h2 className=" text-6xl">
            Muito mais <br />
            <span className=" font-bold">PRATICIDADE</span>
          </h2>
          <div className="w-full mdl:w-[70%] text-justify">
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
          <div className=" btn-main">
            <Button url="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
