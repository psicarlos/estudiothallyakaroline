type NavigationItem = {
  name: string;
  href?: string;
  to?: string;
  offset?: number;
};

export const navigation: { main: NavigationItem[] } = {
  main: [
    { name: 'Home', to: 'banner', offset: 0 },
    { name: 'Sobre', to: 'sobre', offset: -150 },
    { name: 'Quem Sou', to: 'servicos', offset: -150 },
    { name: 'Cliente', to: 'cliente', offset: -150 },
    { name: 'FAQ', to: 'faq', offset: -150 },
    { name: 'Serviço', to: 'contato', offset: -150 },
    {
      name: 'Contato',
      href: 'https://wa.me/5544991395150?text=Gostaria%20de%20agendar%20um%20hor%C3%A1rio', // Link externo
    },
  ],
};
