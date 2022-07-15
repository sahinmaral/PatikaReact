import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { getQuotes } from "../redux/quotesSlice";

function QuotesList() {
  const { quotes, error, status } = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(getQuotes());
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <>
      <h1 className="text-center mb-3">Quotes</h1>
      {quotes.map((quote) => {
        return (
          <p key={quote.quote_id}>
            <Link
              to={`/quotes/${quote.quote_id}`}
              style={{
                textDecoration: "none",
                color: "black",
                paddingRight: "20px",
              }}
            >
              {quote.quote}
            </Link>
            <b>{quote.author}</b>
          </p>
        );
      })}
    </>
  );
}

export default QuotesList;
