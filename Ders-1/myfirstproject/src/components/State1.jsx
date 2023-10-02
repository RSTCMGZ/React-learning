import React, { useState } from "react";

function State1() {
  const [marka, setMarka] = useState({
    marka: "Renault",
    model: "Megane",
    yil: 2020,
    fiyat: 500000,
  });
  const red = { backgroundColor: "red", color: "green" };
  const black = { backgroundColor: "black", color: "red" };
  const [color, setColor] = useState(red);
  return (
    <div>
      <h1
        style={color}
        onClick={() => {
          setColor(black);
        }}
      >
        Bu bir Deneme Yazısıdır
      </h1>
      {/* <h1>
        {marka.marka} {marka.model} {marka.yil} {marka.fiyat}₺
      </h1>
      <button
        onClick={() =>
          setMarka({ ...marka, model: "Clio", yil: "2023", fiyat: 600000 })
        }
      >
        Değiştir
      </button> */}
    </div>
  );
}

export default State1;
