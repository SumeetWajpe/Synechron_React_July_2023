import React from "react";
import { useSelector } from "react-redux";

export default function CartCount() {
  let cart = useSelector(store => store.cart);
  return (
    <div className="d-flex align-items-center">
      <i class="fa-solid fa-cart-shopping mx-1"></i>{" "}
      <span className="badge text-bg-primary">{cart.length}</span>
    </div>
  );
}
