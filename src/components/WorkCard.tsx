import type { Project } from "../data/workData";

interface Props {
  data?: Project;
}

export default function WorkCard({ data }: Props) {
  const { title, description, links, img } = data ?? {};
  const { page, github_repo } = links ?? {};

  return (
    <aside className="flex gap-10 direction-col">
      <div className="img flex items-center justify-center">
        <img
          className={title === "Gendex" ? "h-full w-full" : "h-full w-full"}
          src={img}
          alt={title}
        />
      </div>
      <div className="container__header--lines pt-s pb-s flex justify-between gap-10 direction-row">
        <h3>{title}</h3>
        <ul className="list-none flex">
          <li>
            <a href={github_repo} target="_blank">
              Code
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-10 direction-col md:direction-row md:justify-between">
        <p>{description}</p>
        <a
          href={page}
          target="_blank"
          className="btn text-2xl flex items-center justify-end"
        >
          &rarr;
        </a>
      </div>
    </aside>
  );
}
