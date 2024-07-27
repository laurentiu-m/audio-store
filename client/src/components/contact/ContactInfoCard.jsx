import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfoCard() {
  return (
    <>
      <div className="bg-green text-white w-full flex flex-col items-center justify-center gap-2 p-7 lg:py-9">
        <FontAwesomeIcon icon={faHouse} className="text-2xl lg:text-3xl" />
        <h1 className="uppercase font-semibold">Address</h1>
        <p className="font-light lg:text-lg">123 Soundwave Avenue, Suite 100</p>
      </div>

      <div className="bg-green text-white w-full flex flex-col items-center justify-center gap-2 p-7 lg:py-9">
        <FontAwesomeIcon icon={faPhone} className="text-2xl lg:text-3xl" />
        <h1 className="uppercase font-semibold">Phone Number</h1>
        <p className="font-light lg:text-lg">(555) 123-4567</p>
      </div>

      <div className="bg-green text-white w-full flex flex-col items-center justify-center gap-2 p-7 lg:py-9">
        <FontAwesomeIcon icon={faEnvelope} className="text-2xl lg:text-3xl" />
        <h1 className="uppercase font-semibold">Email</h1>
        <p className="font-light lg:text-lg">contact@audiostore.com</p>
      </div>
    </>
  );
}

export default ContactInfoCard;
