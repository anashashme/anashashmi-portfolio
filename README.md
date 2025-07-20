# Cybersecurity Portfolio

A modern, interactive cybersecurity professional portfolio built with Next.js, featuring cutting-edge security visualizations and cyber-themed UI components.

## 🚀 Features

- **Interactive Security Visualizations**: Real-time threat maps, network monitoring displays, and security analytics
- **Cyber-Themed UI**: Matrix rain effects, terminal-style interfaces, and dark theme aesthetics
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **SEO Friendly**: Built-in SEO optimization for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Charts**: D3.js, Recharts
- **3D Graphics**: Three.js
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cybersecurity-portfolio.git
   cd cybersecurity-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain (Optional)**
   - In your Vercel dashboard, go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

### Deploy on Other Platforms

- **Netlify**: Connect your GitHub repo and set build command to `npm run build`
- **Railway**: Push to GitHub and connect your repository
- **DigitalOcean App Platform**: Connect your GitHub repo

## 📁 Project Structure

```
portfolio-master/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── skills.tsx        # Skills section
│   ├── projects.tsx      # Projects section
│   ├── experience.tsx    # Experience section
│   ├── contact.tsx       # Contact section
│   └── ...               # Other components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Customization

### Personal Information
Update your personal information in the respective component files:
- `components/hero.tsx` - Name, title, and introduction
- `components/about.tsx` - About section content
- `components/skills.tsx` - Skills and technologies
- `components/projects.tsx` - Your projects
- `components/experience.tsx` - Work experience
- `components/contact.tsx` - Contact information

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Edit individual component files for specific styling

### Images
Replace images in the `public/images/` directory with your own:
- Profile picture: `profile-image.png`
- Project screenshots
- Company logos

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out through the contact form on the portfolio website.

---

Built with ❤️ using Next.js and modern web technologies. 