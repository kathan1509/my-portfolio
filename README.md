# 🚀 Modern React Portfolio# React + TypeScript + Vite

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a clean design with dark/light mode toggle and smooth animations.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## ✨ FeaturesCurrently, two official plugins are available:

- **Modern Design**: Clean, professional layout inspired by top portfolio websites- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Responsive**: Mobile-first design that looks great on all devices- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Dark/Light Mode**: Theme toggle with system preference detection

- **Smooth Animations**: Beautiful animations using Framer Motion## React Compiler

- **Fast & Optimized**: Built with Vite for lightning-fast development and builds

- **SEO Friendly**: Proper meta tags and semantic HTML structureThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Accessible**: Following web accessibility best practices

## Expanding the ESLint configuration

## 🛠️ Tech Stack

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Frontend**: React 18, TypeScript

- **Styling**: Tailwind CSS```js

- **Animations**: Framer Motionexport default defineConfig([

- **Icons**: Lucide React globalIgnores(['dist']),

- **Build Tool**: Vite {

- **Deployment Ready**: Optimized for production files: ['**/*.{ts,tsx}'],

  extends: [

## 📋 Prerequisites // Other configs...

- Node.js (v16 or higher) // Remove tseslint.configs.recommended and replace with this

- npm or yarn tseslint.configs.recommendedTypeChecked,

      // Alternatively, use this for stricter rules

## 🚀 Getting Started tseslint.configs.strictTypeChecked,

      // Optionally, add this for stylistic rules

1. **Clone the repository** tseslint.configs.stylisticTypeChecked,

   ````bash

   git clone <your-repo-url>      // Other configs...

   cd portfolio-react    ],

   ```    languageOptions: {

      parserOptions: {

   ````

2. **Install dependencies** project: ['./tsconfig.node.json', './tsconfig.app.json'],

   ````bash tsconfigRootDir: import.meta.dirname,

   npm install      },

   ```      // other options...

    },

   ````

3. **Customize your information** },

   - Edit `src/data/portfolio.ts` with your personal information])

   - Replace placeholder images in the `public` folder```

   - Update social links and contact information

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

4. **Start the development server**

   `bash`js

   npm run dev// eslint.config.js

   ```import reactX from 'eslint-plugin-react-x'

   ```

import reactDom from 'eslint-plugin-react-dom'

5. **Open your browser**

   Navigate to `http://localhost:3000`export default defineConfig([

globalIgnores(['dist']),

## 📝 Customization {

    files: ['**/*.{ts,tsx}'],

### Personal Information extends: [

Edit `src/data/portfolio.ts` to customize: // Other configs...

- Personal details (name, title, bio) // Enable lint rules for React

- Social media links reactX.configs['recommended-typescript'],

- Skills and technologies // Enable lint rules for React DOM

- Work experience reactDom.configs.recommended,

- Education ],

- Projects languageOptions: {

- Services offered parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

### Styling tsconfigRootDir: import.meta.dirname,

The design uses Tailwind CSS for styling. Key customization areas: },

- Colors: Update the gradient and color scheme in `tailwind.config.js` // other options...

- Fonts: Change fonts in `src/index.css` },

- Animations: Modify Framer Motion animations in component files },

])

### Images```

Replace these placeholder images in the `public` folder:

- `profile-image.jpg` - Your profile photo
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `testimonial1.jpg` - Testimonial avatar images

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal story, experience timeline, and quick stats
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with live demos and source code links
5. **Contact**: Contact form and social media links

## 🌐 Deployment

### Build for Production

```bash
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
