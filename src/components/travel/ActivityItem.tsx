import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ActivityItemProps {
  time: string;
  title: string;
  description: string;
  icon: ReactNode;
  details?: string[];
  index: number;
}

const ActivityItem = ({ time, title, description, icon, details, index }: ActivityItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-glow-soft text-warm-glow text-lg">
          {icon}
        </div>
        <div className="mt-2 w-px flex-1 bg-border" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <span className="mb-1 inline-block rounded-full bg-warm-glow-soft px-3 py-0.5 font-sans text-sm font-medium text-warm-glow">
          {time}
        </span>
        <h4 className="mt-1 font-serif text-xl font-semibold text-foreground">
          {title}
        </h4>
        <p className="mt-1 font-sans text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        {details && details.length > 0 && (
          <ul className="mt-2 space-y-1">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-ink-light">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-glow/50" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ActivityItem;
