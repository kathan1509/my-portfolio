# Kathan Patel - Portfolio Website# 🚀 Modern React Portfolio# React + TypeScript + Vite

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and mobile-first approach.A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a clean design with dark/light mode toggle and smooth animations.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 🚀 Features## ✨ FeaturesCurrently, two official plugins are available:

- **Modern Tech Stack**: React 18, TypeScript, Vite- **Modern Design**: Clean, professional layout inspired by top portfolio websites- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Responsive Design**: Mobile-first approach with Tailwind CSS

- **Smooth Animations**: Framer Motion for engaging user experience- **Responsive**: Mobile-first design that looks great on all devices- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Dark/Light Theme**: Toggle between themes

- **SEO Optimized**: Meta tags and semantic HTML- **Dark/Light Mode**: Theme toggle with system preference detection

- **Performance**: Optimized bundle size and fast loading

- **Accessibility**: ARIA labels and keyboard navigation- **Smooth Animations**: Beautiful animations using Framer Motion## React Compiler

- **Contact Form**: Functional contact form

- **Project Showcase**: Interactive project gallery- **Fast & Optimized**: Built with Vite for lightning-fast development and builds

## 📁 Project Structure- **SEO Friendly**: Proper meta tags and semantic HTML structureThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

`````- **Accessible**: Following web accessibility best practices

portfolio-react/

├── public/## Expanding the ESLint configuration

│   ├── favicon.svg          # Custom portfolio favicon

│   └── index.html## 🛠️ Tech Stack

├── src/

│   ├── components/          # Reusable UI componentsIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

│   │   ├── Footer.tsx

│   │   ├── Header.tsx- **Frontend**: React 18, TypeScript

│   │   ├── Logo.tsx

│   │   ├── PageTransition.tsx- **Styling**: Tailwind CSS```js

│   │   └── Typewriter.tsx

│   ├── sections/            # Main page sections- **Animations**: Framer Motionexport default defineConfig([

│   │   ├── About.tsx

│   │   ├── Contact.tsx- **Icons**: Lucide React globalIgnores(['dist']),

│   │   ├── FreelancerAdvantages.tsx

│   │   ├── Hero.tsx- **Build Tool**: Vite {

│   │   ├── Projects.tsx

│   │   ├── Skills.tsx- **Deployment Ready**: Optimized for production files: ['**/*.{ts,tsx}'],

│   │   └── Testimonials.tsx

│   ├── data/  extends: [

│   │   └── portfolio.ts     # Portfolio data and configuration

│   ├── hooks/## 📋 Prerequisites // Other configs...

│   │   └── useTheme.tsx     # Theme management hook

│   ├── App.tsx              # Main app component- Node.js (v16 or higher) // Remove tseslint.configs.recommended and replace with this

│   ├── main.tsx             # App entry point

│   └── index.css            # Global styles and Tailwind- npm or yarn tseslint.configs.recommendedTypeChecked,

├── .gitignore

├── package.json      // Alternatively, use this for stricter rules

├── tailwind.config.js       # Tailwind configuration

├── tsconfig.json            # TypeScript configuration## 🚀 Getting Started tseslint.configs.strictTypeChecked,

└── vite.config.ts           # Vite configuration

```      // Optionally, add this for stylistic rules



## 🛠️ Installation & Setup1. **Clone the repository** tseslint.configs.stylisticTypeChecked,



1. **Clone the repository**   ````bash

   ```bash

   git clone https://github.com/kathan1509/my-portfolio.git   git clone <your-repo-url>      // Other configs...

   cd portfolio-react

   ```   cd portfolio-react    ],



2. **Install dependencies**   ```    languageOptions: {

   ```bash

   npm install      parserOptions: {

`````

`````

3. **Start development server**

```bash2. **Install dependencies** project: ['./tsconfig.node.json', './tsconfig.app.json'],

npm run dev

```   ````bash tsconfigRootDir: import.meta.dirname,



4. **Build for production**   npm install      },

```bash

npm run build   ```      // other options...

```

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
