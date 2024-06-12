import React, { useEffect, useState } from "react";

function LightBulb() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(true);
    return () => {
      setOn(false);
    };
  }, []);

  let bikes = [
    {
      name: "Honda Bike",
      year: 2022,
      color: "red",
      isDamaged: true,
      image: "",
    },
    {
      name: "Suzuki Bike",
      year: 2023,
      color: "blue",
      isDamaged: true,
      image: "",
    },
    {
      name: "Pulsar",
      year: 2022,
      color: "Yellow",
      isDamaged: true,
      image: "",
    },
  ];

  return (
    <>
      <div
        style={{
          fontSize: "30px",
        }}
      >
        LightBulb is {on ? "On" : "Off"}
      </div>

      <br />
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        Turn off
      </button>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        {bikes?.map((bike, index) => {
          return (
            <div key={index} className="card p-2 my-3">
              {bike?.name}
              <img
                src="https://bd.gaadicdn.com/processedimages/indian/scout-bobber/source/scout-bobber62eb4a0d92990.jpg?tr=w-375"
                height={100}
                width={100}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LightBulb;
