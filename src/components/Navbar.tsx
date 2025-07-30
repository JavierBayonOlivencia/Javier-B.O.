export default function Navbar() {
  return (
    <header className="fixed bottom-0 w-full p-s bg-black z-10">
      <nav className="w-full flex gap-10 items-baseline justify-between">
        <a href="#home" className="link">
          Javier B.O
        </a>

        <ul className="list-none flex gap-10">
          <li>
            <a href="#skill" className="link">
              Skill
            </a>
          </li>
          <li>
            <a href="#work" className="link">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
