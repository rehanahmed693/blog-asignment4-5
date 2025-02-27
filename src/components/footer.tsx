import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="flex-row  sm:w-[100%] sm:h-60 bg-slate-200 sm:flex sm:justify-between ">
        <div className="leftFooter sm:my-10 mx-2">
          <h2 className="text-xl sm:text-2xl">
            Rehan<span className="font-semibold text-gray-700">Developer</span>
          </h2>
          <ul className="flex gap-3 sm:gap-6 mt-2 sm:mt-6 font-medium text-sm  sm:text-xl sm:font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            |
            <li>
              <Link href="">About</Link>
            </li>
            |
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>

          <p className="mt-4 font-thin text-sm  sm:text-base ">
            copyright o 2024 <strong>RehanDeveloper</strong> All rights reserved
          </p>
        </div>

        <div className="footerCenter mt-10 mx-2">
          <div className="flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>Address:</p>
            <p>
              Karachi,<strong>Sindh</strong>
            </p>
          </div>

          <div className="flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>Mobile:</p>
            <p>0322-2313171</p>
          </div>

          <div className="flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>WhataApp:</p>
            <p>0348-2512752</p>
          </div>

          <div className=" flex gap-2 text-xs sm:text-base mb-2  sm:mb-3">
            <p>Email:</p>
            <p>rehanaftab42@gmail.com</p>
          </div>
        </div>

        <div className="footer-right w-[350px] mt-8 mx-2 ">
          <h2 className="text-base font-bold sm:text-2xl sm:pb-4 sm:font-extrabold  ">
            About the company
          </h2>
          <hr></hr>

          <p className="text-xs sm:text-base w-[300px] sm:w-[300px] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            dignissimos sint hic temporibus vel, repellat blanditiis incidunt
            corrupti voluptates saepe.
          </p>
        </div>
      </footer>
    </div>
  );
}
