import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS } from "../data/siteData";
import enifLogo from "../assets/Logos/logo_ENIF_6.png";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060c06",
        borderTop: "1px solid rgba(217,235,76,0.08)",
        padding: "80px 2rem 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 60,
            marginBottom: 64,
          }}
        >
          {/* Brand col */}
          <div>
            <a
              href="#hero"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 20,
              }}
            >
              <img
                src={enifLogo}
                alt="ENIF Logo"
              />
            </a>
            <p
              style={{
                color: "rgba(240,240,232,0.4)",
                lineHeight: 1.7,
                fontSize: "0.9rem",
                marginBottom: 24,
                maxWidth: 260,
              }}
            >
              Tunisia’s premier industry crossroads—connecting talent and
              technology to shape the future.
            </p>
            {/* Social links (Using inline SVGs) */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map(({ icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(217,235,76,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(240,240,232,0.5)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(217,235,76,0.1)";
                    e.currentTarget.style.color = "#D9EB4C";
                    e.currentTarget.style.borderColor = "rgba(217,235,76,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.color = "rgba(240,240,232,0.5)";
                    e.currentTarget.style.borderColor = "rgba(217,235,76,0.1)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.85rem",
                marginBottom: 20,
                color: "#f0f0e8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(240,240,232,0.45)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#D9EB4C")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(240,240,232,0.45)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "0.85rem",
                marginBottom: 20,
                color: "#f0f0e8",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { Icon: Mail, text: "sbc.enis.ias@ieee.org" },
                { Icon: MapPin, text: "ENIS, Sfax, Tunisia 🇹🇳" },
                { Icon: Phone, text: "+216 20 949 101" },
              ].map(({ Icon, text }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "rgba(240,240,232,0.45)",
                    fontSize: "0.9rem",
                  }}
                >
                  <Icon size={15} color="#36CE5A" style={{ flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(217,235,76,0.07)",
            marginBottom: 32,
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div
            style={{
              color: "rgba(240,240,232,0.3)",
              fontSize: "0.82rem",
              fontFamily: "Space Mono, monospace",
            }}
          >
            © IEEE IAS ENIS SBC, All Right Reserved. created by Layth Khemakhem.
          </div>
        </div>
      </div>
    </footer>
  );
}