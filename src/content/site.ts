/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — edit the whole site from this one file.
 * ─────────────────────────────────────────────────────────────────────────
 *  All Hebrew copy, contact details, and image paths live here. Change a value
 *  below and rebuild (`npm run build`) to update the site.
 *
 *  Display name is רוית הילמן (one ו) everywhere.
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
  name: 'רוית הילמן',
  role: 'מטפלת רגשית באמצעות אומנות',
  tagline: 'חיפה',
  seo: {
    title: 'רוית הילמן | מטפלת רגשית באמצעות אומנות בחיפה',
    description:
      'רוית הילמן — מטפלת רגשית באמצעות אומנות בחיפה. ליווי רגשי המשלב שיחה ויצירה למתבגרים, מבוגרים והורים, במרחב מכבד ונטול שיפוטיות. לתיאום פגישת היכרות.',
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
    eyebrow: 'מטפלת רגשית באמצעות אומנות',
    headlineTop: 'ליווי רגשי',
    headlineAccent: 'דרך שיחה ויצירה',
    intro:
      'אני רוית הילמן, מטפלת רגשית באמצעות אומנות בחיפה. אני מלווה מתבגרים, מבוגרים והורים — במרחב מכבד ונטול שיפוטיות, שבו אפשר לפגוש את מה שעולה, בקצב אישי ובלי צורך להרשים אף אחד.',
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
      alt: 'ציור בצבעי מים במהלך מפגש ליווי רגשי',
    } as SiteImage,
  },

  // ── About — מי זו רוית? (נעים להכיר) — Ravit's own wording ─────────────────
  about: {
    heading: 'נעים להכיר',
    lead: 'אני משלבת בעבודתי שיח, עבודה עם חומרים וכלים מעולם ה־DBT, באופן שמתאים לצורך של כל אדם ולקצב האישי שלו.',
    paragraphs: [
      'אני מאמינה שטיפול מתחיל במרחב בטוח. מרחב שבו נבנה בהדרגה אמון ושאליו מותר להגיע בדיוק כפי שאתם.',
    ],
    // Education & professional training — from Ravit's certificates.
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
      alt: 'רוית הילמן',
    } as SiteImage,
  },

  // ── Audience — למי הטיפול מתאים? ──────────────────────────────────────────
  audience: {
    heading: 'למי הטיפול מתאים',
    lead: 'אני מלווה אנשים בשלבים ובגילים שונים. אלה הקהלים שאיתם אני עובדת:',
    groups: [
      {
        title: 'מתבגרים ובני נוער',
        // REVIEW (age range): specific ages intentionally left out until Ravit confirms.
        body: 'ליווי רגשי למתבגרים ובני נוער — בהתמודדות עם קשיים רגשיים, חברתיים או משפחתיים, ובתקופות של לחץ ובלבול.',
      },
      {
        title: 'מבוגרים',
        body: 'מרחב אישי להתבונן פנימה, להתמודד עם משברים ותקופות מעבר, ולהכיר את עצמכם מחדש.',
      },
      {
        title: 'הורים',
        body: 'הדרכת הורים וליווי במפגש עם האתגרים של גיל ההתבגרות ושל החיים המשפחתיים. הדרכת הורים מתקיימת גם בזום.',
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
      'חינוך מיני',
      'ליווי בגיל ההתבגרות',
    ] as readonly string[],
  },

  // ── Process — איך מתחילים? ────────────────────────────────────────────────
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
    note: 'הפגישות מתקיימות פנים אל פנים בקליניקה בחיפה, בעברית. הדרכת הורים מתקיימת גם בזום.', // CONFIRM: in-person only / session length & pricing not public
  },

  // ── FAQ (שאלות נפוצות) ────────────────────────────────────────────────────
  faq: {
    heading: 'שאלות נפוצות',
    items: [
      {
        question: 'איפה מתקיימות הפגישות?',
        answer:
          'בקליניקה בחיפה, פנים אל פנים. אני מלווה מטופלים מחיפה, מאזור הצפון ומהקריות. הדרכת הורים מתקיימת גם בזום.',
      },
      {
        question: 'עם מי את עובדת?',
        answer:
          'עם מתבגרים, עם מבוגרים, ועם הורים המבקשים ליווי והדרכה.',
      },
      {
        // REVIEW: proposed FAQ about art therapy — awaiting Ravit's approval.
        question: 'האם צריך לדעת לצייר כדי להגיע לטיפול באומנות?',
        answer:
          'אין צורך בניסיון קודם בציור או ביצירה. אפשר להשתמש בחומרים וביצירה כדי לבטא דברים שלפעמים קשה לומר במילים, בקצב שמתאים לכם.',
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

  // ── Contact — יצירת קשר ───────────────────────────────────────────────────
  contact: {
    heading: 'יצירת קשר',
    lead: 'הצעד הראשון הוא לרוב הקשה ביותר — ואני כאן כדי להקל עליו.',
    invitation:
      'אפשר לשלוח הודעת וואטסאפ, להתקשר או לכתוב לי במייל, ואחזור אליכם בהקדם. הפנייה אינה מחייבת דבר.',

    // CONFIRM: phone from the alhasapa.co.il listing. Verify the number is
    // correct and that WhatsApp is active on it.
    phoneDisplay: '052-829-5533',
    phoneE164: '+972528295533', // used for tel: and wa.me links
    whatsappMessage: 'היי רוית, אשמח לשמוע פרטים על פגישת היכרות.',

    email: 'Ravithillman@gmail.com',
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
