import { useRouter } from "next/router";
import React from "react";

const RedirectButton: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(
      "https://www.bungie.net/en/oauth/authorize?client_id=45857&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4"
    );
  };

  return <button onClick={handleRedirect}>Redirect to Bungie OAuth</button>;
};

export default RedirectButton;
