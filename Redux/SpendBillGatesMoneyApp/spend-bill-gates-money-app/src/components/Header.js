import React from "react";
import { getMoney } from "../redux/money/moneySlice";
import {useSelector} from 'react-redux'

function Header() {
  const money = useSelector(getMoney);

  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div className="header-area">
        <img
          className="img-fluid rounded-circle my-3"
          src="https://neal.fun/spend/billgates.jpg"
          alt="bill-gates"
        />
        <p>Spend Bill Gates' Money</p>
      </div>
      <div className="money-area mt-3 gradient-green-bg">
        {moneyFormatter.format(money)}
      </div>
    </>
  );
}

export default Header;
