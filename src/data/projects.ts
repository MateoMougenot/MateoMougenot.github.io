export interface Project {
  id: number;
  title: string;
  role: string;
  image: string;
  description: string;
  challenge: string;
  solution?: string;
  tools: string;
  featured: boolean;
  slug: string;
  videoId?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    role: "Motion Designer",
    title: "My Eyes",
    description:
      "Mon premier projet se calquant sur des paroles de musique. En l'occurence la musique My eyes de Travis Scott.",
    image: "/my-eyes-motion.jpg",
    tools: "After Effects",
    challenge:
      "Arriver à créer une animation dynamique sur des paroles d'une musique",
    solution: "Motion d'élément UI styles Apple dynamique",
    featured: true,
    slug: "my-eyes-motion",
  },
  {
    id: 10,
    role: "Motion Designer",
    title: "Vidéo de présentation",
    description: "",
    image: "/Motion-presentation.png",
    tools: "After Effects",
    challenge: "",
    featured: false,
    slug: "presentation-motion",
  },
  {
    id: 2,
    title: "Spotify logo",
    role: "Motion Design",
    image: "/spotify-motion.png",
    description: "Animation du logo de spotify",
    challenge:
      "Partir d'un élément représentant la musique pour finir sur le logo",
    solution: "Partir d'ondes sonores transitionnant vers le logo de Spotify",
    tools: "After Effects",
    featured: true,
    slug: "spotify-motion",
  },
  {
    id: 3,
    title: "Digital cleanup day",
    role: "Motion Design",
    image: "/digital-cleanup-day.png",
    description: "Spot publicitaire d'un évènement",
    challenge: "Parvenir à faire passer un message écologique en animation",
    solution: "...",
    tools: "After Effects",
    featured: false,
    slug: "digital-cleanup-day",
  },
  {
    id: 8,
    title: "Communication d'une institution",
    role: "Vidéo, Graphisme print, Motion design",
    image: "/beaupeyrat.png",
    description:
      "Durant un stage au sein de l'institution Beaupeyrat de Limoges, j'ai pu m'occuper de la communication de leur partie campus sur une durée de 12 semaines",
    challenge:
      "Parvenir à redonner une nouvelle image à une institution aux airs trop fermés",
    solution:
      "S'adapter avec un format dynamique et destiné aux jeunes sous les contraintes d'une charte graphique déjà existante",
    tools: "Premiere Pro, Photoshop, After effects",
    featured: true,
    slug: "beaupeyrat",
  },
  {
    id: 7,
    title: "Interviews étudiants",
    role: "Interviews type konbini",
    image: "/konbini.webp",
    description:
      "Mes premières réalisations pour lesquelles j'ai dû gérer préparation, tournage, et postproduction",
    challenge:
      "Parvenir à redonner une nouvelle image à une institution aux airs trop fermés",
    solution: "S'adapter avec un format dynamique et destiné aux jeunes",
    tools: "Premiere Pro, Photoshop, After effects",
    featured: false,
    slug: "Interviews-étudiants",
  },
  {
    id: 4,
    title: "Prise pour cible",
    role: "Court métrage",
    image: "/prise-pour-cible.png",
    description: "Court métrage sans musique mettant en scène un échange",
    challenge: "Parvenir à intégrer l'échange d'un objet au sein de la vidéo",
    solution: "L'objet échangé fût la trousse volée",
    tools: "Premiere Pro, Audition",
    featured: true,
    slug: "prise-pour-cible",
  },
  {
    id: 5,
    title: "Lumiping",
    role: "Vidéo promotionelle",
    image: "/lumiping.png",
    description:
      "Vidéo promotionelle d'un nouveau jeu au sein d'un espace de coworking sur le thème d'un tennis de table revisité",
    challenge:
      "Parvenir à donner envie aux membres de participer à ce nouveau jeu",
    solution:
      "Mettre en situation l'activité et l'utilisation de son application",
    tools: "Premiere Pro, Photoshop",
    featured: false,
    slug: "lumiping",
  },
  {
    id: 6,
    title: "Genshin killer",
    role: "Vidéo humouristique/gaming",
    image: "/Genshin-killer.jpg",
    description: "La première vraie vidéo youtube sur laquelle j'ai travaillé",
    challenge: "Parvenir à redynamiser une chaine inactive depuis un temps",
    solution: "Réaliser un best-of dynamique",
    tools: "Premiere Pro, After effects",
    featured: false,
    slug: "Genshin-killer",
  },
  {
    id: 9,
    title: "Animation d'un lieu touristique",
    role: "Motion design",
    image: "/motiondesign_lieuxtouristique.png",
    description:
      "Animation d'un lieu touristique, en l'occurence l'opéra de sydney",
    challenge: "...",
    solution: "...",
    tools: "Illustrator, After effects",
    featured: false,
    slug: "sydney-opera-motion",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
