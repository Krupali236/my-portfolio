import location from "./../assets/location.svg";
import phone from "./../assets/phone.svg";
import contact from "./../assets/contact.svg";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <h1 className="text-center font-bold text-[40px] py-3 decoration-2 underline underline-offset-8">
          Contact
        </h1>
        <p className="text-center text-black mt-5 mb-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          culpa Lorem, ipsum.
        </p>
        <div className="grid grid-cols-12 my-5">
          <div className="col-span-3">
            <div className="flex mb-10">
              <div className="bg-sky-100 rounded-full p-3 mx-4">
                <img src={location} alt="" width="25px" height="25px" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-600">Address</h3>
                <p>Rajkot - 360002</p>
              </div>
            </div>
            <div className="flex my-10">
              <div className="bg-sky-100 rounded-full p-3 mx-4">
                <img src={phone} alt="" width="20px" height="20px" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-600">Call Us</h3>
                <p>+91 9327777951</p>
              </div>
            </div>
            <div className="flex my-10">
              <div className="bg-sky-100 rounded-full p-3 mx-4">
                <img src={contact} alt="" width="20px" height="20px" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-600">Email Us</h3>
                <p>krupali.lalakiya236@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-5">
              <div className="columns-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-[1px] border-gray-400 p-2 w-full"
                />
              </div>
              <div className="columns-1">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-[1px] border-gray-400 p-2 w-full"
                />
              </div>
            </div>
            <div className="grid my-5 border-gray-400 border-[1px]">
              <input
                type="text"
                name="subject"
                id="subject"
                className="p-2"
                placeholder="Subject"
              />
            </div>
            <div className="grid my-5 border-gray-400 border-[1px]">
              <textarea
                name="Message"
                id="message"
                className="p-2 h-36"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="grid my-5 justify-center">
              <button className="bg-[#0563bb] text-white w-56 items-center rounded-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
