/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — edit the whole site from this one file.
 * ─────────────────────────────────────────────────────────────────────────
 *  All Hebrew copy, contact details, and image paths live here. Change a value
 *  below and rebuild (`npm run build`) to update the site.
 *
 *  ⚠️  PENDING CONFIRMATION — items marked `// CONFIRM:` come from a single
 *  public directory listing (alhasapa.co.il) and are NOT independently verified.
 *  Confirm each with Ravit before the site is made public.
 *
 *  Image paths are written WITHOUT the GitHub Pages base prefix. The `asset()`
 *  helper in components resolves them for both local dev and Pages.
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

export interface Credential {
  /** Qualification or program name (shown first). */
  readonly title: string;
  /** Issuing institution + optional year/context (shown below, muted). */
  readonly issuer: string;
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
  tagline: 'חיפה',
  seo: {
    title: 'רווית הילמן | מטפלת רגשית ובאמנות בחיפה',
    description:
      'רווית הילמן — מטפלת רגשית ובאמנות בחיפה. ליווי רגשי המשלב שיחה ויצירה למתבגרים, מבוגרים והורים, במרחב מכבד ונטול שיפוטיות. לתיאום פגישת היכרות.',
    lang: 'he',
    locale: 'he_IL',
    // Public URL (canonical + Open Graph).
    url: 'https://shanibar1.github.io/ravit-hilman-website/',
    ogImage: 'images/og-image.jpg',
    themeColor: '#6E6A47',
  },

  // ── Navigation (anchors to sections on the single page) ───────────────────
  nav: [
    { label: 'נעים להכיר', href: '#about' },
    { label: 'למי מתאים', href: '#audience' },
    { label: 'איך מתחילים', href: '#process' },
    { label: 'שאלות נפוצות', href: '#faq' },
  ] as const satisfies readonly NavLink[],
  navCta: { label: 'ליצירת קשר', href: '#contact' } as const,

  // ── Hero (פתיחה) ──────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'מטפלת רגשית ובאמנות',
    // Natural, specific headline. The second line carries the accent colour.
    headlineTop: 'ליווי רגשי',
    headlineAccent: 'דרך שיחה ויצירה',
    intro:
      'אני רווית הילמן, מטפלת רגשית ובאמנות בחיפה. אני מלווה מתבגרים, מבוגרים והורים — במרחב מכבד ונטול שיפוטיות, שבו אפשר לפגוש את מה שעולה, בקצב אישי ובלי צורך להרשים אף אחד.',
    // Short, scannable facts shown under the intro.
    meta: [
      'קליניקה בחיפה',
      'מתבגרים · מבוגרים · הורים',
      'פגישות פנים אל פנים',
    ] as readonly string[],
    ctaLabel: 'ליצירת קשר',
    ctaHref: '#contact',
    image: {
      src: 'images/hero-session.webp',
      alt: 'מתבגר מצייר בעיפרון במהלך מפגש ליווי רגשי',
    } as SiteImage,
  },

  // ── About — מי זו רווית? (נעים להכיר) ──────────────────────────────────────
  about: {
    heading: 'נעים להכיר',
    lead: 'הדרך שלי אל הטיפול התחילה מתוך סקרנות עמוקה לנפש האדם, ולכוח הריפוי שיש במפגש אנושי ויצירתי.',
    paragraphs: [
      'לאורך השנים צברתי ניסיון בעבודה בתחום בריאות הנפש, עם בני נוער בסיכון ובהדרכת הורים. כיום אני עובדת גם כמטפלת רגשית במסגרת משרד החינוך, ומלווה בני נוער המתמודדים עם קשיים רגשיים בתוך בית הספר.',
      'בטיפול אני משלבת שיחה עם עבודה יצירתית, ומתאימה את הכלים — ביניהם כלים מגישת ה־DBT — לכל אדם ולקצב שלו. אני מאמינה שטיפול טוב מתחיל ביחס: במרחב בטוח שבו נבנה אמון בהדרגה, ושבו מותר להגיע בדיוק כפי שאתם.',
    ],
    // Education & professional training — taken from Ravit's certificates.
    // Qualification/program name first, issuing institution + year below.
    credentialsHeading: 'השכלה והכשרה מקצועית',
    credentials: [
      {
        title: 'תואר שני (M.A.) בטיפול באמצעות אמנויות — אמנות חזותית',
        issuer: 'אוניברסיטת חיפה · 2022, בהצטיינות',
      },
      {
        title: 'הכשרת מטפלים: התמקצעות בטיפול בהפרעות שימוש בקרב בני נוער',
        issuer: 'קמפוס ICA — המרכז הישראלי להתמכרויות · 2024',
      },
    ] as readonly Credential[],
    image: {
      src: 'images/ravit-portrait.jpg',
      alt: 'רווית הילמן',
    } as SiteImage,
  },

  // ── Audience — האם הטיפול מתאים לי? (למי הטיפול מתאים) ─────────────────────
  audience: {
    heading: 'למי הטיפול מתאים',
    lead: 'אני מלווה אנשים בשלבים ובגילים שונים. אלה הקהלים שאיתם אני עובדת:',
    groups: [
      {
        title: 'מתבגרים ובני נוער',
        body: 'ליווי רגשי מגיל 12 ומעלה — בהתמודדות עם קשיים רגשיים, חברתיים או משפחתיים, ובתקופות של לחץ ובלבול.',
      },
      {
        title: 'מבוגרים',
        body: 'מרחב אישי להתבונן פנימה, להתמודד עם משברים ותקופות מעבר, ולהכיר את עצמכם מחדש.',
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
      'ליווי בגיל ההתבגרות',
    ] as readonly string[],
    // NOTE: "התמכרויות" was removed from the public service list pending Ravit's
    // confirmation. Her ICA training is specifically in substance-use disorders
    // among youth (shown under credentials); confirm before listing addiction
    // treatment as a general service she currently offers.
  },

  // ── Process — איך מתחילים? (איך נראה התהליך) ──────────────────────────────
  process: {
    heading: 'איך מתחילים',
    lead: 'הדרך מתחילה בפנייה קטנה — ומשם מתקדמים יחד, בקצב שמתאים לכם.',
    steps: [
      {
        title: 'פנייה ראשונית',
        body: 'פונים אליי בוואטסאפ או בטלפון, ומתאמים זמן לשיחה קצרה להיכרות — ללא התחייבות.',
      },
      {
        title: 'פגישת היכרות',
        body: 'בפגישה הראשונה נכיר, נדבר על מה שמביא אתכם, ונראה יחד אם יש התאמה. אין צורך להגיע מוכנים — מספיק לבוא כפי שאתם.',
      },
      {
        title: 'תהליך משותף',
        body: 'אם נחליט להמשיך, נבנה יחד תהליך בקצב אישי, שמשלב שיחה ויצירה בהתאם לצרכים שלכם.',
      },
    ] as readonly ListItem[],
    note: 'הפגישות מתקיימות פנים אל פנים בקליניקה בחיפה, בעברית.', // CONFIRM: in-person only / no online; session length & pricing not public
  },

  // ── FAQ (שאלות נפוצות) — only verified answers ────────────────────────────
  faq: {
    heading: 'שאלות נפוצות',
    items: [
      {
        question: 'איפה מתקיימות הפגישות?',
        answer:
          'בקליניקה בחיפה, פנים אל פנים. אני מלווה מטופלים מחיפה, מאזור הצפון ומהקריות.',
      },
      {
        question: 'עם מי את עובדת?',
        answer:
          'עם מתבגרים מגיל 12 ומעלה, עם מבוגרים, ועם הורים המבקשים ליווי והדרכה.',
      },
      {
        question: 'איך נראית פגישת ההיכרות?',
        answer:
          'שיחה פתוחה שבה נכיר ונבין מה מביא אתכם. אין צורך בהכנה מוקדמת, והיא נועדה לבדוק יחד אם יש התאמה — ללא התחייבות להמשך.',
      },
      {
        question: 'באיזו שפה מתקיים הטיפול?',
        answer: 'הטיפול מתקיים בעברית.',
      },
    ] as readonly FaqItem[],
  },

  // ── Contact — איך יוצרים קשר? (יצירת קשר) ──────────────────────────────────
  contact: {
    heading: 'יצירת קשר',
    lead: 'הצעד הראשון הוא לרוב הקשה ביותר — ואני כאן כדי להקל עליו.',
    invitation:
      'אפשר לשלוח הודעת וואטסאפ או להתקשר, ואחזור אליכם בהקדם. הפנייה אינה מחייבת דבר.',

    // CONFIRM: phone from the alhasapa.co.il listing (spelled there רוית).
    // Verify the number is correct and that WhatsApp is active on it.
    phoneDisplay: '052-829-5533',
    phoneE164: '+972528295533', // used for tel: and wa.me links
    whatsappMessage: 'היי רווית, אשמח לשמוע פרטים על פגישת היכרות.',

    // Optional channels — fill in to show them (empty = hidden).
    email: '', // CONFIRM: no public email found
    // Public clinic street address is unknown; set to a full address to enable
    // a working directions button. Leaving it empty shows the city only.
    mapsAddress: '', // CONFIRM: exact clinic address not public (city: חיפה)
    locationLabel: 'קליניקה בחיפה',
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'מרחב טיפולי רגוע ומכבד בחיפה.',
  },
} as const;

export type Site = typeof site;
export default site;
