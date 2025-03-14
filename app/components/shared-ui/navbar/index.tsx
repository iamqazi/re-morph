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

  return (
    <>
      <header className="max-w-[1220px] w-full bg-transparent border-[2px] rounded-[16px] border-white/15">
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
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-8 text-[#DEDDFF]">
              <li>
                <Link href="/">
                  <button>Home</button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button>About</button>
                </Link>
              </li>
              <li>
                <Link href="/why-us">
                  <button>Roadmap</button>
                </Link>
              </li>
              <li>
                <Link href="/roadmap">
                  <button>Docs</button>
                </Link>
              </li>
              <li>
                <Link href="/why-us">
                  <button>Launch App</button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Signup button on the right for medium and large screens */}
          <div className="hidden md:block">
            <button className="border-white/20 text-[16px] w-[134px] h-[44px] text-[#DEDDFF] border-[2px] generate-button">
              BUY NOW
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="md:hidden block">
        <Menu right>
          <Link
            id="home"
            className={`menu-item ${isActive("/") ? "text-[#000]" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/about") ? "text-[#000]" : ""}`}
            href="/about"
          >
            About
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/why-us") ? "text-[#000]" : ""}`}
            href="/why-us"
          >
            Roadmap
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/roadmap") ? "text-[#000]" : ""}`}
            href="/roadmap"
          >
            Docs
          </Link>
          <Link
            id="about"
            className={`menu-item ${isActive("/roadmap") ? "text-[#000]" : ""}`}
            href="/roadmap"
          >
            Launch App
          </Link>
        </Menu>
      </div>
    </>
  );
}
