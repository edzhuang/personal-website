import { ThemeToggle } from "@/components/theme-toggle";
import { experiences, projects } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const WEBRING_URL = "https://mac-csse-webring.vercel.app/";
const MY_SITE = "eddiezhuang.com";

const socialLinks = [
  {
    href: "mailto:zhuang.eddie@gmail.com",
    icon: MailIcon,
    label: "email",
    iconClassName: "size-5",
  },
  { href: "https://github.com/edzhuang", icon: GitHubIcon, label: "github" },
  {
    href: "https://www.linkedin.com/in/eddie-zhuang",
    icon: LinkedInIcon,
    label: "linkedin",
  },
  { href: "https://x.com/edzhuan", icon: XIcon, label: "x" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 animate-fade-in">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">eddie zhuang</h1>
          <p className="mt-1 text-muted">
            cs @{" "}
            <a
              href="https://www.mcmaster.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              mcmaster
            </a>
          </p>
          <p className="text-muted">
            incoming @{" "}
            <a
              href="https://bondbl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              bond
            </a>
          </p>
        </div>
        <ThemeToggle />
      </header>

      <section className="mt-16">
        <h2 className="text-base font-medium text-muted tracking-normal">
          experience
        </h2>
        <div className="mt-6 space-y-6">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.title}`}>
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <p className="font-medium">
                  <a
                    href={exp.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 hover:text-muted transition-colors"
                  >
                    {exp.company}
                  </a>{" "}
                  <span className="text-muted font-normal">{exp.title}</span>
                </p>
                <span className="text-sm text-muted sm:shrink-0">{exp.date}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-base font-medium text-muted tracking-normal">
          projects
        </h2>
        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <div key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-muted transition-colors"
              >
                {project.name}
              </a>
              <p className="mt-1 text-sm text-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-foreground/10 pt-6 pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label, iconClassName }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon className={iconClassName ?? "size-4"} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <a
              href={`${WEBRING_URL}#${MY_SITE}?nav=prev`}
              className="hover:text-foreground transition-colors"
              title="previous site"
            >
              &larr;
            </a>
            <a
              href={WEBRING_URL}
              title="mcmaster cs & se webring"
              className="leading-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${WEBRING_URL}assets/Uni_mcmaster_logo.svg.png`}
                alt="mcmaster cs & se webring"
                className="h-5 w-auto block grayscale dark:invert"
              />
            </a>
            <a
              href={`${WEBRING_URL}#${MY_SITE}?nav=next`}
              className="hover:text-foreground transition-colors"
              title="next site"
            >
              &rarr;
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
