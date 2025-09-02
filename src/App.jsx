import React, { useMemo } from "react";

// Koramangala Chess Workshop – Full Landing Page (UPI + WhatsApp flow)
// ASCII-only JSX, safe Tailwind classes. Includes: Header, Hero, About, Curriculum, Sessions, Venue,
// Booking, Testimonials, FAQ, Footer. No QR or payment gateway.

// ===== CONFIG =====
const DISPLAY_NUMBER = "6901135664";      // UPI to this mobile number
const WHATSAPP_NUMBER = "916901135664";   // WhatsApp (with country code)
// ==================

// --- Helpers ---
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
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold text-xl tracking-tight">Koramangala Chess</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#curriculum" className="hover:text-slate-700">What You Will Learn</a>
            <a href="#sessions" className="hover:text-slate-700">Upcoming</a>
            <a href="#venue" className="hover:text-slate-700">Venue</a>
            <a href="#faq" className="hover:text-slate-700">FAQ</a>
          </nav>
          <a href="#book" className="inline-flex items-center rounded-2xl px-4 py-2 text-white bg-slate-900 hover:bg-slate-800 transition shadow">Book for Rs 499</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-200/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Weekend Chess Workshop in <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Koramangala</span></h1>
            <p className="mt-4 text-lg text-slate-700">Learn, play, and level up in a cozy home setup with just 8-10 players. A focused, fun, and hands-on 90-minute session designed for real improvement.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>1.5 hours, Sundays 4:00-5:30 PM</li>
              <li>Small group coaching (8-10 seats only)</li>
              <li>Live puzzles, guided games, feedback</li>
              <li>Flat price: <b>Rs 499</b> per person</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center rounded-2xl px-6 py-3 text-white bg-slate-900 hover:bg-slate-800 transition shadow">Reserve your seat - Rs 499</a>
              <a href="#curriculum" className="inline-flex items-center rounded-2xl px-6 py-3 border border-slate-300 hover:bg-white transition">What you will learn</a>
            </div>
            <p className="mt-3 text-sm text-slate-500">Exact address shared after booking - Koramangala (heart of Bangalore)</p>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 shadow-sm bg-white overflow-hidden">
              <div className="grid grid-cols-3 h-64">
                <img src="https://images.unsplash.com/photo-1544033527-aa6759ba3b8b?q=80&w=1200&auto=format&fit=crop" alt="Chess board 1" className="w-full h-full object-cover" />
                <img src="https://images.unsplash.com/photo-1529694157871-0e7badb3b0e5?q=80&w=1200&auto=format&fit=crop" alt="Chess board 2" className="w-full h-full object-cover" />
                <img src="https://images.unsplash.com/photo-1612010167108-3e7d4b5f9a3f?q=80&w=1200&auto=format&fit=crop" alt="Chess board 3" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl border border-slate-200 shadow p-4 text-sm flex items-center gap-3">
              <img src="/chess-icon.png" alt="Chess icon" className="w-10 h-10" />
              <div>
                <div className="font-semibold">Next session</div>
                <div>Sunday - 4:00-5:30 PM</div>
                <div>Only 10 seats</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Short, sharp, and practical</h2>
            <p className="mt-4 text-slate-700">These 90-minute power sessions are designed to deliver one key skill per class. Learn a focused concept, solve curated puzzles, then play mini-games to lock it in with live feedback.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <p className="font-semibold">Who is this for?</p>
            <ul className="mt-2 space-y-1 text-slate-700 text-sm">
              <li>- Beginners and hobby players</li>
              <li>- Students and young professionals</li>
              <li>- Anyone looking for a fun, brainy weekend</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">What you will learn (rotating themes)</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Checkmate Patterns", points: ["Back rank and Smothered", "Scholars mate and counters", "Real-game drills"] },
              { title: "Tactics Crash Course", points: ["Pins, forks, skewers", "Discovered attacks", "Winning tactics puzzles"] },
              { title: "Openings Made Simple", points: ["Confident first 5 moves", "Italian and Queens Gambit", "Caro-Kann / Sicilian basics"] },
              { title: "Endgame Power 101", points: ["K+P vs K theory", "Rook endgame tricks", "Practical endings"] },
              { title: "Attacking the King", points: ["When sacrifices work", "King safety and initiative", "Model games"] },
              { title: "Solve 10 Killer Puzzles", points: ["Pattern recognition", "Time-pressure solving", "Apply in blitz"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 p-5 bg-gradient-to-b from-white to-slate-50">
                <div className="font-semibold mb-2">{c.title}</div>
                <ul className="text-sm text-slate-700 space-y-1">
                  {c.points.map((p) => (<li key={p}>- {p}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">Themes rotate weekly - attend once, or keep coming back to stack skills.</p>
        </div>
      </section>

      {/* Sessions / Pricing */}
      <section id="sessions" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming sessions</h2>
            <ul className="mt-6 space-y-3">
              {nextSessions.map((s) => (
                <li key={s.date} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 bg-white shadow-sm">
                  <div>
                    <div className="font-semibold">{s.date}</div>
                    <div className="text-sm text-slate-600">{s.time}</div>
                  </div>
                  <a href="#book" className="rounded-xl px-4 py-2 text-sm text-white bg-slate-900 hover:bg-slate-800">Book Rs 499</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="text-sm uppercase tracking-wide text-slate-500">Price</div>
            <div className="mt-1 text-3xl font-extrabold">Rs 499</div>
            <ul className="mt-4 text-sm text-slate-700 space-y-1">
              <li>- Bring your curiosity - boards provided</li>
              <li>- Suitable for ages 14+</li>
              <li>- Exact address shared after confirmation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Venue: Home Lounge, Koramangala</h2>
          <p className="mt-3 text-slate-700 max-w-3xl">A quiet, spacious home setting right in the heart of Bangalores Koramangala. Comfortable seating, great lighting, and a community vibe. Photos shared after booking.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <iframe title="Koramangala Map" className="w-full h-64" loading="lazy" src="https://www.google.com/maps?q=Koramangala,+Bengaluru&output=embed" />
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
              <div className="font-semibold mb-2">Getting here</div>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>- Well-connected by bus and cabs</li>
                <li>- Easy from HSR, Indiranagar, BTM, Jayanagar</li>
                <li>- Parking available on nearby streets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Reserve your seat</h2>
            <p className="mt-3 text-slate-700">Pay Rs 499 via UPI to the mobile number <strong>{DISPLAY_NUMBER}</strong>. After payment, please WhatsApp the screenshot/UTR to <strong>+{WHATSAPP_NUMBER}</strong> for confirmation and the exact address.</p>
            <form onSubmit={handleBook} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input name="name" type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Your full name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input name="email" type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone (WhatsApp)</label>
                  <input name="phone" type="tel" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="10-digit number" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Level</label>
                  <select name="level" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font medium">Choose session</label>
                  <select name="session" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400">
                    {nextSessions.map((s) => (<option key={s.date}>{`${s.date} - ${s.time}`}</option>))}
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full rounded-2xl px-4 py-3 text-white bg-green-700 hover:bg-green-600 shadow">Send details on WhatsApp</button>
              <p className="text-xs text-slate-500 mt-2">Have doubts? <a className="underline" target="_blank" rel="noreferrer" href={`https://wa.me/${WHATSAPP_NUMBER}`}>WhatsApp me</a> any time before booking.</p>
            </form>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="font-semibold">How to reserve</div>
            <ol className="mt-2 space-y-1 text-sm text-slate-700 list-decimal list-inside">
              <li>Send Rs 499 via UPI to the mobile number <strong>{DISPLAY_NUMBER}</strong>.</li>
              <li>WhatsApp the payment screenshot/UTR to <a className="underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">+{WHATSAPP_NUMBER}</a>.</li>
              <li>We will confirm your seat and share the address on WhatsApp.</li>
            </ol>
            <div className="mt-6 font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>WhatsApp: <a className="underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">+{WHATSAPP_NUMBER}</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Why players love it</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { quote: "Short, punchy, and super helpful. Solved tactics I never saw before!", name: "Aarav (Student)" },
              { quote: "Loved the cozy vibe and personal feedback. 90 minutes well spent.", name: "Meera (Product Manager)" },
              { quote: "Came alone, left with chess friends. Great Koramangala community!", name: "Rohit (Designer)" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 p-5 bg-gradient-to-b from-white to-slate-50 shadow-sm">
                <p className="italic">"{t.quote}"</p>
                <p className="mt-3 text-sm text-slate-600">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <details className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <summary className="font-semibold cursor-pointer">What is the exact location?</summary>
            <p className="mt-2 text-sm text-slate-700">Koramangala, Bangalore. We share the full address and directions after booking for privacy/safety.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <summary className="font-semibold cursor-pointer">Is Rs 499 refundable?</summary>
            <p className="mt-2 text-sm text-slate-700">You can reschedule once to a future session if you inform us at least 24 hours before the start time. Otherwise the fee is non-refundable.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <summary className="font-semibold cursor-pointer">Do I need to bring a chessboard?</summary>
            <p className="mt-2 text-sm text-slate-700">Boards are provided, but feel free to bring your own if you prefer.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <summary className="font-semibold cursor-pointer">Who will teach the class?</summary>
            <p className="mt-2 text-sm text-slate-700">An experienced chess player/coach (you). Add your rating, achievements, or coaching highlights here.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold text-lg">Koramangala Chess</div>
            <p className="mt-2 text-sm text-slate-300">Home-based weekend workshops in the heart of Bangalore. Learn fast, play better, meet chess friends.</p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 text-sm text-slate-300 space-y-1">
              <li>WhatsApp: <a className="underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">+{WHATSAPP_NUMBER}</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Policies</div>
            <ul className="mt-2 text-sm text-slate-300 space-y-1">
              <li>Reschedule up to 24h before session</li>
              <li>No-show = fee forfeited</li>
              <li>Small group: 10 seats max</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Koramangala Chess Workshop</span>
            <a href="#top" className="underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
