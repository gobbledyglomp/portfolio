'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Bold } from '@/components/bold';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Full Stack Contact Manager',
    description:
      'A secure full-stack application for managing personal contacts. Features a robust RESTful API, persistent data storage, and efficient asynchronous server communication.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/gobbledyglomp/full-stack-open-phonebook',
    demo: 'https://full-stack-open-phonebook-bkyp.onrender.com',
  },
  {
    title: 'Blog App',
    description:
      'A scalable blogging platform featuring global state management and dynamic routing. Implements secure user authentication (JWT) and responsive UI design.',
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
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="mb-8 bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-3xl font-bold text-transparent drop-shadow-md dark:from-rose-500 dark:via-indigo-400 dark:to-sky-400">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col border-slate-200 shadow-sm transition-transform duration-300 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-950/50"
          >
            {/* Title*/}
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800 duration-300 dark:text-slate-100">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              {/* Description*/}
              <p className="mb-4 text-slate-600 duration-300 dark:text-slate-400">
                {project.description}
              </p>
              {/* Stack*/}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            {/* Footer*/}
            <CardFooter className="gap-4">
              {/* Github*/}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-black dark:text-slate-400 dark:hover:text-white"
              >
                <FaGithub className="text-lg" /> Code
              </a>
              {/* Live Demo*/}
              {project.demo && (
                <div className="group relative">
                  <span className="pointer-events-none absolute -top-12 left-1/2 w-48 -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-center text-xs text-slate-50 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-50 dark:text-slate-900">
                    This project is on a free tier. It might take ~60s to wake
                    up!
                    <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-900 dark:bg-slate-50"></span>
                  </span>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-black dark:text-slate-400 dark:hover:text-white"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
