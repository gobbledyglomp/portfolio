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

// Parent: fires whileInView once, propagates to children via staggerChildren
// Minimal: single clean fade-in for the entire section, no complex staggering/motion
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Projects() {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="scroll-mt-4 py-14">
      {/* Section heading — its own gentle fade */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: '-40px' }}
        className="mb-12 font-mono text-2xl font-bold text-(--text-bright) sm:text-3xl"
      >
        <span className="mr-3 text-(--cyan)">#</span>
        {t('title')}
      </motion.h2>

      {/* Grid: single viewport observer, fade whole block */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {projectsData.map((project) => (
          <div
            key={project.key}
            className="group flex flex-col rounded-lg border border-(--border-color) bg-(--bg-surface) p-6 transition-all duration-300 hover:border-(--cyan)/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]"
          >
            {/* Title */}
            <h3 className="mb-3 font-mono text-lg font-semibold text-(--text-bright) transition-colors duration-300 group-hover:text-(--cyan)">
              {t(`${project.key}.title`)}
            </h3>

            {/* Description */}
            <p className="mb-5 flex-1 text-sm leading-relaxed text-(--text-muted)">
              {t(`${project.key}.description`)}
            </p>

            {/* Tech tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-(--cyan)/20 bg-(--cyan)/5 px-2 py-0.5 font-mono text-xs text-(--cyan)"
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
                className="flex items-center gap-2 text-sm text-(--text-muted) transition-colors duration-200 hover:text-(--cyan)"
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
                    className="flex items-center gap-2 text-sm text-(--text-muted) transition-colors duration-200 hover:text-(--cyan)"
                  >
                    <ExternalLink size={16} />
                    {t('links.liveDemo')}
                  </a>
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded border border-(--border-color) bg-(--bg-surface) px-3 py-2 text-center text-xs text-(--text-muted) opacity-0 shadow-lg transition-opacity duration-300 group-hover/demo:opacity-100">
                    {t('links.freeTier')}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
