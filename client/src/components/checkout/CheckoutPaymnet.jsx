import PropTypes from "prop-types";

function CheckoutPayment({ setCardNumber, setExpiryDate, setCvc, errors }) {
  return (
    <div className="flex flex-col w-full gap-4 border border-green rounded-md p-5">
      <h2 className="font-semibold md:text-lg">Payment</h2>

      <div>
        <label
          htmlFor="cardNumber"
          className="text-xs font-bold uppercase md:text-sm"
        >
          Card Number
        </label>
        <input
          type="number"
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
          className={`w-full border ${
            errors.cardNumber ? "border-red-500" : "border-green"
          } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
            errors.cardNumber ? "focus:outline-red-500" : "focus:outline-green"
          }`}
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs mt-1 md:text-sm">
            Invalid card number.
          </p>
        )}
      </div>

      <div className="flex gap-2 w-full">
        <div className="flex-1">
          <label
            htmlFor="expiryDate"
            className="text-xs font-bold uppercase md:text-sm"
          >
            Expiration Date
          </label>
          <input
            type="text"
            id="expiryDate"
            onChange={(e) => setExpiryDate(e.target.value)}
            className={`w-full border ${
              errors.expiryDate ? "border-red-500" : "border-green"
            } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
              errors.expiryDate
                ? "focus:outline-red-500"
                : "focus:outline-green"
            }`}
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-xs mt-1 md:text-sm">
              Invalid expiration date.
            </p>
          )}
        </div>

        <div className="flex-1">
          <label
            htmlFor="cvc"
            className="text-xs font-bold uppercase md:text-sm"
          >
            CVC
          </label>
          <input
            type="number"
            id="cvc"
            onChange={(e) => setCvc(e.target.value)}
            className={`w-full border ${
              errors.cvc ? "border-red-500" : "border-green"
            } rounded-md text-sm h-[2rem] md:text-base md:h-[2.5rem] px-3 ${
              errors.cvc ? "focus:outline-red-500" : "focus:outline-green"
            }`}
          />
          {errors.cvc && (
            <p className="text-red-500 text-xs mt-1 md:text-sm">Invalid CVC.</p>
          )}
        </div>
      </div>
    </div>
  );
}

CheckoutPayment.propTypes = {
  setCardNumber: PropTypes.func.isRequired,
  setExpiryDate: PropTypes.func.isRequired,
  setCvc: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CheckoutPayment;
