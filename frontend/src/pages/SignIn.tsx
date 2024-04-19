import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./firebaseApp";
import { AuthProvider } from "./AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";

//const rootElement = document.getElementById("root") as HTMLElement;
//const root = createRoot(rootElement);

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
        <App />
        </AuthProvider>
    </React.StrictMode>
);