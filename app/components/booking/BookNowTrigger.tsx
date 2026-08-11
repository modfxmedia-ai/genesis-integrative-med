"use client";

import { useBookingPopup } from "@/app/components/booking/BookingPopupProvider";

/**
 * Drop-in replacement for `<a href={CONTACT.bookingUrl}>` CTAs, opens the
 * shared lead-capture popup instead of navigating to the booking widget URL.
 * Accepts the same className/children so existing CTA styling is preserved.
 */
export default function BookNowTrigger({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open } = useBookingPopup();
  return (
    <button type="button" onClick={open} className={className} {...rest}>
      {children}
    </button>
  );
}
