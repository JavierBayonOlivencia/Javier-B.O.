interface Props {
    children?: React.ReactNode;
    id?: string;
}

export default function Section({ children, id }: Props) {
    return (
        <section id={id} className="flex gap-10 direction-col">
            { children }
        </section>
    )
}