import Link from 'next/link';

interface TitleProps {
  url: string;
}

export default function Button({ url }: TitleProps) {
  return (
    <div className="py-8 items-center justify-center text-center m-auto  bg-red-500">
      <Link
        className="text-md font-bold px-6 py-4 cursor-pointer rounded-full uppercase bg-red-500"
        href={url}
      >
        Quero começar
      </Link>
    </div>
  );
}
