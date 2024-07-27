import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  const validationForm = (name, email, message) => {
    const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameRegex.test(name) && emailRegex.test(email) && message.length > 0) {
      setIsValid(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validationForm(name, email, message);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-4 sm:w-[65%] lg:w-[35rem] xl:w-[45rem]"
        autoComplete="off"
      >
        {error && (
          <p className="text-center text-sm text-red-500 lg:text-base">
            Please complete the from
          </p>
        )}
        <div className="flex flex-col uppercase gap-1">
          <label htmlFor="name" className="text-xs font-bold lg:text-sm">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 border border-green rounded-md px-4 focus:outline-green focus:border-2 lg:h-12"
          />
        </div>

        <div className="flex flex-col uppercase gap-1">
          <label htmlFor="email" className="text-xs font-bold lg:text-sm">
            Email Address
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 border border-green rounded-md px-4 focus:outline-green focus:border-2 lg:h-12"
          />
        </div>

        <div className="flex flex-col uppercase gap-1">
          <label htmlFor="message" className="text-xs font-bold lg:text-sm">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-32 border border-green rounded-md px-4 py-3 focus:outline-green focus:border-2 lg:h-52"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-2/3 py-2 font-medium bg-green text-white transition-all rounded-lg lg:w-[15rem] lg:py-3 lg:hover:scale-105 lg:active:opacity-75"
          >
            Send Message
          </button>
        </div>
      </form>

      {isValid && (
        <h1 className="font-medium text-center lg:text-lg">
          Message sent successfully!
        </h1>
      )}
    </>
  );
}

export default ContactForm;
