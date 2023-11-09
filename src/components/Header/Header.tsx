import React from "react";

const Header = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 20);
  const discountDate = currentDate.toString();
  return (
    <div>
      <p className="sm:p-2 md:p-4 font-semibold">
        {" "}
        Free shiping on all orders until {discountDate.slice(0, 10)}{" "}
      </p>
    </div>
  );
};

export default Header;
