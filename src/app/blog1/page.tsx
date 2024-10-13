export default function BlogOne() {
  return (
    <div className="flex justify-center bg-gray-500 sm:bg-white ">
      <div className="w-[80%] sm:w-[70%] h-min bg-gray-100 my-4">
        <img
          className="bg-cover w-[100%] sm:w-[80%] h-[40vh] sm:h-[80vh] sm:mx-auto"
          src="images/javascript.png"
        ></img>
        <h1 className="text:2xl sm:text-4xl font-bold sm:font-semibold my-4 px-2 text-center ">
          JAVASCRIPT
        </h1>

        <h2 className="text-lg sm:text-3xl font-semibold my-1 sm:my-3 px-2 ">
          Introduction
        </h2>
        <p className="text-base sm:text-xl px-2 py-1 sm:py-4">
          JavaScript , often abbreviated as JS, is a programming language and
          core technology of the Web, alongside HTML and CSS. 99% of websites
          use JavaScript on the client side for webpage behavior. Web
          browsers have a dedicated JavaScript engine that executes the client
          code. These engines are also utilized in some servers and a variety of
          apps. The most popular runtime system for non-browser usage is
          Node.js. JavaScript is a high-level, often just-in-time compiled
          language that conforms to the ECMAScript standard. It has dynamic
          typing, prototype-based object-orientation, and first-class functions.
          It is multi-paradigm, supporting event-driven, functional, and
          imperative programming styles. It has application programming
          interfaces (APIs) for working with text, dates, regular expressions,
          standard data structures, and the Document Object Model (DOM). The
          ECMAScript standard does not include any input/output (I/O), such as
          networking, storage, or graphics facilities. In practice, the web
          browser or other runtime system provides JavaScript APIs for I/O.
          Although Java and JavaScript are similar in name, syntax, and
          respective standard libraries, the two languages are distinct and
          differ greatly in design
        </p>
      </div>
    </div>
  );
}
