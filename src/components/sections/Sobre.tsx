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

        <div>
          <h2>
            Muito mais <span className=" font-bold">PRATICIDADE</span>
          </h2>
          <p>
            O extensor que está <b>revolucionando o mercado das unhas</b>, ele
            veio para lhe proporcionar mais agilidade, menos desgaste físico e
            por consequência muito mais qualidade de vida.
          </p>
          <p>
            A melhor opção para substituir a fibra de vidro pois possui menos
            etapas em seu processo.
          </p>
          <p>
            Prazer eu sou a Thallya Karoline instrutora especialista em
            Alongamento de Unhas com Naturalidade e vou te ensinar todo
            conhecimento que adquiri em anos de profissão.
          </p>
          <div>
            <Button url="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
