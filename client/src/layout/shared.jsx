import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export function Section({ children, className = "" }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function Button({
  children,
  variant = "primary",
  href = "#",
  className = "",
}) {
  const styles =
    variant === "primary"
      ? "bg-espresso text-white shadow-lg shadow-espresso/20 hover:bg-coffee"
      : "border border-espresso/15 bg-white/45 text-espresso hover:border-espresso/35 hover:bg-white/80";

  return (
    <Link
      to={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PlaceholderArtwork({
  label,
  tone = "from-accent/30 to-sand",
}) {
  return (
    <div
      className={`relative isolate min-h-64 overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${tone} p-6`}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/35 blur-2xl" />

      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/60 bg-white/45 p-5 backdrop-blur-md">
        <div className="mb-4 h-28 rounded-2xl bg-linen/70 shadow-inner" />

        <p className="font-heading text-2xl font-bold text-ink">
          {label}
        </p>

        <p className="mt-1 text-sm text-muted">
          Premium product image placeholder
        </p>
      </div>
    </div>
  );
}