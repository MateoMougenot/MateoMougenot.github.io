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
    featured: false,
    slug: "beaupeyrat",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
