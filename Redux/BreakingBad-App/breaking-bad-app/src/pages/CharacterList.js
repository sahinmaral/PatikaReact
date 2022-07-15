import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { getCharacters } from "../redux/charactersSlice";

function Home() {
  const { status, characters, error, page, hasNextPage } = useSelector(
    (state) => state.characters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(getCharacters());
  }, [dispatch,status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <>
    <h1 className="text-center mb-3">Characters</h1>
      <div className="row">
        {characters.map((character) => {
          return (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
              key={character.char_id}
            >
              <div className="card mx-2 my-2">
                <Link to={`/characters/${character.char_id}`}>
                  <img
                    src={character.img}
                    className="card-img-top rounded-4 card-img-top mt-2 p-2"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "40vh",
                      objectFit: "fill",
                    }}
                  />
                </Link>
                <div className="card-header">
                  <h5 className="card-title text-center">{character.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mt-2">
        {status === "loading" ? (
          <Loading />
        ) : (
          hasNextPage ? (
            <button
              type="button"
              className="btn btn-primary m-auto my-4 w-25 p-2"
              onClick={() => dispatch(getCharacters(page))}
            >
              Show more ...
            </button>
          ) : <p className="text-center">There is nothing to show ...</p>
        )}
      </div>
    </>
  );
}

export default Home;
