// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div>
//           <h2 className="footer-logo">KOVV</h2>
//           <p className="footer-tagline">
//             Timeless crochet gifts crafted with care.
//           </p>
//         </div>

//         <div>
//           <h4>Shop</h4>
//           <ul>
//             <li>Flowers</li>
//             <li>Bouquets</li>
//             <li>Custom Gifts</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Company</h4>
//           <ul>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Custom Orders</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Connect</h4>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Email</li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         © 2026 KOVV. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;




import { Link } from "react-router-dom";

function Footer() {
  const columns = [
    ["Brand Story", ["About us", "Our Makers", "Customer Stories"]],
    ["Quick Links", ["Shop", "Gift Guide", "Custom Orders", "FAQ"]],
    ["Collections", ["Love", "Friendship", "Family", "Memory"]],
    ["Contact", ["WhatsApp", "Instagram", "hello@kovv.in"]],
  ];

  return (
    <footer className="border-t border-espresso/10 bg-linen py-14">
      <div className="container-premium">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-heading text-3xl font-bold text-ink">
              Kovv<span className="text-accent">.</span>
            </p>

            <p className="mt-4 leading-7 text-muted">
              Premium handcrafted gifts for love,
              appreciation, and lasting memories.
            </p>
          </div>

          {columns.map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-ink">
                {title}
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-muted">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="transition hover:text-espresso"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-espresso/10 pt-7 text-sm text-muted">
          © 2026 Kovv. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;