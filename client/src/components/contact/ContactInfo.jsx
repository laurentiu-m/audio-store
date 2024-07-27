import ContactInfoCard from "./ContactInfoCard";

function ContactInfo() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 gap-5 min-w-[55%] text-center xl:grid-cols-3 2xl:w-[55rem]">
        <ContactInfoCard />
      </div>
    </div>
  );
}

export default ContactInfo;
