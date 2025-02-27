import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';

export default async function Sobre() {
  return (
    <Container id="sobre">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div>
          <Image src={thallya} alt="Thallya" width={300} />
        </div>

        <div>
          <p>Texto de quem sou</p>
        </div>
      </div>
    </Container>
  );
}
