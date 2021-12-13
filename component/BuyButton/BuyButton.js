import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { API_URL, STRIPE_PK } from "../../utils/urls";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const stripePromise = loadStripe(STRIPE_PK);

export default function BuyButton({ gallery }) {
  const { user, getToken } = useContext(AuthContext);

  const router = useRouter();

  const handleBuy = async (e) => {
    const stripe = await stripePromise;
    const token = await getToken();
    e.preventDefault();
    const res = await fetch(`${API_URL}/orders/`, {
      method: "POST",
      body: JSON.stringify({ gallery }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const session = await res.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  const redirectToLogin = async () => {
    router.push("/login");
  };

  return (
    <>
      {user && (
        <button className="button" onClick={handleBuy}>
          BUY
        </button>
      )}
      {!user && (
        <button className="button" onClick={redirectToLogin}>
          Login to Buy
        </button>
      )}
    </>
  );
}
