"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-8 text-center"
    >
      {/* Floating scissors decoration */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-6 right-8 text-barber-red opacity-30"
        aria-hidden="true"
      >
        <Scissors size={32} />
      </motion.div>

      {/* Logo/Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-barber-red to-barber-darkRed shadow-lg ring-4 ring-barber-white"
      >
        <span className="text-3xl font-bold text-barber-white">KF</span>
      </motion.div>

      {/* Salon Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-3 text-3xl font-extrabold tracking-tight text-barber-black"
      >
        KEINFRISEUR<span className="text-barber-red">.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-4 px-4 text-base text-barber-grey-600 text-balance"
      >
        Dein Barber & Hairstylist – moderne Cuts, Fades & Bartpflege
      </motion.p>

      {/* Location & Booking Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-2 text-sm text-barber-grey-500"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-barber-red" />
        <span>Düsseldorf</span>
        <span className="text-barber-grey-300">•</span>
        <span>Termin nur mit Online-Buchung</span>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-barber-red via-barber-gold to-barber-red"
      />
    </motion.div>
  );
};
