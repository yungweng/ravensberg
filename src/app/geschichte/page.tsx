import Link from "next/link";
import { ClickableImage } from "@/components/ClickableImage";
import { SectionDivider } from "@/components/SectionDivider";

export default function GeschichtePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-12">
        Geschichte des KStV Ravensberg
      </h1>

      <div className="prose-custom space-y-8 sm:space-y-10 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Gr&uuml;ndung (1919)
          </h2>
          <p>
            Nach dem Ende des Ersten Weltkriegs str&ouml;mten zahlreiche
            Heimkehrer an die deutschen Universit&auml;ten. Die Mitgliederzahl
            des KStV Germania M&uuml;nster wuchs so stark an, dass eine Teilung
            unumg&auml;nglich wurde. Am 5. Mai 1919 beschlossen 35 Mitglieder
            der Germania, eine neue Verbindung zu gr&uuml;nden. Bei der
            Abstimmung &uuml;ber den Namen setzte sich
            {" \u201ERavensberg\u201C "}
            gegen die Alternative {"\u201EHellweg\u201C"} durch.
          </p>
          <p>
            Der erste Senior im Sommersemester 1919 war Hans Eickmann. Die junge
            Verbindung wuchs rasch: Bereits im Gr&uuml;ndungssemester z&auml;hlte
            der KStV Ravensberg 84 Mitglieder.
          </p>
          <ClickableImage
            src="/images/geschichte/bildband-1919-gruendung.webp"
            alt="Gründungsmitglieder des KStV Ravensberg, 1919"
            width={800}
            height={500}
            className="my-6"
          />
        </section>

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Universit&auml;t und Dachverband
          </h2>
          <p>
            Am 31. Mai 1919 genehmigte das Rektorat der Westf&auml;lischen
            Wilhelms-Universit&auml;t M&uuml;nster den Verein als offizielle
            Hochschulgruppe. Nur wenige Wochen sp&auml;ter, auf der 47.
            Generalversammlung am 13. Juni 1919, wurde der KStV Ravensberg als
            59. Mitglied in den Kartellverband katholischer deutscher
            Studentenvereine (KV) aufgenommen.
          </p>
          <ClickableImage
            src="/images/geschichte/bildband-1919-portraits.webp"
            alt="Portraits der frühen Mitglieder des KStV Ravensberg"
            width={800}
            height={500}
            className="my-6"
          />
        </section>

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Das Bootshaus an der Werse
          </h2>
          <p>
            1921 gr&uuml;ndeten die Ravensberger einen Bootshausverein. F&uuml;r
            12.500 Mark entstand ein Bootshaus an der Werse, das 1922 feierlich
            eingeweiht wurde. Nach mehreren &Uuml;berschwemmungen wurde das
            Geb&auml;ude 1926 f&uuml;r bauf&auml;llig erkl&auml;rt und 1928
            umgebaut. Mit der Machtübernahme der Nationalsozialisten wurde es
            1935 liquidiert.
          </p>
        </section>

        <SectionDivider />

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            NS-Zeit und Aufl&ouml;sung
          </h2>
          <p>
            1933 wurde der Verein gezwungen, das F&uuml;hrerprinzip
            einzuf&uuml;hren. Der Kartellverband fusionierte unter Druck mit dem
            Reichsverband der katholischen deutschen Burschenschaft (RKDB). Nach
            der erzwungenen Aufhebung des Konfessionsprinzips durfte sich die
            Verbindung nur noch {"\u201EStudentenverein Ravensberg\u201C"}{" "}
            nennen. Am 17. Mai 1936 wurde der Verein schlie&szlig;lich
            aufgel&ouml;st. Am selben Tag gr&uuml;ndeten die Mitglieder den{" "}
            {"\u201EBund M\u00FCnsterischer Ravensberger\u201C"}, um die
            Gemeinschaft au&szlig;erhalb der universit&auml;ren Strukturen
            fortzuf&uuml;hren.
          </p>
          <ClickableImage
            src="/images/geschichte/bildband-gruppenfoto-alt.webp"
            alt="Historisches Gruppenfoto des KStV Ravensberg"
            width={800}
            height={500}
            className="my-6"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Wiederbegr&uuml;ndung (1947)
          </h2>
          <p>
            Nach dem Zweiten Weltkrieg erlaubte die britische
            Milit&auml;rregierung in der Besatzungszone zun&auml;chst nur
            kirchliche Studentengruppen. Die Ravensberger gr&uuml;ndeten ihre
            Verbindung daher vor&uuml;bergehend unter dem Namen{" "}
            {"\u201EKStV Paulus\u201C"} neu, der am 3. Juli 1947 genehmigt
            wurde. Nach der Gr&uuml;ndung der Bundesrepublik Deutschland kehrte
            man zur urspr&uuml;nglichen Bezeichnung KStV Ravensberg zur&uuml;ck.
          </p>
          <ClickableImage
            src="/images/geschichte/bildband-gruppenfoto-alt2.webp"
            alt="Gruppenfoto nach der Wiederbegründung"
            width={800}
            height={500}
            className="my-6"
          />
        </section>

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Das Ravensberg-Haus
          </h2>
          <p>
            Am 21. Oktober 1956 beschloss die Verbindung, ein eigenes Haus zu
            erwerben. Die Wahl fiel auf ein Objekt in der Raesfeldstra&szlig;e 32
            im M&uuml;nsteraner Kreuzviertel. Der Kaufvertrag wurde am 31. Mai
            1960 geschlossen. Zwei Jahre sp&auml;ter bezogen die ersten
            Mitglieder das Haus, das bis heute als Verbindungshaus dient und
            Mittelpunkt des Bundeslebens ist.
          </p>
          <ClickableImage
            src="/images/geschichte/ra-haus-zeichnung-gut.webp"
            alt="Historische Zeichnung des Ravensberg-Hauses in der Raesfeldstraße"
            width={800}
            height={500}
            className="my-6"
          />
        </section>

        <SectionDivider />

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Namensherkunft
          </h2>
          <p>
            Der Name {"\u201ERavensberg\u201C"} geht auf die Grafschaft
            Ravensberg zur&uuml;ck, die im 12. Jahrhundert im n&ouml;rdlichen
            Ostwestfalen entstand. Die Verbindung &uuml;bernahm auch das
            ehemalige Familienwappen der Grafen von Ravensberg in ihr Panier.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
            Bekannte Mitglieder
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Fritz Hau&szlig;</strong> &mdash; Vizepr&auml;sident des
              Bundesgerichtshofes (1972&ndash;1976)
            </li>
            <li>
              <strong>Heinrich Konen</strong> &mdash; Physiker
            </li>
            <li>
              <strong>Joseph Joos</strong> &mdash; Reichstagsabgeordneter
            </li>
            <li>
              <strong>August Grothues</strong> &mdash; CDU-Politiker
            </li>
            <li>
              <strong>Rudolf M&uuml;nster</strong> &mdash;
              Landgerichtspr&auml;sident
            </li>
            <li>
              <strong>Ewald Lanwer</strong> &mdash; Diplomat
            </li>
            <li>
              <strong>Laurentius Siemer</strong> &mdash; Dominikanerorden
            </li>
            <li>
              <strong>Max Meinertz</strong> &mdash; Theologieprofessor
            </li>
          </ul>
        </section>

        <section className="border-t border-foreground/10 pt-6 mt-10">
          <p className="text-sm text-muted-fg">
            Quellenangabe: Die historischen Informationen basieren auf dem{" "}
            <a
              href="https://vereins.fandom.com/wiki/KStV_Ravensberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Fandom-Wiki-Eintrag zum KStV Ravensberg
            </a>{" "}
            sowie dem Bildband der Verbindung.
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
