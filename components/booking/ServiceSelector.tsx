"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Scissors, Clock } from "lucide-react";
import type { Service } from "@/lib/api/booking";

interface ServiceSelectorProps {
  services: Service[];
  selectedService: Service | null;
  onSelect: (service: Service) => void;
}

export function ServiceSelector({ services, selectedService, onSelect }: ServiceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-barber-black mb-2">
          Wähle deine Leistung
        </h2>
        <p className="text-barber-grey-600">
          Schritt 1 von 3
        </p>
      </div>

      <div className="grid gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              isPressable
              onPress={() => onSelect(service)}
              className={`
                transition-all cursor-pointer
                ${selectedService?.id === service.id
                  ? 'border-2 border-barber-red bg-barber-cream ring-2 ring-barber-red/20'
                  : 'border-2 border-barber-grey-200 hover:border-barber-red/50'
                }
              `}
            >
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-barber-red to-barber-red/80 rounded-2xl shadow-lg">
                    <Scissors className="text-white" size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-xl text-barber-black uppercase tracking-tight">
                          {service.name}
                        </h3>
                        {service.description && (
                          <p className="text-sm text-barber-grey-600 mt-2 leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>

                      {selectedService?.id === service.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-barber-grey-200">
                      <div className="flex items-center gap-2 px-3 py-2 bg-barber-grey-100 rounded-lg">
                        <Clock size={18} className="text-barber-grey-600" />
                        <span className="text-sm font-semibold text-barber-grey-700">
                          {service.durationMinutes} Min
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-barber-grey-500 uppercase tracking-wide mb-1">
                          Preis ab
                        </div>
                        <div className="text-2xl font-black text-barber-red">
                          {service.price.toFixed(2)}
                          <span className="text-base font-semibold ml-1">EUR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
