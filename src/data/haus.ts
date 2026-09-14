/**
 * Content for the /haus subpage — the house tour that turns visitors into
 * Zimmeranfragen. The gallery is a curated sequence: arriving in the hallway,
 * the rooms themselves, the shared spaces, then the house around them.
 *
 * `quote` entries are rendered as pull-quote cards inside the same grid, so
 * they sit in the rhythm of the photos instead of interrupting it.
 */

export interface HausGalleryPhoto {
  kind: "photo";
  src: string;
  alt: string;
}

export interface HausGalleryQuote {
  kind: "quote";
  text: string;
}

export type HausGalleryItem = HausGalleryPhoto | HausGalleryQuote;

const photo = (file: string, alt: string): HausGalleryPhoto => ({
  kind: "photo",
  src: `/images/haus-galerie/${file}.webp`,
  alt,
});

const quote = (text: string): HausGalleryQuote => ({ kind: "quote", text });

export const hausPage = {
  title: "Unser Haus",
  subtitle: "Raesfeldstraße 32, Kreuzviertel",
  intro:
    "Seit 1962 wohnen Ravensberger in der Raesfeldstraße. Altbau, hohe Decken, Dielen, ein paar Stockwerke Treppenhaus und eine Küche, in der die längsten Abende anfangen. Schau dich um.",
  ctaHeading: "Wir haben Zimmer frei",
  ctaText:
    "Zimmer im Kreuzviertel, wenige Minuten zur Uni, zu einer Miete, die in Münster selten geworden ist. Schreib uns kurz, wir zeigen dir das Haus persönlich.",
  ctaLabel: "Zimmer anfragen",
};

export const hausGalerie: HausGalleryItem[] = [
  photo("01-flur-farben", "Flur im Ravensberg-Haus mit den Verbindungsfarben Grün, Gold und Rot an der Wand"),
  photo("02-treppenhaus-spindel", "Blick von oben in das Treppenhaus des Ravensberg-Hauses"),

  quote("Ich bin wegen der Miete gekommen und wegen der Leute geblieben."),

  photo("03-zimmer-erker", "Zimmer mit Erker und Rundbogenfenstern"),
  photo("04-zimmer-holzbalken", "Zimmer mit offener Holzbalkendecke und Schreibtisch am Fenster"),
  photo("05-zimmer-hochbett", "Zimmer mit Hochbett aus Holz und Regal"),
  photo("06-zimmer-rundfenster", "Zimmer mit rundem Fenster und Aufgang zum Hochbett"),
  photo("07-zimmer-podest", "Zimmer mit Schlafpodest und Leiter"),
  photo("08-zimmer-holzdecke", "Zimmer mit Holzdecke und Einbauschrank"),

  quote("Zwei Türen weiter wohnt immer jemand, der noch wach ist."),

  photo("09-zimmer-bogenfenster", "Helles Zimmer mit Rundbogenfenster"),
  photo("10-zimmer-einbau", "Zimmer mit Holzeinbau und Hochbett"),
  photo("11-zimmer-hell", "Leeres Zimmer mit hoher Decke und Dielenboden"),
  photo("12-zimmer-leer", "Zimmer mit Blick zur Tür und Dielenboden"),

  quote("Die Küche ist der Ort, an dem aus Mitbewohnern Freunde werden."),

  photo("13-kueche-esstisch", "Gemeinschaftsküche mit Esstisch und Rundbogenfenstern"),
  photo("14-kueche-wohnkueche", "Wohnküche mit langem Tisch und Fenster zum Hof"),
  photo("15-flur-glastueren", "Wohnungsflur mit alten Glastüren"),
  photo("16-flur-durchgang", "Flur mit Durchgang zur Gemeinschaftsküche"),

  quote("Altbau heißt: hohe Decken, große Fenster und ein Treppenhaus, das man hört."),

  photo("17-bad-dusche", "Badezimmer mit Dusche und Waschmaschine"),
  photo("18-bad-wanne", "Badezimmer mit Dusche, Waschbecken und Waschmaschine"),
  photo("19-waschraum", "Waschraum mit zwei Waschbecken"),
  photo("20-waschraum-fenster", "Waschraum mit zwei Waschbecken und Fenster"),
  photo("21-treppenhaus-holz", "Holztreppe im Treppenhaus des Ravensberg-Hauses"),

  quote("Den Rest kann man schlecht fotografieren. Komm vorbei."),
];
