import React, { useState } from "react";

export default function State() {
  const [name, setName] = useState("Reşo");
  const [title, setTitle] = useState("Front End Developer");
  const [marka, setMarka] = useState(["BMW", "Mercedes"]);
  const [adres, setAdres] = useState({
    sokak: "Merkez Sokak",
    tel: "555 555 555 555",
    apt: "özgün apartmanı",
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <div class="card">
            <img src="../../p" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{title}</p>
              <button class="btn btn-primary" onClick={() => setName("Ali")}>
                Değiştir
              </button>
              <button
                class="btn btn-primary"
                onClick={() => setTitle("FullStack Web Developer")}
              >
                Değiştir
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img src="../../p" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{marka}</h5>
              <button class="btn btn-primary" onClick={() => setMarka("Ahmet")}>
                Değiştir
              </button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card">
            <img src="../../p" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{marka}</h5>
              <p class="card-text">
                {adres.sokak} {adres.tel} {adres.apt}
              </p>
              <button
                class="btn btn-primary"
                onClick={() =>
                  setAdres({
                    ...adres, //adresin hepsini al ama içindeki sokak ve apartmanı değiştir.
                    sokak: "İzmir Sokak",
                    apt: "Neos apartmanı",
                  })
                }
              >
                Değiştir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
