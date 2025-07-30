import type { Skills } from "../data/skillsData";

interface Props {
  svg?: string;
  data?: Skills;
}

export default function SkillCard({ svg, data }: Props) {
  const { title, description, skills } = data ?? {};

  return (
    <aside className="flex flex-11-320 gap-10 direction-col">
      <div className="container__header container__header--lines flex gap-10 direction-col">
        <h3>{ title }</h3>
      </div>
      <div className="flex gap-10 direction-col xl:direction-row">
        <div className="img flex items-center justify-center">
          <img className="w-50 h-50" src={svg} alt="Figma" />
        </div>
        <div className="flex gap-10 direction-col">
          <p>
            { description }
          </p>
          <ul className="list flex gap-10 direction-col">
            { skills?.map((skill:string, i:number) => (
              <li key={i}>{ skill }</li>
            )) }
          </ul>
        </div>
      </div>
    </aside>
  );
}
