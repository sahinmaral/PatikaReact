import {
  formatMoney,
  checkSellableStatus,
  checkBuyableStatus,
  calculateBoughItemCosts,
  calculateItemEstimatedBoughCount,
} from "../helpers/itemHelper";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemToCart,
  getItems,
} from "../redux/money/moneySlice";

function ItemList() {
  const items = useSelector(getItems);
  const dispatch = useDispatch();


  const handleChange = (event, item) => {
    const foundItem =
      items[items.findIndex((element) => element.id === item.id)];

    const newValue = Number(event.target.value);

    const totalCost = calculateBoughItemCosts(items);
    const totalBudget = 100000000000;
    const totalBudgetOverflowStatus =
      newValue * item.price + totalCost < totalBudget;

    if (foundItem.countInCart === 0) {
      if (totalBudgetOverflowStatus) {
        dispatch(addItemToCart({ item: foundItem, count: newValue }));
      } else {
        const estimatedValue = calculateItemEstimatedBoughCount(
          foundItem,
          items,
          newValue
        );
        if (estimatedValue !== 0)
          dispatch(
            addItemToCart({
              item: foundItem,
              count: estimatedValue,
            })
          );
      }
    } else {
      if (newValue > foundItem.countInCart) {
        if (totalBudgetOverflowStatus) {
          dispatch(
            addItemToCart({
              item: foundItem,
              count: newValue - foundItem.countInCart,
            })
          );
        } else {
          const estimatedValue = calculateItemEstimatedBoughCount(
            foundItem,
            items,
            newValue
          );
          if (estimatedValue - foundItem.countInCart !== 0)
            dispatch(
              addItemToCart({
                item: foundItem,
                count: estimatedValue - foundItem.countInCart,
              })
            );
        }
      } else {
        dispatch(
          removeItemToCart({
            item: foundItem,
            count: foundItem.countInCart - newValue,
          })
        );
      }
    }
  };

  return (
    <div className="items-area mt-3">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
              <div className="card my-2" style={{ width: "100%" }}>
                <img
                  className="card-image img-fluid"
                  style={{ height: "120px", margin: "15px auto" }}
                  src={`./images/${item.image}`}
                  alt="item"
                />
                <div className="card-body">
                  <h4 className="card-title" style={{ fontWeight: "700" }}>
                    {item.name}
                  </h4>
                  <p
                    className="card-text gradient-green-color"
                    style={{ fontWeight: "700", fontSize: "20px" }}
                  >
                    {formatMoney(item.price)}
                  </p>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ margin: "0 auto 15px auto" }}
                >
                  <button
                    className="btn fw-semibold"
                    style={{ backgroundColor: "#f1f2f6", width: "30%" }}
                    disabled={checkSellableStatus(item, items)}
                    onClick={() => dispatch(removeItemToCart({ item: item }))}
                  >
                    Sell
                  </button>
                  <input
                    type="number"
                    min={0}
                    className="mx-2"
                    value={item.countInCart}
                    onChange={(e) => handleChange(e, item)}
                    style={{
                      width: "40%",
                      textAlign: "center",
                      border: "1px solid lightgray",
                    }}
                  />
                  <button
                    className="btn gradient-green-bg fw-semibold"
                    style={{ width: "30%" }}
                    disabled={checkBuyableStatus(item, items)}
                    onClick={() => dispatch(addItemToCart({ item: item }))}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
