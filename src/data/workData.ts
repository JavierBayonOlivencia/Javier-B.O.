import project_1 from "../assets/project-imgs/project-1.webp";
import project_2 from "../assets/project-imgs/project-2.webp";
import project_3 from "../assets/project-imgs/project-3.webp";

export interface Project {
    title: string;
    description: string;
    links: Links;
    img: string;
}

export interface Links {
    page: string;
    github_repo: string;
}

export const gendex: Project = {
    title: "Gendex",
    description: "Easy to read Pokédex contains detailed for every creature from the Pokémon games, up to and including the latest version of games.",
    links: {
        page: "https://javierbayonolivencia.github.io/Gendex/",
        github_repo: "https://github.com/JavierBayonOlivencia/Gendex",
    },
    img: project_1,
}

export const donBarbero: Project = {
    title: "Don Barbero",
    description: "Barbershop and salon located in Arecibo Puerto Rico. It offers hair treatment shaving beard treatment and spa services.",
    links: {
        page: "https://javierbayonolivencia.github.io/DonBarbero",
        github_repo: "https://github.com/JavierBayonOlivencia/DonBarbero",
    },
    img: project_2,
}

export const houseOfPain: Project = {
    title: "House Of Pain",
    description: "Gym located in Lares Puerto Rico that offers a variety of moderns Cydex equipment that range from plate loading machines, bicycles.",
    links: {
        page: "https://javierbayonolivencia.github.io/HFP/",
        github_repo: "https://github.com/JavierBayonOlivencia/HFP",
    },
    img: project_3,
}