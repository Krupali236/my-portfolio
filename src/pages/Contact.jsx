import location from "./../assets/location.svg";
import phone from "./../assets/phone.svg";
import contact from "./../assets/contact.svg";
const Contact = () => {
  return (
    <>
      <h1 className="text-center font-bold my-3">Contact</h1>
      <p className="text-center font-semibold my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, culpa
        Lorem, ipsum.
      </p>
      <div className="grid grid-cols-2 my-5">
        <div className="column-1">
          <div className="flex my-10">
            <div className="bg-sky-100 rounded-full p-3 mx-4">
              <img src={location} alt="" width="25px" height="25px" />
            </div>
            <div>
              <h3 className="font-bold">Address</h3>
              <p>Rajkot - 360002</p>
            </div>
          </div>
          <div className="flex my-10">
            <div className="bg-sky-100 rounded-full p-3 mx-4">
              <img src={phone} alt="" width="20px" height="20px" />
            </div>
            <div>
              <h3 className="font-bold">Call Us</h3>
              <p>+91 9327777951</p>
            </div>
          </div>
          <div className="flex my-10">
            <div className="bg-sky-100 rounded-full p-3 mx-4">
              <img src={contact} alt="" width="20px" height="20px" />
            </div>
            <div>
              <h3 className="font-bold">Call Us</h3>
              <p>+91 9327777951</p>
            </div>
          </div>
        </div>
        <div className="column-1">
          <div className="grid grid-cols-2">
            <div className="column">
              <input type="text" placeholder="Your Name" className="border-[1px] border-gray-400 p-2 w-96"/>
            </div>
            <div className="column">
              <input type="text" placeholder="Your Email" className="border-[1px] border-gray-400 p-2 w-96"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
