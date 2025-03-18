import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faEnvelope,
  faInfoCircle,
  faCookie,
  faShieldAlt,
  faFileContract,
  faChartLine,
  faCoins,
  faCopy,
  faBalanceScale,
  faCogs,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderSidebar() {
  const links = [
    { to: "/", icon: faHome, text: "Home" },
    { to: "/LoginPage", icon: faSignInAlt, text: "Sign In" },
    { to: "/SignUpPage", icon: faUserPlus, text: "Sign Up" },
    { to: "/contact", icon: faEnvelope, text: "Contact Us" },
    { to: "/about", icon: faInfoCircle, text: "About Us" },
    { to: "/cookie-policy", icon: faCookie, text: "Cookie Policy" },
    { to: "/privacy-policy", icon: faShieldAlt, text: "Privacy Policy" },
    {
      to: "/terms-of-service",
      icon: faFileContract,
      text: "Terms of Service",
    },
    {
      to: "/risk-disclosure",
      icon: faBalanceScale,
      text: "General Risk Disclosure",
    },
    { to: "/forex-trading", icon: faChartLine, text: "Forex Trading" },
    { to: "/stocks-trading", icon: faCoins, text: "Stocks Trading" },
    { to: "/crypto-trading", icon: faCoins, text: "Crypto Trading" },
    { to: "/options-trading", icon: faCopy, text: "Options Trading" },
    {
      to: "/copy-trading",
      icon: faPeopleGroup,
      text: "Copy Expert Traders",
    },
    { to: "/leverage", icon: faBalanceScale, text: "What is Leverage" },
    {
      to: "/responsible-trading",
      icon: faCogs,
      text: "Responsible Trading",
    },
    { to: "/about-mining", icon: faPeopleGroup, text: "About Mining" },
    { to: "/bitcoin-mining", icon: faBalanceScale, text: "Bitcoin Mining" },
    { to: "/dogecoin-mining", icon: faCogs, text: "Dogecoin Mining" },
  ];

  return (
    <>
      {links.map(({ to, icon, text }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-2 p-3 rounded-md transition-colors hover:bg-yellow-500 hover:text-black"
          aria-label={text}
        >
          <FontAwesomeIcon icon={icon} /> {text}
        </Link>
      ))}
    </>
  );
}
