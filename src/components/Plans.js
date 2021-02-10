import React, { useEffect, useState } from "react";
import "./Plans.css";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { showPlan } from "../features/planSlice";

function Plans() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          dispatch(
            showPlan({
              name: productDoc.data().name,
            })
          );
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, [dispatch]);

  //console.log(products);

  return (
    <div className="plans">
      {Object.entries(products).map(([productsId, productData]) => {
        //logic to check if the user's subscription is active...
        return (
          <div key={productsId} className="plans__plan">
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
