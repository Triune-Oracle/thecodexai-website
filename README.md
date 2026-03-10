# The Codex AI Hub — Public Website

A Next.js landing page for the Codex AI Hub, featuring a hero section, feature showcase, Fractal AI Lab highlight, and email waitlist integration.

## Features

- **Modern Landing Page** - Hero section with glyph, tagline, and CTAs
- **Feature Showcase** - Logos Agency, Fractal AI Lab, Fintech Legion Ops
- **Waitlist Form** - Email validation and in-memory storage (upgradeable to database)
- **Backend Integration** - API client for connecting to swarm backend
- **Responsive Design** - Mobile-first, Tailwind CSS styling
- **Vercel Ready** - One-click deployment to Vercel

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Deployment:** Vercel

## Project Structure

```
thecodexai-website/
├── app/
│   ├── api/
│   │   ├── health/route.ts          # Health check endpoint
│   │   └── waitlist/route.ts        # Waitlist API
│   ├── components/
│   │   ├── Header.tsx               # Navigation header
│   │   ├── Footer.tsx               # Footer with links
│   │   └── WaitlistForm.tsx         # Email signup form
│   ├── layout.tsx                   # Root layout with metadata
│   ├── page.tsx                     # Landing page
│   └── globals.css                  # Global styles
├── lib/
│   ├── api-client.ts                # API client utilities
│   └── validation.ts                # Form validation schemas
├── public/                          # Static assets
├── .env.example                     # Environment variables template
├── next.config.js                   # Next.js configuration
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── vercel.json                      # Vercel deployment config
└── package.json                     # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/codexai/thecodexai-website.git
cd thecodexai-website

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Backend API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

# For production:
# NEXT_PUBLIC_API_BASE_URL=https://api.thecodexai.com

# Feature Flags
NEXT_PUBLIC_ENABLE_WAITLIST=true
NEXT_PUBLIC_ENABLE_LAB=true
```

## API Endpoints

### Health Check
```bash
GET /api/health
```

Returns:
```json
{
  "status": "ok",
  "timestamp": "2024-03-10T12:00:00Z",
  "version": "1.0.0"
}
```

### Waitlist Signup
```bash
POST /api/waitlist
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe" (optional)
}
```

Returns:
```json
{
  "message": "Successfully added to waitlist",
  "position": 42,
  "email": "user@example.com"
}
```

### Check Waitlist Position
```bash
GET /api/waitlist?email=user@example.com
```

Returns:
```json
{
  "email": "user@example.com",
  "position": 42,
  "joinedAt": "2024-03-10T12:00:00Z",
  "totalOnWaitlist": 150
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Select "Next.js" framework
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `NEXT_PUBLIC_API_BASE_URL` pointing to your backend

4. **Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add `thecodexai.com`
   - Update DNS records as instructed

### Deploy to Other Platforms

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Docker (Self-hosted):**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./.next
COPY public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

## Customization

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  cosmic: '#0a0e27',
  gold: '#d4af37',
  teal: '#20b2aa',
  crimson: '#dc143c',
  indigo: '#4b0082',
}
```

### Change Fonts
Edit `app/globals.css` and `tailwind.config.ts`:
```ts
fontFamily: {
  cormorant: ['Cormorant Garamond', 'serif'],
  inter: ['Inter', 'sans-serif'],
  garamond: ['EB Garamond', 'serif'],
}
```

### Add New Pages
Create new files in `app/`:
```
app/
├── about/
│   └── page.tsx
├── blog/
│   └── page.tsx
└── contact/
    └── page.tsx
```

### Connect to Backend Database
Replace in-memory waitlist with database:

```ts
// app/api/waitlist/route.ts
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  
  // Check if exists
  const existing = await db.waitlist.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ message: 'Already on waitlist' }, { status: 409 });
  
  // Create entry
  const entry = await db.waitlist.create({
    data: { email, position: (await db.waitlist.count()) + 1 },
  });
  
  return NextResponse.json(entry, { status: 201 });
}
```

## Testing

### Manual Testing

1. **Test Waitlist Form**
   - Navigate to http://localhost:3000
   - Scroll to "Join the Waitlist" section
   - Enter valid email → Should see success message
   - Enter invalid email → Should see validation error
   - Enter duplicate email → Should see "already on waitlist" message

2. **Test API Endpoints**
   ```bash
   # Health check
   curl http://localhost:3000/api/health
   
   # Join waitlist
   curl -X POST http://localhost:3000/api/waitlist \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}'
   
   # Check position
   curl "http://localhost:3000/api/waitlist?email=test@example.com"
   ```

3. **Test Responsiveness**
   - Open DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test on mobile, tablet, desktop sizes

### Automated Testing

```bash
# Run TypeScript type checking
npm run type-check

# Run linting
npm run lint
```

## Performance Optimization

- **Image Optimization:** Next.js automatically optimizes images
- **Code Splitting:** Automatic code splitting per route
- **CSS Minification:** Tailwind CSS purges unused styles
- **API Caching:** Configure cache headers in `next.config.js`

## Security

- **CSRF Protection:** Built into Next.js
- **XSS Prevention:** React automatically escapes content
- **Security Headers:** Configured in `next.config.js`
- **Input Validation:** Zod schema validation on all forms
- **HTTPS:** Enforced on Vercel deployment

## Monitoring & Analytics

### Add Google Analytics
```ts
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Monitor Errors
Use Sentry for error tracking:
```bash
npm install @sentry/nextjs
```

## Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### API Connection Issues
1. Check `NEXT_PUBLIC_API_BASE_URL` environment variable
2. Verify backend is running and accessible
3. Check CORS headers on backend
4. Review browser console for errors

### Deployment Issues
- Check Vercel build logs: https://vercel.com/dashboard
- Verify environment variables are set
- Ensure Node.js version compatibility (18+)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

- **Documentation:** https://docs.thecodexai.com
- **Issues:** https://github.com/codexai/thecodexai-website/issues
- **Email:** support@thecodexai.com
- **Twitter:** @codexai

## Roadmap

- [ ] Blog/Codex Scrolls section
- [ ] Interactive Mandelbrot explorer
- [ ] User authentication
- [ ] Commission request system
- [ ] Payment integration (Stripe)
- [ ] Real-time notifications
- [ ] Dark/light theme toggle
- [ ] Multi-language support

---

**Built with ⚜ by the Codex AI Team**
