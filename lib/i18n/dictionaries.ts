export type Locale = "de" | "en" | "tr"

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "de", label: "Deutsch", flag: "DE" },
  { code: "en", label: "English", flag: "EN" },
  { code: "tr", label: "Türkçe", flag: "TR" },
]

export const defaultLocale: Locale = "de"

export type LegalSection = { title: string; body: string[] }

export type Dict = {
  nav: {
    home: string
    services: string
    about: string
    contact: string
    consultation: string
  }
  cta: {
    requestConsultation: string
    callNow: string
    allServices: string
    submit: string
    sending: string
    viewAll: string
  }
  common: {
    imprint: string
    privacy: string
    cookies: string
    quickLinks: string
    menuOpen: string
    menuClose: string
    language: string
    backToTop: string
    serviceArea: string
    hours: string
    phone: string
    fax: string
    email: string
    address: string
    readMore: string
    back: string
    mapTitle: string
    openInMaps: string
  }
  badges: {
    certified: string
    multilingual: string
    yearsExperience: string
    withHeart: string
  }
  home: {
    eyebrow: string
    titleA: string
    titleHighlight: string
    subtitle: string
    statArea: string
    statHours: string
    statLanguages: string
    statValueHours: string
    servicesEyebrow: string
    servicesTitle: string
    servicesLead: string
    valuesEyebrow: string
    valuesTitle: string
    valuesLead: string
    multilingualNote: string
    faqEyebrow: string
    faqTitle: string
    faqLead: string
    ctaQuote: string
    ctaTitle: string
    ctaLead: string
  }
  services: {
    heroEyebrow: string
    heroTitle: string
    heroLead: string
    items: {
      title: string
      badge: string
      text: string
      bullets: string[]
    }[]
    processEyebrow: string
    processTitle: string
    processLead: string
    steps: { title: string; text: string }[]
  }
  about: {
    heroEyebrow: string
    heroTitle: string
    heroLead: string
    storyEyebrow: string
    storyTitle: string
    storyBody: string[]
    valuesTitle: string
    teamEyebrow: string
    teamTitle: string
    teamLead: string
    members: { name: string; role: string; bio: string }[]
  }
  contact: {
    heroEyebrow: string
    heroTitle: string
    heroLead: string
    infoTitle: string
    infoHeading: string
    formTitle: string
    formLead: string
    fields: {
      name: string
      email: string
      phone: string
      subject: string
      message: string
      consent: string
    }
    subjects: string[]
    success: string
    successLead: string
  }
  consultation: {
    heroEyebrow: string
    heroTitle: string
    heroLead: string
    formTitle: string
    formLead: string
    benefits: string[]
    fields: {
      name: string
      relation: string
      phone: string
      email: string
      careLevel: string
      careLevelPlaceholder: string
      needs: string
      preferredContact: string
      preferredTime: string
      language: string
      message: string
      consent: string
    }
    relations: string[]
    careLevels: string[]
    needs: string[]
    contactMethods: string[]
    timeSlots: string[]
    success: string
    successLead: string
  }
  cookieBanner: {
    title: string
    text: string
    accept: string
    reject: string
    settings: string
  }
  legal: {
    cookies: {
      heroEyebrow: string
      heroTitle: string
      heroLead: string
      sections: LegalSection[]
    }
    imprint: {
      heroEyebrow: string
      heroTitle: string
      heroLead: string
      sections: LegalSection[]
    }
    privacy: {
      heroEyebrow: string
      heroTitle: string
      heroLead: string
      sections: LegalSection[]
    }
  }
  values: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
}

const de: Dict = {
  nav: {
    home: "Start",
    services: "Leistungen",
    about: "Über uns",
    contact: "Kontakt",
    consultation: "Beratung anfordern",
  },
  cta: {
    requestConsultation: "Beratung anfordern",
    callNow: "Jetzt anrufen",
    allServices: "Alle Leistungen ansehen",
    submit: "Absenden",
    sending: "Wird gesendet…",
    viewAll: "Mehr erfahren",
  },
  common: {
    imprint: "Impressum",
    privacy: "Datenschutz",
    cookies: "Cookies",
    quickLinks: "Schnell-Links",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    language: "Sprache",
    backToTop: "Nach oben",
    serviceArea: "Einsatzgebiet",
    hours: "Erreichbarkeit",
    phone: "Telefon",
    fax: "Fax",
    email: "E-Mail",
    address: "Adresse",
    readMore: "Mehr erfahren",
    back: "Zurück",
    mapTitle: "Kartenansicht ElbLicht Pflegedienst",
    openInMaps: "In Google Maps öffnen",
  },
  badges: {
    certified: "Zertifiziert",
    multilingual: "Mehrsprachig",
    yearsExperience: "Seit vielen Jahren",
    withHeart: "Mit Herz dabei",
  },
  home: {
    eyebrow: "Ambulanter Pflegedienst · Hamburg",
    titleA: "Ihr Licht in der",
    titleHighlight: "häuslichen Pflege",
    subtitle:
      "Wir unterstützen Sie und Ihre Angehörigen dabei, den Alltag zuhause sicher, selbstbestimmt und würdevoll zu gestalten – mit Wärme, Verlässlichkeit und professioneller Pflege.",
    statArea: "Einsatzgebiet",
    statHours: "Erreichbarkeit",
    statLanguages: "Sprachen",
    statValueHours: "Mo–Fr, 08–18 Uhr",
    servicesEyebrow: "Unsere Leistungen",
    servicesTitle: "Individuell kombinierbar – passend zu Ihrem Alltag.",
    servicesLead:
      "Von der Grundpflege bis zur Beratung bei Anträgen: Wir gestalten mit Ihnen gemeinsam eine Versorgung, die wirklich trägt.",
    valuesEyebrow: "Unsere Werte",
    valuesTitle: "Pflege mit Licht, Wärme und Klarheit.",
    valuesLead:
      "ElbLicht ist ein moderner ambulanter Pflegedienst, der professionelle Pflege mit Menschlichkeit verbindet. Wir nehmen uns Zeit, hören zu und gestalten gemeinsam mit Ihnen Lösungen, die wirklich zu Ihrem Alltag passen.",
    multilingualNote: "Betreuung auf Deutsch, Türkisch und Englisch.",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Kurz beantwortet.",
    faqLead: "Ein schneller Überblick rund um unsere ambulante Pflege in Hamburg.",
    ctaQuote: "Wir sind da. Für Sie. Mit Herz.",
    ctaTitle: "Lassen Sie uns über Ihre Situation sprechen.",
    ctaLead:
      "Wir nehmen uns Zeit für ein unverbindliches Erstgespräch – telefonisch oder bei Ihnen zuhause.",
  },
  services: {
    heroEyebrow: "Unsere Leistungen",
    heroTitle: "Pflege, die wirklich zu Ihrem Leben passt.",
    heroLead:
      "Wir kombinieren medizinische Qualität mit persönlicher Zuwendung – auf Basis der Leistungen nach SGB V, SGB XI und der Entlastungspauschale §45b.",
    items: [
      {
        title: "Grundpflege",
        badge: "SGB XI",
        text: "Wir unterstützen Sie bei allen Tätigkeiten der täglichen Körperpflege, Mobilisation und Ernährung.",
        bullets: [
          "Körperpflege, An- und Auskleiden",
          "Hilfe bei Nahrungsaufnahme",
          "Mobilisation & Lagerung",
          "Dekubitus- und Kontrakturprophylaxe",
        ],
      },
      {
        title: "Behandlungspflege",
        badge: "SGB V",
        text: "Medizinische Pflegeleistungen nach ärztlicher Verordnung – sicher, fachlich und einfühlsam.",
        bullets: [
          "Medikamentengabe und -stellen",
          "Professionelle Wundversorgung",
          "Injektionen (s.c. / i.m.)",
          "Kontrolle von Vitalzeichen",
        ],
      },
      {
        title: "Hauswirtschaft & Betreuung",
        badge: "§45b",
        text: "Alltagshilfen, die entlasten und Freiraum schaffen – für Sie und Ihre Angehörigen.",
        bullets: [
          "Reinigung & Wäschepflege",
          "Einkäufe und Besorgungen",
          "Arzt- und Behördenbegleitung",
          "Aktivierende Alltagsgestaltung",
        ],
      },
      {
        title: "Beratung & Anträge",
        badge: "§37.3",
        text: "Wir stehen Ihnen beratend zur Seite – von der Einstufung bis zur Antragstellung.",
        bullets: [
          "Beratungseinsätze nach §37.3 SGB XI",
          "Vorbereitung auf MD-Begutachtungen",
          "Hilfe bei Anträgen & Formularen",
          "Pflegegeld- und Leistungsberatung",
        ],
      },
      {
        title: "Verhinderungspflege",
        badge: "§39 SGB XI",
        text: "Wenn pflegende Angehörige Pause brauchen, übernehmen wir zuverlässig die Versorgung.",
        bullets: [
          "Stunden- oder tageweise",
          "Bis zu 6 Wochen im Jahr",
          "Auch spontan bei Krankheit",
          "Vertraute Bezugspflege",
        ],
      },
      {
        title: "Kultursensible Pflege",
        badge: "Mehrsprachig",
        text: "Pflege mit Respekt vor Biografie, Kultur und Sprache – auf Deutsch, Türkisch und Englisch.",
        bullets: [
          "Muttersprachliche Pflegekräfte",
          "Berücksichtigung religiöser Bedürfnisse",
          "Traditionelle Essgewohnheiten",
          "Vermittlung zu Ärzten & Ämtern",
        ],
      },
    ],
    processEyebrow: "So starten wir gemeinsam",
    processTitle: "In vier einfachen Schritten zur passenden Versorgung.",
    processLead:
      "Transparent, ohne Druck und ganz auf Ihr Tempo abgestimmt. Das Erstgespräch ist immer kostenfrei.",
    steps: [
      {
        title: "Kontakt aufnehmen",
        text: "Rufen Sie uns an oder füllen Sie das Beratungsformular aus. Wir melden uns innerhalb eines Werktages zurück.",
      },
      {
        title: "Kostenloses Erstgespräch",
        text: "Wir besuchen Sie zuhause, hören zu und erfassen gemeinsam Ihren individuellen Pflegebedarf.",
      },
      {
        title: "Versorgungsplan",
        text: "Sie erhalten einen transparenten Plan mit Leistungen, Zeiten und Kosten – ohne versteckte Gebühren.",
      },
      {
        title: "Start der Pflege",
        text: "Eine feste Bezugspflegekraft begleitet Sie – verlässlich, respektvoll und mit Herz.",
      },
    ],
  },
  about: {
    heroEyebrow: "Über uns",
    heroTitle: "Ein Team, das zuhört, versteht und da ist.",
    heroLead:
      "ElbLicht wurde gegründet, um Menschen in Hamburg eine Pflege zu ermöglichen, die professionell, persönlich und kultursensibel zugleich ist.",
    storyEyebrow: "Unsere Geschichte",
    storyTitle: "Warum es ElbLicht gibt.",
    storyBody: [
      "Wir glauben, dass Pflege mehr ist als ein Dienst – sie ist eine Beziehung. Aus eigener Erfahrung wissen wir, wie kostbar Vertrauen, Zuwendung und Verlässlichkeit im Alltag der Pflege sind.",
      "Deshalb haben wir ElbLicht ins Leben gerufen: einen Pflegedienst, der seinen Namen ernst nimmt – ein Licht, das Orientierung gibt und Wärme schenkt, wenn sie am nötigsten sind.",
      "Unser Team pflegt mehrsprachig, achtsam und individuell. Wir nehmen uns Zeit für die Menschen, die uns vertrauen – in St. Pauli, Altona, Eimsbüttel und den umliegenden Stadtteilen.",
    ],
    valuesTitle: "Werte, die uns tragen",
    teamEyebrow: "Unser Team",
    teamTitle: "Menschen, die Pflege leben.",
    teamLead:
      "Examiniert, erfahren und mit echter Leidenschaft: Unser Team steht für Kompetenz auf Augenhöhe.",
    members: [
      {
        name: "Ebru Medik",
        role: "Spricht: Deutsch · Türkisch",
        bio: "Als festes Gesicht unseres Teams begleitet Ebru ihre Patientinnen und Patienten aufmerksam, respektvoll und mehrsprachig durch den Pflegealltag.",
      },
      {
        name: "Gülay Patan",
        role: "Spricht: Deutsch · Englisch",
        bio: "Mit Einfühlungsvermögen und fachlicher Kompetenz sorgt Gülay dafür, dass sich unsere Patientinnen und Patienten zuhause gut aufgehoben fühlen.",
      },
    ],
  },
  contact: {
    heroEyebrow: "Kontakt",
    heroTitle: "Wir freuen uns, von Ihnen zu hören.",
    heroLead:
      "Ob Frage, Wunsch oder dringende Situation – nehmen Sie Kontakt auf. Wir antworten zeitnah und persönlich.",
    infoTitle: "Direkt erreichen",
    infoHeading: "So erreichen Sie uns",
    formTitle: "Nachricht schreiben",
    formLead:
      "Füllen Sie das Formular aus, wir melden uns innerhalb eines Werktages bei Ihnen.",
    fields: {
      name: "Ihr Name",
      email: "E-Mail",
      phone: "Telefon (optional)",
      subject: "Anliegen",
      message: "Ihre Nachricht",
      consent:
        "Ich habe die {link}Datenschutzerklärung{/link} gelesen und bin einverstanden.",
    },
    subjects: [
      "Allgemeine Anfrage",
      "Pflegeberatung",
      "Neue Versorgung anfragen",
      "Bestehende Versorgung",
      "Feedback",
    ],
    success: "Vielen Dank für Ihre Nachricht!",
    successLead:
      "Wir haben Ihre Anfrage erhalten und melden uns in Kürze persönlich bei Ihnen zurück.",
  },
  consultation: {
    heroEyebrow: "Beratung anfordern",
    heroTitle: "Kostenlos, unverbindlich, persönlich.",
    heroLead:
      "Erzählen Sie uns kurz von Ihrer Situation – wir rufen Sie zurück und klären gemeinsam, wie wir Sie am besten unterstützen können.",
    formTitle: "Anfrage senden",
    formLead:
      "Alle Angaben sind freiwillig. Je mehr wir wissen, desto gezielter können wir beraten.",
    benefits: [
      "Kostenloses Erstgespräch",
      "Rückruf innerhalb eines Werktages",
      "Beratung auf Deutsch, Türkisch oder Englisch",
      "Hilfe bei Anträgen und Formularen",
    ],
    fields: {
      name: "Name",
      relation: "Ich frage an als",
      phone: "Telefon",
      email: "E-Mail",
      careLevel: "Aktueller Pflegegrad (falls bekannt)",
      careLevelPlaceholder: "Bitte wählen",
      needs: "Welche Unterstützung benötigen Sie?",
      preferredContact: "Bevorzugter Kontaktweg",
      preferredTime: "Wann erreichen wir Sie am besten?",
      language: "Beratungssprache",
      message: "Ihre Nachricht",
      consent:
        "Ich habe die {link}Datenschutzerklärung{/link} gelesen und bin einverstanden.",
    },
    relations: [
      "Betroffene/r",
      "Angehörige/r",
      "Betreuer/in",
      "Ärztin / Arzt",
      "Sonstige",
    ],
    careLevels: [
      "Noch kein Pflegegrad",
      "Pflegegrad 1",
      "Pflegegrad 2",
      "Pflegegrad 3",
      "Pflegegrad 4",
      "Pflegegrad 5",
      "Unbekannt",
    ],
    needs: [
      "Grundpflege",
      "Behandlungspflege",
      "Hauswirtschaft",
      "Betreuung & Entlastung",
      "Verhinderungspflege",
      "Beratung / Anträge",
    ],
    contactMethods: ["Telefon", "E-Mail", "WhatsApp"],
    timeSlots: ["Vormittags", "Mittags", "Nachmittags", "Egal"],
    success: "Vielen Dank für Ihre Anfrage!",
    successLead:
      "Wir haben Ihre Beratungsanfrage erhalten und melden uns innerhalb eines Werktages persönlich bei Ihnen.",
  },
  cookieBanner: {
    title: "Diese Website verwendet Cookies",
    text: "Wir verwenden notwendige Cookies, damit die Seite funktioniert, und optionale Cookies für Statistiken. Sie können Ihre Auswahl jederzeit in den Einstellungen ändern.",
    accept: "Alle akzeptieren",
    reject: "Nur notwendige",
    settings: "Einstellungen",
  },
  legal: {
    cookies: {
      heroEyebrow: "Cookies",
      heroTitle: "Informationen zu Cookies.",
      heroLead:
        "Hier erfahren Sie, welche Cookies wir verwenden und wie Sie Ihre Einstellungen jederzeit anpassen können.",
      sections: [
        {
          title: "Was sind Cookies?",
          body: [
            "Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Sie helfen uns dabei, die Website sicher, benutzerfreundlich und funktional zu gestalten.",
          ],
        },
        {
          title: "Notwendige Cookies",
          body: [
            "Diese Cookies sind technisch erforderlich, damit die Website korrekt funktioniert – z. B. zum Speichern Ihrer Spracheinstellung oder Ihrer Cookie-Auswahl. Ohne diese Cookies kann die Website nicht ordnungsgemäß dargestellt werden.",
          ],
        },
        {
          title: "Statistik- & Analyse-Cookies",
          body: [
            "Diese Cookies helfen uns zu verstehen, wie Besucherinnen und Besucher unsere Website nutzen, damit wir Inhalte verbessern können. Sie werden nur gesetzt, wenn Sie ausdrücklich zustimmen.",
          ],
        },
        {
          title: "Ihre Wahl jederzeit ändern",
          body: [
            "Sie können Ihre Cookie-Einstellungen jederzeit widerrufen oder anpassen, indem Sie den Browser-Speicher dieser Seite leeren oder die Seite erneut besuchen und Ihre Auswahl ändern.",
          ],
        },
      ],
    },
    imprint: {
      heroEyebrow: "Impressum",
      heroTitle: "Angaben gemäß § 5 TMG.",
      heroLead:
        "Alle gesetzlich vorgeschriebenen Angaben zu unserem Pflegedienst auf einen Blick.",
      sections: [
        {
          title: "Anbieter",
          body: [
            "ElbLicht Pflegedienst",
            "Clemens-Schultz-Straße 76",
            "20359 Hamburg",
          ],
        },
        {
          title: "Kontakt",
          body: [
            "Telefon: 040 / 560 69 787",
            "E-Mail: info@pflegedienst-elblicht.de",
          ],
        },
        {
          title: "Verantwortlich für den Inhalt",
          body: [
            "Die Pflegedienstleitung, Anschrift wie oben.",
          ],
        },
        {
          title: "Haftung für Inhalte",
          body: [
            "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
          ],
        },
        {
          title: "Haftung für Links",
          body: [
            "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter verantwortlich.",
          ],
        },
      ],
    },
    privacy: {
      heroEyebrow: "Datenschutz",
      heroTitle: "Datenschutzerklärung.",
      heroLead:
        "Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und behandeln sie vertraulich gemäß DSGVO.",
      sections: [
        {
          title: "Verantwortliche Stelle",
          body: [
            "ElbLicht Pflegedienst, Clemens-Schultz-Straße 76, 20359 Hamburg.",
            "Kontakt: info@pflegedienst-elblicht.de",
          ],
        },
        {
          title: "Erhebung personenbezogener Daten",
          body: [
            "Wenn Sie uns eine Nachricht oder Beratungsanfrage schicken, speichern wir die von Ihnen angegebenen Daten (Name, Kontaktdaten, Inhalt der Nachricht), um Ihre Anfrage zu bearbeiten. Diese Daten werden nicht an Dritte weitergegeben.",
          ],
        },
        {
          title: "Server-Logfiles",
          body: [
            "Unser Hoster erhebt automatisch Informationen, die Ihr Browser übermittelt (IP-Adresse, Datum/Uhrzeit, Browsertyp). Diese Daten dienen ausschließlich der Sicherheit und Stabilität der Website.",
          ],
        },
        {
          title: "Ihre Rechte",
          body: [
            "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht. Wenden Sie sich dafür an uns per E-Mail.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "Details zu den eingesetzten Cookies finden Sie auf unserer Cookies-Seite.",
          ],
        },
      ],
    },
  },
  values: [
    { title: "Würde", text: "Jeder Mensch verdient Respekt und Wertschätzung." },
    { title: "Verlässlichkeit", text: "Wir halten unsere Zusagen – pünktlich und transparent." },
    { title: "Empathie", text: "Pflege heißt für uns zuhören, verstehen und begleiten." },
    { title: "Qualität", text: "Fachlich aktuell, menschlich nah und individuell abgestimmt." },
  ],
  faqs: [
    {
      q: "Wie schnell kann die Versorgung starten?",
      a: "In vielen Fällen ist ein Erstgespräch kurzfristig möglich. Gemeinsam klären wir den Bedarf und starten die Versorgung so schnell wie möglich.",
    },
    {
      q: "Welche Kosten übernimmt die Pflegekasse?",
      a: "Je nach Pflegegrad und Leistung werden Kosten ganz oder teilweise übernommen. Wir beraten Sie transparent zu Ihren Ansprüchen.",
    },
    {
      q: "In welchen Stadtteilen sind Sie unterwegs?",
      a: "Unser Fokus liegt auf Hamburg-St. Pauli, Altona, Eimsbüttel und umliegenden Stadtteilen. Sprechen Sie uns gern für Ihre Adresse an.",
    },
    {
      q: "Unterstützen Sie auch bei Anträgen?",
      a: "Ja. Wir helfen bei Anträgen, Einstufungen und der Vorbereitung auf Begutachtungen, damit Sie entlastet werden.",
    },
  ],
}

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About us",
    contact: "Contact",
    consultation: "Request consultation",
  },
  cta: {
    requestConsultation: "Request consultation",
    callNow: "Call now",
    allServices: "View all services",
    submit: "Send",
    sending: "Sending…",
    viewAll: "Learn more",
  },
  common: {
    imprint: "Imprint",
    privacy: "Privacy",
    cookies: "Cookies",
    quickLinks: "Quick links",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    backToTop: "Back to top",
    serviceArea: "Service area",
    hours: "Availability",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    address: "Address",
    readMore: "Read more",
    back: "Back",
    mapTitle: "Map view of ElbLicht Pflegedienst",
    openInMaps: "Open in Google Maps",
  },
  badges: {
    certified: "Certified",
    multilingual: "Multilingual",
    yearsExperience: "Many years",
    withHeart: "With heart",
  },
  home: {
    eyebrow: "Home-care service · Hamburg",
    titleA: "Your light in",
    titleHighlight: "home care",
    subtitle:
      "We support you and your loved ones in making everyday life at home safe, self-determined and dignified — with warmth, reliability and professional care.",
    statArea: "Service area",
    statHours: "Availability",
    statLanguages: "Languages",
    statValueHours: "Mon–Fri, 8 am–6 pm",
    servicesEyebrow: "Our services",
    servicesTitle: "Combined individually — to fit your daily life.",
    servicesLead:
      "From basic care to help with applications: together we design care that really supports you.",
    valuesEyebrow: "Our values",
    valuesTitle: "Care with light, warmth and clarity.",
    valuesLead:
      "ElbLicht is a modern home-care service that combines professional nursing with genuine humanity. We take time, we listen, and we build solutions that really fit your daily life.",
    multilingualNote: "Care in German, Turkish and English.",
    faqEyebrow: "Frequently asked",
    faqTitle: "Briefly answered.",
    faqLead: "A quick overview of our home-care service in Hamburg.",
    ctaQuote: "We are here. For you. With heart.",
    ctaTitle: "Let's talk about your situation.",
    ctaLead:
      "We take time for a free, no-obligation initial conversation — by phone or at your home.",
  },
  services: {
    heroEyebrow: "Our services",
    heroTitle: "Care that truly fits your life.",
    heroLead:
      "We combine medical quality with personal attention — based on the German SGB V, SGB XI and §45b relief benefits.",
    items: [
      {
        title: "Basic care",
        badge: "SGB XI",
        text: "We support you with all tasks of daily personal care, mobilisation and nutrition.",
        bullets: [
          "Personal hygiene, dressing",
          "Support with eating & drinking",
          "Mobilisation & positioning",
          "Prevention of bedsores & contractures",
        ],
      },
      {
        title: "Medical care",
        badge: "SGB V",
        text: "Medical nursing services prescribed by a doctor — safe, professional and empathetic.",
        bullets: [
          "Medication administration",
          "Professional wound care",
          "Injections (s.c. / i.m.)",
          "Monitoring of vital signs",
        ],
      },
      {
        title: "Household & companionship",
        badge: "§45b",
        text: "Everyday help that relieves and creates space — for you and your relatives.",
        bullets: [
          "Cleaning & laundry",
          "Shopping and errands",
          "Doctor & authority escort",
          "Activating daily routines",
        ],
      },
      {
        title: "Consulting & applications",
        badge: "§37.3",
        text: "We guide you — from care-level assessment to the application itself.",
        bullets: [
          "Consultations under §37.3 SGB XI",
          "MD assessment preparation",
          "Help with forms & applications",
          "Benefits & allowances advice",
        ],
      },
      {
        title: "Respite care",
        badge: "§39 SGB XI",
        text: "When family caregivers need a break, we reliably take over.",
        bullets: [
          "By the hour or by the day",
          "Up to 6 weeks per year",
          "Spontaneous in case of illness",
          "Familiar caregivers",
        ],
      },
      {
        title: "Culturally sensitive care",
        badge: "Multilingual",
        text: "Care respecting biography, culture and language — in German, Turkish and English.",
        bullets: [
          "Native-speaking caregivers",
          "Respect for religious needs",
          "Traditional eating habits",
          "Help with doctors & authorities",
        ],
      },
    ],
    processEyebrow: "How we get started",
    processTitle: "Four simple steps to the right care.",
    processLead:
      "Transparent, pressure-free and fully on your pace. The first consultation is always free of charge.",
    steps: [
      {
        title: "Get in touch",
        text: "Call us or fill in the consultation form. We reply within one business day.",
      },
      {
        title: "Free first meeting",
        text: "We visit you at home, listen and assess your individual care needs together.",
      },
      {
        title: "Care plan",
        text: "You receive a transparent plan with services, times and costs — no hidden fees.",
      },
      {
        title: "Start of care",
        text: "A dedicated caregiver accompanies you — reliably, respectfully and with heart.",
      },
    ],
  },
  about: {
    heroEyebrow: "About us",
    heroTitle: "A team that listens, understands and is there.",
    heroLead:
      "ElbLicht was founded to provide people in Hamburg with care that is professional, personal and culturally aware — all at once.",
    storyEyebrow: "Our story",
    storyTitle: "Why ElbLicht exists.",
    storyBody: [
      "We believe that care is more than a service — it is a relationship. From our own experience we know how precious trust, attention and reliability are in everyday caregiving.",
      "That's why we created ElbLicht: a care service that takes its name seriously — a light that guides and gives warmth when it's needed most.",
      "Our team provides multilingual, attentive and individualised care. We take time for the people who trust us — in St. Pauli, Altona, Eimsbüttel and the surrounding districts.",
    ],
    valuesTitle: "Values we stand for",
    teamEyebrow: "Our team",
    teamTitle: "People who live care.",
    teamLead:
      "Certified, experienced and genuinely passionate: our team stands for competence at eye level.",
    members: [
      {
        name: "Ebru Medik",
        role: "Speaks: German · Turkish",
        bio: "A steady face in our team, Ebru accompanies her patients attentively, respectfully and multilingually through their daily care routine.",
      },
      {
        name: "Gülay Patan",
        role: "Speaks: German · English",
        bio: "With empathy and professional competence, Gülay makes sure our patients feel truly cared for at home.",
      },
    ],
  },
  contact: {
    heroEyebrow: "Contact",
    heroTitle: "We'd love to hear from you.",
    heroLead:
      "Whether it's a question, a wish or an urgent situation — reach out. We reply quickly and personally.",
    infoTitle: "Reach us directly",
    infoHeading: "How to reach us",
    formTitle: "Send a message",
    formLead: "Fill in the form and we'll reply within one business day.",
    fields: {
      name: "Your name",
      email: "Email",
      phone: "Phone (optional)",
      subject: "Subject",
      message: "Your message",
      consent: "I have read the {link}privacy policy{/link} and agree.",
    },
    subjects: [
      "General enquiry",
      "Care consultation",
      "Request new care",
      "Existing care",
      "Feedback",
    ],
    success: "Thank you for your message!",
    successLead:
      "We've received your enquiry and will get back to you personally very soon.",
  },
  consultation: {
    heroEyebrow: "Request consultation",
    heroTitle: "Free, no-obligation, personal.",
    heroLead:
      "Tell us briefly about your situation — we'll call you back and work out together how we can best support you.",
    formTitle: "Send request",
    formLead:
      "All fields are voluntary. The more we know, the more targeted our advice can be.",
    benefits: [
      "Free first consultation",
      "Call-back within one business day",
      "Advice in German, Turkish or English",
      "Help with applications and forms",
    ],
    fields: {
      name: "Name",
      relation: "I'm asking as",
      phone: "Phone",
      email: "Email",
      careLevel: "Current care level (if known)",
      careLevelPlaceholder: "Please select",
      needs: "What support do you need?",
      preferredContact: "Preferred contact channel",
      preferredTime: "When can we best reach you?",
      language: "Consultation language",
      message: "Your message",
      consent: "I have read the {link}privacy policy{/link} and agree.",
    },
    relations: [
      "The person concerned",
      "A relative",
      "Legal guardian",
      "Doctor",
      "Other",
    ],
    careLevels: [
      "No care level yet",
      "Care level 1",
      "Care level 2",
      "Care level 3",
      "Care level 4",
      "Care level 5",
      "Unknown",
    ],
    needs: [
      "Basic care",
      "Medical care",
      "Household",
      "Companionship & relief",
      "Respite care",
      "Consulting / applications",
    ],
    contactMethods: ["Phone", "Email", "WhatsApp"],
    timeSlots: ["Morning", "Midday", "Afternoon", "Any time"],
    success: "Thank you for your request!",
    successLead:
      "We've received your request and will get back to you personally within one business day.",
  },
  cookieBanner: {
    title: "This website uses cookies",
    text: "We use necessary cookies so the site works and optional cookies for statistics. You can change your choice at any time in the settings.",
    accept: "Accept all",
    reject: "Only necessary",
    settings: "Settings",
  },
  legal: {
    cookies: {
      heroEyebrow: "Cookies",
      heroTitle: "About cookies.",
      heroLead:
        "Here you can learn which cookies we use and how to adjust your preferences at any time.",
      sections: [
        {
          title: "What are cookies?",
          body: [
            "Cookies are small text files stored on your device when you visit a website. They help us keep the site safe, user-friendly and functional.",
          ],
        },
        {
          title: "Necessary cookies",
          body: [
            "These cookies are technically required for the website to work — for example to remember your language or cookie preferences. Without them the website cannot be displayed properly.",
          ],
        },
        {
          title: "Statistics & analytics cookies",
          body: [
            "These cookies help us understand how visitors use our website so we can improve content. They are only set with your explicit consent.",
          ],
        },
        {
          title: "Change your choice any time",
          body: [
            "You can withdraw or adjust your cookie preferences at any time by clearing this site's browser storage or revisiting the site and updating your choice.",
          ],
        },
      ],
    },
    imprint: {
      heroEyebrow: "Imprint",
      heroTitle: "Information according to § 5 TMG.",
      heroLead:
        "All legally required information about our home-care service at a glance.",
      sections: [
        {
          title: "Provider",
          body: [
            "ElbLicht Pflegedienst",
            "Clemens-Schultz-Straße 76",
            "20359 Hamburg, Germany",
          ],
        },
        {
          title: "Contact",
          body: [
            "Phone: +49 40 560 69 787",
            "Email: info@pflegedienst-elblicht.de",
          ],
        },
        {
          title: "Responsible for content",
          body: [
            "The Director of Nursing, address as above.",
          ],
        },
        {
          title: "Liability for contents",
          body: [
            "The contents of this website have been created with the greatest care. However, we cannot guarantee the accuracy, completeness or timeliness of the content.",
          ],
        },
        {
          title: "Liability for links",
          body: [
            "Our site contains links to external websites of third parties over whose content we have no influence. The respective provider is responsible for such external content.",
          ],
        },
      ],
    },
    privacy: {
      heroEyebrow: "Privacy",
      heroTitle: "Privacy policy.",
      heroLead:
        "We take the protection of your personal data very seriously and handle it confidentially under GDPR.",
      sections: [
        {
          title: "Data controller",
          body: [
            "ElbLicht Pflegedienst, Clemens-Schultz-Straße 76, 20359 Hamburg, Germany.",
            "Contact: info@pflegedienst-elblicht.de",
          ],
        },
        {
          title: "Collection of personal data",
          body: [
            "When you send us a message or consultation request, we store the data you provide (name, contact details, message) to process your request. This data is not shared with third parties.",
          ],
        },
        {
          title: "Server log files",
          body: [
            "Our hosting provider automatically collects information transmitted by your browser (IP address, date/time, browser type). This data is used exclusively for security and stability.",
          ],
        },
        {
          title: "Your rights",
          body: [
            "You have the right to access, rectify, erase and restrict the processing of your data as well as a right of objection. Please contact us by email to exercise these rights.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "For details on the cookies used, please see our cookies page.",
          ],
        },
      ],
    },
  },
  values: [
    { title: "Dignity", text: "Every person deserves respect and appreciation." },
    { title: "Reliability", text: "We keep our promises — on time and transparent." },
    { title: "Empathy", text: "Care means listening, understanding and accompanying." },
    { title: "Quality", text: "Up-to-date, close to people, individually tailored." },
  ],
  faqs: [
    {
      q: "How quickly can care start?",
      a: "In many cases a first meeting is possible at short notice. Together we assess the need and start care as soon as possible.",
    },
    {
      q: "Which costs does the care insurance cover?",
      a: "Depending on care level and service, costs are fully or partially covered. We transparently advise you on your entitlements.",
    },
    {
      q: "Which districts do you cover?",
      a: "Our focus is on Hamburg-St. Pauli, Altona, Eimsbüttel and surrounding districts. Feel free to ask about your address.",
    },
    {
      q: "Do you also help with applications?",
      a: "Yes. We help with applications, care-level assessments and preparing for evaluations, so you are relieved.",
    },
  ],
}

const tr: Dict = {
  nav: {
    home: "Anasayfa",
    services: "Hizmetler",
    about: "Hakkımızda",
    contact: "İletişim",
    consultation: "Danışmanlık talep et",
  },
  cta: {
    requestConsultation: "Danışmanlık talep et",
    callNow: "Hemen ara",
    allServices: "Tüm hizmetler",
    submit: "Gönder",
    sending: "Gönderiliyor…",
    viewAll: "Daha fazla",
  },
  common: {
    imprint: "Künye",
    privacy: "Gizlilik",
    cookies: "Çerezler",
    quickLinks: "Hızlı erişim",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    language: "Dil",
    backToTop: "Yukarı çık",
    serviceArea: "Hizmet bölgesi",
    hours: "Ulaşılabilirlik",
    phone: "Telefon",
    fax: "Faks",
    email: "E-posta",
    address: "Adres",
    readMore: "Daha fazla",
    back: "Geri",
    mapTitle: "ElbLicht Pflegedienst harita görünümü",
    openInMaps: "Google Haritalar'da aç",
  },
  badges: {
    certified: "Sertifikalı",
    multilingual: "Çok dilli",
    yearsExperience: "Uzun yıllardır",
    withHeart: "Gönülden",
  },
  home: {
    eyebrow: "Evde Bakım Hizmeti · Hamburg",
    titleA: "Evde bakımda",
    titleHighlight: "sizin ışığınız",
    subtitle:
      "Sizi ve yakınlarınızı evde güvenli, onurlu ve özgün bir yaşam için destekliyoruz – sıcaklık, güven ve profesyonel bakımla.",
    statArea: "Hizmet bölgesi",
    statHours: "Ulaşılabilirlik",
    statLanguages: "Diller",
    statValueHours: "Pzt–Cum, 08–18",
    servicesEyebrow: "Hizmetlerimiz",
    servicesTitle: "Yaşamınıza uygun, kişisel olarak birleştirilebilir.",
    servicesLead:
      "Temel bakımdan başvurularınıza kadar: sizinle birlikte gerçekten taşıyan bir bakım planı kuruyoruz.",
    valuesEyebrow: "Değerlerimiz",
    valuesTitle: "Işık, sıcaklık ve açıklıkla bakım.",
    valuesLead:
      "ElbLicht, profesyonel bakımı gerçek bir insanî yakınlıkla birleştiren modern bir evde bakım servisidir. Zaman ayırır, dinler ve günlük hayatınıza gerçekten uyan çözümler üretiriz.",
    multilingualNote: "Almanca, Türkçe ve İngilizce bakım.",
    faqEyebrow: "Sık sorulanlar",
    faqTitle: "Kısa yanıtlar.",
    faqLead: "Hamburg'daki evde bakım hizmetimize dair kısa bir genel bakış.",
    ctaQuote: "Buradayız. Sizin için. Gönülden.",
    ctaTitle: "Durumunuz hakkında konuşalım.",
    ctaLead:
      "Ücretsiz ve bağlayıcılığı olmayan ilk görüşme için zamanımız var – telefonla ya da evinizde.",
  },
  services: {
    heroEyebrow: "Hizmetlerimiz",
    heroTitle: "Yaşamınıza gerçekten uyan bakım.",
    heroLead:
      "Tıbbi kaliteyi kişisel ilgiyle birleştiriyoruz – SGB V, SGB XI ve §45b yardım ödenekleri çerçevesinde.",
    items: [
      {
        title: "Temel bakım",
        badge: "SGB XI",
        text: "Günlük kişisel bakım, hareket ve beslenmede size destek oluyoruz.",
        bullets: [
          "Kişisel bakım, giyinme",
          "Yemek yeme desteği",
          "Hareket & pozisyonlama",
          "Yara yatağı ve kontraktür önleme",
        ],
      },
      {
        title: "Tıbbi bakım",
        badge: "SGB V",
        text: "Doktor reçetesine göre tıbbi bakım – güvenli, uzman ve empatik.",
        bullets: [
          "İlaç uygulaması",
          "Profesyonel yara bakımı",
          "Enjeksiyonlar (s.c. / i.m.)",
          "Yaşamsal bulguların takibi",
        ],
      },
      {
        title: "Ev işleri & eşlik",
        badge: "§45b",
        text: "Rahatlatan ve alan açan günlük yardım – siz ve yakınlarınız için.",
        bullets: [
          "Temizlik & çamaşır",
          "Alışveriş ve iş takipleri",
          "Doktor ve daire refakati",
          "Aktif günlük yaşam",
        ],
      },
      {
        title: "Danışma & başvurular",
        badge: "§37.3",
        text: "Bakım derecesi değerlendirmesinden başvuruya kadar yanınızdayız.",
        bullets: [
          "§37.3 SGB XI danışma ziyaretleri",
          "MD değerlendirmesine hazırlık",
          "Başvuru ve formlarda destek",
          "Bakım parası danışmanlığı",
        ],
      },
      {
        title: "Bakıcı izninde destek",
        badge: "§39 SGB XI",
        text: "Bakan yakınlara ara gerektiğinde bakımı güvenle üstleniyoruz.",
        bullets: [
          "Saatlik veya günlük",
          "Yılda 6 haftaya kadar",
          "Hastalıkta spontan",
          "Tanıdık bakım ekibi",
        ],
      },
      {
        title: "Kültüre duyarlı bakım",
        badge: "Çok dilli",
        text: "Biyografi, kültür ve dile saygılı bakım – Almanca, Türkçe ve İngilizce.",
        bullets: [
          "Anadili Türkçe bakım personeli",
          "Dinsel ihtiyaçlara saygı",
          "Geleneksel yemek alışkanlıkları",
          "Doktor ve daireye aracılık",
        ],
      },
    ],
    processEyebrow: "Nasıl başlarız",
    processTitle: "Dört basit adımda doğru bakıma.",
    processLead:
      "Şeffaf, baskısız ve tamamen sizin hızınızda. İlk görüşme her zaman ücretsizdir.",
    steps: [
      {
        title: "Bize ulaşın",
        text: "Bizi arayın veya formu doldurun. Bir iş günü içinde size döneriz.",
      },
      {
        title: "Ücretsiz ilk görüşme",
        text: "Sizi evinizde ziyaret eder, dinler ve bakım ihtiyacınızı birlikte belirleriz.",
      },
      {
        title: "Bakım planı",
        text: "Hizmetleri, saatleri ve ücreti içeren şeffaf bir plan alırsınız – gizli ücret yok.",
      },
      {
        title: "Bakımın başlangıcı",
        text: "Size sabit bir bakım elemanı eşlik eder – güvenilir, saygılı ve gönülden.",
      },
    ],
  },
  about: {
    heroEyebrow: "Hakkımızda",
    heroTitle: "Dinleyen, anlayan ve orada olan bir ekip.",
    heroLead:
      "ElbLicht, Hamburg'daki insanlara profesyonel, kişisel ve kültüre duyarlı bir bakım sunmak için kuruldu.",
    storyEyebrow: "Hikayemiz",
    storyTitle: "ElbLicht neden var.",
    storyBody: [
      "Bakımın bir hizmetten daha fazlası olduğuna, bir ilişki olduğuna inanıyoruz. Günlük bakımda güven, ilgi ve güvenilirliğin ne kadar değerli olduğunu deneyimlerimizden biliyoruz.",
      "Bu nedenle ElbLicht'i kurduk: adını gerçekten hak eden bir bakım servisi – yolunu gösteren ve en çok ihtiyaç duyulduğunda sıcaklık veren bir ışık.",
      "Ekibimiz çok dilli, dikkatli ve bireysel bakım sunar. Bize güvenen insanlara zaman ayırırız – St. Pauli, Altona, Eimsbüttel ve çevre semtlerde.",
    ],
    valuesTitle: "Bizi taşıyan değerler",
    teamEyebrow: "Ekibimiz",
    teamTitle: "Bakımı yaşayan insanlar.",
    teamLead:
      "Sertifikalı, deneyimli ve gerçekten tutkulu: ekibimiz eşit düzeyde yetkinlik demektir.",
    members: [
      {
        name: "Ebru Medik",
        role: "Konuşur: Almanca · Türkçe",
        bio: "Ekibimizin tanıdık yüzü Ebru, hastalarına dikkatle, saygıyla ve çok dilli olarak günlük bakım sürecinde eşlik eder.",
      },
      {
        name: "Gülay Patan",
        role: "Konuşur: Almanca · İngilizce",
        bio: "Empatisi ve mesleki yetkinliği ile Gülay, hastalarımızın evde kendilerini gerçekten güvende hissetmesini sağlar.",
      },
    ],
  },
  contact: {
    heroEyebrow: "İletişim",
    heroTitle: "Sizden haber almak isteriz.",
    heroLead:
      "Soru, istek veya acil durum – bize ulaşın. Hızla ve kişisel olarak yanıt veriyoruz.",
    infoTitle: "Bize doğrudan ulaşın",
    infoHeading: "Bize nasıl ulaşırsınız",
    formTitle: "Mesaj gönderin",
    formLead: "Formu doldurun, bir iş günü içinde size dönelim.",
    fields: {
      name: "Adınız",
      email: "E-posta",
      phone: "Telefon (isteğe bağlı)",
      subject: "Konu",
      message: "Mesajınız",
      consent: "Gizlilik politikasını okudum ve kabul ediyorum.",
    },
    subjects: [
      "Genel soru",
      "Bakım danışmanlığı",
      "Yeni bakım talebi",
      "Mevcut bakım",
      "Geri bildirim",
    ],
    success: "Mesajınız için teşekkürler!",
    successLead: "Talebinizi aldık ve kısa süre içinde kişisel olarak size döneceğiz.",
  },
  consultation: {
    heroEyebrow: "Danışmanlık talep et",
    heroTitle: "Ücretsiz, bağlayıcı değil, kişisel.",
    heroLead:
      "Durumunuzu kısaca anlatın – sizi arayalım ve birlikte size nasıl en iyi destek olabileceğimizi bulalım.",
    formTitle: "Talep gönder",
    formLead:
      "Tüm alanlar gönüllüdür. Ne kadar çok bilirsek, o kadar hedefli danışmanlık verebiliriz.",
    benefits: [
      "Ücretsiz ilk görüşme",
      "Bir iş günü içinde geri arama",
      "Almanca, Türkçe veya İngilizce danışmanlık",
      "Başvuru ve formlarda yardım",
    ],
    fields: {
      name: "Ad",
      relation: "Başvuru sebebi",
      phone: "Telefon",
      email: "E-posta",
      careLevel: "Mevcut bakım derecesi (biliniyorsa)",
      careLevelPlaceholder: "Lütfen seçin",
      needs: "Hangi desteğe ihtiyacınız var?",
      preferredContact: "Tercih ettiğiniz iletişim kanalı",
      preferredTime: "Size ne zaman ulaşabiliriz?",
      language: "Danışmanlık dili",
      message: "Mesajınız",
      consent: "Gizlilik politikasını okudum ve kabul ediyorum.",
    },
    relations: [
      "Bakıma muhtaç kişi",
      "Yakını",
      "Vasi",
      "Doktor",
      "Diğer",
    ],
    careLevels: [
      "Henüz bakım derecesi yok",
      "Bakım derecesi 1",
      "Bakım derecesi 2",
      "Bakım derecesi 3",
      "Bakım derecesi 4",
      "Bakım derecesi 5",
      "Bilinmiyor",
    ],
    needs: [
      "Temel bakım",
      "Tıbbi bakım",
      "Ev işleri",
      "Refakat & rahatlatma",
      "Bakıcı izninde destek",
      "Danışma / başvurular",
    ],
    contactMethods: ["Telefon", "E-posta", "WhatsApp"],
    timeSlots: ["Sabah", "Öğlen", "Öğleden sonra", "Fark etmez"],
    success: "Talebiniz için teşekkürler!",
    successLead:
      "Talebinizi aldık ve bir iş günü içinde kişisel olarak size döneceğiz.",
  },
  cookieBanner: {
    title: "Bu web sitesi çerez kullanıyor",
    text: "Sitenin çalışması için gerekli olan çerezler ile istatistik için isteğe bağlı çerezler kullanıyoruz. Tercihinizi istediğiniz zaman ayarlardan değiştirebilirsiniz.",
    accept: "Tümünü kabul et",
    reject: "Sadece gerekli olanlar",
    settings: "Ayarlar",
  },
  legal: {
    cookies: {
      heroEyebrow: "Çerezler",
      heroTitle: "Çerezler hakkında bilgi.",
      heroLead:
        "Hangi çerezleri kullandığımızı ve tercihlerinizi istediğiniz zaman nasıl ayarlayabileceğinizi burada öğrenebilirsiniz.",
      sections: [
        {
          title: "Çerez nedir?",
          body: [
            "Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin güvenli, kullanıcı dostu ve işlevsel olmasına yardımcı olurlar.",
          ],
        },
        {
          title: "Zorunlu çerezler",
          body: [
            "Bu çerezler sitenin düzgün çalışması için teknik olarak gereklidir; örneğin dil tercihinizi veya çerez tercihinizi hatırlamak için. Onlarsız site düzgün görüntülenemez.",
          ],
        },
        {
          title: "İstatistik & analitik çerezleri",
          body: [
            "Bu çerezler, ziyaretçilerin siteyi nasıl kullandığını anlamamıza ve içerikleri geliştirmemize yardımcı olur. Yalnızca açık onayınızla kullanılır.",
          ],
        },
        {
          title: "Tercihinizi istediğiniz zaman değiştirin",
          body: [
            "Tarayıcıdaki site verilerini temizleyerek veya siteyi tekrar ziyaret ederek seçiminizi istediğiniz zaman değiştirebilirsiniz.",
          ],
        },
      ],
    },
    imprint: {
      heroEyebrow: "Künye",
      heroTitle: "§ 5 TMG uyarınca bilgiler.",
      heroLead:
        "Pflegedienst'imiz hakkında yasal olarak gerekli tüm bilgiler bir bakışta.",
      sections: [
        {
          title: "Sağlayıcı",
          body: [
            "ElbLicht Pflegedienst",
            "Clemens-Schultz-Straße 76",
            "20359 Hamburg, Almanya",
          ],
        },
        {
          title: "İletişim",
          body: [
            "Telefon: +49 40 560 69 787",
            "E-posta: info@pflegedienst-elblicht.de",
          ],
        },
        {
          title: "İçerikten sorumlu",
          body: [
            "Bakım Müdürü, adres yukarıdaki gibidir.",
          ],
        },
        {
          title: "İçerik sorumluluğu",
          body: [
            "Bu web sitesindeki içerikler büyük bir titizlikle hazırlanmıştır. Yine de doğruluk, bütünlük veya güncellik garantisi vermeyiz.",
          ],
        },
        {
          title: "Bağlantı sorumluluğu",
          body: [
            "Sitemiz, içeriklerini etkileyemeyeceğimiz üçüncü taraflara ait dış bağlantılar içerebilir. Bu dış içeriklerden her zaman ilgili sağlayıcı sorumludur.",
          ],
        },
      ],
    },
    privacy: {
      heroEyebrow: "Gizlilik",
      heroTitle: "Gizlilik politikası.",
      heroLead:
        "Kişisel verilerinizin korunmasını çok ciddiye alır, KVKK/GDPR kapsamında gizli tutarız.",
      sections: [
        {
          title: "Veri sorumlusu",
          body: [
            "ElbLicht Pflegedienst, Clemens-Schultz-Straße 76, 20359 Hamburg, Almanya.",
            "İletişim: info@pflegedienst-elblicht.de",
          ],
        },
        {
          title: "Kişisel verilerin toplanması",
          body: [
            "Bize bir mesaj ya da danışmanlık talebi gönderdiğinizde, talebinizi işleme almak için verdiğiniz bilgileri (ad, iletişim, mesaj) saklarız. Bu veriler üçüncü taraflarla paylaşılmaz.",
          ],
        },
        {
          title: "Sunucu günlükleri",
          body: [
            "Hosting sağlayıcımız, tarayıcınızın ilettiği bilgileri (IP, tarih/saat, tarayıcı türü) otomatik olarak toplar. Bu veriler yalnızca güvenlik ve istikrar amacıyla kullanılır.",
          ],
        },
        {
          title: "Haklarınız",
          body: [
            "Verilerinize erişim, düzeltme, silme ve işleme kısıtlaması isteme ile itiraz hakkına her zaman sahipsiniz. Lütfen e-posta ile bize ulaşın.",
          ],
        },
        {
          title: "Çerezler",
          body: [
            "Kullanılan çerezlerle ilgili ayrıntılar için çerezler sayfamıza bakabilirsiniz.",
          ],
        },
      ],
    },
  },
  values: [
    { title: "Onur", text: "Her insan saygıyı ve değer görmeyi hak eder." },
    { title: "Güvenilirlik", text: "Sözümüzü tutarız – zamanında ve şeffaf." },
    { title: "Empati", text: "Bakım bizim için dinlemek, anlamak ve eşlik etmektir." },
    { title: "Kalite", text: "Güncel, insana yakın ve kişiye özel." },
  ],
  faqs: [
    {
      q: "Bakım ne kadar hızlı başlayabilir?",
      a: "Çoğu durumda ilk görüşme kısa süre içinde mümkündür. İhtiyaçları birlikte belirler ve bakımı olabildiğince hızlı başlatırız.",
    },
    {
      q: "Bakım sigortası hangi masrafları karşılar?",
      a: "Bakım derecesine ve hizmete göre masraflar tamamen veya kısmen karşılanır. Haklarınız konusunda şeffaf danışmanlık veriyoruz.",
    },
    {
      q: "Hangi semtlerde hizmet veriyorsunuz?",
      a: "Odağımız Hamburg-St. Pauli, Altona, Eimsbüttel ve çevresidir. Adresiniz için bize ulaşın.",
    },
    {
      q: "Başvurularda da yardım ediyor musunuz?",
      a: "Evet. Başvuru, bakım derecesi değerlendirmesi ve hazırlık sürecinde yanınızdayız, böylece yükünüz hafifler.",
    },
  ],
}

export const dictionaries: Record<Locale, Dict> = { de, en, tr }
