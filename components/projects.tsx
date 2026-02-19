'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projectsData = [
  {
    key: 'contactManager',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/gobbledyglomp/full-stack-open-phonebook',
    demo: 'https://full-stack-open-phonebook-bkyp.onrender.com',
  },
  {
    key: 'blogApp',
    stack: [
      'MERN Stack',
      'Redux',
      'React Router',
      'JWT',
      'Bcrypt',
      'Bootstrap',
    ],
    github: 'https://github.com/gobbledyglomp/full-stack-open-blog-app',
    demo: 'https://full-stack-open-blog-app.onrender.com',
  },
];

export function Projects() {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="mb-12 font-mono text-2xl font-bold text-[var(--text-bright)] sm:text-3xl">
          <span className="mr-3 text-[var(--cyan)]">#</span>
          {t('title')}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 transition-all duration-300 hover:border-[var(--cyan)]/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
            >
              {/* Title */}
              <h3 className="mb-3 font-mono text-lg font-semibold text-[var(--text-bright)] transition-colors duration-300 group-hover:text-[var(--cyan)]">
                {t(`${project.key}.title`)}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {t(`${project.key}.description`)}
              </p>

              {/* Tech tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--cyan)]/20 bg-[var(--cyan)]/5 px-2 py-0.5 font-mono text-xs text-[var(--cyan)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--cyan)]"
                >
                  <Github size={16} />
                  {t('links.code')}
                </a>
                {project.demo && (
                  <div className="group/demo relative">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--cyan)]"
                    >
                      <ExternalLink size={16} />
                      {t('links.liveDemo')}
                    </a>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded border border-[var(--border-color)] bg-[var(--bg-surface)] px-3 py-2 text-center text-xs text-[var(--text-muted)] opacity-0 shadow-lg transition-opacity duration-300 group-hover/demo:opacity-100">
                      {t('links.freeTier')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
