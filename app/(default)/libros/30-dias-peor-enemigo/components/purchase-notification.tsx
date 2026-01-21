"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LogoSR from "@/public/images/book-30-dias-cover.png";

interface Purchase {
  name: string;
  location: string;
  time: string;
}

const PURCHASES: Purchase[] = [
  { name: "Car••• Gó•••", location: "Bogotá, Colombia", time: "hace 3 minutos" },
  { name: "Mar••• Rod••••", location: "Ciudad de México, México", time: "hace 7 minutos" },
  { name: "And••• Tor•••", location: "Buenos Aires, Argentina", time: "hace 12 minutos" },
  { name: "Lui• Fer••••••", location: "Lima, Perú", time: "hace 18 minutos" },
  { name: "Dia•• San••••", location: "Santiago, Chile", time: "hace 25 minutos" },
  { name: "Jos• Men••••", location: "Medellín, Colombia", time: "hace 34 minutos" },
  { name: "Ped•• Cas•••••", location: "Quito, Ecuador", time: "hace 41 minutos" },
  { name: "Mig••• Ort••", location: "Montevideo, Uruguay", time: "hace 52 minutos" },
  { name: "Rob••••• Ram•••", location: "Caracas, Venezuela", time: "hace 1 hora" },
  { name: "Fer••••• Var•••", location: "San José, Costa Rica", time: "hace 1 hora" },
  { name: "Ale•••••• Mor•••", location: "Panamá, Panamá", time: "hace 2 horas" },
  { name: "Dan••• Cas•••", location: "Guadalajara, México", time: "hace 2 horas" },
  { name: "Cam••• Gar•••", location: "Cali, Colombia", time: "hace 3 horas" },
];

export default function PurchaseNotification() {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      // Selecciona una compra aleatoria
      const randomPurchase = PURCHASES[Math.floor(Math.random() * PURCHASES.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      // Oculta después de 5 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Primera notificación después de 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);

    // Notificaciones subsecuentes cada 8-12 segundos
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 4000) + 8000; // 8-12 segundos
      setTimeout(showNotification, randomDelay);
    }, 13000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && currentPurchase && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-4 sm:right-auto z-50 max-w-sm"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl">
            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative flex items-start gap-4 p-4">
              {/* Logo SR Academy */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/60 shadow-lg overflow-hidden">
                <Image
                  src={LogoSR}
                  alt="SR Academy"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-100">
                      {currentPurchase.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {currentPurchase.location}
                    </p>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="shrink-0 text-slate-500 hover:text-slate-300 transition-colors"
                    aria-label="Cerrar"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-medium text-green-400">Compró el libro</span>
                  </div>

                  <span className="text-xs text-slate-500">•</span>

                  <span className="text-xs text-slate-500">{currentPurchase.time}</span>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-1 bg-blue-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}