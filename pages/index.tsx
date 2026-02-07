"use client";

import React, { useState } from "react";

export default function ValentinePage() {
  const [noBtnPos, setNoBtnPos] = useState({
    top: "auto",
    left: "auto",
    isAbsolute: false,
  });
  const [isAccepted, setIsAccepted] = useState(false);

  const runaway = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnWidth = e.currentTarget.offsetWidth;
    const btnHeight = e.currentTarget.offsetHeight;

    // We create a "Safe Zone" so the button can't go to the very edge
    const padding = 50;

    // Calculate the maximum possible coordinates
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Generate random coordinates within the safe range (starting at 'padding' instead of 0)
    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    setNoBtnPos({
      top: `${randomY}px`,
      left: `${randomX}px`,
      isAbsolute: true,
    });
  };

  if (isAccepted) {
    return (
      <div className="success-screen">
        <h1>YAY! 💖 See you on the 14th!</h1>
        <style jsx>{`
          .success-screen {
            display: flex;
            height: 100vh;
            background: #ffe4e6;
            align-items: center;
            justify-content: center;
            font-family: sans-serif;
            color: #db2777;
            font-size: 2.5rem;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <main className="container">
      <div className="scrapbook-frame">
        {/* Left Section: Petals */}
        <div className="left-panel">
          <img
            src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=1000"
            alt="petals"
          />
          <div className="pink-filter"></div>
        </div>

        {/* Text Layer */}
        <div className="text-overlay">
          <span className="be-my">Be My</span>
          <h1 className="valentine-text">VALENTINE</h1>
        </div>

        {/* Floating Heart with Rings */}
        <div className="heart-orbit">
          <div className="main-heart">
            <img
              src="/EFF3D274-31F5-4989-9472-BCFD3AFC9FAD_1_201_a 1.png"
              alt="heart"
            />
          </div>
        </div>

        {/* Cat Image - Update the src below to your filename if you wish */}
        <div className="cat-card">
          <img src="/DDCD4944-0B92-4FE6-806B-37C34F4A311F.jpeg" alt="cat" />
          <div className="emojis">🥺🥺🥺</div>
        </div>

        {/* Wood Texture / Right Panel */}
        <div className="right-panel">
          <div className="plank"></div>
          <div className="plank"></div>
          <div className="plank"></div>
        </div>

        {/* Buttons Section */}
        <div className="button-group">
          {/* YES BUTTON: Stays in place and is solid white (opaque) */}
          <button
            className="btn yes-btn-fixed"
            onClick={() => setIsAccepted(true)}
          >
            YESSS
          </button>

          {/* NO BUTTON: The only one that runs away */}
          <button
            className="btn no-btn"
            onMouseEnter={runaway}
            style={{
              position: noBtnPos.isAbsolute ? "fixed" : "relative",
              top: noBtnPos.top,
              left: noBtnPos.left,
              zIndex: 999,
            }}
          >
            NO
          </button>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Sacramento&display=swap");

        body {
          margin: 0;
          background-color: #ffcce5;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: sans-serif;
        }

        .container {
          width: 90vw;
          max-width: 1000px;
          position: relative;
        }

        .scrapbook-frame {
          background: white;
          aspect-ratio: 16 / 9;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
          border: 12px solid white;
        }

        .left-panel {
          position: absolute;
          width: 40%;
          height: 100%;
          left: 0;
        }

        .left-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pink-filter {
          position: absolute;
          inset: 0;
          background: rgba(255, 182, 193, 0.4);
        }

        .text-overlay {
          position: absolute;
          top: 25%;
          left: 10%;
          z-index: 10;
        }
        .be-my {
          font-family: "Sacramento", cursive;
          font-size: 5rem;
          color: white;
          display: block;
          margin-bottom: -40px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .valentine-text {
          font-family: "Playfair Display", serif;
          font-size: 6rem;
          letter-spacing: 5px;
          color: #1a1a1a;
          margin: 0;
        }

        .heart-orbit {
          position: absolute;
          right: 15%;
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
        }
        .string {
          position: absolute;
          width: 1px;
          height: 120px;
          background: #ccc;
        }
        .main-heart {
          font-size: 80px;
          filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.1));
          animation: float 3s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .cat-card {
          position: absolute;
          bottom: 10%;
          left: 40%;
          width: 200px;
          background: white;
          padding: 8px;
          transform: rotate(-3deg);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          z-index: 20;
        }
        .cat-card img {
          width: 100%;
        }
        .emojis {
          text-align: center;
          font-size: 1.2rem;
          padding-top: 5px;
        }

        .right-panel {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 20%;
          height: 60%;
          display: flex;
          background: #ff4d94;
        }
        .plank {
          flex: 1;
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          background: linear-gradient(90deg, #ff66a3, #ff3385);
        }

        .button-group {
          position: absolute;
          bottom: 15%;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 80px;
          z-index: 100;
        }

        .btn {
          padding: 12px 45px;
          border-radius: 50px;
          font-weight: bold;
          cursor: pointer;
          font-size: 1.1rem;
          transition: transform 0.2s ease;
          border: none;
        }

        /* FIXED YES BUTTON: Solid and opaque */
        .yes-btn-fixed {
          background-color: #ffffff;
          color: #ff4d94;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* NO BUTTON: Semi-transparent gray */
        .no-btn {
          background: rgba(0, 0, 0, 0.2);
          color: white;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          white-space: nowrap;
        }
      `}</style>
    </main>
  );
}
