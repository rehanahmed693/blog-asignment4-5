import Link from "next/link";
import Heading from "@/components/heading";


export default function Home() {
  return (
    <div>
      
      <Heading />
      <div className="parent group flex flex-wrap justify-center h-min w-100vh bg-slate-300 sm:bg-slate-500">
        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600 hover:">
          <img
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="images/javascript.png"
          ></img>
          <h2 className="text-2xl p-1 text-center font-semibold">JAVASCRIPT</h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            JavaScript known as the webs ruler,JavaScript is a must-know for any
            web developer. It is used by most websites for client-side.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="/blog1">Read More</Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600">
          <img
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="images/pythonm.png"
          ></img>
          <h2 className="text-2xl p-1 text-center font-semibold">PYTHON</h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            JavaScript known as the webs ruler,JavaScript is a must-know for any
            web developer. It is used by most websites for client-side.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="/blog2">Read More</Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600">
          <img
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="images/go.png"
          ></img>
          <h2 className="text-2xl p-1 text-center font-semibold">GO</h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            Go is a modern lanuage that's gaining popularity quickly,it's
            designed for building scalable and concurrent systems.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="/blog3">Read More</Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600">
          <img
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="images/java.png"
          ></img>
          <h2 className="text-2xl p-1 text-center font-semibold">JAVA</h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            A classic language that's still widely use today,Java is known for
            its platform independence,making it a popular choice for Android
            app.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="/blog4">Read More</Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600">
          <img
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="images/kotlin.png"
          ></img>
          <h2 className="text-2xl p-1 text-center font-semibold ">KOTLIN</h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            Kotlin is a modern language that's designed to be more concise and
            safe than java.it's widely use for Android app development.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="/blog5">Read More</Link>
          </button>
        </div>

        <div className="child cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 m-[20px] h-[400px] sm:h-[450px] w-[300px] bg-slate-100 rounded-t-xl  border-3-amber-600">
          <img
            className="h-[200px] sm:h-[250px] rounded-t-xl w-full"
            src="images/php.png"
          ></img>
          <h2 className="text-2xl p-1 text-center font-semibold">PHP</h2>
          <p className="p-2 text-sm sm:text-base bg-white w-[95%] ml-2">
            A mature language that's still widely use today,PHP ia a popular
            choice for web development, especially for building dynamic
            websites.
          </p>
          <button className="btn w-[80%] bg-blue-600 rounded-full text-white mt-2 ml-7 p-[4px] font-bold hover:text-[18px] ">
            <Link href="/blog6">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
