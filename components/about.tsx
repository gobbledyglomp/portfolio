import { motion } from 'framer-motion';
import { Bold } from '@/components/bold';

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h2 className="mb-4 bg-linear-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-2xl font-bold text-transparent drop-shadow-lg dark:from-rose-500 dark:via-indigo-400 dark:to-sky-400">
        Building Scalable Solutions
      </h2>
      <div className="space-y-4 text-slate-600 duration-300 dark:text-slate-400">
        <p>
          Passionate about full-stack web development, I specialize in the{' '}
          <Bold>MERN stack</Bold> and scalable architecture. From designing
          interactive frontends with <Bold>React</Bold> to structuring robust{' '}
          <Bold>RESTful APIs</Bold> with <Bold>Node.js</Bold> and{' '}
          <Bold>Express</Bold>, I love the entire process of bringing digital
          products to life.
        </p>
        <p>
          Besides, I am a dedicated self-learner who adapts quickly to new
          technologies. I bring a detail-oriented mindset, reinforced by my
          background in <Bold>QA and testing</Bold>, ensuring that I not only
          build software that works but solutions that are reliable and
          efficient.
        </p>
      </div>
    </motion.section>
  );
}
