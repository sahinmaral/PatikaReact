export const formatMoney = (money) => {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return moneyFormatter.format(money);
};

export const checkSellableStatus = (item, items) => {
  return (
    items[items.findIndex((element) => element.id === item.id)].countInCart ===
    0
  );
};

export const calculateBoughItemCosts = (items) => {
  return items
    .filter((item) => item.countInCart > 0)
    .reduce((acc, element) => acc + element.price * element.countInCart, 0);
};

export const checkBuyableStatus = (item, items) => {
  const totalCost = calculateBoughItemCosts(items);
  const totalBudget = 100000000000;

  if (totalCost + (item.countInCart + 1) * item.price - totalBudget < 0)
    return false;
  return true;
};

export const calculateItemEstimatedBoughCount = (item, items, count) => {
  const totalCost = calculateBoughItemCosts(items);
  const totalBudget = 100000000000;

  if (totalCost + item.price * (item.countInCart + 1) >= totalBudget)
    return item.countInCart;

  while (totalCost + item.price * (count - item.countInCart) >= totalBudget) {
    count--;
  }

  return count;
};
