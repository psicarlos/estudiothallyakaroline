'use client';

import React, { useState } from 'react';
import Container from '../Container';
import Image from 'next/image';
import thallya from '@/images/thallya-sofa.png';
import Button from '@/shared/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Quanto tempo para conseguir o Certificado?',
    answer:
      'Ao finalizar todas as aulas do curso, a plataforma irá liberar seu certificado.',
  },
  {
    question: 'Quanto tempo de Acesso?',
    answer:
      'Você terá 1 ano de acesso ao curso para reassistir as aulas quantas vezes quiser.',
  },
  {
    question: 'O curso terá atualizações?',
    answer:
      'Sim e você terá acesso a todas as atualizações durante 1 ano sem custo adicional.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container id="faq">
      <div className="flex flex-col gap-4 m-auto md:m-0">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="order-2 m-auto mdl:m-0 hidden mdl:block">
            <Image src={thallya} alt="Thallya" width={500} />
          </div>

          <div className="order-1 w-full items-center">
            <div className="">
              <h2 className="text-6xl text-mainColor font-bold mb-4">
                Dúvidas Frequentes:
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-zinc-600 pb-2">
                  <button
                    className="w-full text-left flex justify-between items-center py-3 text-lg font-bold text-gray-800 focus:outline-none bg-mainColor px-4"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="text-gray-500">
                      {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                  </button>
                  <div
                    className={`transition-all overflow-hidden ${
                      openIndex === index
                        ? 'max-h-40 opacity-100 py-2'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className=" text-xl">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" btn-main order-3">
          <Button url="#" />
        </div>
      </div>
    </Container>
  );
}
