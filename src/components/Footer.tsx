const SOCIALS = [
  { href: "https://github.com/", label: "GitHub", icon: "⌨" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: "💼" },
  { href: "mailto:panthrisudhanshu666@gmail.com", label: "Email", icon: "✉" },
  { href: "tel:+917042248925", label: "Phone", icon: "📞" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t-4 border-ink py-10 px-4">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-5 text-center">
        <span className="starburst bg-comic-yellow text-ink font-bangers text-xl w-28 h-28 flex items-center justify-center animate-wobble">
          THE END?
        </span>
        <p className="font-comic font-bold">
          © {new Date().getFullYear()} Sudhanshu Panthri · To be continued...
        </p>
        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 flex items-center justify-center text-xl bg-paper text-ink border-2 border-paper rounded-full hover:bg-comic-yellow hover:-translate-y-1 hover:rotate-6 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
