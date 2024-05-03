import React from "react";
import { PRODUCTDATA } from "../productsData";
import "./products.css";
import star from "../../assets/images/star.svg";
const Products = () => {
  return (
    <section className="container products">
      <h3 style={{ color: "#DC780B" }}>MENU</h3>
      <h2>Food Full of treaty Love</h2>
      <p>
        There are many things are needed to start the Fast Food Business. You
        need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers,{" "}
      </p>
      <div className="products__cards">
        {PRODUCTDATA.map((item) => {
          return (
            <div className="product__card" key={item.id}>
              <div className="products__card__img">
                <img src={item.img} alt="" />
              </div>
              <div className="product__card__info">
                <div className="product__card__price">
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                </div>
                <p className="product__card__desc">{item.desc}</p>
                <div className="product__card__rating">
                  <button className="card__btn">+</button>
                  <div className="rating">
                    {item.rating} <img src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="product__cards__btn">Learn more</button>
    </section>
  );
};

export default Products;
