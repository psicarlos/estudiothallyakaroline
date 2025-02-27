import Link from 'next/link';

interface TitleProps {
  url: string;
}

export default function Button({ url }: TitleProps) {
  return (
    <>
      <Link
        className="text-md font-bold px-6 py-4 cursor-pointer rounded-xl uppercase bg-mainColor"
        href={url}
      >
        Quero começar
      </Link>
    </>
  );
}
