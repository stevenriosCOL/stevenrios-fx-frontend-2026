import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="inline-flex transition-opacity hover:opacity-80" 
      aria-label="SR Academy"
    >
      <Image
        src="/images/logo-sr-academy-2026.svg"
        alt="SR Academy"
        width={40}
        height={40}
        className="h-9 w-9 md:h-10 md:w-10"
        priority
      />
    </Link>
  );
}
