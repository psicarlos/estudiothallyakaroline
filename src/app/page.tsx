import Menu from '@/components/navbars/navbar';
import Banner from '@/components/sections/Banner';
import Cliente from '@/components/sections/Cliente';
import Contato from '@/components/sections/Contato';
import Faq from '@/components/sections/Faq';
import Servicos from '@/components/sections/Servicos';
import Sobre from '@/components/sections/Sobre';

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-gradient-to-r from-[#AAAAAA] to-slate-50 text-zinc-700">
      <Menu />
      <Banner />
      <Sobre />
      <Servicos />
      <Cliente />
      <Faq />
      <Contato />
    </main>
  );
}
