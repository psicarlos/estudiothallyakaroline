import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';
import Button from '@/shared/Button';

export default async function Faq() {
  return (
    <Container id="faq">
      <div className="flex flex-col gap-4 m-auto md:m-0">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div>
            <Image src={thallya} alt="Thallya" width={300} />
          </div>

          <div>
            <h2>Duvidas Frequentes:</h2>
            <p>Quanto tempo para conseguir o Certificado?</p>
            <p>
              Ao finalizar todas as aulas do curso, a plataforma irá liberar seu
              certificado.
            </p>

            <p>Quanto tempo de Acesso ?</p>
            <p>
              Você terá 1 ano de acesso ao curso para reassistir as aulas
              quantas vezes quiser.
            </p>

            <p>O curso terá atualizações?</p>
            <p>
              Sim e você terá acesso a todas as atualizações durante 1 ano sem
              custo adicional.
            </p>
          </div>
        </div>
        <div>
          <Button url="#" />
        </div>
      </div>
    </Container>
  );
}
