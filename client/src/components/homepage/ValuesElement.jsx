import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faMoneyBill,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function ValuesElement() {
  return (
    <>
      <div className="bg-white h-[12rem] p-3 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg sm:w-[12rem] sm:p-5 sm:gap-3 lg:h-[13rem] lg:w-[13rem]">
        <FontAwesomeIcon
          icon={faTruck}
          className="text-3xl text-green sm:text-3xl 2xl:text-4xl"
        />
        <p className="text-xs font-semibold sm:text-lg 2xl:text-xl">
          Free Shipping
        </p>
        <p className="text-xs sm:text-base">Order above $200</p>
      </div>

      <div className="bg-white h-[12rem] p-3 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg sm:w-[12rem] sm:p-5 sm:gap-3 lg:h-[13rem] lg:w-[13rem]">
        <FontAwesomeIcon
          icon={faMoneyBill}
          className="text-3xl text-green sm:text-3xl 2xl:text-4xl"
        />
        <p className="text-xs font-semibold sm:text-lg 2xl:text-xl">
          Money-back
        </p>
        <p className="text-xs sm:text-base">30 days guarantee</p>
      </div>

      <div className="bg-white h-[12rem] p-3 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg sm:w-[12rem] sm:p-5 sm:gap-3 lg:h-[13rem] lg:w-[13rem]">
        <FontAwesomeIcon
          icon={faLock}
          className="text-3xl text-green sm:text-3xl 2xl:text-4xl"
        />
        <p className="text-xs font-semibold sm:text-lg 2xl:text-xl">
          Secure Payments
        </p>
        <p className="text-xs sm:text-base">Secure by Stripe</p>
      </div>

      <div className="bg-white h-[12rem] p-3 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg sm:w-[12rem] sm:p-5 sm:gap-3 lg:h-[13rem] lg:w-[13rem]">
        <FontAwesomeIcon
          icon={faPhone}
          className="text-3xl text-green sm:text-3xl 2xl:text-4xl"
        />
        <p className="text-xs font-semibold sm:text-lg 2xl:text-xl">
          24/7 Support
        </p>
        <p className="text-xs sm:text-base">Phone and Email support</p>
      </div>
    </>
  );
}

export default ValuesElement;
