
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF aria-hidden="true" />,
    url: "https://www.facebook.com/share/1Hr3Xbcq83/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram aria-hidden="true" />,
    url: "https://www.instagram.com/dar.developments/",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp aria-hidden="true" />,
    url: "https://wa.me/201039207908",
  },
];

function SocialSidebar() {
  return (
    <aside
      className="social-sidebar"
      aria-label="Social media links"
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit DAR Developments on ${social.name} (opens in a new tab)`}
          title={social.name}
          className={`social-icon ${social.name.toLowerCase()}`}
        >
          {social.icon}
        </a>
      ))}
    </aside>
  );
}

export default SocialSidebar;
