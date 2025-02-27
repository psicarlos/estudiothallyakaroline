import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';
import Button from '@/shared/Button';

export default async function Servicos() {
  return (
    <Container id="servicos" className=" bg-bgFundo py-12">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div>
          <Image src={thallya} alt="Thallya" width={300} />
        </div>

        <div className="text-zinc-50">
          <h2 className="text-7xl text-zinc-50">Quem Será sua mentora?</h2>
          <p className=" text-2xl text-mainColor ml-6 pb-4">Thallya Karoline</p>
          <div className="w-full mdl:w-[70%] text-justify">
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
          <div className=" btn-main">
            <Button url="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
