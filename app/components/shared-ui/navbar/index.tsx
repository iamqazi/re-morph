"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const handleButtonClickHome = () => {
    window.location.href = "/";
  };
  const router = useRouter();

  const scrollToElement = (id: string) => {
    const checkExist = setInterval(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        clearInterval(checkExist);
      }
    }, 100);
  };

  const handleRoadmapClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
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
      <header className="max-w-[1220px]  w-full bg-transparent border-[2px] rounded-[16px] border-white/5">
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
                  <button className="cursor-pointer" >
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <div>
                  <button className="cursor-pointer" onClick={handleAboutClick}>About</button>
                </div>
              </li>
              <li>
                <div>
                  <button className="cursor-pointer" onClick={handleRoadmapClick}>Roadmap</button>
                </div>
              </li>
              <li>
                <a target="_blank" href="https://docs.remorph.me/">
                  <button className="cursor-pointer" >
                    Docs
                  </button>
                </a>
              </li>
              <li>
                <Link  href="/listing">
                  <button className="cursor-pointer" >
                    Listings
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/launch-app">
                  <button
                  className="cursor-pointer"
                  >
                    Launch App
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Signup button on the right for medium and large screens */}
          <div className="hidden lg:block">
            <Link
              href="/preview"
              style={{
                background:
                  "linear-gradient(0deg, #7E62FF 12.55%, #C1B3FF 100.55%)",
              }}
              type="submit"
              className={` cursor-pointer px-6 py-4 whitespace-nowrap md:text-[20px] h-[49px] text-[14px] md:w-[155px] border justify-center flex items-center gap-2 border-[#B6A6FF] text-white font-[600] rounded-[12px]`}
            >
              Buy Now
              <Image src={"/arrow.png"} height={20} width={20} alt="arrow" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="lg:hidden block">
        <Menu right>
          <Link
            id="home"
            className="menu-item"
            href="/"
          >
            Home
          </Link>
          <Link
            className="menu-item"
            href="/about"
            onClick={handleAboutClick}
          >
            About
          </Link>
          <Link
            className="menu-item"
            href="/why-us"
            onClick={handleRoadmapClick}
          >
            Roadmap
          </Link>
          <a
            id="docs"
            className="menu-item"
            target="_blank" href="https://docs.remorph.me/"
          >
            Docs
          </a>
          <Link
            id="listings"
            className="menu-item"
            href="/listing"
          >
            Listings 
          </Link>
          <Link
            id="launch-app"
            className="menu-item"
            href="/launch-app"
          >
            Launch App
          </Link>
        </Menu>
      </div>
    </>
  );
}
