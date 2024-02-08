import React, { useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {
  getAllproducts,
  addToBasket,
} from "../../storage/slices/productSlices";

const Cart = () => {
  const dispatch = useDispatch();
  const { productList, basket } = useSelector(
    (state) => state.product.productList
  );

  useEffect(() => {
    dispatch(getAllproducts());
  }, []);

  return (
    <>
      <div>
        {productList.map((product) => (
          <div
            onClick={() => dispatch(addToBasket(product.id))}
            key={product.id}
          >
            <img src={"http://localhost:3333" + product.image}></img>
            <span>{product.price}$</span>
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
