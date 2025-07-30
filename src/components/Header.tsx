interface Props {
    children?: React.ReactNode;
    isBorders?: boolean;
}

export default function Header({ children, isBorders }: Props) {
  return (
    <div className={`${isBorders ? "br-t br-b" : ""} pt-s pb-s flex gap-10 direction-col items-start justify-between xl:direction-row`}>
      { children }
    </div>
  );
}
