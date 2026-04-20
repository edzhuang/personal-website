import { FadeIn } from "@/components/fade-in";
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
    <main className="mx-auto w-full max-w-2xl px-6 py-16 md:py-24">
      <FadeIn as="header" delay={0}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight">eddie zhuang</h1>
          <ThemeToggle />
        </div>
        <p className="mt-1 text-muted">cs @ mcmaster</p>
      </FadeIn>

      <FadeIn as="section" delay={250} className="mt-16">
        <h2 className="text-base text-muted">
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
                    className="animated-underline text-foreground hover:text-muted"
                  >
                    {exp.company}
                  </a>{" "}
                  <span className="text-muted font-normal">{exp.title}</span>
                </p>
                <span className="text-foreground/50 tabular-nums sm:shrink-0">{exp.date}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{exp.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" delay={500} className="mt-16">
        <h2 className="text-base text-muted">
          projects
        </h2>
        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <div key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline font-medium hover:text-muted"
              >
                {project.name}
              </a>
              <p className="mt-1 text-sm text-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn
        as="footer"
        delay={750}
        className="mt-24 border-t border-foreground/10 pt-6 pb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
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
      </FadeIn>
    </main>
  );
}
