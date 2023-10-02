import React, { useState } from "react";

function User1() {
  const [renk, setRenk] = useState("Turuncu");
  const [name, setName] = useState("Reso");
  const [yas, setYas] = useState(28);
  const [meslek, setMeslek] = useState("Yazılımcı");
  return (
    <div>
      <h1 style={{ color: "red", background: "black" }}>
        Benim adım {name} yaşım {yas} mesleğim {meslek} en sevdiğim renk {renk}
      </h1>
      <button>Değiştir</button> //! ödev olarak yapılacak
    </div>
  );
}

export default User1;
