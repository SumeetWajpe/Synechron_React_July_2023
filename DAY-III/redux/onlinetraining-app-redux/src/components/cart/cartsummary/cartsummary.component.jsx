import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../rating/rating.component";
import { removeItemFromCart } from "../../../redux/reducers/cart.reducer";

export default function CartSummary() {
  let cartItems = useSelector(store => store.cart);
  let dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <header>
        <h1>Cart Summary</h1>
      </header>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          {cartItems?.length ? (
            cartItems.map(cartItem => (
              <div className="card mb-3" style={{ maxWidth: "580px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={cartItem.imageUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{cartItem.title}</h5>
                      <p className="card-text">
                        <Rating maxStars={cartItem.rating} />
                      </p>
                      <p className="card-text">{cartItem.price}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center col-md-2">
                    {" "}
                    <button
                      className="btn btn-outline-danger mx-1"
                      onClick={() => {
                        // fetch api -> server
                        // response -> success
                        dispatch(removeItemFromCart(cartItem.id));
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <strong>No items in the cart !</strong>
          )}
        </div>
      </div>
    </div>
  );
}
