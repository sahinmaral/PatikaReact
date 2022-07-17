import {useEffect,useState} from "react";
import { getItems } from "../redux/money/moneySlice";
import { useSelector } from "react-redux";
import { calculateBoughItemCosts, formatMoney } from "../helpers/itemHelper";

function Receipt() {
  const items = useSelector(getItems);

  const [boughItems, setBoughItems] = useState(
    items.filter((item) => item.countInCart > 0)
  );

  useEffect(() => {
    setBoughItems(items.filter((item) => item.countInCart > 0));
  }, [items]);

  return (
    <>
      {boughItems.length > 0 && (
        <div className="container mt-2 bg-white" style={{ height: "auto" }}>
          <h3 className="text-center pt-2 fw-bold">Your receipt</h3>
          <div className="text-center">
            {boughItems.map((element) => {
              return (
                <div
                  key={`Receipt:${element.id}`}
                  className="d-flex justify-content-center"
                >
                  <p className="mx-4 fw-semibold" style={{ fontSize: "20px" }}>
                    {element.name}
                  </p>
                  <p className="mx-4 fw-semibold" style={{ fontSize: "20px" }}>
                    {element.countInCart}x
                  </p>
                  <p
                    className="mx-4 fw-bold gradient-green-color"
                    style={{ fontSize: "20px" }}
                  >
                    {formatMoney(element.countInCart * element.price)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <hr
              style={{
                width: "30%",
                margin: "0 auto",
                border: "1px solid #000",
              }}
            />
            <div className="d-flex justify-content-center">
              <p className="mx-4 fw-semibold" style={{ fontSize: "20px" }}>
                TOTAL
              </p>
              <p
                className="mx-4 fw-bold gradient-green-color"
                style={{ fontSize: "20px" }}
              >
                {formatMoney(calculateBoughItemCosts(items))}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Receipt;
