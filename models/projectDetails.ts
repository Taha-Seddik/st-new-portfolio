export type ProjectDetails = {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  medias: MediaType[];
};

export type MediaType = {
  src: string;
  embedUrl?: string; // when video src for thumbnailing and embed url for video path
  type: "video" | "image";
};
