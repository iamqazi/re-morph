"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  const pathname = usePathname();

  const handleButtonClickHome = () => {
    window.location.href = "/";
  };

  const isActive = (path: string) => pathname === path;

  // Active link styles
  const activeLinkStyle = {
    boxShadow: "0px 0px 20px 0px #FFFFFF52 inset",
    background: "#7E61FF99",
    borderRadius: "12px",
    padding: "5px 32px",
  };

  return (
    <>
      <header className="max-w-[1220px] w-full bg-transparent border-[2px] rounded-[16px] border-white/5">
        <div className="w-full h-[68px] mx-auto flex justify-between items-center p-[12px]">
          {/* Logo on the left */}
          <Link href="/" className="text-white text-xl font-bold">
            <Image
              onClick={handleButtonClickHome}
              src={"/logo.png"}
              width={190}
              height={50}
              alt="logo"
            />
          </Link>

          {/* Navbar menu for medium and large screens */}
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex items-center space-x-8 text-[#DEDDFF]">
              <li>
                <Link href="/">
                  <button style={isActive("/") ? activeLinkStyle : {}}>
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button style={isActive("/about") ? activeLinkStyle : {}}>
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/why-us">
                  <button style={isActive("/why-us") ? activeLinkStyle : {}}>
                    Roadmap
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/roadmap">
                  <button style={isActive("/roadmap") ? activeLinkStyle : {}}>
                    Docs
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/launch-app">
                  <button
                    style={isActive("/launch-app") ? activeLinkStyle : {}}
                  >
                    Launch App
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Signup button on the right for medium and large screens */}
          <div className="hidden lg:block">
            <button
              style={{
                background:
                  "linear-gradient(0deg, #7E62FF 34.55%, #C1B3FF 144.55%)",
              }}
              type="submit"
              className={`px-6 py-4 whitespace-nowrap md:text-[20px] h-[49px] text-[14px] md:w-[155px] border justify-center flex items-center gap-2 border-[#B6A6FF] text-white font-[600] rounded-[12px]`}
            >
              Buy Now
              <Image src={"/arrow.png"} height={20} width={20} alt="arrow" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="lg:hidden block">
        <Menu right>
          <Link
            id="home"
            className="menu-item"
            style={isActive("/") ? activeLinkStyle : {}}
            href="/"
          >
            Home
          </Link>
          <Link
            id="about"
            className="menu-item"
            style={isActive("/about") ? activeLinkStyle : {}}
            href="/about"
          >
            About
          </Link>
          <Link
            id="roadmap"
            className="menu-item"
            style={isActive("/why-us") ? activeLinkStyle : {}}
            href="/why-us"
          >
            Roadmap
          </Link>
          <Link
            id="docs"
            className="menu-item"
            style={isActive("/roadmap") ? activeLinkStyle : {}}
            href="/roadmap"
          >
            Docs
          </Link>
          <Link
            id="launch-app"
            className="menu-item"
            style={isActive("/launch-app") ? activeLinkStyle : {}}
            href="/launch-app"
          >
            Launch App
          </Link>
        </Menu>
      </div>
    </>
  );
}
