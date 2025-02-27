import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';
import Button from '@/shared/Button';

export default async function Contato() {
  return (
    <Container id="contato">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div>
          <Image src={thallya} alt="Thallya" width={300} />
        </div>

        <div>
          <div>
            <h2 className=" text-5xl">O que vou aprender?</h2>
          </div>
          <ul>
            <li>Teoria das unhas naturais</li>
            <li>Aula teórica sobre materiais e funções</li>
            <li>Aula teórica sobre tipos de pele e brocas para cada uma</li>
            <li>Tipos de molde</li>
            <li>Aula prática de manicure com efeito fotoshop</li>
            <li>Aula teórica sobre o lixamento</li>
            <li>Aula preparação da lâmina</li>
            <li>Controle de Produto</li>
            <li>Aula prática de aplicação quadrada</li>
            <li>Aula de aplicação almond</li>
            <li>Aula de aplicação bailarina</li>
            <li>Decorações</li>
            <li>Manutenção</li>
            <li>Aula de troca de formato almond para bailarina</li>
            <li>Aula de fotos para vender as unhas nas redes sociais</li>
            <li>Remoção</li>
          </ul>
          <p>E muito mais</p>
          <div>
            <Button url="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
