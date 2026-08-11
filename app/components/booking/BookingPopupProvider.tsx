"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import BookingPopupModal from "@/app/components/booking/BookingPopupModal";

type BookingPopupContextValue = {
  open: () => void;
  close: () => void;
};

const BookingPopupContext = createContext<BookingPopupContextValue | null>(null);

/** Access the shared "book now" lead-capture popup from any client component. */
export function useBookingPopup() {
  const ctx = useContext(BookingPopupContext);
  if (!ctx) {
    throw new Error("useBookingPopup must be used within BookingPopupProvider");
  }
  return ctx;
}

/**
 * Mounted once in the root layout, provides `useBookingPopup()` to every
 * page so any "Book Now" / "Schedule Appointment" CTA can open the shared
 * lead-capture modal instead of navigating away to the booking widget URL.
 */
export default function BookingPopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <BookingPopupContext.Provider value={{ open, close }}>
      {children}
      <BookingPopupModal isOpen={isOpen} onClose={close} />
    </BookingPopupContext.Provider>
  );
}
