# 🚀 Modern React Portfolio React + TypeScript + Vite

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Live at [kathan.dev](https://kathan.dev)A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and mobile-first approach.A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a clean design with dark/light mode toggle and smooth animations.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 🚀 Features, two official plugins are available:

- **Modern Tech Stack**: React 18, TypeScript, Vite- **Modern Tech Stack**: React 18, TypeScript, Vite- **Modern Design**: Clean, professional layout inspired by top portfolio websites- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Responsive Design**: Mobile-first approach with Tailwind CSS

- **Smooth Animations**: Framer Motion for engaging user experience- **Responsive Design**: Mobile-first approach with Tailwind CSS

- **Dark/Light Theme**: Toggle between themes

- **SEO Optimized**: Meta tags and semantic HTML- **Smooth Animations**: Framer Motion for engaging user experience- **Responsive**: Mobile-first design that looks great on all devices- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Performance**: Optimized bundle size and fast loading

- **Contact Form**: Functional contact form- **Dark/Light Theme**: Toggle between themes

- **Project Showcase**: Interactive project gallery

- **SEO Optimized**: Meta tags and semantic HTML- **Dark/Light Mode**: Theme toggle with system preference detection

## 🛠️ Installation & Setup

- **Performance**: Optimized bundle size and fast loading

1. **Clone the repository**

   ```bash- **Accessibility**: ARIA labels and keyboard navigation- **Smooth Animations**: Beautiful animations using Framer Motion## React Compiler

   git clone https://github.com/kathan1509/my-portfolio.git

   cd portfolio-react- **Contact Form**: Functional contact form

   ```

- **Project Showcase**: Interactive project gallery- **Fast & Optimized**: Built with Vite for lightning-fast development and builds

2. **Install dependencies**

   `````````bash## 📁 Project Structure- **SEO Friendly**: Proper meta tags and semantic HTML structureThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

   npm install

   ````````- **Accessible**: Following web accessibility best practices

   `````````

3. **Start development server**portfolio-react/

   ```bash

   npm run dev├── public/## Expanding the ESLint configuration

   ```

│ ├── favicon.svg # Custom portfolio favicon

4. **Build for production**

   ````bash│ └── index.html## 🛠️ Tech Stack

   npm run build

   ```├── src/
   ````

## 🚀 Deployment│ ├── components/ # Reusable UI componentsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

### GitHub Pages (Current Setup)│ │ ├── Footer.tsx

This project is automatically deployed to GitHub Pages at `kathan.dev` using GitHub Actions.│ │ ├── Header.tsx- **Frontend**: React 18, TypeScript

#### How it works:│ │ ├── Logo.tsx

1. **Push to main branch** triggers automatic deployment

2. **GitHub Actions** builds and deploys the site│ │ ├── PageTransition.tsx- **Styling**: Tailwind CSS```js

3. **Custom domain** `kathan.dev` is configured

4. **HTTPS** is automatically enabled│ │ └── Typewriter.tsx

#### DNS Configuration for kathan.dev:│ ├── sections/ # Main page sections- **Animations**: Framer Motionexport default defineConfig([

````

Type: A Records│   │   ├── About.tsx

@ → 185.199.108.153

@ → 185.199.109.153│   │   ├── Contact.tsx- **Icons**: Lucide React globalIgnores(['dist']),

@ → 185.199.110.153

@ → 185.199.111.153│   │   ├── FreelancerAdvantages.tsx



Type: CNAME│   │   ├── Hero.tsx- **Build Tool**: Vite {

www → kathan1509.github.io

```│   │   ├── Projects.tsx



#### To deploy changes:│   │   ├── Skills.tsx- **Deployment Ready**: Optimized for production files: ['**/*.{ts,tsx}'],

```bash

git add .│   │   └── Testimonials.tsx

git commit -m "Your changes"

git push origin main│   ├── data/  extends: [

````

│ │ └── portfolio.ts # Portfolio data and configuration

The site will automatically build and deploy in 2-3 minutes.

│ ├── hooks/## 📋 Prerequisites // Other configs...

## 📁 Project Structure

│ │ └── useTheme.tsx # Theme management hook

```

portfolio-react/│   ├── App.tsx              # Main app component- Node.js (v16 or higher) // Remove tseslint.configs.recommended and replace with this

├── .github/workflows/       # GitHub Actions for deployment

├── public/│   ├── main.tsx             # App entry point

│   ├── CNAME               # Custom domain configuration

│   ├── favicon.svg         # Custom portfolio favicon│   └── index.css            # Global styles and Tailwind- npm or yarn tseslint.configs.recommendedTypeChecked,

│   └── index.html

├── src/├── .gitignore

│   ├── components/         # Reusable UI components

│   ├── sections/           # Main page sections├── package.json      // Alternatively, use this for stricter rules

│   ├── data/portfolio.ts   # Portfolio data and configuration

│   ├── hooks/              # Custom React hooks├── tailwind.config.js       # Tailwind configuration

│   └── styles/             # Global styles and Tailwind

└── vite.config.ts          # Vite configuration with GitHub Pages optimization├── tsconfig.json            # TypeScript configuration## 🚀 Getting Started tseslint.configs.strictTypeChecked,

```

└── vite.config.ts # Vite configuration

## 🎨 Customization

``````// Optionally, add this for stylistic rules

### Personal Information

Edit `src/data/portfolio.ts` to update:

- Personal details (name, title, bio)

- Contact information and social media links## 🛠️ Installation & Setup1. **Clone the repository** tseslint.configs.stylisticTypeChecked,

- Skills and technologies

- Project information and links

- Testimonials

1. **Clone the repository**   ````bash

### Styling

- **Colors**: Modify Tailwind color scheme in `tailwind.config.js`   ```bash

- **Fonts**: Update font family in `src/index.css`

- **Animations**: Customize Framer Motion settings in components   git clone https://github.com/kathan1509/my-portfolio.git   git clone <your-repo-url>      // Other configs...



## 🔧 Technologies Used   cd portfolio-react



- **Frontend**: React 18, TypeScript   ```   cd portfolio-react    ],

- **Styling**: Tailwind CSS

- **Animations**: Framer Motion

- **Icons**: Lucide React

- **Build Tool**: Vite2. **Install dependencies**   ```    languageOptions: {

- **Deployment**: GitHub Pages with Actions

- **Domain**: Custom domain (kathan.dev)   ```bash



## 📈 Performance   npm install      parserOptions: {



- **Lighthouse Score**: 95+ on all metrics`````

- **Bundle Size**: Optimized with code splitting

- **SEO**: Semantic HTML and meta tags`````

- **Accessibility**: WCAG compliant

- **Mobile**: Fully responsive design3. **Start development server**



## 📞 Contact```bash2. **Install dependencies** project: ['./tsconfig.node.json', './tsconfig.app.json'],



- **Website**: [kathan.dev](https://kathan.dev)npm run dev

- **Email**: kathanpatel.dev@gmail.com

- **GitHub**: [kathan1509](https://github.com/kathan1509)```   ````bash tsconfigRootDir: import.meta.dirname,

- **LinkedIn**: [LinkedIn Profile]



---

4. **Build for production**   npm install      },

Built with ❤️ and React by Kathan Patel
```bash

npm run build   ```      // other options...

``````

},

## 🎨 Customization

`````

### Personal Information

Edit `src/data/portfolio.ts` to update:3. **Customize your information** },

- Personal details (name, title, bio)

- Contact information - Edit `src/data/portfolio.ts` with your personal information])

- Social media links

- Skills and technologies - Replace placeholder images in the `public` folder```

- Project information

- Testimonials - Update social links and contact information

### StylingYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

- **Colors**: Modify Tailwind color scheme in `tailwind.config.js`

- **Fonts**: Update font family in `index.css`4. **Start the development server**

- **Spacing**: Adjust section padding in component files

- **Animations**: Customize Framer Motion settings in components `bash`js

### Components npm run dev// eslint.config.js

- **Header**: Navigation and theme toggle

- **Hero**: Landing section with typewriter effect ```import reactX from 'eslint-plugin-react-x'

- **About**: Personal information and story

- **Skills**: Technology stack showcase ```

- **Projects**: Portfolio project gallery

- **Contact**: Contact form and informationimport reactDom from 'eslint-plugin-react-dom'

- **Footer**: Links and copyright

5. **Open your browser**

## 📱 Responsive Design

Navigate to `http://localhost:3000`export default defineConfig([

The website is optimized for all screen sizes:

- **Desktop**: 1024px and aboveglobalIgnores(['dist']),

- **Tablet**: 768px - 1023px

- **Mobile**: 375px - 767px## 📝 Customization {

- **Small Mobile**: 320px - 374px

  files: ['**/*.{ts,tsx}'],

## 🔧 Technologies Used

### Personal Information extends: [

- **Frontend**: React 18, TypeScript

- **Styling**: Tailwind CSSEdit `src/data/portfolio.ts` to customize: // Other configs...

- **Animations**: Framer Motion

- **Icons**: Lucide React- Personal details (name, title, bio) // Enable lint rules for React

- **Build Tool**: Vite

- **Deployment**: Ready for Vercel, Netlify, or any static hosting- Social media links reactX.configs['recommended-typescript'],

## 📈 Performance- Skills and technologies // Enable lint rules for React DOM

- **Lighthouse Score**: 95+ on all metrics- Work experience reactDom.configs.recommended,

- **Bundle Size**: Optimized for fast loading

- **SEO**: Semantic HTML and meta tags- Education ],

- **Accessibility**: WCAG compliant

- Projects languageOptions: {

## 🚀 Deployment

- Services offered parserOptions: {

### Vercel (Recommended)

```bash project: ['./tsconfig.node.json', './tsconfig.app.json'],

npm install -g vercel

vercel --prod### Styling tsconfigRootDir: import.meta.dirname,

```

The design uses Tailwind CSS for styling. Key customization areas: },

### Netlify

```bash- Colors: Update the gradient and color scheme in `tailwind.config.js` // other options...

npm run build

# Upload dist folder to Netlify- Fonts: Change fonts in `src/index.css` },

````

- Animations: Modify Framer Motion animations in component files },

### Manual Hosting

```bash])

npm run build

# Upload dist folder to your hosting provider### Images```

````

Replace these placeholder images in the `public` folder:

## 📄 License

- `profile-image.jpg` - Your profile photo

This project is open source and available under the [MIT License](LICENSE).- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

- `testimonial1.jpg` - Testimonial avatar images

## 🤝 Contributing

## 📱 Sections

Contributions are welcome! Please feel free to submit a Pull Request.

1. **Hero**: Eye-catching introduction with call-to-action buttons

## 📞 Contact2. **About**: Personal story, experience timeline, and quick stats

3. **Skills**: Technical skills organized by category

- **Website**: [Portfolio Link]4. **Projects**: Featured projects with live demos and source code links

- **Email**: kathanpatel.dev@gmail.com5. **Contact**: Contact form and social media links

- **LinkedIn**: [LinkedIn Profile]

- **GitHub**: [GitHub Profile]## 🌐 Deployment

---### Build for Production

Built with ❤️ and React by Kathan Patel```bash
npm run build

```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure your domain and environment variables

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Optimized images and code splitting
- **SEO Ready**: Proper meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Kathan Patel** - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://your-portfolio-url.com](https://your-portfolio-url.com)

---

⭐ Star this repository if you found it helpful!

## 🎯 Next Steps

1. **Customize Content**: Replace all placeholder content with your actual information
2. **Add Images**: Add your profile photo and project screenshots
3. **Setup Analytics**: Add Google Analytics or other tracking
4. **Domain**: Purchase and configure your custom domain
5. **SEO**: Optimize meta tags and add structured data
6. **Blog**: Consider adding a blog section for additional content

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
```
`````
