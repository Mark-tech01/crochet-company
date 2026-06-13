// import { Link } from "react-router-dom";

// function Navbar() {
// return ( <nav className="navbar"> <div className="logo">KOVV</div>


//   <div className="nav-links">
//     <Link to="/">Home</Link>
//     <Link to="/shop">Shop</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//     <Link to="/custom-order">Custom Order</Link>
//   </div>
// </nav>

// );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { Button } from "./shared";

const navItems = [
  "Home",
  "Shop",
  "Collections",
  "About",
  "Contact",
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-linen/80 backdrop-blur-xl">
      <nav className="container-premium flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="font-heading text-2xl font-bold tracking-tight text-ink"
        >
          Kovv<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-9 rounded-full border border-white/70 bg-white/35 px-7 py-3 text-sm font-semibold text-muted shadow-sm lg:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="transition hover:text-espresso"
            >
              {item}
            </Link>
          ))}
        </div>

        <Button
          href="/custom-orders"
          className="hidden sm:inline-flex"
        >
          Order Now
        </Button>

        <button className="rounded-full border border-espresso/15 px-4 py-2 text-sm font-bold text-espresso lg:hidden">
          Menu
        </button>
      </nav>
    </header>
  );
}

export default Navbar;