"use client";

import { motion } from "framer-motion";

const Story = () => {
  return (
    <section
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 text-white"
      style={{ backgroundColor: "#1c1c22" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex-1"
        >
          <h1 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            My Story
          </h1>
          <p className="mt-6 text-lg text-white/80">
          I am a Computer Science student at the University of Texas at El Paso, passionate about leveraging technology to drive 
          innovation. My journey into programming began at 12 when I taught myself web development and JavaScript through online 
          resources. Since then, I have gained hands-on experience through internships at NASA, Microsoft, and participation in 
          Google's Tech Exchange program, where I honed my skills in software development, data structures, and analytics. Despite 
          balancing academics with professional opportunities and financial challenges, I have excelled by focusing on impactful projects 
          and continuous learning. My future goals include pursuing advanced studies in Artificial Intelligence and contributing to 
          transformative technological advancements.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="flex-1 flex justify-center"
        >
          <img
            src="adalberto_atlanta.png"
            alt="Adalberto Vázquez Villalobos"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
