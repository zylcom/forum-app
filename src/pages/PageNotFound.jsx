import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-vampire-bite text-5xl font-berkshire-wash">
        Page Not Found
      </h1>

      <span className="text-lg text-white-edgar">
        Back to{" "}
        <Link to="/" className="underline text-clear-chill">
          home
        </Link>
      </span>
    </div>
  );
}

export default PageNotFound;
