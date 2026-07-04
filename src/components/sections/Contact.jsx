"use client";

import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionHead } from "./Work";

const EMAIL = "kalejaiyeoluwadara1@gmail.com";

// Live Lagos clock for the footer
function LagosTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Lagos",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>Lagos {time} GMT+1</span>;
}

const inputStyles =
  "w-full border-b border-line bg-transparent py-3 text-[15px] outline-none transition-colors placeholder:text-muted focus:border-cobalt";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        createdAt: new Date().toISOString(),
      });
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 pt-20 sm:pt-28 pb-10">
      <SectionHead index="05" label="Contact" />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16"
      >
        {/* Closing statement + email */}
        <motion.div variants={fadeUp} className="flex flex-col gap-8 lg:col-span-6">
          <h2 className="font-display text-[11vw] leading-[1.02] sm:text-[56px] lg:text-[64px]">
            Let&apos;s build
            <br />
            something real<span className="text-cobalt">.</span>
          </h2>
          <div className="flex flex-col gap-3">
            <button
              onClick={copyEmail}
              className="group flex w-fit items-center gap-2 text-left text-[15px] sm:text-[17px] font-medium cursor-pointer"
            >
              <span className="nav-link">{EMAIL}</span>
              <span className="font-mono text-[11px] text-muted transition-colors group-hover:text-cobalt">
                {copied ? "copied ✓" : "click to copy"}
              </span>
            </button>
            <div className="flex items-center gap-5 mt-2">
              <a href="https://github.com/kalejaiyeoluwadara" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-cobalt transition-colors">
                <BsGithub size={17} />
              </a>
              <a href="https://www.linkedin.com/in/oluwadara-kalejaiye-346095260" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-cobalt transition-colors">
                <BsLinkedin size={16} />
              </a>
              <a href="https://twitter.com/dara_kalejaiye" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-muted hover:text-cobalt transition-colors">
                <BsTwitterX size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 lg:col-span-6"
        >
          <label className="eyebrow" htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" required placeholder="Ada Lovelace" className={inputStyles} />

          <label className="eyebrow mt-6" htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required placeholder="you@company.com" className={inputStyles} />

          <label className="eyebrow mt-6" htmlFor="contact-message">What are you building?</label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="A short note about the project, timeline, and budget."
            className={`${inputStyles} resize-none`}
          />

          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-coal px-6 py-3.5 text-[14px] font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50 dark:bg-cream dark:text-ink cursor-pointer"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <BsArrowUpRight size={13} />
            </button>
            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[12px] text-emerald-500"
                >
                  Sent — I&apos;ll reply within a day.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[12px] text-red-400"
                >
                  Couldn&apos;t send — email me directly instead.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </motion.div>

      {/* Footer */}
      <footer className="mt-24 border-t border-line pt-6 pb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} Oluwadara Kalejaiye
        </p>
        <p className="font-mono text-[11px] text-muted">
          <LagosTime />
        </p>
        <a href="#home" className="nav-link font-mono text-[11px] text-muted">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}

export default Contact;
