
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/share/1Hr3Xbcq83/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/dar.developments/",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/201039207908",
  },
];

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          className={`social-icon ${social.name.toLowerCase()}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialSidebar;
