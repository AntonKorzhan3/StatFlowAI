import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const RedirectButton: React.FC = () => {
  const router = useRouter();
  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (window.location.href.includes("code=")) {
        const authCode = new URLSearchParams(window.location.search).get(
          "code"
        );
        const apiKey = "d2e04d63d8f44b48a4fd69ff347577aa";
        const clientId = "45857";
        const clientSecret = "8eAWG8wSgGsJpiNSGs7KZxzSy2pQcJ.MAPHIIxWLuY8";

        try {
          const response = await fetch(
            "https://www.bungie.net/Platform/App/OAuth/Token/",
            {
              method: "POST",
              headers: {
                "X-API-Key": apiKey,
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
              },
              body: new URLSearchParams({
                client_id: clientId,
                grant_type: "authorization_code",
                code: authCode || "",
              }).toString(),
            }
          );

          const data = await response.json();
          setTokenData(data);
          console.log(data);
          // Do something with tokenData
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    router.push(
      "https://www.bungie.net/en/oauth/authorize?client_id=45857&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4"
    );
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
