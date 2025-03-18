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
                  <button className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <div>
                  <button
                    className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]"
                    onClick={handleAboutClick}
                  >
                    About
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]"
                    onClick={handleRoadmapClick}
                  >
                    Roadmap
                  </button>
                </div>
              </li>
              <li>
                <a target="_blank" href="https://docs.remorph.me/">
                  <button className="cursor-pointer text-[16px] font-medium hover:text-[#C5B8FF] hover:font-semibold min-w-[80px]">
                    Docs
                  </button>
                </a>
              </li>
              <li>
                <Link href="/preview">
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
              href="/preview"
              style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
              type="submit"
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
        <Menu right>
          <Link id="home" className="menu-item" href="/">
            Home
          </Link>
          <Link className="menu-item" href="/about" onClick={handleAboutClick}>
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
            target="_blank"
            href="https://docs.remorph.me/"
          >
            Docs
          </a>
          <Link id="launch-app" className="menu-item" href="/preview">
            Launch App
          </Link>
          <div className="hidden lg:block">
            <Link
              href="/preview"
              style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
              type="submit"
              className="cursor-pointer backdrop-blur-sm hover:-translate-y-1 bg-[#7E61FF0D] flex items-center !pb-0 justify-center gap-2 font-inter w-[130px] text-[16px] h-[50px] bg-opacity-50 text-white rounded-[6px] hover:bg-opacity-70 transition duration-300"
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
