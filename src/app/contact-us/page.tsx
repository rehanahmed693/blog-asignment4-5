export default function Contact() {
  return (
    

    
    <div className="w-[100%] h-[60] sm:h-[90vh] flex ">
      <div className="w-[100%] h-[60vh] sm:w-[60%] sm:h-[80%] sm:bg-gray-600 flex mx-auto mt-14">
        <img className="w-[50%] h-[50vh] sm:w-[40%] sm:h-[100%] " src="images/contact.jpg"></img>

        <div className="sm:mx-auto">
          <h1 className="text-2xl font-medium sm:text-4xl sm:font-semibold my-2 sm:my-5">
            Contact <span className="text-orange-700">Me</span>
          </h1>
          <form>
            <div className="my-1 sm:my-5">
              <input className= "p-1 sm:p-2 text-xs sm:text-lg font-medium " type="text" name="name" required placeholder="Full Name"  />
            </div>
            <div className="my-1 sm:my-4">
              <input className="p-1 sm:p-2 text-xs sm:text-lg font-medium" type="email" name="email" required placeholder="Email" />
            </div>
            <textarea className="text-xs sm:text-base w-[100%] h-[100px] p-1 bg-slate-400 sm:w-[240px]" placeholder="Your Message" rows={6} required></textarea>
          </form>
          <button className=" w-[100%] sm:w-[100%] rounded-md text-sm mb-2 sm:p-1  font-medium bg-orange-700 text-white justify-center  ">send message</button>
        </div>
      </div>
    </div>
  );
}
