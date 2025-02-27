import Link from 'next/link';

interface TitleProps {
  name: string;
  url: string;
}

export default function Button({ name, url }: TitleProps) {
  return (
    <div className="py-8 items-center justify-center text-center m-auto">
      <Link
        className="text-md bg-mainColor hover:bg-red-400 text-darkText font-bold px-6 py-4 cursor-pointer rounded-full uppercase"
        href={url}
      >
        {name}
      </Link>
    </div>
  );
}
