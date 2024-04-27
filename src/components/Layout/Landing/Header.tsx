import Image from "next/image";
import Link from "next/link";
import SlideBar from "./SlideBar";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Image
        src="/img/fare-play-logo.svg"
        height={22.683}
        width={159}
        alt="fare-play-logo"
      />
      <nav className="lg:block hidden">
        <ul className="lg:flex lg:gap-x-10 uppercase font-gohu text-base">
          <li className="pt-2 px-5 text-white">
            <Link href={"#"}>about</Link>
          </li>
          <li className="pt-2 px-5 text-white">
            <Link href={"#"}>points</Link>
          </li>
          <li className="pt-2 px-5 text-white">
            <Link href={"#"}>waitlist</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu Button */}
      <SlideBar />
    </header>
  );
}
