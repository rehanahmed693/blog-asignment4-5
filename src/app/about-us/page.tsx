export default function About() {
  return (
    <div className=" w-[100%] sm:h-[90vh] flex-row sm:flex">
      <div className="">
        <img
          className="w-[100%] h-[200px] sm:w-[100%] sm:h-[90vh]"
          src="images/developer.avif"
        ></img>
      </div>
      <div className="w-[100%] sm:w-[80%] sm:h[90vh]  bg-gray-100 sm:bg-white">
        <h1 className="text-2xl sm:text-4xl font-bold text-center my-3 sm:my-10">
          About <b className="text-orange-700">Me</b>
        </h1>
        <h2 className="text-lg sm:text-3xl text-slate-700 my-2 sm:my-6 border-b-4 p-2 sm:p-4 font-semibold">
          Frontend Developer
        </h2>
        <p className="p-4 text-base  sm:text-xl">
          Hello, this is Rehan Ahmed a well known frontend developer. I create
          websites using simple html, css and javascript or typescript as well
          as key frame like react.js and next.js. If you want to my services
          regardings frontend development then contact me .
        </p>
      </div>
    </div>
  );
}
