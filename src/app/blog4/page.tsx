export default function BlogFour() {
  return (
    <div className="flex justify-center bg-gray-500 sm:bg-white ">
      <div className=" w-[70%] h-min bg-gray-100 my-4">
        <img
          className="bg-cover w-[100%] sm:w-[80%] h-[40vh] sm:h-[80vh] sm:mx-auto"
          src="images/amz.jpeg"
        ></img>
        <h1 className="text:2xl sm:text-4xl font-bold sm:font-semibold my-4 px-2 text-center ">
          JAVA
        </h1>

        <h2 className="text-lg sm:text-3xl font-semibold my-1 sm:my-3 px-2 ">
          Introduction
        </h2>
        <p className="text-base sm:text-xl px-2 py-1 sm:py-4">
          Java is a high-level, class-based, object-oriented programming
          language that is designed to have as few implementation dependencies
          as possible. It is a general-purpose programming language intended to
          let programmers write once, run anywhere (WORA),[16] meaning that
          compiled Java code can run on all platforms that support Java without
          the need to recompile.[17] Java applications are typically compiled to
          bytecode that can run on any Java virtual machine (JVM) regardless of
          the underlying computer architecture. The syntax of Java is similar to
          C and C++, but has fewer low-level facilities than either of them. The
          Java runtime provides dynamic capabilities (such as reflection and
          runtime code modification) that are typically not available in
          traditional compiled languages. Java gained popularity shortly after
          its release, and has been a very popular programming language since
          then.[18] Java was the third most popular programming language in 2022
          according to GitHub.[19] Although still widely popular, there has been
          a gradual decline in use of Java in recent years with other languages
          using JVM gaining popularity.[20] Java was originally developed by
          James Gosling at Sun Microsystems. It was released in May 1995 as a
          core component of Sun's Java platform. The original and reference
          implementation Java compilers, virtual machines, and class libraries
          were originally released by Sun under proprietary licenses. As of May
          2007, in compliance with the specifications of the Java Community
          Process, Sun had relicensed most of its Java technologies under the
          GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual
          Machine, however the official reference implementation is the OpenJDK
          JVM which is free open-source software and used by most developers and
          is the default JVM for almost all Linux distributions.
        </p>
      </div>
    </div>
  );
}
