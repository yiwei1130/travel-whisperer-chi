import { motion } from "framer-motion";
import heroImage from "@/assets/chongqing-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="重庆夜景"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-3 font-sans text-lg tracking-[0.3em] text-primary-foreground/80">
            🧳 爸妈的重庆之旅
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            山城四日漫游记
          </h1>
          <p className="font-sans text-lg text-primary-foreground/90 md:text-xl">
            2月17日 — 2月20日 · 重庆
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8"
        >
          <div className="animate-float text-primary-foreground/60">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
