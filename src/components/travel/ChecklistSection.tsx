import { useState } from "react";
import { motion } from "framer-motion";

interface ChecklistItem {
  text: string;
}

const items: ChecklistItem[] = [
  { text: "身份证原件（所有景区和交通必需）" },
  { text: "舒适的运动鞋（即便打车，也会有一定的步行量）" },
  { text: "常用药品（感冒药、肠胃药）" },
  { text: "提前下好的「重庆公交/地铁码」或准备零钱" },
];

const ChecklistSection = () => {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));

  const toggle = (idx: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-6 rounded-xl border border-coral/20 bg-coral-soft p-5"
    >
      <h4 className="mb-4 font-serif text-lg font-semibold text-coral">
        📋 必带清单
      </h4>
      <div className="space-y-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="flex w-full items-start gap-3 text-left transition-all"
          >
            <div
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                checked[i]
                  ? "border-coral bg-coral"
                  : "border-coral/40 bg-transparent"
              }`}
            >
              {checked[i] && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span
              className={`font-sans text-sm leading-relaxed transition-all duration-200 ${
                checked[i] ? "text-foreground/40 line-through" : "text-foreground/80"
              }`}
            >
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ChecklistSection;
