import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51RFtAMHFCbjjrjGGZaof3cnCa4ZXdmkXfqWjvTS3HYlPCkERyV0VMampXZZdgLx1MZGsEmhzxcc1XYDHv96nJZKh00kjxRQdjF"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
