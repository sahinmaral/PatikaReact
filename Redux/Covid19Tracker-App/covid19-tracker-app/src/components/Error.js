import React from "react";

function Error({message}) {
  return (
    <div className="alert alert-danger text-center fw-bold" role="alert" style={{marginTop:'200px'}}>
      Error on fetching Covid-19 data: {message}
    </div>
  );
}

export default Error;
