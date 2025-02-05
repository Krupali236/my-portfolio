import location from "./../assets/location.svg";
import phone from "./../assets/phone.svg";
import contact from "./../assets/contact.svg";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center font-bold text-[40px] py-3 decoration-2 underline underline-offset-8">
          Contact
        </h1>
        <p className="text-center text-slate-700 mt-5 mb-32 text-xl italic">
        Designed a user-friendly contact page allowing visitors to reach out easily.
        </p>
        <div className="grid justify-center my-5">
          <div className="columns-1">
            <div className="flex mb-10">
              <div className="bg-sky-100 rounded-full p-3 mx-4">
                <img src={location} alt="location" width="35px" height="35px" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-600">Address</h3>
                <p>Rajkot - 360002</p>
              </div>
            </div>
            <div className="flex my-10">
              <div className="bg-sky-100 rounded-full p-3 mx-4">
                <img src={phone} alt="phone" width="30px" height="30px" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-600">Call Me</h3>
                <p>+91 9327777951</p>
              </div>
            </div>
            <div className="flex  my-10">
              <div className="bg-sky-100 rounded-full p-3 mx-4">
                <img src={contact} alt="" width="30px" height="30px" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-600">Email Me</h3>
                <p>krupali.lalakiya236@gmail.com</p>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </>
  );
};
export default Contact;
