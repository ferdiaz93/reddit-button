import React from "react";

const Header = () => {
  const logo = (
    <img
      src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"
      alt="Reddit Logo"
      width="100"
      height="100"
    />
  );

  return (
    <header className="bg-red-500 text-white py-20 align-items-center flex justify-center">
      {logo}
      <h1 className="text-2xl font-semibold">Reddit Color Generator</h1>
    </header>
  );
};

export default Header;