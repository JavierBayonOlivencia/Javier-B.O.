export default function Brief() {
  return (
    <aside className="flex gap-10 direction-col xl:flex-11-320">
      <p>
        I'm<strong> Javier Bayon Olivencia </strong>I see myself as a web
        developer and a bit of a designer. I enjoy building websites that are
        driven with style and personality, often brought to life through
        leyout and typography.
      </p>
      <div className="flex gap-10">
        <span>Follow me /</span>
        <ul className="list-none flex gap-10">
          <li>
            <a href="https://github.com/JavierBayonOlivencia" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://pr.linkedin.com/in/javier-bay%C3%B3n-olivencia-94a48a222" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
