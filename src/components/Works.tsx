import WorkCard from "./WorkCard";
import { gendex, donBarbero, houseOfPain } from "../data/workData";

export default function Works() {
    return (
        <div className="work grid gap-10">
            <WorkCard data={gendex} />
            <WorkCard data={donBarbero} />
            <WorkCard data={houseOfPain} />
        </div>
    )
}