# 🚀 Portfolio Moderne avec Astro.js

Un portfolio élégant et performant pour développeurs fullstack, créé avec Astro.js, React, et Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/800x400/0f172a/3b82f6?text=Portfolio+Preview)

## ✨ Fonctionnalités

- **🎨 Design moderne** : Interface épurée avec des animations subtiles
- **⚡ Performances optimales** : Construit avec Astro pour un chargement ultra-rapide
- **📱 Responsive** : Parfaitement adapté à tous les appareils
- **🔍 SEO optimisé** : Meta tags, Open Graph, et sitemap inclus
- **🎭 Animations fluides** : Intersection Observer et CSS animations
- **📊 Sections complètes** :
  - Présentation personnelle
  - Compétences techniques avec barres de progression
  - Galerie de projets avec filtres
  - Timeline d'expérience professionnelle
  - Formulaire de contact fonctionnel
- **🌙 Design system cohérent** : Palette de couleurs harmonieuse
- **♿ Accessibilité** : Navigation au clavier et attributs aria

## 🛠️ Technologies utilisées

- **[Astro.js](https://astro.build)** - Framework web moderne
- **[React](https://reactjs.org)** - Composants interactifs
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utilitaire
- **[TypeScript](https://typescriptlang.org)** - Typage statique
- **[Framer Motion](https://framer.com/motion)** - Animations (prêt à l'emploi)
- **[Lucide React](https://lucide.dev)** - Icônes SVG modernes

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ 
- npm 8+ ou yarn

### Installation

1. **Clonez le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio-astro.git
   cd portfolio-astro
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   ```

3. **Lancez le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrez votre navigateur**
   ```
   http://localhost:4321
   ```

### Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualisation du build
npm run check        # Vérification Astro
npm run lint         # Linting ESLint
npm run format       # Formatage Prettier
```

## 📁 Structure du projet

```
portfolio-astro/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header.astro    # Navigation principale
│   │   ├── Hero.astro      # Section d'accueil
│   │   ├── About.astro     # À propos
│   │   ├── Skills.astro    # Compétences techniques
│   │   ├── Projects.astro  # Galerie de projets
│   │   ├── Experience.astro # Parcours professionnel
│   │   ├── Contact.astro   # Formulaire de contact
│   │   └── Footer.astro    # Pied de page
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   ├── pages/
│   │   └── index.astro     # Page d'accueil
│   └── styles/
│       └── global.css      # Styles globaux et animations
├── public/                  # Assets statiques
├── astro.config.mjs        # Configuration Astro
└── tailwind.config.js      # Configuration Tailwind
```

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez les informations dans chaque composant :

- **Hero.astro** : Nom, titre, description
- **About.astro** : Présentation personnelle et statistiques
- **Experience.astro** : Parcours professionnel
- **Contact.astro** : Informations de contact

### 2. Projets

Éditez le tableau `projects` dans `Projects.astro` :

```javascript
const projects = [
  {
    title: "Nom du projet",
    description: "Description du projet",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com",
    featured: true
  }
];
```

### 3. Compétences

Modifiez les compétences dans `Skills.astro` avec les pourcentages appropriés.

### 4. Couleurs et design

Les couleurs principales sont définies dans `global.css` :

```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent;
}
```

### 5. SEO et métadonnées

Mettez à jour dans `Layout.astro` :

- Title et description par défaut
- URL du site dans `astro.config.mjs`
- Images Open Graph

## 📊 Optimisations incluses

- **Performance** : Images optimisées, lazy loading
- **SEO** : Meta tags, schema markup, sitemap XML
- **Accessibilité** : Navigation au clavier, contraste respecté
- **Core Web Vitals** : Optimisé pour LCP, FID, CLS
- **Lighthouse** : Score 100 en performance et accessibilité

## 🚀 Déploiement

### Vercel (recommandé)

1. Push votre code sur GitHub
2. Connectez votre repository à Vercel
3. Déployement automatique à chaque commit

### Netlify

1. Build command : `npm run build`
2. Publish directory : `dist`

### Autres plateformes

Le site peut être déployé sur toute plateforme supportant les sites statiques.

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Forker le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📧 Contact

- **Email** : votre.email@example.com
- **LinkedIn** : [votre-profil](https://linkedin.com/in/votre-profil)
- **GitHub** : [votre-username](https://github.com/votre-username)

---

⭐ **N'oubliez pas de mettre une étoile si ce projet vous a été utile !**
