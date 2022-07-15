import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function QuoteDetail() {
  const [pageInfo, setPageInfo] = useState({
    error: null,
    quote: null,
    status: "idle",
  });
  let { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes/${id}`)
      .then(function (response) {
        setPageInfo({ ...pageInfo, status : 'succeeded' , quote: response.data[0] });
      })
      .catch(function (error) {
        setPageInfo({ ...pageInfo, status : 'failed' , error });
      })
  }, [id, pageInfo]);

  return (
    <>
      <h1 className="text-center mb-3">Quote Detail</h1>
      {pageInfo.status === "idle" && <Loading />}
      {pageInfo.quote && (
        <>
          <div className="card">
            <div className="card-body">{pageInfo.quote.quote}</div>
            <footer className="blockquote-footer text-end pe-3">
              {pageInfo.quote.author}
            </footer>
          </div>
          <Link className="btn text-success border-0 mt-2"
          style={{margin:'0 auto' , width:'100%'}} to="/quotes"
          >Go Back</Link>
        </>
      )}
    </>
  );
}

export default QuoteDetail;
