import { bagel } from "@/fonts/fonts";

type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuItems = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Projects" },
  { id: 4, label: "Blogs" },
];

export default function MenuItems({ menuOpen, setMenuOpen }: MenuProps) {
  return (
    <>
      <div
        className={`bg-[#E2E2B6] fixed inset-0 z-10 transition-all duration-500 ${
          menuOpen ? "h-full delay-75" : "h-0 delay-[800ms]"
        }`}
      />
      <div
        className={`bg-[#6EACDA] fixed inset-0 z-10 transition-all duration-500 ${
          menuOpen ? "h-full delay-100" : "h-0 delay-700"
        }`}
      />
      <div
        className={`bg-secondary fixed inset-0 z-10 transition-all duration-500 ${
          menuOpen ? "h-full delay-200" : "h-0 delay-[600ms]"
        }`}
      />

      <div
        className={`bg-black fixed inset-0 z-10 transition-all duration-500 flex flex-col ${
          menuOpen ? "h-full delay-300" : "h-0 delay-500"
        }`}
      >
        <div
          className={`flex justify-between items-center max-w-[1728px] px-4 py-2 mx-auto text-white w-full transition-all ease-out
            ${
              menuOpen
                ? "translate-y-0 visible delay-1000"
                : "-translate-y-full invisible"
            }
          `}
        >
          <h1 className={`${bagel.className} text-3xl md:text-5xl`}>
            Y.Alouani
          </h1>
          <div
            className={`${bagel.className} text-4xl md:text-6xl cursor-pointer`}
            onClick={() => setMenuOpen(false)}
          >
            X
          </div>
        </div>
        <nav
          className={`flex-1 max-w-[1728px] mx-auto w-full items-center flex transition-all ${
            menuOpen ? "visible delay-1000 opacity-100" : "invisible opacity-0"
          }`}
        >
          <ul
            className={`max-w-[90%] w-full mx-auto ${bagel.className} text-3xl md:text-4xl lg:text-5xl flex flex-col gap-5 uppercase text-primary`}
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="py-10 px-1 tracking-wider cursor-pointer group"
              >
                <div className="relative">
                  <span className="relative">
                    {item.id}. {item.label}
                    <div className="w-full h-4 bg-secondary absolute hidden group-hover:flex" />
                  </span>
                  <div
                    className={`absolute bg-primary h-[2px] -bottom-8 left-0 right-0 ease-out duration-300 origin-center transition-transform
                      ${menuOpen ? "scale-100 delay-[1.2s]" : "scale-0"}
                    `}
                  />
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
