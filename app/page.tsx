import { ThemeToggle } from "@/components/theme-toggle";
import { experiences, projects } from "@/lib/data";
import { MailIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const WEBRING_URL = "https://mac-csse-webring.vercel.app/";
const MY_SITE = "eddiezhuang.com";

const socialLinks = [
  { href: "mailto:zhuang.eddie@gmail.com", icon: MailIcon, label: "Email" },
  { href: "https://github.com/edzhuang", icon: GitHubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/eddie-zhuang", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://x.com/edzhuan", icon: XIcon, label: "X" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24 animate-fade-in">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight">eddie zhuang</h1>
          <p className="mt-1 text-muted">
            cs @ mcmaster · incoming @{" "}
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
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest">
          experience
        </h2>
        <div className="mt-6 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-medium">
                  {exp.title}{" "}
                  <span className="text-muted font-normal">@ {exp.company}</span>
                </p>
                <span className="text-sm text-muted shrink-0">{exp.date}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-medium text-muted uppercase tracking-widest">
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
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <a
              href={`${WEBRING_URL}#${MY_SITE}?nav=prev`}
              className="hover:text-foreground transition-colors"
              title="Previous site"
            >
              &larr;
            </a>
            <a
              href={WEBRING_URL}
              title="McMaster CS & SE Webring"
              className="leading-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${WEBRING_URL}assets/Uni_mcmaster_logo.svg.png`}
                alt="McMaster CS & SE Webring"
                className="h-5 w-auto block dark:invert"
              />
            </a>
            <a
              href={`${WEBRING_URL}#${MY_SITE}?nav=next`}
              className="hover:text-foreground transition-colors"
              title="Next site"
            >
              &rarr;
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
