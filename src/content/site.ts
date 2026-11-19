/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — edit the site from this one file.
 * ─────────────────────────────────────────────────────────────────────────
 *  All Hebrew copy, contact details, and image paths live here. Change a value
 *  below and rebuild (`npm run build`) to update the site. No other file needs
 *  to be touched for routine content edits.
 *
 *  ⚠️  PENDING CONFIRMATION — items marked `// CONFIRM:` are based on a single
 *  public directory listing (alhasapa.co.il) and have NOT been independently
 *  verified. Confirm each with Ravit before the site is made public.
 *
 *  Image paths are written WITHOUT the GitHub Pages base prefix. Use the
 *  `asset()` helper in components so paths resolve both locally and on Pages.
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface ListItem {
  readonly title: string;
  readonly body: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface SiteImage {
  /** Path relative to /public, e.g. "images/hero.jpg". No leading slash, no base. */
  readonly src: string;
  readonly alt: string;
  readonly credit?: string;
}

export const site = {
  // ── Identity & SEO ──────────────────────────────────────────────────────
  name: 'רווית הילמן',
  role: 'מטפלת רגשית ובאמנות',
  // Used in <title>, meta description and social preview.
  seo: {
    title: 'רווית הילמן | מטפלת רגשית ובאמנות בחיפה',
    description:
      'רווית הילמן — מטפלת רגשית ובאמנות בחיפה. מרחב טיפולי רגוע ומכבד למתבגרים, מבוגרים והורים, המשלב שיחה ויצירה. לתיאום פגישת היכרות.',
    lang: 'he',
    locale: 'he_IL',
    // Set this to the final public URL before release (used for canonical + OG).
    // e.g. 'https://shanibar1.github.io/ravit-hilman-website/'
    url: 'https://shanibar1.github.io/ravit-hilman-website/',
    ogImage: 'images/og-image.jpg',
    themeColor: '#6E6A47',
  },

  // ── Navigation (anchors to sections on the single page) ───────────────────
  nav: [
    { label: 'פתיחה', href: '#top' },
    { label: 'נעים להכיר', href: '#about' },
    { label: 'למי הטיפול מתאים', href: '#audience' },
    { label: 'איך נראה התהליך', href: '#process' },
    { label: 'שאלות נפוצות', href: '#faq' },
    { label: 'יצירת קשר', href: '#contact' },
  ] as const satisfies readonly NavLink[],

  // ── Hero (פתיחה) ──────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'מטפלת רגשית ובאמנות · חיפה',
    // Expressive, editorial headline.
    headline: 'מרחב רגוע\nלהתבונן, להרגיש\nולצמוח',
    intro:
      'אני רווית הילמן, מטפלת רגשית ובאמנות. אני מלווה מתבגרים, מבוגרים והורים במרחב מכבד ונטול שיפוטיות, שבו אפשר לפגוש את הרגשות דרך שיחה ויצירה — בקצב אישי, ובלי צורך להרשים אף אחד.',
    ctaLabel: 'ליצירת קשר',
    ctaHref: '#contact',
    image: {
      // Replace with an approved portrait of Ravit when available.
      src: 'images/hero.jpg',
      alt: 'אור יום רך נופל על קיר בעל מרקם, יוצר אווירה שקטה ומזמינה',
      credit: 'Unsplash',
    } as SiteImage,
  },

  // ── About (נעים להכיר) ────────────────────────────────────────────────────
  about: {
    heading: 'נעים להכיר',
    lead: 'הדרך שלי אל הטיפול התחילה מתוך סקרנות עמוקה לנפש האדם ולכוח הריפוי שיש במפגש אנושי ויצירתי.',
    paragraphs: [
      'אני בוגרת תואר שני בטיפול באמצעות אומנות מאוניברסיטת חיפה, והוכשרתי גם בטיפול בהתמכרויות במרכז הישראלי להתמכרויות. לאורך השנים צברתי ניסיון בעבודה בתחום בריאות הנפש, עם בני נוער בסיכון ובהדרכת הורים.',
      'כיום אני עובדת גם כמטפלת רגשית במסגרת משרד החינוך, ומלווה בני נוער המתמודדים עם קשיים רגשיים בתוך בית הספר. בעבודתי אני משלבת שיחה עם כלים טיפוליים מגוונים, ביניהם כלים מתוך גישת ה־DBT, בהתאמה אישית לכל מטופל ומטופלת.',
      'אני מאמינה שטיפול טוב מתחיל ביחס — במרחב בטוח ונטול שיפוטיות, שבו נבנית אמון בהדרגה, ושבו לכל אחד ואחת מותר להגיע בדיוק כפי שהם.',
    ],
    image: {
      src: 'images/about.jpg',
      alt: 'פינה שקטה בחדר עם אור טבעי רך',
      credit: 'Unsplash',
    } as SiteImage,
  },

  // ── Audience (למי הטיפול מתאים) ──────────────────────────────────────────
  audience: {
    heading: 'למי הטיפול מתאים',
    lead: 'אני מלווה אנשים בשלבים ובגילאים שונים — מתבגרים מגיל 12, מבוגרים, והורים המבקשים ליווי.',
    groups: [
      {
        title: 'מתבגרים ובני נוער',
        body: 'ליווי רגשי לבני נוער מגיל 12 ומעלה, המתמודדים עם קשיים רגשיים, חברתיים או משפחתיים.',
      },
      {
        title: 'מבוגרים',
        body: 'מרחב אישי למבוגרים המבקשים להתבונן פנימה, להתמודד עם משברים ולהכיר את עצמם מחדש.',
      },
      {
        title: 'הורים',
        body: 'הדרכת הורים וליווי במפגש עם האתגרים של גיל ההתבגרות ושל החיים המשפחתיים.',
      },
    ] as readonly ListItem[],
    areasHeading: 'תחומים שבהם אני מלווה',
    areas: [
      'קשיים רגשיים וויסות רגשי',
      'חרדה ודיכאון',
      'משברי חיים ותקופות מעבר',
      'התמודדות עם טראומה',
      'דימוי עצמי וביטחון',
      'התמכרויות',
      'ליווי בגיל ההתבגרות',
    ] as readonly string[],
  },

  // ── Process (איך נראה התהליך) ─────────────────────────────────────────────
  process: {
    heading: 'איך נראה התהליך',
    lead: 'הדרך מתחילה בפנייה קטנה — ומשם אנחנו מתקדמות יחד, בקצב שמתאים לך.',
    steps: [
      {
        title: 'פנייה ראשונית',
        body: 'את/ה פונים אליי בטלפון או בוואטסאפ, ואנחנו קובעים זמן לשיחה קצרה להיכרות.',
      },
      {
        title: 'פגישת היכרות',
        body: 'בפגישה הראשונה נכיר, נדבר על מה שמביא אותך, ונראה יחד אם יש התאמה. אין צורך להגיע מוכנים — מספיק לבוא כפי שאתם.',
      },
      {
        title: 'תהליך משותף',
        body: 'אם נחליט להמשיך, נבנה יחד תהליך טיפולי בקצב אישי, המשלב שיחה ויצירה בהתאם לצרכים שלך.',
      },
    ] as readonly ListItem[],
    note: 'הטיפול מתקיים בחיפה. פרטים נוספים על מתכונת ומועדי הפגישות נשמח לתאם בשיחה.', // CONFIRM: session format/length
  },

  // ── FAQ (שאלות נפוצות) — only verified answers ────────────────────────────
  faq: {
    heading: 'שאלות נפוצות',
    items: [
      {
        question: 'איפה מתקיים הטיפול?',
        answer: 'הקליניקה שלי נמצאת בחיפה, ואני מלווה מטופלים מחיפה, מאזור הצפון ומהקריות.',
      },
      {
        question: 'עם מי את עובדת?',
        answer: 'אני עובדת עם מתבגרים מגיל 12 ומעלה, עם מבוגרים, ועם הורים המבקשים ליווי והדרכה.',
      },
      {
        question: 'איך מתחילים?',
        answer:
          'הדרך הפשוטה ביותר היא לפנות אליי בטלפון או בוואטסאפ. נתאם שיחה קצרה, ומשם נקבע פגישת היכרות ללא התחייבות.',
      },
      {
        question: 'באיזו שפה מתקיים הטיפול?',
        answer: 'הטיפול מתקיים בעברית.',
      },
    ] as readonly FaqItem[],
  },

  // ── Contact (יצירת קשר) ───────────────────────────────────────────────────
  contact: {
    heading: 'יצירת קשר',
    lead: 'מוזמנים לפנות אליי. אני כאן כדי להקשיב, ולראות יחד איך אפשר להתקדם.',
    invitation:
      'אפשר להתקשר או לשלוח הודעת וואטסאפ, ואחזור אליכם בהקדם. הצעד הראשון הוא לרוב הקשה ביותר — ואני כאן כדי להקל עליו.',

    // CONFIRM: phone taken from the alhasapa.co.il listing (spelled there רוית).
    // Verify the number is correct and that WhatsApp is active on it before release.
    phoneDisplay: '052-829-5533',
    phoneE164: '+972528295533', // used for tel: and wa.me links
    whatsappMessage: 'היי, אשמח לשמוע פרטים על אפשרות לקבוע פגישת היכרות.',

    // Optional channels — left empty until confirmed. Fill in to show them.
    email: '', // CONFIRM: no public email found
    instagram: '', // CONFIRM: none found
    facebook: '', // CONFIRM: none found

    locationLabel: 'חיפה והסביבה', // CONFIRM: exact clinic address not public
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'מרחב טיפולי רגוע ומכבד בחיפה.',
  },
} as const;

export type Site = typeof site;
export default site;
