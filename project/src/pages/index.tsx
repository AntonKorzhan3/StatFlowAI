import React from "react";

const RedirectButton: React.FC = () => {
  const handleRedirect = () => {
    const clientId = process.env.authID;
    window.location.href = `https://www.bungie.net/en/oauth/authorize?client_id=${clientId}&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4`;
  };

  return (
    <>
      <h1 className="welcomeTitle flex justify-center items-center">
        Welcome to StatFlowAI
      </h1>
      <p>
        StatFlowAI is a website tailored for the video game Destiny 2 that
        incetivises assisting players and especially newer players with the game
        through the use of AI. The AI can assist the player and support them
        through their journey. New players that get confused dont need to suffer
        anymore! Ghost AI is here to assist you with your needs.
      </p>
      <button className="authorize-button" onClick={handleRedirect}>
        Click here to Login!
      </button>
    </>
  );
};

export default RedirectButton;
