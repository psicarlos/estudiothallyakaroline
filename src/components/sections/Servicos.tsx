import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';
import Button from '@/shared/Button';

export default async function Servicos() {
  return (
    <Container id="servicos">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div>
          <Image src={thallya} alt="Thallya" width={300} />
        </div>

        <div>
          <h2>Quem Será sua mentora?</h2>
          <p>Thallya Karoline</p>
          <p>
            Especialista em técnicas avançadas como Molde Russo, Molde F1 e
            Fibra de Vidro, proporcionando unhas impecáveis e duradouras. Minha
            missão é elevar o nível do alongamento de unhas no Brasil, unindo
            precisão, sofisticação e inovação.
          </p>
          <p>
            Além de atender clientes exigentes, também compartilho meu
            conhecimento através de cursos online, ajudando outras profissionais
            a dominarem as melhores técnicas e se destacarem no mercado. Se você
            busca excelência, está no lugar certo!
          </p>
          <div>
            <Button url="#" />
          </div>
        </div>
      </div>
    </Container>
  );
}
