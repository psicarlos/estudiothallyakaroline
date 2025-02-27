import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-pose.png';

export default async function Faq() {
  return (
    <Container id="faq">
      <div className="flex flex-col md:flex-row gap-4 m-auto md:m-0">
        <div>
          <p>FAQ</p>
        </div>

        <div>
          <Image src={thallya} alt="Thallya" width={300} />
        </div>
      </div>
    </Container>
  );
}
