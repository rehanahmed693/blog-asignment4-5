import Link from "next/link";

export default function Header() {
  return (
    <div className="nav-bar  flex justify-around items-center w-[100%] h-12 bg-orange-700 text-white ">
      <div className="blog  text-3xl font-bold">My Blog</div>

      <ul className="link flex justify-center gap-2 text-sm sm:gap-10 sm:text-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about-us">About</Link>
        </li>
        <li>
          <Link href="contact-us">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
