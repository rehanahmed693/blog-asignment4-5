export default function BlogThree() {
  return (
    <div className="flex justify-center bg-gray-500 sm:bg-white ">
      <div className=" w-[70%] h-min bg-gray-100 my-4">
        <img
          className="bg-cover w-[100%] sm:w-[80%] h-[40vh] sm:h-[80vh] sm:mx-auto"
          src="images/go.png"
        ></img>
        <h1 className="text:2xl sm:text-4xl font-bold sm:font-semibold my-4 px-2 text-center ">
          GO
        </h1>

        <h2 className="text-lg sm:text-3xl font-semibold my-1 sm:my-3 px-2 ">
          Introduction
        </h2>
        <p className="text-base sm:text-xl px-2 py-1 sm:py-4">
          Go is a statically typed, compiled high-level programming language
          designed at Google[12] by Robert Griesemer, Rob Pike, and Ken
          Thompson.[4] It is syntactically similar to C, but also has memory
          safety, garbage collection, structural typing,[7] and CSP-style
          concurrency.[13] It is often referred to as Golang because of its
          former domain name, golang.org, but its proper name is Go.[14] There
          are two major implementations: Google's self-hosting[15] "gc" compiler
          toolchain, targeting multiple operating systems and WebAssembly.[16]
          gofrontend, a frontend to other compilers, with the libgo library.
          With GCC the combination is gccgo;[17] with LLVM the combination is
          gollvm.A third-party source-to-source compiler, GopherJS,[20]
          compiles Go to JavaScript for front-end web development.
        </p>
      </div>
    </div>
  );
}
