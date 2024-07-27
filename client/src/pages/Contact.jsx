import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <div className="pt-[9rem] pb-10 px-7 bg-white flex flex-col items-center justify-center gap-10 sm:px-14 lg:px-[10rem] xl:px-[20rem]">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
