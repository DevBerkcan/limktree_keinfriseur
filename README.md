# KEINFRISEUR. - Link in Bio

A modern, animated "link-in-bio" landing page for the barber/hair salon brand **KEINFRISEUR.** Built with Next.js 14, TypeScript, Tailwind CSS, HeroUI components, and Framer Motion animations.

## Features

- **Modern Design**: Red and white color scheme with gold accents
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Analytics Tracking**: Built-in analytics for page views, link clicks, and time on page
- **Mobile-First**: Fully responsive design
- **SEO Optimized**: Meta tags and Open Graph support
- **Cookie Consent**: GDPR-compliant cookie banner
- **Accessibility**: ARIA labels and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: HeroUI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
limktree_keinfriseur/
├── app/
│   ├── api/
│   │   └── analytics/
│   │       └── route.ts          # Analytics API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with SEO
│   └── page.tsx                  # Main landing page
├── components/
│   ├── ProfileCard.tsx           # Profile header with logo
│   ├── LinkButton.tsx            # Animated link buttons
│   ├── Footer.tsx                # Footer with social links
│   └── CookieBanner.tsx          # Cookie consent banner
├── hooks/
│   └── useAnalytics.ts           # Analytics tracking hook
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Other Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Analytics

The application includes a built-in analytics system that tracks:

### Tracked Events

1. **page_view** - When a user first loads the page
2. **link_click** - When a user clicks any link button
   - Includes: label, URL, and position
3. **time_on_page** - How long the user stayed on the page
   - Sent on page unload

### Viewing Analytics

During development, analytics events are logged to the **server console** where you're running `npm run dev`.

Look for console logs that start with `📊 Analytics Event:` in your terminal.

Example output:
```
📊 Analytics Event: {
  event: 'link_click',
  time: '2025-11-14T22:30:45.123Z',
  path: '/',
  sessionId: 'session_1731623445...',
  data: {
    label: 'Instagram',
    url: 'https://instagram.com/keinfraiseur',
    position: 1
  },
  utm: { source: 'facebook', medium: 'social' },
  device: {
    screen: '1920x1080',
    userAgent: 'Mozilla/5.0...'
  }
}
```

### Integrating Real Analytics

The analytics system is designed to be easily replaced. Open `/app/api/analytics/route.ts` and uncomment/add your preferred analytics service:

- **PostHog**
- **Plausible**
- **Google Analytics**
- **Custom Database** (Prisma, Supabase, etc.)

See the comments in the file for integration examples.

### UTM Parameter Tracking

The analytics automatically captures UTM parameters from the URL:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

Example: `https://yourdomain.com/?utm_source=instagram&utm_medium=bio`

## Customization

### Updating Links

Edit the `links` array in `/app/page.tsx`:

```typescript
const links = [
  {
    label: "Online buchen",
    href: "https://your-booking-url.com",
    icon: Calendar,
    variant: "primary" as const,
  },
  // Add more links...
];
```

### Changing Colors

Update the color palette in `/tailwind.config.ts`:

```typescript
colors: {
  barber: {
    red: "#DC2626",      // Main red
    darkRed: "#991B1B",  // Darker red
    gold: "#D4AF37",     // Accent gold
    // ...
  },
}
```

### Profile Information

Edit the content in `/components/ProfileCard.tsx`:

```typescript
<h1>KEINFRISEUR.</h1>
<p>Your custom subtitle here</p>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use for personal or commercial projects.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for KEINFRISEUR.
