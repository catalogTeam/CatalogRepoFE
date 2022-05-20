import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();

  return (
    <html>
      <body>
        <h1>User page not found.</h1>
        <sub>
          Try again or create new user page by going back to the home page!
        </sub>
        <html>
          <button onClick={() => navigate("/Home")}>
            Click to go back to Home Page
          </button>
        </html>
      </body>
    </html>
  );
}

export default ErrorPage;
