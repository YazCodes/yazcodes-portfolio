import React, { useState } from "react";
import "../components/css/dressUpGame.css";

import base from "../assets/dressUpAssets/base.png";

import outfit1 from "../assets/dressUpAssets/outfit1.png";
import outfit2 from "../assets/dressUpAssets/outfit2.png";
import outfit3 from "../assets/dressUpAssets/outfit3.png";
import outfit4 from "../assets/dressUpAssets/outfit4.png";
import outfit5 from "../assets/dressUpAssets/outfit5.png";

import bow1 from "../assets/dressUpAssets/bow1.png";
import bow2 from "../assets/dressUpAssets/bow2.png";
import hairClips from "../assets/dressUpAssets/hairclips.png";
import bow3 from "../assets/dressUpAssets/bow3.png";

import shoe1 from "../assets/dressUpAssets/shoe1.png";
import shoe2 from "../assets/dressUpAssets/shoe2.png";

import gameBackground from "../assets/dressUpAssets/gameBackground.png";

import pixelBow from "../assets/dressUpAssets/pixel-bow.png";
import pixelTop from "../assets/dressUpAssets/pixel-top.png";


export default function DressUpGame() {
  const outfits = [outfit3, outfit4, outfit5];
  const bows = [bow1, bow2, hairClips, bow3];
  // const shoes = [shoe1, shoe2];

  const [outfitIndex, setOutfitIndex] = useState(0);
  const [bowIndex, setBowIndex] = useState(0);
  // const [shoeIndex, setShoeIndex] = useState(0);

  // Happiness state
  const [happiness, setHappiness] = useState(0);

  const increaseHappiness = () => {
    setHappiness((prev) => Math.min(prev + 10, 100)); 
  };

  return (
    <div className="dressup-container">
      <p className="subtitle">₊✩‧₊˚౨ৎ Customise Miffy’s fit!˚₊✩‧₊</p>
      <div className="happiness-bar-container">
        <div
          className="happiness-bar-fill"
          style={{ width: `${happiness}%` }}
        ></div>
      </div>

      <div className="stage">
        <img src={gameBackground} alt="background" className="background" />
        <img src={base} alt="base" className="base" />
        <img src={outfits[outfitIndex]} alt="outfit" className="outfit" />
        <img src={bows[bowIndex]} alt="bow" className="bow" />
        {/* <img src={shoes[shoeIndex]} alt="shoes" className="shoes" /> */}

      {/* Buttons */}
      <div className="buttons">
      <button
        className="outfit-btn"
        onClick={() => {
          setOutfitIndex((outfitIndex + 1) % outfits.length);
          increaseHappiness();
        }}
      >
        <img src={pixelTop} alt="Outfit Button" />
      </button>

      <button
        className="bow-btn"
        onClick={() => {
          setBowIndex((bowIndex + 1) % bows.length);
          increaseHappiness();
        }}
      >
        <img src={pixelBow} alt="Bow Button" />
      </button>
      </div>
    </div>
    </div>
  );
}

