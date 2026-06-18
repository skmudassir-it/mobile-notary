import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footerLinks = {
  Services: [
    { href: "/services/loan-signing", label: "Loan Signing" },
    { href: "/services/mobile-notary", label: "Mobile Notary" },
    { href: "/services/apostille", label: "Apostille" },
    { href: "/services/power-of-attorney", label: "Power of Attorney" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image src="/logo.svg" alt="SignSwift" width={150} height={38} className="h-9 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              On-demand mobile notary and loan signing services. We come to you — fast, reliable, available 7 days a week.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-5" /></a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-5" /></a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><FontAwesomeIcon icon={faLinkedin} className="size-5" /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-4 mt-0.5 text-amber-400 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-4 mt-0.5 text-amber-400 shrink-0" />
                <span>hello@signswiftnotary.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-4 mt-0.5 text-amber-400 shrink-0" />
                <span>Serving the Greater Metro Area</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} SignSwift Mobile Notary. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
