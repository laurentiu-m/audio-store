import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

  const handleEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = handleEmail(email);

    if (isValid) {
      setEmailSend(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {emailSend ? (
        <div className="h-[450px] px-10 text-white flex items-center justify-center text-center">
          <h1 className="text-3xl font-medium sm:leading-normal sm:text-[2.5rem] lg:text-[3.5rem]">
            Thank you for joining for our newsletter
          </h1>
        </div>
      ) : (
        <div className="h-[450px] px-10 flex flex-col items-center justify-center text-center gap-5 text-white lg:gap-6">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Join Our Newsletter
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Sign up for deals, new products and promotions
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-green h-[3rem] w-[15rem] border border-white rounded-md px-4 placeholder:text-white focus:outline-white sm:w-[20rem] lg:text-lg lg:h-[3.5rem] lg:w-[45rem]"
              placeholder="Email address"
            />
            {error && (
              <p className="text-sm font-semibold text-red-500 lg:text-base">
                Please enter a valid email.
              </p>
            )}
            <button
              type="submit"
              className="bg-white text-green w-[9rem] h-[2.5rem] rounded-md font-semibold transition-all active:opacity-75 lg:text-lg lg:w-[10rem] lg:h-[3rem] lg:hover:bg-green lg:hover:text-white lg:hover:border lg:hover:border-white"
            >
              Join
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Newsletter;
