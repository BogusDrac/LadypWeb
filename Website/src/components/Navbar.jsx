import { NavLink } from "react-router-dom";
import { Home, Brain, Cog, Phone, ArrowLeftToLine, ArrowRightFromLine, Eye } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { icon: Home,     label: "Home",    to: "/" },
    { icon: Cog,   label: "Services", to: "/services" },
    { icon: Brain, label: "About",   to: "/about" },
    { icon: Phone,    label: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Arrow toggle — always on right edge */}
      <button
        onClick={() => setOpen((p) => !p)}
        className={`
          fixed top-1/15 -translate-y-1/2 z-[200]
          w-[22px] h-[54px] bg-white border cursor-pointer
          flex items-center justify-center rounded-l-lg
          text-blue-950/60 hover:text-white hover:bg-blue-950 hover:opacity-35 hover:scale-125
          transition-all duration-400
          ${open ? "right-[5.5%]" : "right-0"}
        `}
        title={open ? "Close panel" : "Open panel"}
      >
        {open
          ? <ArrowRightFromLine className="w-20 h-20"/>
          : <ArrowLeftToLine  className="w-20 h-20" />
        }
      </button>

      {/* Panel */}
      <nav
        className={`
          fixed top-0 right-0 h-full w-[5vw] min-w-[72px]
          flex flex-col items-center py-7 z-[100]
          border-none bg-white opacity-15 transition-all duration-400
          ${open ? "translate-x-0" : "translate-x-full"}
          "bg-[#051936]  border-white/[0.07]"
        `}
      >
        {/* Nav Links */}
        <div className="flex flex-col justify-between items-center gap-1 flex-1 w-full px-1.5 my-10">
          {navItems.map(({ icon: Icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              className=
                "group relative w-full flex flex-col items-center justify-center gap-1 py-2.5 px-1 rounded-[10px] border-none no-underline transition-all duration-200 text-black/70 hover:bg-white/8 hover:text-blue-950 hover:scale-105"
                >
                  <Icon
                    className={`w-5 h-5 shrink-0`}
                    strokeWidth={1.8}
                  />
                  <span className="text-[0.48rem] font-bold tracking-widest uppercase leading-none">
                    {label}
                  </span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;


{/*  <span className="
                    absolute right-full mr-2 top-1/2 -translate-y-1/2
                    bg-[#0a1628] text-white text-[0.65rem] font-medium
                    px-2.5 py-1 rounded-md whitespace-nowrap shadow-md
                    opacity-0 group-hover:opacity-100 transition-opacity duration-150
                    pointer-events-none
                  ">
                    {label}
                  </span> 
 */}