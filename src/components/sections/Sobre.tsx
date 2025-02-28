import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import sobre from '@/images/sobre.jpg';
import Button from '@/shared/Button';

export default async function Sobre() {
  return (
    <Container id="sobre" className="">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div className=" m-auto mdl:m-0">
          <Image src={sobre} alt="unha" width={300} />
        </div>

        <div className="w-full mdl:w-[70%]">
          <h2 className=" text-4xl mdl:text-6xl mdl:text-start text-center font-lovelace">
            Muito mais <br />
            <span className=" font-bold">PRATICIDADE</span>
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

          <div className=" btn-main">
            <Button url="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
