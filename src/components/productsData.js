import star1 from "../assets/icons/star1.svg"
import star2 from "../assets/icons/star2.svg";
import star3 from "../assets/icons/star3.svg";
import star4 from "../assets/icons/star4.svg";
import  "./products/products.css";

export const PRODUCTDATA = [
  {
    id: 1,
    img: "https://img.freepik.com/premium-photo/whole-roasted-chicken-rosemary-tomato-lemon-wooden-cutting-board-baked-chicken-grilled-barbecue-delicious-food-dining-table-holiday-celebrate_73523-3045.jpg",
    name: "Vegie Muffen",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    rating: <img className="stars" src={star1} alt="" />,
  },
  {
    id: 2,
    img: "https://www.shutterstock.com/image-photo/salad-chicken-meat-fresh-vegetable-600nw-1089760742.jpg",

    name: "Salads",
    price: "13$",
    desc: "There are many things are needed to start the Fast Food Business.",
    rating: <img className="stars" src={star2} alt="" />,
  },
  {
    id: 3,
    img: "https://cdn.sanity.io/images/cctd4ker/production/9296da795070ca0b6d9147d9507ab54d9e2dba84-1440x960.jpg?w=3840&q=75&fit=clip&auto=format",
    name: "Burger",
    price: "10$",
    desc: "There are many things are needed to start the Fast Food Business.",
    rating: <img className="stars" src={star3} alt="" />,
  },
  {
    id: 4,
    img: "https://realfood.tesco.com/media/images/RFO-1400x919-CobbSalad-8f25842c-d030-47fc-9336-fd16327830c6-0-1400x919.jpg",
    name: "Delmonico Steak dish",
    price: "14$",
    desc: "There are many things are needed to start the Fast Food Business.",
    rating: <img className="stars" src={star4} alt="" />,
  },
  {
    id: 5,
    img: "https://www.ruchikrandhap.com/wp-content/uploads/2014/06/Egg-Masala-3-1.jpg",
    name: "Egg Masala",
    price: "16$",
    desc: "There are many things are needed to start the Fast Food Business.",
    rating: <img className="stars" src={star1} alt="" />,
  },
  {
    id: 6,
    img: "https://t3.ftcdn.net/jpg/00/51/21/24/360_F_51212489_T5VPYoaeyKQc3XShEjJAn5Xng6DbBjLV.jpg",
    name: "Peach Melba dish",
    price: "9$",
    desc: "There are many things are needed to start the Fast Food Business.",
    rating: <img className="stars" src={star3} alt="" />,
  },
];
