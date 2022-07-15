import React from "react";

function Error({ message }) {
  return (
    <div className="alert alert-danger mt-2 fw-semibold" role="alert">
      Error : {message}
    </div>
  );
}

export default Error;
