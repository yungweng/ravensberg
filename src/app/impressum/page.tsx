import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-12">
        Impressum
      </h1>

      <div className="prose-custom space-y-6 sm:space-y-8 text-foreground/80 leading-relaxed break-words">
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            Angaben gem&auml;&szlig; &sect; 5 TMG / &sect; 18 Abs. 2 MStV
          </h2>
          <p>
            Verein Alter M&uuml;nsterischer Ravensberger e.V.
            <br />
            Raesfeldstra&szlig;e 32
            <br />
            48149 M&uuml;nster, Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            Vertreten durch
          </h2>
          <p>
            Den jeweiligen Vorstand des Vereins Alter M&uuml;nsterischer Ravensberger e.V.
            <br />
            Kontakt: vorstand@kstv-ravensberg.de
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:vorstand@kstv-ravensberg.de"
              className="text-accent hover:underline"
            >
              vorstand@kstv-ravensberg.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV
          </h2>
          <p>
            Verein Alter M&uuml;nsterischer Ravensberger e.V.
            <br />
            Raesfeldstra&szlig;e 32
            <br />
            48149 M&uuml;nster, Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            Haftung f&uuml;r Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG f&uuml;r eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu
            &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            Haftung f&uuml;r Links
          </h2>
          <p>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese
            fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der
            Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>

      <div className="mt-16">
        <Link
          href="/"
          className="text-accent hover:underline font-medium text-sm"
        >
          &larr; Zur&uuml;ck zur Startseite
        </Link>
      </div>
    </main>
  );
}
