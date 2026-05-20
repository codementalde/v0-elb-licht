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
      "Suchen Sie einen türkischsprachigen Pflegedienst in Hamburg? ElbLicht bietet häusliche Pflege auf Deutsch & Türkisch – St. Pauli, Altona, Eimsbüttel. ☎ 040 423 26 735",
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
    author: "Ebru Medik",
    authorRole: "Pflegedienstleitung (PDL), ElbLicht Pflegedienst Hamburg",
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

<p>Sie möchten mehr über unsere türkischsprachige Pflege erfahren oder einen Beratungstermin vereinbaren? Rufen Sie uns an – auf Deutsch oder Türkisch: <strong>☎ 040 423 26 735</strong>, Mo–Fr 08:00–18:00 Uhr. Alternativ schreiben Sie uns: <a href="mailto:info@pflegedienst-elblicht.de">info@pflegedienst-elblicht.de</a>.</p>

<p>Die erste Beratung ist <strong>kostenlos und unverbindlich</strong>. Wir kommen auch gerne zu Ihnen nach Hause.</p>
    `.trim(),
    faqs: [
      {
        q: "Gibt es in Hamburg einen Pflegedienst, der Türkisch spricht?",
        a: "Ja. ElbLicht Pflegedienst in Hamburg-St. Pauli bietet häusliche Pflege auf Deutsch und Türkisch an. Unser Team betreut pflegebedürftige Menschen in St. Pauli, Altona und Eimsbüttel. ☎ 040 423 26 735.",
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
        a: "Ja. Die Erstberatung bei ElbLicht Pflegedienst ist kostenlos und unverbindlich. Rufen Sie uns an (040 423 26 735) oder füllen Sie das Kontaktformular auf unserer Website aus.",
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
      "Pflegegrad beantragen in Hamburg: So funktioniert der Antrag bei der Pflegekasse, was beim MDK-Gutachten wichtig ist & welche Leistungen Sie erhalten. Kostenlose Beratung ☎ 040 423 26 735",
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-07",
    author: "Gülay Patan",
    authorRole: "Stellv. Pflegedienstleitung, ElbLicht Pflegedienst Hamburg",
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
        a: "Stellen Sie einen schriftlichen Antrag bei Ihrer Pflegekasse (Abteilung der Krankenkasse). Schreiben Sie: 'Ich beantrage die Feststellung der Pflegebedürftigkeit.' Der MDK kommt dann zur Begutachtung nach Hause. ElbLicht Pflegedienst unterstützt Sie kostenlos dabei: ☎ 040 423 26 735.",
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
        a: "Ja. ElbLicht Pflegedienst Hamburg bietet kostenlose Pflegeberatung an – auch beim Pflegegrad-Antrag, MDK-Vorbereitung und Widerspruch. Wir sprechen Deutsch, Türkisch und Englisch. ☎ 040 423 26 735.",
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

  // ════════════════════════════════════════════════════════════════════
  // 3. PFLEGEDIENST ST. PAULI — Local pillar (St. Pauli odaklı)
  // ════════════════════════════════════════════════════════════════════
  {
    slug: "pflegedienst-st-pauli",
    title: "Pflegedienst St. Pauli: Häusliche Pflege im Herzen Hamburgs",
    metaTitle: "Pflegedienst St. Pauli – ElbLicht | Häusliche Pflege Hamburg",
    metaDescription:
      "Ambulanter Pflegedienst direkt in St. Pauli: Grundpflege, Behandlungspflege & Beratung – Deutsch & Türkisch. Kostenlose Erstberatung. ☎ 040 423 26 735",
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-08",
    author: "Gülay Patan",
    authorRole: "Stellv. Pflegedienstleiterin, ElbLicht Pflegedienst St. Pauli",
    readingMinutes: 6,
    excerpt:
      "St. Pauli ist mehr als Reeperbahn und Hafen – hier leben über 22.000 Menschen, viele von ihnen pflegebedürftig. Wir sind der ambulante Pflegedienst direkt im Stadtteil und erklären, was häusliche Pflege in St. Pauli auszeichnet.",
    tags: ["Pflegedienst St. Pauli", "Häusliche Pflege Hamburg", "Ambulante Pflege", "St. Pauli"],
    content: `
<p><strong>Ein Pflegedienst in St. Pauli betreut pflegebedürftige Menschen direkt zu Hause – mit kurzen Wegen, schneller Reaktionszeit und Teamleitung im Stadtteil.</strong> ElbLicht Pflegedienst sitzt in der Clemens-Schultz-Straße 76, mitten im 20359er Postleitzahlen-Gebiet, und versorgt Klientinnen und Klienten in St. Pauli, Altona und Eimsbüttel.</p>

<h2>Warum ein Pflegedienst aus dem eigenen Stadtteil zählt</h2>

<p>Der entscheidende Vorteil eines lokalen Pflegedienstes: Die Pflegekräfte kennen die Wege, die Hochhäuser, die Hinterhöfe und die Treppenhäuser in St. Pauli. Bei akuten Einsätzen sind wir oft in unter 15 Minuten vor Ort – ein Pflegedienst aus Wandsbek oder Bergedorf braucht für die gleiche Strecke leicht 40 Minuten oder mehr.</p>

<p>Außerdem sind wir Teil des Viertels: Wir kennen die Hausärztinnen, die Apotheken, die Beratungsstellen am Hans-Albers-Platz, das Sozialzentrum und die Quartierstreffs. Diese Vernetzung beschleunigt Hilfe – etwa wenn Medikamente nachkommen müssen oder ein Pflegegrad-Antrag schnell vorbereitet werden soll.</p>

<h2>Welche Leistungen bietet ein Pflegedienst in St. Pauli?</h2>

<p>Ein zugelassener ambulanter Pflegedienst rechnet direkt mit Pflegekassen (SGB XI) und Krankenkassen (SGB V) ab. Bei ElbLicht sind das konkret:</p>

<ul>
  <li><strong>Grundpflege</strong> – Körperpflege, Hilfe beim An- und Auskleiden, Mobilisation</li>
  <li><strong>Behandlungspflege</strong> – Medikamentengabe, Wundversorgung, Injektionen, Verbandswechsel</li>
  <li><strong>Hauswirtschaftliche Versorgung</strong> – Reinigung, Wäsche, Einkauf, Botengänge</li>
  <li><strong>Betreuungsleistungen nach §45b</strong> – Begleitung zu Arztbesuchen, Gedächtnistraining, Gesellschaft</li>
  <li><strong>Verhinderungspflege</strong> – Entlastung pflegender Angehöriger bis zu 6 Wochen jährlich</li>
  <li><strong>Pflegeberatung</strong> – Pflegegrad-Antrag, MDK-Vorbereitung, Kassenleistungen erklärt</li>
</ul>

<h2>Wie wählt man den richtigen Pflegedienst in St. Pauli aus?</h2>

<p>Achten Sie auf vier Kriterien: <strong>Kassenzulassung</strong> (SGB V und SGB XI), <strong>Erreichbarkeit</strong> (24/7-Notruf), <strong>Sprachen</strong> (relevant in St. Pauli mit hohem türkischsprachigem Anteil) und <strong>Fluktuation</strong> (kommen immer dieselben Pflegekräfte oder ständig neue?). ElbLicht erfüllt alle vier – mit über 20 Jahren Erfahrung in der Pflege.</p>

<h2>Pflege in St. Pauli: Was der Stadtteil besonders macht</h2>

<p>St. Pauli hat einen hohen Anteil älterer Bewohner, die seit Jahrzehnten in ihren Wohnungen leben – oft im 4. oder 5. Stock ohne Aufzug. Pflege bedeutet hier nicht nur medizinische Versorgung, sondern auch praktische Hilfe beim Alltag in einer Stadt, die laut, eng und manchmal beschwerlich ist.</p>

<p>Hinzu kommt: St. Pauli ist multikulturell. Viele unserer Klientinnen und Klienten haben einen Migrationshintergrund. Wir sprechen <strong>Deutsch, Türkisch und Englisch</strong> – und respektieren religiöse sowie kulturelle Gewohnheiten in der Pflege.</p>

<h2>Kosten: Was zahlen Pflegekasse und Klient?</h2>

<p>Die Kosten richten sich nach Pflegegrad. Ab Pflegegrad 2 übernimmt die Pflegekasse einen Großteil – Sie zahlen je nach Leistungspaket oft nur einen Eigenanteil von 0–200 € im Monat. Eine vollständige Übersicht aller Leistungen finden Sie in unserem Beitrag <a href="/blog/pflegegrad-beantragen-hamburg">Pflegegrad beantragen in Hamburg</a>.</p>

<h2>Erstgespräch: kostenlos, unverbindlich, in St. Pauli</h2>

<p>Wir kommen zu Ihnen nach Hause oder Sie besuchen unser Büro in der Clemens-Schultz-Straße 76. Beim Erstgespräch klären wir Ihren konkreten Bedarf, die finanziellen Möglichkeiten und den Antragsweg. <strong>Diese Beratung ist kostenlos – auch ohne späteren Vertrag.</strong></p>

<p>Rufen Sie an: <strong>☎ 040 423 26 735</strong>, Mo–Fr 8:00–18:00 Uhr. Mobil 24/7: 0171 / 1500 882. Oder schreiben Sie an <a href="mailto:info@pflegedienst-elblicht.de">info@pflegedienst-elblicht.de</a>.</p>
    `.trim(),
    faqs: [
      {
        q: "Welcher Pflegedienst betreut St. Pauli?",
        a: "ElbLicht Pflegedienst sitzt in der Clemens-Schultz-Straße 76, 20359 Hamburg – direkt in St. Pauli. Wir sind ein zugelassener ambulanter Pflegedienst (SGB V & XI) und betreuen Klientinnen und Klienten in St. Pauli, Altona und Eimsbüttel auf Deutsch, Türkisch und Englisch.",
      },
      {
        q: "Wie schnell ist der Pflegedienst bei mir in St. Pauli vor Ort?",
        a: "Da unser Büro in St. Pauli liegt, sind wir meist in 15 Minuten oder weniger bei Ihnen – innerhalb des Stadtteils oft sogar in 5–10 Minuten. Bei festen Pflegeterminen kommen wir pünktlich nach Plan, im Notfall über die 24/7-Mobilnummer 0171 / 1500 882.",
      },
      {
        q: "Was kostet ein Pflegedienst in St. Pauli monatlich?",
        a: "Die meisten Leistungen werden von der Pflegekasse übernommen, sobald ein Pflegegrad anerkannt ist. Ab Pflegegrad 2 sind oft nur 0–200 € Eigenanteil pro Monat fällig – je nach Leistungspaket. Die kostenlose Erstberatung von ElbLicht klärt Ihre konkreten Kosten.",
      },
      {
        q: "Gibt es einen türkischsprachigen Pflegedienst in St. Pauli?",
        a: "Ja. ElbLicht bietet Pflege auf Deutsch und Türkisch in St. Pauli, Altona und Eimsbüttel. Auch Pflegeberatung, MDK-Begleitung und Antragstellung erläutern wir auf Türkisch. Mehr dazu im Beitrag „Türkischer Pflegedienst Hamburg“.",
      },
      {
        q: "Was unterscheidet ElbLicht von größeren Pflegediensten?",
        a: "Wir sind klein, lokal und konstant: Sie sehen meist dieselben 2–3 Pflegekräfte, nicht jede Woche eine neue. Außerdem sind wir mehrsprachig (DE/TR/EN), 24/7 mobil erreichbar und der Standort liegt direkt in St. Pauli – nicht 30 km außerhalb.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  // 4. PFLEGEKASSE LEISTUNGEN 2026 — money intent
  // ════════════════════════════════════════════════════════════════════
  {
    slug: "pflegekasse-leistungen-2026",
    title: "Pflegekasse 2026: Welche Leistungen Sie wirklich bekommen",
    metaTitle: "Pflegekasse Leistungen 2026 | ElbLicht Pflegedienst Hamburg",
    metaDescription:
      "Was zahlt die Pflegekasse 2026? Pflegegeld, Sachleistungen, Entlastungsbetrag & Verhinderungspflege im Überblick – mit klarer Tabelle. ☎ 040 423 26 735",
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-08",
    author: "Ebru Medik",
    authorRole: "Pflegedienstleiterin (PDL), ElbLicht Pflegedienst Hamburg",
    readingMinutes: 7,
    excerpt:
      "Pflegegeld, Pflegesachleistung, Entlastungsbetrag, Verhinderungspflege – die Pflegekasse zahlt mehr, als die meisten wissen. Wir zeigen alle Leistungen 2026 in einer klaren Übersicht für Hamburg.",
    tags: ["Pflegekasse", "Pflegeleistungen 2026", "Pflegegeld", "Hamburg"],
    content: `
<p><strong>Die Pflegekasse zahlt 2026 je nach Pflegegrad zwischen 347 € und 990 € Pflegegeld monatlich, zusätzlich Pflegesachleistungen bis zu 2.299 € und einen Entlastungsbetrag von 131 € pro Monat.</strong> Welche Leistung Sie konkret bekommen, hängt vom anerkannten Pflegegrad und davon ab, ob Sie Angehörige pflegen lassen oder einen Pflegedienst beauftragen.</p>

<h2>Welche Leistungen umfasst die Pflegekasse?</h2>

<p>Die Pflegeversicherung (SGB XI) bietet sechs Hauptleistungen für ambulante Pflege zu Hause:</p>

<ul>
  <li><strong>Pflegegeld</strong> – wenn Angehörige selbst pflegen</li>
  <li><strong>Pflegesachleistung</strong> – wenn ein Pflegedienst kommt</li>
  <li><strong>Kombinationsleistung</strong> – Mischung aus beidem</li>
  <li><strong>Entlastungsbetrag §45b</strong> – 131 €/Monat zweckgebunden</li>
  <li><strong>Verhinderungspflege</strong> – bis 1.612 €/Jahr</li>
  <li><strong>Kurzzeit-/Tages-/Nachtpflege</strong> – stationäre Ergänzung</li>
</ul>

<h2>Pflegegeld 2026: Tabelle nach Pflegegrad</h2>

<p>Pflegegeld bekommen Sie monatlich auf Ihr Konto, wenn Angehörige Sie pflegen. Es ist <strong>steuerfrei</strong> und kann frei verwendet werden.</p>

<ul>
  <li><strong>Pflegegrad 2:</strong> 347 € pro Monat</li>
  <li><strong>Pflegegrad 3:</strong> 599 € pro Monat</li>
  <li><strong>Pflegegrad 4:</strong> 800 € pro Monat</li>
  <li><strong>Pflegegrad 5:</strong> 990 € pro Monat</li>
</ul>

<p>Pflegegrad 1 erhält kein Pflegegeld, dafür aber den Entlastungsbetrag von 131 € monatlich.</p>

<h2>Pflegesachleistung: Was zahlt die Kasse für einen Pflegedienst?</h2>

<p>Wenn ein zugelassener Pflegedienst (wie ElbLicht) kommt, übernimmt die Pflegekasse die Rechnung bis zu folgendem monatlichen Höchstbetrag:</p>

<ul>
  <li><strong>Pflegegrad 2:</strong> 796 € pro Monat</li>
  <li><strong>Pflegegrad 3:</strong> 1.497 € pro Monat</li>
  <li><strong>Pflegegrad 4:</strong> 1.859 € pro Monat</li>
  <li><strong>Pflegegrad 5:</strong> 2.299 € pro Monat</li>
</ul>

<p>Wichtig: Wir rechnen <strong>direkt mit der Pflegekasse ab</strong>. Sie unterschreiben monatlich nur den Leistungsnachweis – kein Vorstrecken, keine Erstattungsanträge.</p>

<h2>Entlastungsbetrag §45b: 131 € monatlich – aber wofür?</h2>

<p>Jeder Pflegegrad (1 bis 5) bekommt zusätzlich <strong>131 € pro Monat</strong> als Entlastungsbetrag. Dieses Geld ist <strong>zweckgebunden</strong> – Sie können damit zum Beispiel bezahlen:</p>

<ul>
  <li>Hauswirtschaftliche Hilfe (Reinigung, Wäsche, Einkauf)</li>
  <li>Betreuungsleistungen (Begleitung, Gesellschaft, Spaziergänge)</li>
  <li>Tagespflege oder Kurzzeitpflege als Zuschuss</li>
</ul>

<p>Nicht genutzte Beträge werden bis zu 6 Monate gesammelt. Am Jahresende verfallen sie.</p>

<h2>Verhinderungspflege: Bis zu 1.612 € jährlich extra</h2>

<p>Wenn pflegende Angehörige Urlaub brauchen, krank werden oder einfach Pause machen, übernimmt die Pflegekasse die Kosten für eine Vertretung – bis zu <strong>1.612 € pro Jahr</strong> für maximal 6 Wochen. Mehr dazu im Beitrag <a href="/blog/verhinderungspflege-hamburg">Verhinderungspflege Hamburg beantragen</a>.</p>

<h2>Kombinationsleistung: Pflegegeld und Pflegedienst gleichzeitig</h2>

<p>Wenn Angehörige nur teilweise pflegen können, kombinieren Sie Pflegegeld und Sachleistung anteilig. Beispiel Pflegegrad 3: Pflegedienst übernimmt 50% der Sachleistung (748,50 €), Sie bekommen 50% des Pflegegelds (299,50 €) zusätzlich aufs Konto.</p>

<h2>Welche Pflegekasse ist zuständig?</h2>

<p>Die Pflegekasse ist immer an Ihre Krankenkasse angeschlossen. Wenn Sie bei der TK krankenversichert sind, beantragen Sie Pflegeleistungen bei der TK-Pflegekasse – analog für AOK, Barmer, DAK usw. Bei <strong>privaten Krankenversicherungen</strong> übernimmt die private Pflegepflichtversicherung dieselben Leistungen.</p>

<h2>Wir helfen kostenlos beim Antrag</h2>

<p>Pflegekassen-Anträge sind verwirrend, der MDK-Termin entscheidet über Tausende Euro. Wir bereiten Sie kostenlos vor – auch auf Türkisch. Rufen Sie an: <strong>☎ 040 423 26 735</strong>. Mehr zur Antragsstrecke: <a href="/blog/pflegegrad-beantragen-hamburg">Pflegegrad beantragen in Hamburg</a>.</p>
    `.trim(),
    faqs: [
      {
        q: "Wie viel Pflegegeld zahlt die Pflegekasse 2026?",
        a: "Pflegegeld 2026: Pflegegrad 2 = 347 €, Pflegegrad 3 = 599 €, Pflegegrad 4 = 800 €, Pflegegrad 5 = 990 € pro Monat. Pflegegrad 1 erhält kein Pflegegeld, aber den Entlastungsbetrag von 131 €. Die Auszahlung erfolgt monatlich aufs Konto, steuerfrei.",
      },
      {
        q: "Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistung?",
        a: "Pflegegeld bekommen Sie aufs Konto, wenn Angehörige selbst pflegen. Pflegesachleistung übernimmt die Kasse direkt für einen ambulanten Pflegedienst – bis zu 2.299 € monatlich bei Pflegegrad 5. Beides lässt sich auch kombinieren (Kombinationsleistung).",
      },
      {
        q: "Wofür darf ich den Entlastungsbetrag von 131 € verwenden?",
        a: "Der Entlastungsbetrag §45b ist zweckgebunden für Hauswirtschaft, Betreuung, Tagespflege oder Kurzzeitpflege. Nicht genutzte Monate sammeln sich bis zu 6 Monate, danach verfallen sie. Pflegegeld oder Lebensmittel sind davon nicht abgedeckt.",
      },
      {
        q: "Übernimmt die Pflegekasse die Kosten für ElbLicht?",
        a: "Ja. ElbLicht ist als ambulanter Pflegedienst nach SGB V und SGB XI zugelassen. Wir rechnen direkt mit Ihrer Pflegekasse ab – Sie unterschreiben nur den Leistungsnachweis. Eigenanteil je nach Leistungspaket meist 0–200 € monatlich.",
      },
      {
        q: "Bekomme ich Pflegegeld auch ohne Pflegedienst?",
        a: "Ja, ab Pflegegrad 2. Wenn Sie ausschließlich von Angehörigen gepflegt werden, fließt das volle Pflegegeld auf Ihr Konto. Voraussetzung: ein anerkannter Pflegegrad und mindestens halbjährliche Pflegeberatung nach §37.3 (kostenlos).",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  // 5. VERHINDERUNGSPFLEGE HAMBURG — transactional, specific service
  // ════════════════════════════════════════════════════════════════════
  {
    slug: "verhinderungspflege-hamburg",
    title: "Verhinderungspflege Hamburg: Bis zu 1.612 € Entlastung – so beantragen Sie",
    metaTitle: "Verhinderungspflege Hamburg | ElbLicht Pflegedienst",
    metaDescription:
      "Pflegende Angehörige entlasten: Bis zu 1.612 € Verhinderungspflege jährlich. Voraussetzungen, Antrag & Ablauf in Hamburg erklärt. ☎ 040 423 26 735",
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-08",
    author: "Ebru Medik",
    authorRole: "Pflegedienstleiterin (PDL), ElbLicht Pflegedienst Hamburg",
    readingMinutes: 5,
    excerpt:
      "Wer Angehörige pflegt, braucht selbst Pausen – Urlaub, Krankheit oder einfach Erholung. Die Pflegekasse zahlt dafür bis zu 1.612 € jährlich. Wir erklären Antragsweg, Voraussetzungen und Beispiele aus Hamburg.",
    tags: ["Verhinderungspflege", "Hamburg", "Pflegende Angehörige", "Pflegeleistungen"],
    content: `
<p><strong>Verhinderungspflege ist eine Leistung der Pflegekasse, mit der pflegende Angehörige bis zu 6 Wochen pro Jahr vertreten werden können – mit bis zu 1.612 € Kostenübernahme.</strong> Voraussetzung ist ein anerkannter Pflegegrad ab Stufe 2 und mindestens 6 Monate vorherige häusliche Pflege.</p>

<h2>Was ist Verhinderungspflege genau?</h2>

<p>Verhinderungspflege (geregelt in §39 SGB XI) springt ein, wenn die <strong>private Pflegeperson ausfällt</strong> – egal aus welchem Grund: Urlaub, Krankheit, Termine, Erschöpfung. In dieser Zeit übernimmt entweder ein Pflegedienst, eine andere Person oder sogar ein Familienmitglied die Pflege.</p>

<p>Die Pflegekasse erstattet die Kosten – bis zur jährlichen Höchstgrenze. <strong>Wichtig:</strong> Verhinderungspflege ist kein Geld, das Sie automatisch bekommen, sondern eine Erstattungsleistung. Sie müssen die Vertretung organisieren und die Rechnung einreichen (oder einen zugelassenen Pflegedienst beauftragen, der direkt abrechnet).</p>

<h2>Wer hat Anspruch auf Verhinderungspflege?</h2>

<p>Drei Voraussetzungen müssen erfüllt sein:</p>

<ul>
  <li><strong>Pflegegrad 2 oder höher</strong> ist anerkannt</li>
  <li>Die pflegebedürftige Person wird seit mindestens <strong>6 Monaten zu Hause</strong> gepflegt</li>
  <li>Eine <strong>Pflegeperson</strong> (meist ein Angehöriger) ist die Hauptperson</li>
</ul>

<p>Die Wartezeit von 6 Monaten zählt ab dem Tag, an dem der Pflegegrad anerkannt wurde. Pflegegrad 1 bekommt keine Verhinderungspflege.</p>

<h2>Wie viel Geld bekomme ich?</h2>

<p>Die Pflegekasse erstattet 2026:</p>

<ul>
  <li><strong>Bis zu 1.612 € pro Jahr</strong> für maximal 6 Wochen Verhinderungspflege</li>
  <li><strong>Plus bis zu 806 € aus der Kurzzeitpflege</strong> (50% Übertrag möglich)</li>
  <li><strong>Gesamt also bis zu 2.418 € jährlich</strong> bei voller Ausschöpfung beider Töpfe</li>
</ul>

<p>Während der Verhinderungspflege wird das Pflegegeld zur Hälfte weitergezahlt – die andere Hälfte ruht für maximal 6 Wochen.</p>

<h2>Verhinderungspflege beantragen: 4 Schritte</h2>

<ol>
  <li><strong>Antrag bei der Pflegekasse stellen</strong> – formlos schriftlich oder über das Antragsformular der Kasse. Wichtig: Beginn und Ende der Vertretung angeben.</li>
  <li><strong>Vertretung organisieren</strong> – Sie können einen ambulanten Pflegedienst (z.B. ElbLicht) beauftragen oder eine Privatperson, die nicht in häuslicher Gemeinschaft lebt.</li>
  <li><strong>Pflege durchführen</strong> – die Vertretung leistet Grundpflege, Hauswirtschaft und Betreuung.</li>
  <li><strong>Rechnung einreichen</strong> – die Kasse erstattet bis zur Höchstgrenze. Bei einem zugelassenen Pflegedienst läuft die Abrechnung direkt.</li>
</ol>

<h2>Beispiele aus dem Pflegealltag in St. Pauli</h2>

<p><strong>Beispiel 1:</strong> Frau Yıldız pflegt ihre 82-jährige Mutter (Pflegegrad 3) in St. Pauli. Sie möchte 2 Wochen in den Urlaub. ElbLicht übernimmt für 14 Tage die Grundpflege morgens und abends. Kosten: ca. 850 € – komplett von der Pflegekasse erstattet.</p>

<p><strong>Beispiel 2:</strong> Herr Schmidt aus Altona pflegt seine Frau (Pflegegrad 4). Er muss überraschend ins Krankenhaus. Wir kommen ab dem nächsten Tag stundenweise – 7 Tage à 4 Stunden, ca. 1.100 €. Die Kasse erstattet voll.</p>

<h2>Häufige Fehler bei der Beantragung</h2>

<ul>
  <li><strong>Zu spät beantragen:</strong> Lassen Sie sich vorab beraten, nicht erst wenn die Vertretung läuft.</li>
  <li><strong>Falsche Vertretung:</strong> Wer im selben Haushalt lebt oder verwandt ist, gilt nicht als „Vertretung" im Sinne des Gesetzes – außer bei höherem Stundensatz und kürzerer Dauer.</li>
  <li><strong>Budget nicht voll nutzen:</strong> 60% der Berechtigten lassen Geld liegen. Was bis Jahresende nicht abgerufen ist, verfällt.</li>
</ul>

<h2>Wir organisieren Verhinderungspflege in Hamburg</h2>

<p>ElbLicht übernimmt sowohl die Vertretung selbst als auch die Antragsbegleitung. Wir füllen den Pflegekassen-Antrag mit Ihnen aus, klären Stundenplan und Leistungen und rechnen direkt mit der Kasse ab. Beratung kostenlos: <strong>☎ 040 423 26 735</strong>, Mo–Fr 8:00–18:00 Uhr. Mobil 24/7: 0171 / 1500 882.</p>

<p>Mehr Pflegekassen-Leistungen im Überblick: <a href="/blog/pflegekasse-leistungen-2026">Pflegekasse 2026 – welche Leistungen Sie wirklich bekommen</a>.</p>
    `.trim(),
    faqs: [
      {
        q: "Wie viel Verhinderungspflege bekomme ich pro Jahr?",
        a: "Bis zu 1.612 € pro Jahr für maximal 6 Wochen Verhinderungspflege. Zusätzlich können Sie bis zu 806 € aus dem Kurzzeitpflegebudget übertragen – insgesamt also bis zu 2.418 € jährlich, ab Pflegegrad 2.",
      },
      {
        q: "Wer kann Verhinderungspflege leisten?",
        a: "Ein zugelassener ambulanter Pflegedienst, eine Pflegekraft oder eine Privatperson, die nicht im selben Haushalt lebt und nicht zu nah verwandt ist. Bei nahen Verwandten (z.B. Tochter) gelten reduzierte Erstattungsbeträge nach Pflegegeld-Höhe.",
      },
      {
        q: "Muss ich Verhinderungspflege im Voraus beantragen?",
        a: "Nein, sie kann auch nachträglich beantragt werden. Empfohlen ist aber ein Antrag vorab, damit die Pflegekasse Höhe und Bedingungen vorab bestätigt. Bei plötzlicher Erkrankung der Pflegeperson reicht oft eine telefonische Vorabklärung.",
      },
      {
        q: "Wie lange dauert die Bearbeitung?",
        a: "Bei Vorabantrag meist 2–4 Wochen. Wenn Sie einen zugelassenen Pflegedienst wie ElbLicht beauftragen, läuft die Abrechnung direkt – Sie müssen nichts vorstrecken oder warten.",
      },
      {
        q: "Was passiert mit dem Pflegegeld während der Verhinderungspflege?",
        a: "Während der Verhinderungspflege wird das Pflegegeld zur Hälfte weitergezahlt – für maximal 6 Wochen pro Kalenderjahr. Die volle Auszahlung läuft danach normal weiter.",
      },
    ],
    howToSteps: [
      {
        name: "Antrag stellen",
        text: "Schreiben Sie Ihre Pflegekasse formlos an oder nutzen Sie das Antragsformular: 'Ich beantrage Verhinderungspflege nach §39 SGB XI'. Geben Sie Beginn und Dauer der Vertretung an.",
      },
      {
        name: "Vertretung organisieren",
        text: "Beauftragen Sie einen zugelassenen ambulanten Pflegedienst (z.B. ElbLicht) oder eine geeignete Privatperson, die nicht im Haushalt lebt.",
      },
      {
        name: "Pflege durchführen lassen",
        text: "Die Vertretung leistet Grundpflege, Behandlungspflege, Hauswirtschaft oder Betreuung – je nach Bedarf.",
      },
      {
        name: "Rechnung einreichen oder direkt abrechnen lassen",
        text: "Bei Privatperson: Quittungen sammeln und bei der Pflegekasse einreichen. Bei zugelassenem Pflegedienst: läuft direkt mit der Kasse.",
      },
      {
        name: "Erstattung erhalten",
        text: "Die Pflegekasse zahlt bis zur Höchstgrenze von 1.612 € pro Jahr (plus ggf. 806 € aus Kurzzeitpflege).",
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
