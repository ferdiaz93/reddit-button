import Image from "next/image";
import React from "react";

const Header = () => {
  const logo = (
    <Image
      src="./images/reddit.png"
      alt="Reddit Logo"
      width="32"
      height="32"
    />
  );

  const arrow = (
    <Image
      src="./images/right-up.png"
      alt="Arrow"
      width="16"
      height="16"
      style={{filter: "brightness(0) invert(1)"}}
      />
      )

  const search = (
    <Image
      src="./images/search.png"
      alt="Search"
      width="16"
      height="16"
    />
  );

  const message = (
    <Image
      src="./images/messenger.png"
      alt="Message"
      width="20"
      height="20"
      style={{filter: "brightness(0) invert(1)"}}
    />
  );

  const bell = (
    <Image
      src="./images/bell.png"
      alt="Bell"
      width="20"
      height="20"
      style={{filter: "brightness(0) invert(1)"}}
    />
  );

  const plus = (
    <Image
      src="./images/plus.png"
      alt="Plus"
      width="20"
      height="20"
      style={{filter: "brightness(0) invert(1)"}}
    />
  );

  return (
    <header className="bg-zinc-900 text-white py-2 align-items-center flex justify-between px-5">
      <div className="flex items-center gap-x-3 md:gap-x-16">
        <a href="/">{logo}</a>
        <div>
          {arrow}
        </div>
        <div className="bg-zinc-800 rounded-t-md py-2 px-3">
          <form className="flex">
            <label htmlFor="">
              <div>
                {search}
              </div>
            </label>
            <input
              type="text"
              className="bg-zinc-800 text-white placeholder-gray-400 focus:outline-none px-0 max-w-0 md:px-5 md:max-w-none"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center gap-x-4 md:gap-x-10">
        <div className="cursor-pointer p-2 rounded-full transition-all duration-200 hover:bg-gray-500">{message}</div>
        <div className="cursor-pointer p-2 rounded-full transition-all duration-200 hover:bg-gray-500">{bell}</div>
        <div className="cursor-pointer p-2 rounded-full transition-all duration-200 hover:bg-gray-500">{plus}</div>
      </div>
    </header>
  );
};

export default Header;