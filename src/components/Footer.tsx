import Header from "./Header";

export default function Footer() {
  return (
    <footer className="flex gap-10 direction-col xl:justify-end">
      <Header isBorders={true}>
        <h2>Get in touch</h2>
      </Header>
      <p>
        If you made it this far, <strong>Thank you for reading!</strong>. If you
        have any questions, concerns, thoughts, or inqueries, or just want to
        chat please fell free to reach me.
      </p>
      <ul className="list-none flex gap-10 direction-col">
        <li>
          <a href="https://pr.linkedin.com/in/javier-bay%C3%B3n-olivencia-94a48a222" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:bayonolivencia.javier@gmail.com">Bayonolivencia.javier@gmail.com</a>
        </li>
      </ul>
    </footer>
  );
}
