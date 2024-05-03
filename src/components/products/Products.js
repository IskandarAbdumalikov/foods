import React from "react";
import { PRODUCTDATA } from "../productsData";
import "./products.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoStarHalfOutline } from "react-icons/io5";

const Products = () => {
  // function starCount(num) {
  //   let n = Math.trunc(num);
  //   if (num === n) {
  //     let fillStar = new Array(n).fill();
  //     let outlineStar = new Array(5 - n).fill(<FaRegStar />);
  //     return [...fillStar, ...outlineStar].join("");
  //   } else {
  //     let fillStar = new Array(n).fill(<FaStar />);
  //     let outlineStar = new Array(5 - n - 1).fill(
  //       <FaRegStar />
  //     );
  //     return [...fillStar, <IoStarHalfOutline />, ...outlineStar].join("");
  //   }
  // }
  function countStars(count) {
    let res = "";

    for (let i = 0; i < Math.trunc(count); i++) {
      res += <FaStar />;
    }
    if (count % 1 > 0.4) {
      res += <FaRegStar/>;
    }
    for (let i = Math.round(count); i < 5; i++) {
      res += <IoStarHalfOutline/>;
    }
    return res;
  }

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
                  <div className="rating">{item.rating}</div>
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
