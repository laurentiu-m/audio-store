import PropTypes from "prop-types";

function CheckoutShipping({
  setStreet,
  setCountry,
  setCity,
  setPostcode,
  errors,
}) {
  return (
    <div className="flex flex-col w-full gap-4 border border-green rounded-md p-5">
      <h2 className="font-semibold md:text-lg">Shipping Address</h2>

      <div>
        <label
          htmlFor="street"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Street Address
        </label>
        <input
          type="text"
          id="street"
          onChange={(e) => setStreet(e.target.value)}
          className={`w-full border ${
            errors.street ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.street ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.street && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Street address is required.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="country"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          onChange={(e) => setCountry(e.target.value)}
          className={`w-full border ${
            errors.country ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.country ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.country && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Country is required.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="city"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Town / City
        </label>
        <input
          type="text"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          className={`w-full border ${
            errors.city ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.city ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Town / City is required.
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="postcode"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Postcode
        </label>
        <input
          type="text"
          id="postcode"
          onChange={(e) => setPostcode(e.target.value)}
          className={`w-full border ${
            errors.postcode ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.postcode ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.postcode && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Postcode is required.
          </p>
        )}
      </div>
    </div>
  );
}

CheckoutShipping.propTypes = {
  setStreet: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setPostcode: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CheckoutShipping;
