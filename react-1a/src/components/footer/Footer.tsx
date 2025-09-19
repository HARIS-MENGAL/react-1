import "../style.css";
import { Mouse } from "lucide-react";
interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Support",
    links: [
      { name: "Contact", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Pricing Plans", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Jobs", href: "#" },
      { name: "Courses", href: "#" },
      { name: "Paid Training", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Category",
    links: [
      { name: "Graphics", href: "#" },
      { name: "Programming", href: "#" },
      { name: "eCommerce", href: "#" },
      { name: "Freelancing", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-yellow-500 text-gray-900 font-bold rounded-full p-1 mr-1">
                <Mouse />
              </span>
              <h2 className="font-bold text-white">Mengal</h2>
            </div>
            <p>4517 Washington</p>
            <p className="mt-2">Phone: 546345656</p>
            <p className="mt-2">Mail: info@harismengal@gmail.com</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            Learning Online © 2023. Developed by{" "}
            <a
              href="#"
              className="text-blue-400 hover:underline"
            >
              Muhammad Haris
            </a>
          </p>
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
