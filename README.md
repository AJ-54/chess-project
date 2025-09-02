# Koramangala Chess Workshop – Landing Page

A single-page React site (Vite + Tailwind). Perfect for Vercel/Netlify. Price ₹499, 90-minute sessions in Koramangala.

## Quick Start
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## Build
```bash
npm run build
```
Static files will be in `dist/`.

## Deploy to Vercel (recommended)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **New Project** → Import your repo.
3. Framework: **Vite** (auto-detected).  
   Build: `vite build` (or `npm run build`)  
   Output dir: `dist`
4. Click **Deploy**.

## Deploy to Netlify
- Site settings: Build command `npm run build`, Publish directory `dist/`.
- Or drag-and-drop the `dist/` folder to Netlify **after** building locally.

## Customize
- Update `PAYMENT_LINK` in `src/App.jsx` with your Razorpay/Instamojo link.
- Replace contact details in the footer.
- Swap hero images or add your room photos.
