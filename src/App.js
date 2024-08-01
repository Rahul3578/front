import ProductList from "./components/ProductList";
import Header from "./components/Header";
import CartList from "./components/CartList";
import "./App.css";
import { useState } from "react";

function App() {
  const product = [
    {
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1e1aba59255963.5a1be06fbcca8.jpg",
      name: "Nitrogen fertilizer - Provides Nitrogen to the roots helping in growth",
      category: "Fertilizer",
      seller: " By Global Farm",
      price: 999,
    },
    {
      url: "https://kaybeebio.com/wp-content/uploads/2023/05/Bio-Viricide-For-All-Types-Of-Fruits-and-Floriculture-Crops-1.jpeg",
      name: "P-virus repeleant - Repells harmful virus from damaging the roots",
      category: "Antibacterial",
      seller: "By Global Farm",
      price: 599,
    },
    {
      url: "https://image.made-in-china.com/44f3j00NOwfinRCZarT/Self-Operated-Agricultural-Bio-Compost-Organic-Fertilizer-Factory.webp",
      name: "Organic fertilizer - Organic solution with negligible chemical composition",
      category: "Fertilizer",
      seller: "By Global farm",
      price: 1000,
    },
    {
      url: "https://i.pinimg.com/474x/86/0e/dd/860edd752961a8fb4389c3735383ba4d.jpg",
      name: "PH balancer for soil, Make your Soil fertile",
      category: "Fertilizer",
      seller: "By Global Farm",
      price: 700,
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/9/347863918/LQ/HT/AW/23752951/agricultural-fertilizer-capsules-grow-azoto.jpg",
      name: "GrowMore antibacterial - Antibacterial solution which prevents roots damage",
      category: "Fertilizer",
      seller: "By Global Farm",
      price: 1500,
    },
    {
      url: "https://static.wixstatic.com/media/4c2df0_c895b976e6604277a136d84b20dd1e20~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4c2df0_c895b976e6604277a136d84b20dd1e20~mv2.png",
      name: "Liquid Khaad - Provides essential good bacteria for growth",
      category: "Fertilizer",
      seller: "Global farm",
      price: 600,
    },
    {
      url: "https://m.media-amazon.com/images/I/51gfoo1yDQL._AC_UF1000,1000_QL80_.jpg",
      name: "Rock Phosphate - Provides essentail growth to plants",
      category: "Fertilizer",
      seller: "Global farm",
      price: 759,
    },
    {
      url: "https://gogarden.co.in/cdn/shop/files/71yg6hRnpTL._SL1200_fac2b8e7-208b-482d-9493-07d03daaff6f.jpg?v=1684132066",
      name: "Urea - Neem coated urea for proper absorbtion of water and soil",
      category: "Fertilizer",
      seller: "Global farm",
      price: 685,
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2021/7/ZN/DO/LF/43259546/npk-20-20-20-water-soluble-fertilizers.jpeg",
      name: "Bonomeal - for phosphorous and calcium growth",
      category: "Fertilizer",
      seller: "Global farm",
      price: 999,
    },

  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const BuyNow = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} BuyNow={BuyNow}></ProductList>
      )}
    </div>
  );
}

export default App;
