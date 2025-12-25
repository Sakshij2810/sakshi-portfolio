# Sakshi Jadhav - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring innovative animations and a rich, professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop)

## 🚀 Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## ✨ Features

- 🎨 **Rich Dark Theme** with warm terracotta accents and gradient effects
- 📱 **Fully Responsive** across all devices (mobile, tablet, desktop)
- ⚡ **Lightning-fast** performance with Vite and code splitting
- 🎭 **Innovative Animations** with Framer Motion (parallax, stagger, spring physics)
- 🖼️ **Project Showcase** with category filtering and detailed modals
- 📊 **10+ Projects** organized by category (Web Apps, Internal Apps, Odoo ERP, Personal)
- ♿ **Accessible** and **SEO-optimized** with semantic HTML
- 🔗 **Easy to customize** - all content in one data file

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sakshij2810/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command to `npm run build`
4. Set publish directory to `dist`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills & technologies
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Featured projects
│   ├── Certifications.tsx # Education & certs
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/
│   └── resume.ts       # All resume data (edit here!)
├── hooks/
│   └── useInView.ts    # Intersection observer hook
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## ✏️ Customization

All content is centralized in `src/data/resume.ts`. Update this file to customize:

- Personal information
- Skills & technologies
- Work experience
- Projects (with images, descriptions, technologies, and live links)
- Certifications
- Education

### Adding Project Images

1. Add your images to `public/projects/`
2. Update the `image` field in `src/data/resume.ts`:

```typescript
{
  id: "my-project",
  title: "My Project",
  image: "/projects/my-project.jpg", // Local image
  // or use external URL:
  // image: "https://example.com/image.jpg",
  ...
}
```

### Recommended Image Size
- **Project cards**: 800x500px (16:10 aspect ratio)
- **Formats**: JPG, PNG, or WebP

## 📝 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ by Sakshi Jadhav

# sakshi-portfolio
