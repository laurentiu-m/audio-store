import CheckoutContact from "../components/checkout/CheckoutContact";
import CheckoutShipping from "../components/checkout/CheckoutShipping";
import CheckoutPayment from "../components/checkout/CheckoutPaymnet";
import { useCart } from "../components/context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);

  const URL = import.meta.env.VITE_API_URL;
  const { updateTotalQuantity } = useCart();

  const navigate = useNavigate();

  const validateName = (name) => {
    const namePattern = /^[A-Za-z]+$/;
    return !namePattern.test(name);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    return !phonePattern.test(phone);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(email);
  };

  const validateNotEmpty = (value) => {
    return value.trim() === "";
  };

  const validateCardNumber = (number) => {
    const cardNumberPattern = /^\d{16}$/;
    return !cardNumberPattern.test(number);
  };

  const validateExpiryDate = (date) => {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return !expiryDatePattern.test(date);
  };

  const validateCvc = (cvc) => {
    const cvcPattern = /^\d{3,4}$/;
    return !cvcPattern.test(cvc);
  };

  const deleteCart = async () => {
    try {
      const response = await axios.delete(`${URL}/api/cart`, {
        withCredentials: true,
      });

      const quantityResponse = await axios.get(
        `${URL}/api/cart/total/quantity`,
        {
          withCredentials: true,
        }
      );
      updateTotalQuantity(quantityResponse.data.total);

      return response.data;
    } catch (error) {
      console.lor("Error deleting the cart: ", error);
      return { success: false, message: "Failed to delete cart" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: validateName(firstName),
      lastName: validateName(lastName),
      phone: validatePhone(phone),
      email: validateEmail(email),
      street: validateNotEmpty(street),
      country: validateNotEmpty(country),
      city: validateNotEmpty(city),
      postcode: validateNotEmpty(postcode),
      cardNumber: validateCardNumber(cardNumber),
      expiryDate: validateExpiryDate(expiryDate),
      cvc: validateCvc(cvc),
    };

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).some((error) => error);

    if (isValid) {
      setError(false);

      const result = await deleteCart();

      if (result.success) {
        navigate("/complete");
      } else {
        console.error(result.message);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="pt-[9rem] pb-10 px-7 bg-white flex flex-col items-center gap-8">
      <div className="py-[2rem]">
        <h1 className="text-5xl font-medium sm:text-6xl">Checkout</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-full flex flex-col gap-5 min-[425px]:w-[75%] sm:w-[29rem] lg:w-[35rem]"
      >
        <CheckoutContact
          setFirstName={setFirstName}
          setLastName={setLastName}
          setPhone={setPhone}
          setEmail={setEmail}
          errors={errors}
        />

        <CheckoutShipping
          setStreet={setStreet}
          setCountry={setCountry}
          setCity={setCity}
          setPostcode={setPostcode}
          errors={errors}
        />

        <CheckoutPayment
          setCardNumber={setCardNumber}
          setExpiryDate={setExpiryDate}
          setCvc={setCvc}
          errors={errors}
        />

        <button
          type="submit"
          className="bg-green text-white h-[2.2rem] font-medium rounded-md transition-all hover:bg-darkGreen active:opacity-75 lg:h-[2.8rem] lg:text-lg"
        >
          Place Order
        </button>

        {error && (
          <p className="text-sm text-center text-red-500 font-medium">
            Something went wrong. Please complete the form.
          </p>
        )}
      </form>
    </div>
  );
}

export default Checkout;
