# Online Stage Clock - Professional Event Timing Solutions

A professional timing solution for events, performances, and presentations featuring live clock, timer, countdown, and stopwatch with fullscreen capabilities.

## 🚀 Features

- **Live Digital Clock** - High-precision digital clock with 12/24 hour formats
- **Timer** - Set precise countdown timers for presentations and timed segments  
- **Countdown** - Count down to specific dates and times for special events
- **Stopwatch** - Accurate stopwatch for timing performances and activities
- **Fullscreen Mode** - Press `F` for fullscreen display
- **Customizable Display** - Adjustable colors, fonts, and display options
- **SEO Optimized** - Ready for search engines with structured data
- **AdSense Ready** - Configured for Google AdSense integration
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Deployment**: GitHub Pages

## 🌐 Live Demo

Visit: [Online Stage Clock](https://your-username.github.io/online-stage-clock/)

## 📱 Routes

- `/` - Home page with features overview
- `/clock` - Live digital clock
- `/timer` - Timer functionality  
- `/countdown` - Countdown timer
- `/stopwatch` - Stopwatch
- `/blog` - Clock and timing blog articles

## 🚀 GitHub Pages Deployment

### Prerequisites
1. GitHub repository
2. GitHub Pages enabled in repository settings

### Automatic Deployment
The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

### Manual Deployment Steps

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Configure Base Path** (if using a subdirectory):
   - The project is configured for `/online-stage-clock/` base path
   - Update `vite.config.ts` if your repository name is different

3. **Deploy**:
   - Push changes to the main branch
   - GitHub Actions will automatically build and deploy
   - Site will be available at `https://username.github.io/repository-name/`

### Troubleshooting Blank Page Issues

If you see a blank page on GitHub Pages:

1. **Check Base Path Configuration**:
   ```typescript
   // vite.config.ts
   base: mode === 'production' ? '/your-repo-name/' : '/',
   ```

2. **Verify App.tsx Router Configuration**:
   ```typescript
   <BrowserRouter basename={import.meta.env.PROD ? '/your-repo-name' : ''}>
   ```

3. **Check GitHub Pages Settings**:
   - Ensure Pages is set to "GitHub Actions" source
   - Verify the repository is public (or you have Pages enabled for private repos)

4. **Review Build Process**:
   - Check GitHub Actions workflow status
   - Ensure all dependencies are properly installed
   - Verify TypeScript compilation succeeds

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/online-stage-clock.git
cd online-stage-clock

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 SEO Configuration

The project includes comprehensive SEO optimization:

- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Twitter Card metadata
- Structured data (JSON-LD) for search engines
- Sitemap and robots.txt
- Canonical URLs

## 💰 AdSense Integration

To enable AdSense:

1. Apply for Google AdSense approval
2. Replace `ca-pub-XXXXXXXXXXXXXXXX` in `index.html` with your AdSense client ID
3. Update AdSense ad slot IDs in components
4. Test ad placements in production environment

## 🎨 Customization

### Clock Display Options
- Text color and background color
- Font size adjustment
- 12/24 hour format toggle
- Fullscreen mode (press F key)

### Design System
The project uses a comprehensive design system with:
- Semantic color tokens in `index.css`
- Tailwind CSS configuration
- shadcn/ui component library
- Responsive design patterns

## 🔧 Configuration Files

- `vite.config.ts` - Build configuration and GitHub Pages setup
- `tailwind.config.ts` - Styling and design system
- `.github/workflows/deploy.yml` - GitHub Actions deployment
- `public/404.html` - SPA routing support for GitHub Pages

## 📖 Blog Content

Includes 25+ high-quality blog articles about:
- Clock technology and digital displays
- Event timing best practices
- Stage management techniques
- Time perception in performances
- Marketing countdown strategies
- And much more...

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/your-username/online-stage-clock/issues)
2. Review the troubleshooting section above
3. Ensure all configuration files match your repository setup
4. Verify GitHub Pages is properly enabled

## 🌟 Features Coming Soon

- Multiple timer presets
- Sound notifications
- Color themes
- Export timing data
- Integration with presentation software

---

**Built for events, performances, and presentations worldwide** 🎭⏰