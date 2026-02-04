import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-12">
        Datenschutzerkl&auml;rung
      </h1>

      <div className="prose-custom space-y-6 sm:space-y-8 text-foreground/80 leading-relaxed break-words">
        {/* 1. Verantwortlicher */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            1. Verantwortlicher
          </h2>
          <p>
            Verein Alter M&uuml;nsterischer Ravensberger e.V.
            <br />
            Raesfeldstra&szlig;e 32
            <br />
            48149 M&uuml;nster, Deutschland
            <br />
            Vereinsregisternummer: VR 2870 (Amtsgericht M&uuml;nster)
            <br />
            Vertreten durch: Jonas Kemper (1. Vorsitzender)
            <br />
            E-Mail:{" "}
            <a
              href="mailto:vorstand@kstv-ravensberg.de"
              className="text-accent hover:underline"
            >
              vorstand@kstv-ravensberg.de
            </a>
          </p>
        </section>


        {/* 2. Hosting */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">2. Hosting</h2>
          <p>
            Diese Website wird bei Hostinger International Ltd. gehostet. Wenn Sie
            unsere Website besuchen, werden durch den Hosting-Anbieter
            personenbezogene Daten verarbeitet, die technisch f&uuml;r die Auslieferung
            der Website erforderlich sind. Hierzu z&auml;hlen insbesondere Ihre
            IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL,
            Zeitpunkt des Zugriffs sowie die abgerufene Seite.
          </p>
          <p className="mt-2">
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an einer zuverl&auml;ssigen Bereitstellung der
            Website).
          </p>
        </section>

        {/* 3. Allgemeine Hinweise */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            3. Allgemeine Hinweise zur Datenverarbeitung
          </h2>
          <p>
            Die Nutzung unserer Website ist in der Regel ohne Angabe
            personenbezogener Daten m&ouml;glich. Soweit auf unseren Seiten
            personenbezogene Daten erhoben werden, erfolgt dies stets auf
            freiwilliger Basis. Eine Weitergabe Ihrer Daten an Dritte ohne Ihre
            ausdr&uuml;ckliche Einwilligung findet nicht statt.
          </p>
          <p className="mt-2">
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein
            l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            m&ouml;glich.
          </p>
        </section>

        {/* 4. Server-Log-Dateien */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            4. Server-Log-Dateien
          </h2>
          <p>
            Der Hosting-Anbieter erhebt und speichert automatisch Informationen in
            sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns
            &uuml;bermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Grundlage f&uuml;r die Datenverarbeitung ist Art. 6 Abs. 1
            lit. f DSGVO.
          </p>
        </section>

        {/* 5. SSL/TLS-Verschlüsselung */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            5. SSL-/TLS-Verschl&uuml;sselung
          </h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschl&uuml;sselung.
            Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an
            dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        {/* 6. Instagram */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            6. Instagram
          </h2>
          <p>
            Auf unserer Website verlinken wir auf unser Instagram-Profil. Beim
            Klick auf den Link werden Sie auf die Seite von Instagram (Meta
            Platforms Ireland Limited) weitergeleitet. Erst mit dem Klick auf den
            Link werden Daten an Instagram &uuml;bermittelt. Informationen zum Umgang
            mit Nutzerdaten finden Sie in der Datenschutzerkl&auml;rung von Instagram
            unter{" "}
            <a
              href="https://privacycenter.instagram.com/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline break-all"
            >
              https://privacycenter.instagram.com/policy
            </a>
            .
          </p>
        </section>

        {/* 7. Ihre Rechte */}
        <section>
          <h2 className="font-serif text-xl text-foreground mb-3">
            7. Ihre Rechte
          </h2>
          <p>Sie haben gegen&uuml;ber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Recht auf Auskunft (&sect; 15 DSGVO)</li>
            <li>Recht auf Berichtigung (&sect; 16 DSGVO)</li>
            <li>Recht auf L&ouml;schung (&sect; 17 DSGVO)</li>
            <li>Recht auf Einschr&auml;nkung der Verarbeitung (&sect; 18 DSGVO)</li>
            <li>Recht auf Daten&uuml;bertragbarkeit (&sect; 20 DSGVO)</li>
            <li>Widerspruchsrecht (&sect; 21 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbeh&ouml;rde
            &uuml;ber die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
            beschweren. Zust&auml;ndige Aufsichtsbeh&ouml;rde ist die Landesbeauftragte
            f&uuml;r Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
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
