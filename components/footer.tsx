import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Anas Mustafa Hashmi. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/anashashme"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/in/anashashmi029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="mailto:anashashmi029@gmail.com"
              aria-label="Email"
              className="transition-transform hover:scale-110"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="tel:+923165573485"
              aria-label="Phone"
              className="transition-transform hover:scale-110"
            >
              <Phone className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* GitHub Corner */}
      <a
        href="https://github.com/anashashme/portfolio"
        className="github-corner"
        aria-label="View source on GitHub"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          border: 0,
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{
            fill: "var(--primary-color)",
            color: "var(--background)",
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0
              C113.8,99.7 119.0,89.6 119.0,89.6
              C122.0,82.7 120.5,78.6 120.5,78.6
              C119.2,72.0 123.4,76.3 123.4,76.3
              C127.3,80.1 125.5,86.6 125.5,86.6
              C122.9,97.6 133.1,101.9 138.6,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            className="octo-arm"
          />
          <path
            d="M115.0,115.0
              C114.9,115.1 114.9,115.1 114.9,115.2
              C114.9,115.3 114.9,115.3 114.8,115.3
              C114.8,115.3 114.8,115.3 114.8,115.3
              L114.7,115.3
              C114.6,115.3 114.6,115.3 114.5,115.3
              C114.5,115.3 114.4,115.3 114.4,115.3
              C114.3,115.3 114.2,115.3 114.1,115.3
              L114.0,115.3
              L96.0,115.3
              C95.5,115.3 95.1,115.1 94.7,114.7
              C94.3,114.3 94.1,113.9 94.1,113.4
              L94.1,94.3
              L94.1,75.3
              C94.1,74.8 94.3,74.4 94.7,74.0
              C95.1,73.6 95.5,73.4 96.0,73.4
              L114.0,73.4
              C114.5,73.4 114.9,73.6 115.3,74.0
              C115.7,74.4 115.9,74.8 115.9,75.3
              L115.9,94.3
              L115.9,113.4
              C115.9,113.9 115.7,114.3 115.3,114.7
              C114.9,115.1 114.5,115.3 114.0,115.3
              Z"
            fill="currentColor"
            className="octo-body"
          />
        </svg>
      </a>
    </footer>
  );
}
