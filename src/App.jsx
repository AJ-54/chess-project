import React, { useMemo } from "react";

// Koramangala Chess Workshop – Landing Page (UPI + WhatsApp flow)
// Simplified JSX, safe ASCII only.

const DISPLAY_NUMBER = "6901135664";      // UPI to this mobile number
const WHATSAPP_NUMBER = "916901135664";   // WhatsApp (with country code)

function buildWhatsappUrl(phoneWithCountryCode, text) {
  return `https://wa.me/${phoneWithCountryCode}?text=${encodeURIComponent(text)}`;
}

function composeWhatsappMessage({ name, email, phone, level, session }) {
  return (
    "Hi! I want to reserve a seat for the Koramangala Chess workshop." +
    "\n\n" +
    `Name: ${name}` +
    "\n" +
    `Email: ${email}` +
    "\n" +
    `Phone: ${phone}` +
    "\n" +
    `Level: ${level}` +
    "\n" +
    `Session: ${session}` +
    "\n\n" +
    `I have paid Rs 499 via UPI to the mobile number ${DISPLAY_NUMBER}. Screenshot/UTR attached.`
  );
}

export default function ChessWorkshopLanding() {
  const nextSessions = useMemo(
    () => [
      { date: "This Sunday", time: "4:00 - 5:30 PM" },
      { date: "Next Sunday", time: "4:00 - 5:30 PM" },
    ],
    []
  );

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const level = form.level.value;
    const session = form.session.value;

    if (!name || !phone) {
      alert("Please fill your name and phone (WhatsApp).");
      return;
    }

    const msg = composeWhatsappMessage({ name, email, phone, level, session });
    const wa = buildWhatsappUrl(WHATSAPP_NUMBER, msg);
    window.open(wa, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold text-xl tracking-tight">
            Koramangala Chess
          </a>
          <a
            href="#book"
            className="inline-flex items-center rounded-2xl px-4 py-2 text-white bg-slate-900 hover:bg-slate-800 transition shadow"
          >
            Book for Rs 499
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-200/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Weekend Chess Workshop in{" "}
              <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
                Koramangala
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Learn, play, and level up in a cozy home setup with just 8-10
              players. A focused, fun, and hands-on 90-minute session designed
              for real improvement.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>1.5 hours, Sundays 4:00-5:30 PM</li>
              <li>Small group coaching (8-10 seats only)</li>
              <li>Live puzzles, guided games, feedback</li>
              <li>
                Flat price: <b>Rs 499</b> per person
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center rounded-2xl px-6 py-3 text-white bg-slate-900 hover:bg-slate-800 transition shadow"
              >
                Reserve your seat - Rs 499
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center rounded-2xl px-6 py-3 border border-slate-300 hover:bg-white transition"
              >
                What you will learn
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Exact address shared after booking - Koramangala (heart of
              Bangalore)
            </p>
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Reserve your seat</h2>
            <p className="mt-3 text-slate-700">
              Pay Rs 499 via UPI to the mobile number{" "}
              <strong>{DISPLAY_NUMBER}</strong>. After payment, please WhatsApp
              the screenshot/UTR to <strong>+{WHATSAPP_NUMBER}</strong> for
              confirmation and the exact address.
            </p>
            <form onSubmit={handleBook} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone (WhatsApp)</label>
                  <input
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="10-digit number"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Level</label>
                  <select
                    name="level"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Choose session</label>
                  <select
                    name="session"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  >
                    {nextSessions.map((s) => (
                      <option key={s.date}>{`${s.date} - ${s.time}`}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl px-4 py-3 text-white bg-green-700 hover:bg-green-600 shadow"
              >
                Send details on WhatsApp
              </button>
              <p className="text-xs text-slate-500 mt-2">
                Have doubts?{" "}
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                >
                  WhatsApp me
                </a>{" "}
                any time before booking.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
