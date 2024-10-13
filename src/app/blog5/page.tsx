export default function BlogFive() {
  return (
    <div className="flex justify-center bg-gray-500 sm:bg-white ">
      <div className=" w-[70%] h-min bg-gray-100 my-4">
        <img
          className="bg-cover w-[100%] sm:w-[80%] h-[40vh] sm:h-[80vh] sm:mx-auto"
          src="images/kotlin.png"
        ></img>
        <h1 className="text:2xl sm:text-4xl font-bold sm:font-semibold my-4 px-2 text-center ">
          KOTLIN
        </h1>

        <h2 className="text-lg sm:text-3xl font-semibold my-1 sm:my-3 px-2 ">
          Introduction
        </h2>
        <p className="text-base sm:text-xl px-2 py-1 sm:py-4">
          Kotlin is a cross-platform, statically typed, general-purpose
          high-level programming language with type inference. Kotlin is
          designed to interoperate fully with Java, and the JVM version of
          Kotlin's standard library depends on the Java Class Library, but type
          inference allows its syntax to be more concise. Kotlin mainly targets
          the JVM, but also compiles to JavaScript (e.g., for frontend web
          applications using React)[3] or native code via LLVM (e.g., for native
          iOS apps sharing business logic with Android apps).[4] Language
          development costs are borne by JetBrains, while the Kotlin Foundation
          protects the Kotlin trademark.[5] On 7 May 2019, Google announced that
          the Kotlin programming language was now its preferred language for
          Android app developers.[6] Since the release of Android Studio 3.0 in
          October 2017, Kotlin has been included as an alternative to the
          standard Java compiler. The Android Kotlin compiler produces Java 8
          bytecode by default (which runs in any later JVM), but lets the
          programmer choose to target Java 9 up to 20, for optimization,[7] or
          allows for more features; has bidirectional record class
          interoperability support for JVM, introduced in Java 16, considered
          stable as of Kotlin 1.5. Kotlin has support for the web with
          Kotlin/JS, through an intermediate representation-based backend which
          has been declared stable since version 1.8. Kotlin/Native (for e.g.
          Apple silicon support) has been declared stable since version
          1.9.20.
        </p>
      </div>
    </div>
  );
}
