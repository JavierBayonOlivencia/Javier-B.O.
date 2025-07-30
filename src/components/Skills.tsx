import SkillCard from "./SkillCard";
import { designe, develop } from "../data/skillsData";
import figmaLogo from "../assets/figma.svg";
import vsCodeLogo from "../assets/visual-studio-code.svg";

export default function Skills() {
  return (
    <div className="flex gap-10 direction-col md:direction-row">
      <SkillCard svg={figmaLogo} data={designe} />
      <SkillCard svg={vsCodeLogo} data={develop} />
    </div>
  );
}
