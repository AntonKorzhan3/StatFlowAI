import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const RedirectButton: React.FC = () => {
  const router = useRouter();
  const [tokenData, setTokenData] = useState<any>(null);

  const handleRedirect = () => {
    const clientId = process.env.authID;
    window.location.href = `https://www.bungie.net/en/oauth/authorize?client_id=${clientId}&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4`;
  };

  return (
    <>
      <h1 className="welcomeTitle flex justify-center items-center">
        Welcome to StatFlowAI
      </h1>
      <button className="authorize-button" onClick={handleRedirect}>
        Redirect to Bungie OAuth
      </button>
    </>
  );
};

export default RedirectButton;
