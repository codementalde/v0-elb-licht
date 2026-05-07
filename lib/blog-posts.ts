export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  publishedAt: string // ISO date
  updatedAt: string
  author: string
  authorRole: string
  readingMinutes: number
  excerpt: string
  tags: string[]
  content: string // HTML
  faqs: { q: string; a: string }[]
  howToSteps?: { name: string; text: string }[] // for HowTo schema
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tuerkischer-pflegedienst-hamburg",
    title: "Türkischer Pflegedienst Hamburg – kultursensible Pflege auf Türkisch",
    metaTitle: "Türkischer Pflegedienst Hamburg | ElbLicht – Pflege auf Türkisch",
    metaDescription:
      "Suchen Sie einen türkischsprachigen Pflegedienst in Hamburg? ElbLicht bietet häusliche Pflege auf Deutsch & Türkisch – St. Pauli, Altona, Eimsbüttel. ☎ 040 560 69 787",
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
    author: "Ebru Medik",
    authorRole: "Pflegefachkraft, ElbLicht Pflegedienst Hamburg",
    readingMinutes: 5,
    excerpt:
      "Rund 70.000 Menschen türkischer Herkunft leben in Hamburg – und viele suchen einen Pflegedienst, der ihre Sprache und Kultur versteht. Wir erklären, warum kultursensible Pflege auf Türkisch so wichtig ist und wie ElbLicht dabei hilft.",
    tags: ["Türkischer Pflegedienst", "Hamburg", "Kultursensible Pflege", "Häusliche Pflege"],
    content: `
<p>Rund <strong>70.000 Menschen türkischer Herkunft</strong> leben in Hamburg – viele davon in St. Pauli, Altona und Eimsbüttel. Mit dem Alter steigt der Pflegebedarf. Doch nur wenige Pflegedienste sprechen Türkisch. Das führt zu Missverständnissen, Vertrauensproblemen und einer schlechten Versorgungsqualität.</p>

<p><strong>ElbLicht Pflegedienst</strong> schließt diese Lücke: Unser Team betreut pflegebedürftige Menschen in Hamburg auf <strong>Deutsch und Türkisch</strong> – einfühlsam, professionell und kulturell sensibel.</p>

<h2>Warum türkischsprachige Pflege so wichtig ist</h2>

<p>Pflege ist Vertrauenssache. Wenn Pflegebedürftige in ihrer Muttersprache kommunizieren können, fühlen sie sich sicherer und besser verstanden. Besonders bei Themen wie Medikamenteneinnahme, Schmerzen oder persönlicher Hygiene ist klare Kommunikation entscheidend.</p>

<p>Studien zeigen: Menschen mit Migrationshintergrund nehmen Pflegeleistungen seltener in Anspruch – oft aus Angst vor Sprachbarrieren oder kulturellen Missverständnissen. Ein türkischsprachiger Pflegedienst senkt diese Hemmschwelle deutlich.</p>

<h2>Was ElbLicht bietet: Pflege auf Deutsch und Türkisch</h2>

<p>Unser Pflegeteam in Hamburg umfasst qualifizierte Fachkräfte, die fließend Deutsch und Türkisch sprechen. Wir bieten folgende Leistungen in beiden Sprachen an:</p>

<ul>
  <li><strong>Grundpflege</strong> – Körperpflege, Ankleiden, Mobilisation nach SGB XI</li>
  <li><strong>Behandlungspflege</strong> – Medikamentengabe, Wundversorgung, Injektionen nach SGB V</li>
  <li><strong>Hauswirtschaft &amp; Betreuung</strong> – Einkauf, Reinigung, Begleitung nach §45b</li>
  <li><strong>Pflegeberatung</strong> – Pflegegrad beantragen, MDK-Vorbereitung auf Türkisch</li>
  <li><strong>Verhinderungspflege</strong> – Entlastung pflegender Angehöriger bis 6 Wochen</li>
</ul>

<h2>Kultursensible Pflege: Was steckt dahinter?</h2>

<p>Kultursensible Pflege bedeutet mehr als nur Sprachkenntnisse. Es geht darum, religiöse Gepflogenheiten, Ernährungsgewohnheiten und familiäre Werte zu respektieren. Zum Beispiel:</p>

<ul>
  <li>Halal-konforme Speisen und Fastenzeiten wie den Ramadan berücksichtigen</li>
  <li>Geschlechtssensible Pflege – auf Wunsch weibliche Pflegekraft</li>
  <li>Familie in Pflegeentscheidungen einbeziehen</li>
  <li>Religionsausübung ermöglichen und unterstützen</li>
</ul>

<h2>Unser Einzugsgebiet in Hamburg</h2>

<p>Wir betreuen Pflegebedürftige in <strong>Hamburg-St. Pauli, Altona und Eimsbüttel</strong> sowie den umliegenden Stadtteilen. Unser Büro befindet sich in der Clemens-Schultz-Straße 76, 20359 Hamburg – im Herzen des Viertels.</p>

<h2>Wie Sie uns erreichen</h2>

<p>Sie möchten mehr über unsere türkischsprachige Pflege erfahren oder einen Beratungstermin vereinbaren? Rufen Sie uns an – auf Deutsch oder Türkisch: <strong>☎ 040 560 69 787</strong>, Mo–Fr 08:00–18:00 Uhr. Alternativ schreiben Sie uns: <a href="mailto:info@pflegedienst-elblicht.de">info@pflegedienst-elblicht.de</a>.</p>

<p>Die erste Beratung ist <strong>kostenlos und unverbindlich</strong>. Wir kommen auch gerne zu Ihnen nach Hause.</p>
    `.trim(),
    faqs: [
      {
        q: "Gibt es in Hamburg einen Pflegedienst, der Türkisch spricht?",
        a: "Ja. ElbLicht Pflegedienst in Hamburg-St. Pauli bietet häusliche Pflege auf Deutsch und Türkisch an. Unser Team betreut pflegebedürftige Menschen in St. Pauli, Altona und Eimsbüttel. ☎ 040 560 69 787.",
      },
      {
        q: "Was bedeutet kultursensible Pflege?",
        a: "Kultursensible Pflege berücksichtigt neben Sprache auch religiöse Gewohnheiten, Ernährungsvorschriften und familiäre Werte. Bei ElbLicht sprechen wir Deutsch, Türkisch und Englisch und gehen individuell auf jeden Pflegebedürftigen ein.",
      },
      {
        q: "Welche Pflegeleistungen bietet ElbLicht auf Türkisch an?",
        a: "Wir bieten Grundpflege, Behandlungspflege, Hauswirtschaft, Verhinderungspflege und Pflegeberatung – alles auf Deutsch und Türkisch. Auch die Unterstützung beim Pflegegrad-Antrag erläutern wir auf Türkisch.",
      },
      {
        q: "Ist die erste Pflegeberatung bei ElbLicht kostenlos?",
        a: "Ja. Die Erstberatung bei ElbLicht Pflegedienst ist kostenlos und unverbindlich. Rufen Sie uns an (040 560 69 787) oder füllen Sie das Kontaktformular auf unserer Website aus.",
      },
      {
        q: "In welchen Hamburger Stadtteilen ist ElbLicht aktiv?",
        a: "Wir betreuen Pflegebedürftige in Hamburg-St. Pauli, Altona, Eimsbüttel und den umliegenden Stadtteilen.",
      },
    ],
  },
  {
    slug: "pflegegrad-beantragen-hamburg",
    title: "Pflegegrad beantragen in Hamburg: Schritt-für-Schritt-Anleitung 2026",
    metaTitle: "Pflegegrad beantragen Hamburg 2026 | Schritt für Schritt – ElbLicht",
    metaDescription:
      "Pflegegrad beantragen in Hamburg: So funktioniert der Antrag bei der Pflegekasse, was beim MDK-Gutachten wichtig ist & welche Leistungen Sie erhalten. Kostenlose Beratung ☎ 040 560 69 787",
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
    author: "Gülay Patan",
    authorRole: "Pflegeberaterin, ElbLicht Pflegedienst Hamburg",
    readingMinutes: 6,
    excerpt:
      "Einen Pflegegrad zu beantragen klingt kompliziert – ist es aber nicht, wenn man weiß, wie es geht. Diese Schritt-für-Schritt-Anleitung erklärt, wie Sie in Hamburg schnell und richtig vorgehen.",
    tags: ["Pflegegrad beantragen", "Hamburg", "Pflegekasse", "MDK", "Pflegeberatung"],
    content: `
<p>Einen <strong>Pflegegrad beantragen</strong> ist der erste und wichtigste Schritt, um staatliche Unterstützung für die häusliche Pflege zu erhalten. Viele Familien in Hamburg wissen nicht genau, wie sie vorgehen sollen – oder unterschätzen, wie viel Geld auf dem Spiel steht. <strong>Pflegegrad 2</strong> bedeutet beispielsweise bis zu <strong>761 € monatlich</strong> an Pflegegeld, Pflegegrad 5 sogar bis zu <strong>1.955 €</strong>.</p>

<p>In dieser Anleitung erfahren Sie, wie der Antrag funktioniert, was beim MDK-Gutachten wichtig ist und wie ElbLicht Pflegedienst Sie dabei unterstützen kann.</p>

<h2>Schritt 1: Antrag bei der Pflegekasse stellen</h2>

<p>Der Antrag wird schriftlich bei der <strong>Pflegekasse</strong> gestellt – das ist die Abteilung Ihrer Krankenkasse, die für Pflegeleistungen zuständig ist. Sie können den Antrag per Brief, Fax oder Online-Formular einreichen. Wichtig: Das Antragsdatum gilt als offizieller Beginn – je früher Sie beantragen, desto früher beginnt die Leistungszahlung.</p>

<p><strong>Tipp:</strong> Nutzen Sie einfach das Stichwort „Antrag auf Feststellung der Pflegebedürftigkeit" in Ihrem Schreiben. Eine formelle Vorlage ist nicht zwingend nötig.</p>

<h2>Schritt 2: Termin mit dem MDK (oder MEDICPROOF) vereinbaren</h2>

<p>Nach dem Antrag schickt die Pflegekasse den <strong>Medizinischen Dienst der Krankenversicherung (MDK)</strong> – bei privat Versicherten MEDICPROOF – zur Begutachtung. Der Gutachter besucht die pflegebedürftige Person zu Hause und bewertet die Einschränkungen in sechs Lebensbereichen.</p>

<p>Die sechs Begutachtungsbereiche:</p>
<ul>
  <li>Mobilität</li>
  <li>Kognitive und kommunikative Fähigkeiten</li>
  <li>Verhaltensweisen und psychische Problemlagen</li>
  <li>Selbstversorgung</li>
  <li>Umgang mit krankheitsbedingten Anforderungen</li>
  <li>Gestaltung des Alltagslebens und soziale Kontakte</li>
</ul>

<h2>Schritt 3: Vorbereitung auf das Gutachten</h2>

<p>Die Vorbereitung ist entscheidend. Führen Sie vor dem Termin ein <strong>Pflegetagebuch</strong>, in dem Sie dokumentieren, welche Tätigkeiten die pflegebedürftige Person alleine nicht mehr bewältigen kann und wie lange Unterstützung täglich benötigt wird. Zeigen Sie beim Gutachtenbesuch den <strong>schlechtesten Tag</strong>, nicht einen guten Tag.</p>

<p><strong>Was Sie bereithalten sollten:</strong></p>
<ul>
  <li>Liste aller Medikamente</li>
  <li>Ärztliche Atteste und Befundberichte</li>
  <li>Pflegetagebuch (mindestens 2 Wochen)</li>
  <li>Liste der Hilfsmittel (Rollator, Pflegebett etc.)</li>
</ul>

<h2>Schritt 4: Pflegegrad-Einstufung erhalten</h2>

<p>Der MDK erstellt ein Gutachten und empfiehlt einen <strong>Pflegegrad 1 bis 5</strong>. Die Pflegekasse entscheidet dann offiziell. Sie erhalten den Bescheid in der Regel innerhalb von <strong>25 Werktagen</strong>. Wenn Sie mit der Einstufung nicht einverstanden sind, können Sie innerhalb von vier Wochen <strong>Widerspruch</strong> einlegen.</p>

<h2>Schritt 5: Leistungen in Anspruch nehmen</h2>

<p>Nach der Einstufung stehen Ihnen je nach Pflegegrad verschiedene Leistungen zu:</p>

<ul>
  <li><strong>Pflegegeld</strong> – monatliche Zahlung für selbst organisierte Pflege (z. B. durch Angehörige)</li>
  <li><strong>Pflegesachleistungen</strong> – Bezahlung eines zugelassenen Pflegedienstes wie ElbLicht</li>
  <li><strong>Verhinderungspflege</strong> – bis zu 1.612 € jährlich für Vertretungspflege</li>
  <li><strong>Entlastungsbetrag</strong> – 125 € monatlich für haushaltsnahe Leistungen (§45b)</li>
</ul>

<h2>Schritt 6: Professionellen Pflegedienst einschalten</h2>

<p>Sobald der Pflegegrad festgestellt ist, können Sie einen <strong>zugelassenen ambulanten Pflegedienst</strong> wie ElbLicht beauftragen. Wir übernehmen die Abrechnung direkt mit der Pflegekasse – für Sie entstehen keine zusätzlichen Kosten, wenn Sie Pflegesachleistungen in Anspruch nehmen.</p>

<p>Wir begleiten Sie auch beim Antrag und bereiten Sie auf den MDK-Termin vor – auf Deutsch, Türkisch oder Englisch.</p>
    `.trim(),
    faqs: [
      {
        q: "Wie beantrage ich einen Pflegegrad in Hamburg?",
        a: "Stellen Sie einen schriftlichen Antrag bei Ihrer Pflegekasse (Abteilung der Krankenkasse). Schreiben Sie: 'Ich beantrage die Feststellung der Pflegebedürftigkeit.' Der MDK kommt dann zur Begutachtung nach Hause. ElbLicht Pflegedienst unterstützt Sie kostenlos dabei: ☎ 040 560 69 787.",
      },
      {
        q: "Wie lange dauert es, bis der Pflegegrad bewilligt wird?",
        a: "Die Pflegekasse muss innerhalb von 25 Werktagen nach dem MDK-Gutachten entscheiden. Insgesamt dauert der Prozess vom Antrag bis zum Bescheid meist 4–8 Wochen.",
      },
      {
        q: "Was passiert, wenn der Pflegegrad abgelehnt wird?",
        a: "Sie können innerhalb von vier Wochen nach Erhalt des Bescheids Widerspruch einlegen. Fordern Sie dazu das MDK-Gutachten an und lassen Sie sich von einem Pflegeberater helfen. ElbLicht unterstützt Sie dabei.",
      },
      {
        q: "Ab welchem Pflegegrad bekomme ich Geld von der Pflegekasse?",
        a: "Ab Pflegegrad 2 erhalten Sie Pflegegeld (332 €/Monat) oder Pflegesachleistungen (724 €/Monat). Pflegegrad 1 gibt es den Entlastungsbetrag von 125 €/Monat.",
      },
      {
        q: "Kann ElbLicht beim Pflegegrad-Antrag helfen?",
        a: "Ja. ElbLicht Pflegedienst Hamburg bietet kostenlose Pflegeberatung an – auch beim Pflegegrad-Antrag, MDK-Vorbereitung und Widerspruch. Wir sprechen Deutsch, Türkisch und Englisch. ☎ 040 560 69 787.",
      },
    ],
    howToSteps: [
      {
        name: "Antrag bei der Pflegekasse stellen",
        text: "Schreiben Sie an Ihre Pflegekasse: 'Ich beantrage die Feststellung der Pflegebedürftigkeit.' Das Antragsdatum gilt als Leistungsbeginn.",
      },
      {
        name: "MDK-Termin vereinbaren",
        text: "Der Medizinische Dienst (MDK) vereinbart einen Hausbesuchstermin zur Begutachtung der sechs Lebensbereiche.",
      },
      {
        name: "Auf das Gutachten vorbereiten",
        text: "Führen Sie ein Pflegetagebuch (mind. 2 Wochen), sammeln Sie Atteste und Medikamentenlisten, und zeigen Sie den schlechtesten Alltag.",
      },
      {
        name: "Pflegegrad-Bescheid erhalten",
        text: "Die Pflegekasse entscheidet innerhalb von 25 Werktagen. Bei Ablehnung können Sie innerhalb von 4 Wochen Widerspruch einlegen.",
      },
      {
        name: "Leistungen in Anspruch nehmen",
        text: "Ab Pflegegrad 2: Pflegegeld, Pflegesachleistungen, Verhinderungspflege und Entlastungsbetrag §45b stehen zur Verfügung.",
      },
      {
        name: "Pflegedienst beauftragen",
        text: "Beauftragen Sie einen zugelassenen ambulanten Pflegedienst wie ElbLicht. Wir rechnen direkt mit der Pflegekasse ab.",
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
