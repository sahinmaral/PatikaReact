import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CharacterDetail() {
  const [pageInfo, setPageInfo] = useState({
    error: null,
    character: null,
    status: "idle",
  });
  let { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${id}`)
      .then(function (response) {
        setPageInfo({ ...pageInfo, character: response.data[0] });
      })
      .catch(function (error) {
        setPageInfo({ ...pageInfo, error });
      })
      .then(function () {});
  }, [id, pageInfo]);

  return (
    <div>
      {pageInfo.character && (
        <div className="card my-2" style={{ width: "50%", margin: "0 auto" }}>
          <img
            src={pageInfo.character.img}
            className="card-img-top rounded-4 mt-2 p-2"
            alt="..."
          />
          <div className="card-header">
            <h5 className="card-title text-center">
              {pageInfo.character.name}
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">
              Status : {pageInfo.character.status} <br />
              Nickname : {pageInfo.character.nickname}
            </p>
          </div>
        </div>
      )}
      <Link
        className="btn text-success border-0 mt-2"
        style={{ margin: "0 auto", width: "100%" }}
        to="/"
      >
        Go Back
      </Link>
    </div>
  );
}

export default CharacterDetail;
