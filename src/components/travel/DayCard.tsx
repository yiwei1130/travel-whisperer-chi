import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DayCardProps {
  dayNumber: number;
  date: string;
  title: string;
  hotel: string;
  hotelNote?: string;
  emoji: string;
  children: ReactNode;
}

const DayCard = ({ dayNumber, date, title, hotel, hotelNote, emoji, children }: DayCardProps) => {
  return (
    <motion.section
      id={`day-${dayNumber}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-20"
    >
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        {/* Day Header */}
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground shadow-md">
            {emoji}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-warm-glow-soft px-3 py-0.5 font-sans text-xs font-medium text-warm-glow">
                第{dayNumber}天
              </span>
              <span className="font-sans text-sm text-muted-foreground">{date}</span>
            </div>
            <h2 className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl">
              {title}
            </h2>
          </div>
        </div>

        {/* Hotel Info */}
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-secondary p-3">
          <span className="text-lg">🏨</span>
          <div>
            <p className="font-sans text-sm font-medium text-secondary-foreground">
              住：{hotel}
            </p>
            {hotelNote && (
              <p className="font-sans text-xs text-muted-foreground">{hotelNote}</p>
            )}
          </div>
        </div>

        {/* Day content */}
        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
            💡 今日行程
          </h3>
          {children}
        </div>
      </div>
    </motion.section>
  );
};

export default DayCard;
