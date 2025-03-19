"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClickHome = () => {
    window.location.href = "/";
  };

  const scrollToElement = (id: string) => {
    const checkExist = setInterval(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        clearInterval(checkExist);
      }
    }, 100);
  };

  const closeMenu = () => setIsOpen(false);

  const handleRoadmapClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    closeMenu();
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollToElement("roadmap");
      }, 1000);
    } else {
      scrollToElement("roadmap");
    }
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    closeMenu();
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollToElement("about");
      }, 1000);
    } else {
      scrollToElement("about");
    }
  };

  return (
    <>
      <header className="max-w-[1220px] w-full bg-transparent border-[2px]  rounded-[16px] border-white/5">
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
                  <button className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <button
                  className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]"
                  onClick={handleAboutClick}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]"
                  onClick={handleRoadmapClick}
                >
                  Roadmap
                </button>
              </li>
              <li>
                <a target="_blank" href="https://docs.remorph.me/">
                  <button className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]">
                    Docs
                  </button>
                </a>
              </li>
              <li>
                <Link href="/listing">
                  <button className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[100px]">
                    Launch App
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Signup button on the right for medium and large screens */}
          <div className="hidden lg:block">
            <Link
              target="blank"
              href="https://raydium.io/swap/?inputMint=sol&outputMint=BERR3cxSF3LJBwxSd8ciNKX5b5BVkiuq3VXPSuNYpump"
              style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
              className="cursor-pointer backdrop-blur-sm hover:-translate-y-1 bg-[#7E61FF0D] flex items-center justify-center gap-2 font-inter w-[130px] text-[16px] h-[50px] bg-opacity-50 text-white rounded-[6px] hover:bg-opacity-70 transition duration-300"
            >
              <span>Buy Now</span>
              <Image src={"/arrow.png"} height={20} width={20} alt="arrow" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="lg:hidden block">
        <Menu
          right
          isOpen={isOpen}
          onStateChange={({ isOpen }) => setIsOpen(isOpen)}
        >
          <Link id="home" className="menu-item" href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="menu-item" href="#" onClick={handleAboutClick}>
            About
          </Link>
          <Link className="menu-item" href="#" onClick={handleRoadmapClick}>
            Roadmap
          </Link>
          <a
            id="docs"
            className="menu-item"
            target="_blank"
            href="https://docs.remorph.me/"
          >
            Docs
          </a>
          <Link
            id="launch-app"
            className="menu-item"
            href="/listing"
            onClick={closeMenu}
          >
            Launch App
          </Link>
          <div className="hidden lg:block">
            <Link
              target="blank"
              href="https://raydium.io/swap/?inputMint=sol&outputMint=BERR3cxSF3LJBwxSd8ciNKX5b5BVkiuq3VXPSuNYpump"
              style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
              className="cursor-pointer backdrop-blur-sm !pb-0 hover:-translate-y-1 bg-[#7E61FF0D] flex items-center justify-center  font-inter w-[130px] text-[16px] h-[50px] bg-opacity-50 !text-white rounded-[6px] hover:bg-opacity-70 transition duration-300"
            >
              <span>Buy Now</span>
              <Image src={"/arrow.png"} height={20} width={20} alt="arrow" />
            </Link>
          </div>
        </Menu>
      </div>
    </>
  );
}
