import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const days = [
  { id: 1, label: "2/17", short: "初见渝州" },
  { id: 2, label: "2/18", short: "心安母城" },
  { id: 3, label: "2/19", short: "文化寻根" },
  { id: 4, label: "2/20", short: "满载而归" },
];

const DayNavigation = () => {
  const [activeDay, setActiveDay] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = days.length; i >= 1; i--) {
        const el = document.getElementById(`day-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveDay(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDay = (dayId: number) => {
    const el = document.getElementById(`day-${dayId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-1 px-4 py-2 md:gap-2">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => scrollToDay(day.id)}
            className={`relative flex flex-col items-center rounded-xl px-4 py-2 transition-all duration-200 md:px-6 ${
              activeDay === day.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="font-sans text-xs font-medium">{day.label}</span>
            <span className="font-serif text-sm font-semibold">{day.short}</span>
            {activeDay === day.id && (
              <motion.div
                layoutId="activeDay"
                className="absolute inset-0 rounded-xl bg-warm-glow-soft"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default DayNavigation;
