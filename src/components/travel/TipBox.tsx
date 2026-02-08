import { motion } from "framer-motion";

interface TipBoxProps {
  title: string;
  tips: { icon: string; text: string }[];
  variant?: "warm" | "coral" | "jade" | "sky";
}

const variantStyles = {
  warm: "bg-warm-glow-soft border-warm-glow/20",
  coral: "bg-coral-soft border-coral/20",
  jade: "bg-jade-soft border-jade/20",
  sky: "bg-sky-soft border-sky/20",
};

const titleStyles = {
  warm: "text-warm-glow",
  coral: "text-coral",
  jade: "text-jade",
  sky: "text-sky",
};

const TipBox = ({ title, tips, variant = "warm" }: TipBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`mt-6 rounded-xl border p-5 ${variantStyles[variant]}`}
    >
      <h4 className={`mb-3 font-serif text-lg font-semibold ${titleStyles[variant]}`}>
        {title}
      </h4>
      <div className="space-y-2.5">
        {tips.map((tip, i) => (
          <p key={i} className="flex items-start gap-2 font-sans text-sm leading-relaxed text-foreground/80">
            <span className="shrink-0 text-base">{tip.icon}</span>
            {tip.text}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default TipBox;
