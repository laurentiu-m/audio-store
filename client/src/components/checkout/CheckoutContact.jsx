import PropTypes from "prop-types";

function CheckoutContact({
  setFirstName,
  setLastName,
  setPhone,
  setEmail,
  errors,
}) {
  return (
    <div className="flex flex-col w-full gap-4 border border-green rounded-md p-5">
      <h2 className="font-semibold md:text-lg">Contact Information</h2>

      <div className="flex gap-2 w-full">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="text-xs font-bold uppercase md:text-sm"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full border ${
              errors.firstName ? "border-red-500" : "border-green"
            } rounded-md text-sm h-[2rem] px-3 md:text-base md:h-[2.5rem] ${
              errors.firstName ? "focus:outline-red-500" : "focus:outline-green"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1 md:text-sm">
              First name is required.
            </p>
          )}
        </div>

        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="text-xs font-bold md:text-sm uppercase"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full border ${
              errors.lastName ? "border-red-500" : "border-green"
            } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
              errors.lastName ? "focus:outline-red-500" : "focus:outline-green"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs md:text-sm mt-1">
              Last name is required.
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full border ${
            errors.phone ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.phone ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Phone number must be 10 digits.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full border ${
            errors.email ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.email ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Invalid email format.
          </p>
        )}
      </div>
    </div>
  );
}

CheckoutContact.propTypes = {
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CheckoutContact;
