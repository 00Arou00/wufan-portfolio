# Wufan Portfolio

A personal portfolio website for Wufan Chen, a brand strategist and content creator. The site is a bilingual (English/Chinese) single-page React application showcasing her background, internship experience, brand strategy projects, and creative works.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** Wouter
- **UI Components:** shadcn/ui (Radix UI primitives)
- **State/Data:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React, React Icons

## Project Structure

```
/
├── src/
│   ├── components/    # Reusable UI components
│   │   └── ui/        # shadcn/ui low-level components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page-level components
│   │   ├── Portfolio.tsx  # Main portfolio page
│   │   └── not-found.tsx  # 404 page
│   ├── App.tsx        # App entry with routing
│   └── main.tsx       # React DOM mount
├── public/
│   ├── images/        # Project screenshots and assets
│   └── video/         # Video assets
├── vite.config.ts     # Vite config (port 5000, host 0.0.0.0)
└── package.json
```

## Development

```bash
npm run dev    # Start dev server on port 5000
npm run build  # Build for production (output: dist/public)
npm run serve  # Preview production build
```

## Deployment

Configured as a **static** deployment:
- Build command: `npm run build`
- Public directory: `dist/public`
