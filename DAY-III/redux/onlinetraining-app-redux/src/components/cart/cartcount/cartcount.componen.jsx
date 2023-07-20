import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartCount() {
  let cart = useSelector(store => store.cart);
  return (
    <div className="d-flex align-items-center">
      <i class="fa-solid fa-cart-shopping mx-1"></i>{" "}
      <span className="badge text-bg-warning">
        <Link to="/cartsummary">{cart.length}</Link>
      </span>
    </div>
  );
}
