# Guide des Optimisations Techniques

## 1. SEO - Meta Tags

Les meta tags sont configurés automatiquement dans `BasicLayout.astro`. Pour chaque page, vous pouvez passer :

```astro
<BasicLayout 
  title="Titre de la page"
  description="Description courte de la page (160 caractères max)"
  image="/og-image.jpg"
  url="https://votre-domaine.com/page"
>
```

Les meta tags générés incluent :
- **OG Tags** (Open Graph) : Pour le partage sur Facebook, LinkedIn, etc.
- **Twitter Cards** : Pour le partage sur Twitter
- **Canonical URL** : Pour éviter le contenu dupliqué
- **Descriptions SEO** : Pour les moteurs de recherche

## 2. Open Graph pour Partage Social

Les pages se partagent automatiquement avec une image, titre et description. Assurez-vous d'avoir une image `og-image.jpg` de bonne qualité (1200x630px) dans le dossier `/public`.

Pour les pages de projets, utilisez les meta tags définis dans `projectMeta.ts` :

```typescript
import { projectMetaTags } from "../data/projectMeta";

const projectMeta = projectMetaTags["my-eyes-motion"];
// Puis passez-le à BasicLayout
```

## 3. Lazy Loading des Images

Utilisez le composant `LazyImage` pour les images qui ne sont pas immédiatement visibles :

```astro
import LazyImage from "../components/LazyImage.astro";

<LazyImage 
  src="/mon-image.jpg" 
  alt="Description de l'image"
  class="w-full rounded-lg"
/>
```

**Comment ça fonctionne** :
- L'image a un placeholder gris avec animation de chargement
- Quand l'image entre dans la zone visible (+50px), elle se charge
- Transition en douceur vers l'image réelle

## 4. Lazy Loading des Vidéos

Utilisez le composant `LazyVideo` pour les vidéos :

```astro
import LazyVideo from "../components/LazyVideo.astro";

<LazyVideo 
  src="/ma-video.mp4"
  poster="/video-thumbnail.jpg"
  class="w-full rounded-lg"
/>
```

**Options disponibles** :
- `src` : URL de la vidéo
- `type` : Type MIME (défaut: "video/mp4")
- `poster` : Image de couverture
- `autoplay`, `loop`, `muted`, `playsinline` : Options de lecture

## 5. Skeleton Loading

Le `skeleton-loader` s'affiche automatiquement pendant le chargement initial de la page. Il disparaît en douceur une fois la page chargée.

Vous pouvez personnaliser le contenu du skeleton dans `BasicLayout.astro` en modifiant la div `#skeleton-loader`.

## 6. Animations CSS

Les animations sont définies dans `global.css` :

- **Pulse** : Animation de scintillement pour les placeholders
- **Loading** : Animation de gradient animé pour les images
- **Scroll behavior** : Scroll fluide

## Bonnes Pratiques

1. **Images** :
   - Utilisez `LazyImage` pour toutes les images en dehors du hero
   - Compressez vos images (WebP si possible)
   - Specifiez les dimensions pour éviter le layout shift

2. **Vidéos** :
   - Utilisez des vidéos compressées (max 5MB pour le hero)
   - Fournissez toujours une miniature (poster)
   - Optimisez le bitrate pour le web

3. **SEO** :
   - Mettez des descriptions uniques pour chaque page (120-160 caractères)
   - Incluez des images de qualité pour le partage social
   - Utilisez des titres descriptifs

## Performance Checklist

- ✅ Images lazyloadées en dehors du viewport
- ✅ Vidéos lazyloadées sauf le hero
- ✅ Meta tags pour chaque page
- ✅ Images optimisées (< 1MB par image)
- ✅ Skeleton loader animé
- ✅ Temps de chargement < 3s
