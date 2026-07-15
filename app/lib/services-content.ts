/**
 * Content module for the /services/* pages.
 *
 * Preserves verbatim body copy, JSON-LD data model, and metadata from the
 * live site (genesisintegrativemed.com) — sourced during Prompt 1 migration
 * work and confirmed against the live pages during the services-page rebuild.
 *
 * DO NOT paraphrase or rewrite copy — see the migration brief.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

/** An image that can accompany a section or gallery item. */
export type SectionImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Fields any section can carry — controls visual variant + optional inline image. */
export type SectionCommon = {
  /** Optional image displayed alongside the section content. */
  image?: SectionImage;
  /** Which side the image renders on when present. Defaults to auto-alternating. */
  imageSide?: "left" | "right";
  /** Optional background variant. `dark` renders on a deep navy panel with white text. */
  variant?: "default" | "mist" | "dark";
  /** Optional small pre-heading (kicker) rendered above the H2. */
  kicker?: string;
};

/** A discriminated union describing the different body-section shapes we render. */
export type ServiceSection = SectionCommon &
  (
    | { kind: "prose"; heading?: string; paragraphs: readonly string[] }
    | {
        kind: "list";
        heading?: string;
        intro?: string;
        items: readonly string[];
        outro?: string;
      }
    | {
        kind: "subsections";
        heading?: string;
        intro?: string;
        subs: readonly {
          heading: string;
          paragraphs?: readonly string[];
          items?: readonly string[];
          outro?: string;
        }[];
      }
    | {
        kind: "benefits";
        heading?: string;
        intro?: string;
        subs: readonly { heading: string; paragraph: string }[];
      }
  );

/** Small icon-badge shown in the "Highlights" strip below the hero. */
export type Highlight = {
  /** Short label — usually 2–4 words. */
  label: string;
  /** Optional slightly longer note underneath. */
  note?: string;
  /** Icon key rendered by the template — falls back to a check mark. */
  icon?: "spark" | "shield" | "heart" | "clock" | "bolt" | "leaf" | "target" | "check";
};

export type ServicePageContent = {
  slug: string;
  urlPath: string;
  meta: {
    title: string;
    description: string;
    canonicalOrigin: string;
    ogImage: string;
  };
  breadcrumbs: readonly { name: string; item?: string }[];
  hero: {
    kicker?: string;
    h1: string;
    subtitle?: string;
    intro?: string;
  };
  /** Optional quick-facts row shown below the hero (3–4 icon tiles). */
  highlights?: readonly Highlight[];
  featuredImage?: { src: string; alt: string; width: number; height: number };
  video?: {
    provider: "vimeo" | "youtube";
    id: string;
    title: string;
    /** Optional heading rendered above the embed. */
    heading?: string;
    /** Optional short caption/kicker rendered above the heading. */
    kicker?: string;
  };
  sections: readonly ServiceSection[];
  faqs?: readonly { question: string; answer: string }[];
  faqHeading?: string;
  gallery?: readonly { src: string; alt: string; width: number; height: number }[];
  serviceJsonLd: {
    name: string;
    description: string;
    canonicalServiceUrl: string;
  };
};

/* -------------------------------------------------------------------------- */
/* Shared blocks used on every service page                                    */
/* -------------------------------------------------------------------------- */

export const ALL_SERVICES_LIST = [
  { label: "Active Rehab", href: "/services/active-rehab-geneva/" },
  { label: "Chiropractic Care", href: "/services/chiropractic-care/" },
  { label: "Allergy Testing", href: "/services/allergy-testing-geneva/" },
  { label: "PRP", href: "/services/prp-injections-geneva/" },
  { label: "Regenerative Medicine", href: "/services/regenerative-medicine/" },
  { label: "Cold Laser", href: "/services/cold-laser/" },
  { label: "Peripheral Neuropathy", href: "/services/peripheral-neuropathy-treatment/" },
  { label: "Medical Weight Loss", href: "/services/peptide-weight-loss/" },
  { label: "IV Nutrition Therapy", href: "/services/iv-nutrition-therapy/" },
  { label: "Sciatica", href: "/services/sciatica/" },
  { label: "ED / Shockwave Men's Wellness", href: "/services/ed-shockwave-mens-wellness/" },
] as const;

export const CONSULTATION_CTA = {
  heading: "Schedule a consultation Today!",
  paragraph:
    "The team at Genesis Integrative Medicine is here to help you. Please feel free to call us with any questions.",
} as const;

export const INSURANCE_MISSION = {
  heading: "Accepted Insurance Providers",
  paragraph:
    "At Genesis Integrative Medicine, we\u2019ve recognized a pervasive challenge in modern healthcare: the fragmentation of treatment and communication among practitioners. Our mission in Geneva, Illinois, is to revolutionize patient care by offering a seamless blend of traditional medical services and alternative therapies all under one roof.",
} as const;

/* -------------------------------------------------------------------------- */
/* Services index page (/services/)                                            */
/* -------------------------------------------------------------------------- */

export const SERVICES_INDEX_META = {
  title: "Health Services & Wellness | Local Experts in Geneva",
  description:
    "Explore Genesis Integrative Medicine's holistic services in Geneva, IL, including chiropractic and weight loss. Start your wellness journey today!",
  canonicalOrigin: "https://genesisintegrativemed.com/services/",
  ogImage:
    "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-2img.webp",
  datePublished: "2022-07-13T05:00:10+00:00",
  dateModified: "2026-05-20T09:34:26+00:00",
} as const;

export const SERVICES_INDEX_HERO = {
  kicker: "Cutting-edge treatment options",
  h1: "Services",
  intro:
    "At Genesis Integrative Medicine, we\u2019ve recognized a pervasive challenge in modern healthcare: the fragmentation of treatment and communication among practitioners. Our mission in Geneva, Illinois, is to revolutionize patient care by offering a seamless blend of traditional medical services and alternative therapies all under one roof.",
} as const;

/**
 * The 11 featured service cards on /services/. Blurbs are verbatim from
 * the live index page.
 */
export const SERVICES_INDEX_CARDS = [
  {
    title: "Chiropractic Care",
    body:
      "Chiropractic treatment is used as a pain relief alternative for muscles, joints, bones, and connective tissue, such as cartilage, ligaments, and tendons.",
    href: "/services/chiropractic-care/",
    image: "/images/services/chiropractic-care.webp",
    alt: "Chiropractic care",
  },
  {
    title: "Active Rehab",
    body:
      "Active Rehabilitation includes but is not limited to: mobility, stability, strength and endurance training through client specific exercises and progression.",
    href: "/services/active-rehab-geneva/",
    image: "/images/services/active-rehab.webp",
    alt: "Active rehab",
  },
  {
    title: "PRP",
    body:
      "Platelet-rich plasma (PRP) injections use each individual patient\u2019s own healing system to improve musculoskeletal problems.",
    href: "/services/prp-injections-geneva/",
    image: "/images/services/prp-injections.webp",
    alt: "PRP injections",
  },
  {
    title: "Medical Weight Loss",
    body:
      "Treatments mimic the biological processes in the body, making them useful as supplements for maintaining a healthy weight and lifestyle.",
    href: "/services/peptide-weight-loss/",
    image: "/images/services/peptide-weight-loss.webp",
    alt: "Medical weight loss",
  },
  {
    title: "Regenerative Medicine",
    body:
      "Focuses on applying innovative treatments to heal tissues and organs and restore function lost due to aging, disease, damage or defects.",
    href: "/services/regenerative-medicine/",
    image: "/images/services/regenerative-medicine.webp",
    alt: "Regenerative medicine",
  },
  {
    title: "Cold Laser",
    body:
      "Cold Laser therapy is an FDA-approved treatment that uses low levels of light to stimulate healing and helps to alleviate pain from conditions such as arthritis.",
    href: "/services/cold-laser/",
    image: "/images/services/cold-laser.webp",
    alt: "Cold laser therapy",
  },
  {
    title: "Therapeutic Injections",
    body:
      "Are used to relieve chronic pain and inflammation. They help reduce swelling by delivering anti-inflammatory agents directly to the affected joint or muscle.",
    href: "/services/iv-nutrition-therapy/",
    image: "/images/services/iv-nutrition-therapy.webp",
    alt: "Therapeutic injections",
  },
  {
    title: "Peripheral Neuropathy",
    body:
      "A common cause is diabetes, but it can also result from injuries, infections, and exposure to toxins. We offer a variety of treatments to control pain symptoms.",
    href: "/services/peripheral-neuropathy-treatment/",
    image: "/images/services/peripheral-neuropathy.webp",
    alt: "Peripheral neuropathy treatment",
  },
  {
    title: "ShockWave Therapy",
    body:
      "Can target specific pain in the bones, joints, muscles, tendons and ligaments. It\u2019s a non-invasive treatment that gives significant relief of pain.",
    href: "/services/ed-shockwave-mens-wellness/",
    image: "/images/services/sciatica.webp",
    alt: "Shockwave therapy",
  },
  {
    title: "Allergy Testing",
    body:
      "Allows you to develop a prevention plan, anticipate your allergy season, change your environment to avoid harmful allergens, & seek specific treatment.",
    href: "/services/allergy-testing-geneva/",
    image: "/images/services/allergy-testing.webp",
    alt: "Allergy testing",
  },
  {
    title: "ED / ShockWave Therapy \u2013 Men\u2019s Wellness",
    body:
      "A non-invasive treatment that improves blood flow, enhances sexual performance, and naturally treats erectile dysfunction with fast, painless, and long-lasting results.",
    href: "/services/ed-shockwave-mens-wellness/",
    image: "/images/services/ed-shockwave.jpeg",
    alt: "ED shockwave therapy",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* /services/sciatica/                                                         */
/* -------------------------------------------------------------------------- */

export const SCIATICA_CONTENT: ServicePageContent = {
  slug: "sciatica",
  urlPath: "/services/sciatica/",
  meta: {
    title: "Sciatica Treatment in Geneva, IL | Expert Pain Solutions",
    description:
      "Improve your daily mobility with focused sciatica treatment at Genesis Integrative Medicine. We target nerve pressure in Geneva, IL. Contact our office today.",
    // NOTE: live site's canonical points to /conditions-treated/sciatica/ but
    // we self-canonicalize to keep the migrated URL consistent.
    canonicalOrigin: "https://genesisintegrativemed.com/services/sciatica/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Sciatica" },
  ],
  hero: { h1: "Sciatica" },
  highlights: [
    { icon: "target", label: "Root-cause focus", note: "Beyond symptom relief" },
    { icon: "heart", label: "Non-surgical", note: "Integrative therapies" },
    { icon: "spark", label: "Personalized plan", note: "Tailored to your case" },
    { icon: "leaf", label: "Holistic care", note: "Whole-person approach" },
  ],
  featuredImage: {
    src: "/images/services/sciatica/woman-park-relief.jpg",
    alt: "Woman enjoying in the park while the leaves all around her",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Sciatica Treatment",
    description:
      "Specialized, non-surgical treatments to relieve severe sciatic nerve pain radiating down the lower back and legs.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/sciatica/",
  },
  sections: [
    {
      kind: "prose",
      heading: "Sciatica Doctor in Geneva",
      paragraphs: [
        "At Genesis Integrative Medicine, we understand that living with sciatica can be debilitating and can affect every aspect of your life. Our sciatica doctor in Geneva offers a comprehensive, integrative approach to managing and alleviating sciatic nerve pain, empowering you to regain control of your health and well-being. By combining traditional medical treatments with complementary therapies, we aim to address the root causes of your pain and provide long-lasting relief.",
      ],
    },
    {
      kind: "prose",
      heading: "Understanding Sciatica",
      paragraphs: [
        "Sciatica is a condition characterized by pain that radiates along the path of the sciatic nerve, which extends from the lower back through the hips and down each leg. This pain can vary in intensity, from a mild ache to a sharp burning sensation. It often worsens with movement and can significantly impact your daily activities and quality of life, introducing the need for a good sciatica doctor in Geneva.",
      ],
    },
    {
      kind: "list",
      heading: "Common Causes of Sciatica",
      intro: "Sciatica can be caused by several factors, including the following:",
      items: [
        "Herniated Discs: When the soft inner material of a spinal disc pushes through the outer layer, it can compress the sciatic nerve, causing pain.",
        "Spinal Stenosis: Narrowing of the spinal canal can put pressure on the sciatic nerve, leading to pain and discomfort.",
        "Piriformis Syndrome: The piriformis muscle, located in the buttocks, can irritate or compress the sciatic nerve, resulting in pain.",
        "Degenerative Disc Disease: As spinal discs deteriorate over time, they may irritate or pinch the sciatic nerve.",
        "Injury or Trauma: Injuries to the lower back or pelvis can cause inflammation or pressure on the sciatic nerve.",
      ],
    },
    {
      kind: "benefits",
      heading: "Integrative Treatments for Sciatica",
      intro:
        "Our integrative approach to sciatica treatment includes a variety of therapies and techniques to provide comprehensive care and lasting relief.",
      subs: [
        {
          heading: "Chiropractic Care",
          paragraph:
            "Chiropractic adjustments can help realign the spine, reducing pressure on the sciatic nerve and alleviating pain. Our skilled chiropractors use gentle, targeted techniques to improve spinal alignment and promote healing.",
        },
        {
          heading: "Trigger Point Injections",
          paragraph:
            "Trigger Point Injections involve the precise injection of a small amount of anesthetic or saline directly into muscle knots, or \u201Ctrigger points,\u201D to relieve pain and tension. This therapy can help alleviate sciatica pain by relaxing tight muscles, reducing inflammation, and improving circulation, ultimately enhancing the body\u2019s natural healing processes.",
        },
        {
          heading: "Physical Therapy",
          paragraph:
            "Physical therapy is an essential component of our integrative approach to sciatica treatment. Our sciatica doctor in Geneva works with skilled physical therapists to develop personalized exercise programs that strengthen the muscles supporting the spine, improve flexibility, and reduce pain.",
        },
        {
          heading: "Shockwave Therapy (EPAT)",
          paragraph:
            "Shockwave Therapy (EPAT) uses high-energy acoustic waves to stimulate the healing of tissues, reduce inflammation, and improve circulation, all of which can alleviate sciatica pain. This non-invasive treatment targets the affected muscles and tissues, promoting relief and accelerating the body\u2019s natural healing processes.",
        },
        {
          heading: "Regenerative Medicine",
          paragraph:
            "Our clinic offers cutting-edge regenerative medicine therapies \u2013 such as platelet-rich plasma (PRP) and stem cell treatments \u2013 to promote healing and reduce inflammation in patients with sciatica. These innovative therapies can help repair damaged tissues and improve overall function.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The Benefits of Seeing a Sciatica Doctor in Geneva",
      paragraphs: [
        "Choosing our sciatica doctor in Geneva for your treatment offers numerous benefits beyond just pain relief. Our holistic approach ensures that all aspects of your health are considered, including physical, emotional, and mental well-being. This comprehensive care promotes healing and helps prevent future issues. Every patient is unique, and our sciatica doctor in Geneva creates personalized treatment plans tailored to your specific needs and goals, ensuring you receive the best possible care.",
        "Our integrative treatments focus on addressing the root cause of your pain, providing long-term relief and reducing the likelihood of future issues. We empower our patients with the knowledge and tools they need to take control of their health and make informed decisions about their treatment and lifestyle.",
      ],
    },
    {
      kind: "benefits",
      heading: "Why Choose Genesis Integrative Medicine?",
      intro:
        "At Genesis Integrative Medicine, we are dedicated to providing our patients with the highest quality care and support. Our experienced sciatica doctor in Geneva offers a comprehensive, integrative approach to treating sciatic nerve pain, ensuring you receive personalized care tailored to your unique needs and goals.",
      subs: [
        {
          heading: "Expert Team",
          paragraph:
            "Our team of healthcare professionals, including our Geneva sciatica doctor, is skilled in a variety of fields \u2013 including chiropractic care, acupuncture, physical therapy, and regenerative medicine \u2013 ensuring you receive the best care possible.",
        },
        {
          heading: "Innovative Treatments",
          paragraph:
            "Our clinic offers cutting-edge regenerative medicine therapies and integrative treatments to promote healing and provide lasting relief from sciatica pain.",
        },
        {
          heading: "Comprehensive Care",
          paragraph:
            "We address all aspects of your health, ensuring a holistic approach to sciatica treatment that promotes overall well-being and long-term relief.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Take the First Step toward Pain Relief",
      paragraphs: [
        "If you\u2019re ready to find relief from sciatica pain, our sciatica doctor in Geneva is here to help. Our integrative approach offers comprehensive care that addresses the root causes of your pain and promotes healing. Whether you\u2019ve been struggling with sciatica for years or are experiencing new symptoms, we invite you to explore our range of services and discover the benefits of integrative medicine.",
        "As Dr. Leazzo says, \u201CRather than treat every ill with a pill, consider the benefits of an integrative approach to achieving a happy, pain-free life\u201D",
        "Together, let\u2019s help you reach your full health potential!",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /services/chiropractic-care/                                                */
/* -------------------------------------------------------------------------- */

export const CHIROPRACTIC_CARE_CONTENT: ServicePageContent = {
  slug: "chiropractic-care",
  urlPath: "/services/chiropractic-care/",
  meta: {
    title: "Chiropractic Care in Geneva | Relieve Back and Neck Pain",
    description:
      "Restore your body's natural movement at Genesis Integrative Medicine. We provide chiropractic care in Geneva, IL, to help stop nagging neck pain today. Book now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/chiropractic-care/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-2img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Chiropractic Care" },
  ],
  hero: { kicker: "Genesis Integrative Medicine", h1: "Chiropractic Care" },
  highlights: [
    { icon: "spark", label: "Spinal alignment", note: "Restore natural motion" },
    { icon: "heart", label: "Pain relief", note: "Back, neck & joint" },
    { icon: "target", label: "Precise adjustments", note: "Gentle techniques" },
    { icon: "leaf", label: "Drug-free", note: "Natural healing" },
  ],
  featuredImage: {
    src: "/images/services/chiropractic-care.webp",
    alt: "Chiropractic care in Geneva, IL",
    width: 800,
    height: 800,
  },
  serviceJsonLd: {
    name: "Chiropractic Care",
    description:
      "Expert chiropractic adjustments and physical medicine to relieve pain, improve mobility, and support the nervous system.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/chiropractic-care/",
  },
  sections: [
    {
      kind: "prose",
      heading: "Top Chiropractic Doctor in Geneva, IL",
      paragraphs: [
        "If you want to get your body functioning and moving as it should, then chiropractic may be right for you. Adjustments aren\u2019t just for achy backs; chiropractic can jumpstart core systems like immune support and the nervous system.",
        "At Genesis Integrative Medicine in Geneva, IL, our team believes that maintaining a healthy spine is a cornerstone of a healthy life. When your spine is in proper alignment, it supports your body\u2019s ability to heal itself, alleviating pain and enhancing overall well-being. Don\u2019t let spine-related imbalances hold you back. Check out Genesis Integrative Medicine\u2019s comprehensive chiropractic services.",
      ],
    },
    {
      kind: "prose",
      heading: "Why a Healthy Spine Equals a Healthy Life",
      image: {
        src: "/images/services/chiropractic-care/back-therapy.jpg",
        alt: "Chiropractic back therapy session",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "Your spine is the central support structure of your body, connecting various parts and allowing you to stand, move, and function effectively. A healthy spine allows your nervous system to operate optimally, facilitating efficient communication between your brain and the rest of your body. Misalignments, or subluxations, can disrupt this communication, leading to pain, discomfort, and a host of other health issues.",
        "Chiropractic care corrects these misalignments, restores balance, and promotes health from the inside out.",
      ],
    },
    {
      kind: "benefits",
      heading: "Six Benefits of Chiropractic Care",
      intro:
        "Whether you\u2019ve never had a chiropractic session or you\u2019re looking to continue your chiropractic journey, there are so many benefits to consider. In many cases, chiropractic can unlock greater overall vitality.",
      subs: [
        {
          heading: "Pain Relief",
          paragraph:
            "Chiropractic adjustments can provide immediate relief from back, neck, and joint pain by addressing the root cause of discomfort rather than just masking symptoms. Unlike conventional treatments that often rely on painkillers, chiropractic care targets spinal misalignments and nerve interference. By realigning the vertebrae, chiropractic care alleviates pressure on the nerves, reduces inflammation, and restores proper function. This approach not only brings rapid pain relief but also helps prevent future episodes of discomfort.",
        },
        {
          heading: "Improved Mobility",
          paragraph:
            "Regular chiropractic care helps improve your range of motion and flexibility, making daily activities easier and more enjoyable. Misaligned joints and tight muscles can limit your ability to move freely. Chiropractic adjustments restore proper joint alignment and release muscle tension, allowing your body to move more naturally. Enhanced mobility means you can engage in physical activities with greater ease and confidence, whether it\u2019s playing sports, exercising, or simply performing everyday tasks.",
        },
        {
          heading: "Enhanced Nervous System Function",
          paragraph:
            "By aligning the spine, chiropractic care optimizes the nervous system, which can enhance overall bodily functions, including digestion and immune response. The nervous system controls and coordinates all the functions of your body. Spinal misalignments can interfere with nerve signals, leading to various health issues. Chiropractic adjustments ensure that your spine is properly aligned, facilitating smooth nerve communication. This can result in improved digestion, better immune function, increased energy levels, and overall enhanced well-being.",
        },
        {
          heading: "Stress Reduction",
          paragraph:
            "Chiropractic adjustments help release muscle tension, reducing stress and promoting relaxation throughout the body. Physical stress from poor posture, repetitive movements, or injuries can cause muscle tightness and tension. Chiropractic care relieves this tension by realigning the spine and relaxing the muscles. Additionally, reducing physical stress has a positive impact on mental and emotional well-being, helping you feel more relaxed and less anxious. Many patients report an overall sense of calm and improved sleep quality after chiropractic treatments.",
        },
        {
          heading: "Better Posture",
          paragraph:
            "Chiropractic care corrects spinal misalignments, encouraging better posture and preventing the long-term effects of poor alignment, such as chronic pain and fatigue. Poor posture can lead to a cascade of negative effects on your body, including back pain, headaches, and decreased lung capacity. Chiropractic adjustments realign the spine, allowing you to maintain a more upright and balanced posture. Over time, this can prevent the development of postural issues and reduce the strain on your muscles and joints, promoting long-term health and vitality.",
        },
        {
          heading: "Holistic Health",
          paragraph:
            "Chiropractic care promotes a holistic approach to health by addressing the interconnectedness of the body\u2019s systems, leading to overall improved wellness and vitality. Rather than focusing solely on symptoms, chiropractic care takes a comprehensive view of your health. By ensuring that your spine and nervous system function optimally, chiropractic care supports the body\u2019s innate ability to heal itself. This holistic approach can lead to improved energy levels, enhanced mental clarity, better sleep, and a greater sense of overall well-being.",
        },
      ],
    },
    {
      kind: "prose",
      heading:
        "Combining Chiropractic with Functional and Integrative Approaches",
      image: {
        src: "/images/services/chiropractic-care/chiropractic-session.jpg",
        alt: "Integrative chiropractic care in progress",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "At Genesis Integrative Medicine, we understand that true wellness requires a whole-person approach. That\u2019s why we combine chiropractic care with other functional and integrative therapies to provide comprehensive health solutions.",
        "Chiropractic care is a great complement to functional and integrative approaches, offering a personalized setting to target root causes of symptoms. By focusing on spinal alignment and nervous system optimization, chiropractic care addresses the structural foundation of the body, allowing other therapies to work more effectively.",
        "Functional and integrative medicine emphasize personalized nutrition, lifestyle modifications, and advanced therapies like PRP and cold laser treatments. When combined with chiropractic adjustments, these approaches can amplify healing, reduce inflammation, and improve bodily functions. This holistic integration ensures that patients receive comprehensive care, addressing not just symptoms but the underlying causes of health issues, leading to more sustainable and profound wellness outcomes.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Genesis Integrative Medicine Stands Out",
      paragraphs: [
        "We know you have options when it comes to chiropractic providers. However, Genesis Integrative Medicine stands out among other Geneva, IL, chiropractors because of our comprehensive suite of services. By blending chiropractic care with advanced therapies and personalized nutrition counseling, we offer a holistic approach to health that addresses the root causes of your concerns. Our goal is to help you achieve and maintain optimal wellness, allowing you to live a vibrant, pain-free life.",
      ],
    },
    {
      kind: "prose",
      heading: "Join Us on the Path to Wellness",
      paragraphs: [
        "Are you ready to experience the benefits of top chiropractic care combined with integrative therapies? Join the Genesis Integrative Medicine family and take the first step towards a healthier, more vibrant life. Contact us today to schedule your consultation and begin your journey to optimal wellness.",
        "Sign up now and discover the difference that a holistic approach to chiropractic care can make.",
      ],
    },
  ],
  faqHeading: "Common Questions About Chiropractic Care",
  faqs: [
    {
      question: "Why should I consider chiropractic care?",
      answer:
        "Chiropractic care focuses on your body\u2019s ability to heal itself. Using a variety of hands-on and technology-assisted techniques, Dr. Conroy, DC, can address existing issues, like Migraines, Neck pain, Joint pain, and Low back pain. Additionally, chiropractic care can be a beneficial tool for promoting good health and preventing the development of chronic medical conditions. Dr. Conroy, DC, works closely with the medical team at Genesis Integrative Medicine to improve your health with nutritional counseling, weight loss programs, and other available services in combination with chiropractic care.",
    },
    {
      question: "What can I expect during my initial chiropractic visit?",
      answer:
        "It\u2019s important for your treatment that Dr. Conroy, DC, learns more about your health and existing health conditions. He reviews your medical history and carefully listens to your symptoms and concerns during your initial appointment. Based on this information, Dr. Conroy, DC, creates a comprehensive plan of care that may include a variety of gentle, hands-on manipulations and movements. The goal is to realign your body to ensure all of your systems are functioning optimally.",
    },
    {
      question: "Will chiropractic adjustments hurt?",
      answer:
        "One of the biggest benefits of chiropractic care is the gentle nature of treatment. While many techniques involve quick thrusting motions, Dr. Conroy, DC, uses low-impact force to realign the vertebrae in your spine without pain or invasive procedures. During treatment, Dr. Conroy, DC, focuses on your spine health but may also perform manual adjustments or manipulations of other areas, including your hips and shoulders.",
    },
    {
      question: "How does chiropractic care prevent chronic conditions?",
      answer:
        "Chiropractic treatments aren\u2019t only beneficial for existing pain and other symptoms. Dr. Conroy, DC, can perform routine adjustments to help you maintain good health and prevent chronic conditions. When your spine is in proper alignment, the other systems of your body can function more efficiently, helping to prevent diseases and injuries that cause chronic pain and reduce your quality of life. Chiropractic care can resolve symptoms that interfere with your usual routine without needing medications or invasive procedures. This can go a long way to helping you stay active and healthy and reduce your dependence on unnecessary chemicals. Dr. Conroy, DC, recommends how often you should visit the office for adjustments as a preventive step in your health care plan. He customizes your treatment plan based on your health needs and overall goals. Find out how chiropractic care can address or prevent chronic pain and limited mobility by calling the office today to schedule a consultation or using the online booking tool.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /services/active-rehab-geneva/                                              */
/* -------------------------------------------------------------------------- */

export const ACTIVE_REHAB_CONTENT: ServicePageContent = {
  slug: "active-rehab-geneva",
  urlPath: "/services/active-rehab-geneva/",
  meta: {
    title: "Active Rehab in Geneva | Fix Your Posture and Move Better",
    description:
      "Boost your recovery speed at Genesis Integrative Medicine. We offer active rehab in Geneva, IL, to strengthen weak muscles and stop joint pain. Contact us now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/active-rehab-geneva/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Active Rehab in Geneva" },
  ],
  hero: {
    h1: "Active Rehab in Geneva",
    intro:
      "At Genesis Integrative Medicine, we understand that recovery is a journey that requires a holistic approach. That\u2019s why we offer active rehab in Geneva, a specialized program designed to help you regain strength, mobility, and function after an injury or surgery. Our dedicated team of professionals is committed to supporting you every step of the way, using evidence-based techniques that promote healing and enhance your overall well-being.",
  },
  highlights: [
    { icon: "bolt", label: "Post-injury", note: "Rapid, guided recovery" },
    { icon: "target", label: "Movement-first", note: "Restore natural motion" },
    { icon: "heart", label: "Whole-body", note: "Mind + body integration" },
    { icon: "shield", label: "Injury prevention", note: "Build resilience" },
  ],
  featuredImage: {
    src: "/images/services/active-rehab/physiotherapist-exam.jpg",
    alt: "person needing rehab in Geneva for their health",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Active Rehabilitation",
    description:
      "Customized active rehabilitation and physical therapy programs to strengthen muscles, improve flexibility, and support injury recovery.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/active-rehab-geneva/",
  },
  sections: [
    {
      kind: "prose",
      heading: "What Is Active Rehab?",
      image: {
        src: "/images/services/active-rehab/knee-injury.jpg",
        alt: "Patient consulting about a knee injury before beginning active rehab",
        width: 1200,
        height: 900,
      },
      paragraphs: [
        "Active rehab refers to a tailored rehabilitation program that emphasizes active participation in the recovery process. Unlike traditional passive rehabilitation methods, which may focus solely on rest and manual therapy, active rehab engages patients in therapeutic exercises and functional activities. This proactive approach not only aids in physical recovery but also empowers individuals to take control of their health and wellness.",
      ],
    },
    {
      kind: "list",
      heading: "The Importance of Active Rehabilitation",
      intro: "Active rehabilitation is essential for several reasons:",
      items: [
        "Promotes Faster Recovery: Engaging in targeted exercises helps stimulate blood flow and accelerate the healing process, enabling you to recover more quickly from injuries or surgeries.",
        "Restores Functionality: Active rehab focuses on improving strength, flexibility, and coordination, helping you regain the ability to perform daily activities with ease.",
        "Prevents Future Injuries: By strengthening the muscles and joints surrounding the injured area, active rehab reduces the risk of future injuries and promotes long-term health.",
        "Enhances Mental Well-Being: The active participation in your rehabilitation journey can boost motivation and improve overall mental health, fostering a positive mindset toward recovery.",
      ],
    },
    {
      kind: "subsections",
      heading: "Conditions Active Rehab Helps",
      intro:
        "Active rehab in Geneva is effective for a variety of conditions, including the following:",
      subs: [
        {
          heading: "1. Musculoskeletal Injuries",
          paragraphs: [
            "Active rehab is particularly beneficial for individuals recovering from musculoskeletal injuries such as the following:",
          ],
          items: [
            "Sprains and Strains: These common injuries can result from sports, exercise, or everyday activities. Active rehab helps strengthen the affected muscles and restore range of motion.",
            "Fractures: After a fracture has healed, active rehabilitation aids in regaining strength and function in the affected area.",
          ],
          outro:
            "Post-Surgery Recovery: Following surgical procedures, active rehab helps facilitate a smoother recovery, enabling you to regain mobility and strength.",
        },
        {
          heading: "2. Chronic Pain Conditions",
          paragraphs: [
            "Active rehab can also be beneficial for individuals dealing with chronic pain conditions, such as the following:",
          ],
          items: [
            "Osteoarthritis: Engaging in low-impact exercises can help alleviate pain and improve joint function for those with arthritis.",
            "Fibromyalgia: A structured active rehab program can help manage symptoms and improve overall quality of life.",
          ],
        },
        {
          heading: "3. Sports Injuries",
          paragraphs: [
            "Athletes often experience injuries that require focused rehabilitation to return to their sport. Active rehab in Geneva can assist with the following:",
          ],
          items: [
            "Tendonitis: Conditions such as Achilles tendonitis or patellar tendonitis can benefit from targeted strengthening exercises and activity modifications.",
          ],
          outro:
            "Rotator Cuff Injuries: Active rehab helps strengthen the muscles around the shoulder joint, promoting healing and restoring function.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Our Active Rehab Program",
      image: {
        src: "/images/services/active-rehab/athlete-knee-bandage.jpg",
        alt: "Athlete wrapping a knee bandage during rehab",
        width: 1200,
        height: 900,
      },
      paragraphs: [
        "At Genesis Integrative Medicine, our active rehab program in Geneva is meticulously designed to cater to your individual needs and aspirations. We understand that every recovery journey is unique, which is why our approach is tailored specifically for you.",
        "The process begins with a comprehensive assessment conducted by our skilled practitioners. During this initial evaluation, we will take a detailed look at your medical history, current physical condition, and any functional limitations you may be experiencing. This thorough assessment enables us to create a personalized rehabilitation plan that targets your specific requirements. Following the assessment, we will develop a customized treatment plan that encompasses several key components.",
        "First, we incorporate therapeutic exercises aimed at enhancing your strength, flexibility, and endurance. These exercises are thoughtfully selected and tailored to align with your particular condition and recovery goals.",
        "Additionally, our program emphasizes functional activities that mimic real-life movements you need to perform daily. This practical approach ensures that your rehabilitation is relevant and directly applicable to your everyday life. Moreover, we believe that understanding your condition is vital for effective recovery. Thus, our team will provide educational resources on your specific issue, proper body mechanics, and self-care strategies to empower you throughout your healing journey.",
        "Throughout your active rehab process, our team is dedicated to offering ongoing support and monitoring. We will continually assess your progress, making any necessary adjustments to your treatment plan to optimize your results. This consistent support helps ensure that you stay on track and motivated as you work toward your recovery goals.",
        "At Genesis Integrative Medicine, we adopt a holistic approach to your health and well-being. Our active rehab program in Geneva can seamlessly integrate with other services we offer.",
        "For instance, collaboration with our physical therapy specialists can significantly enhance your rehabilitation experience, providing a well-rounded approach to your care. Additionally, we recognize the importance of nutrition in the recovery process. Our nutrition specialists are available to offer guidance on dietary recommendations that support your healing journey. If you encounter pain during your rehabilitation, our integrative pain management options are designed to ensure your comfort while you strive toward recovery.",
      ],
    },
    {
      kind: "prose",
      heading: "The Benefits of Active Rehab",
      image: {
        src: "/images/services/active-rehab/woman-back-pain.jpg",
        alt: "Person managing back pain, considering active rehabilitation",
        width: 1200,
        height: 900,
      },
      paragraphs: [
        "Opting for active rehab in Geneva at Genesis Integrative Medicine comes with a wealth of benefits that can significantly enhance your recovery experience.",
        "First and foremost, we provide personalized care tailored specifically to your individual needs. Our active rehab program is designed to ensure that you receive the most effective treatment based on your unique condition, maximizing the potential for recovery.",
        "Additionally, actively engaging in your rehabilitation allows for enhanced recovery. By participating in the program, you can expect quicker recovery times and improved outcomes, helping you return to your daily activities sooner.",
        "Another vital aspect of our program is its ability to foster empowerment and motivation. We believe in equipping you with the tools and knowledge needed to take control of your recovery journey. As you see progress, you\u2019ll gain a sense of accomplishment that can inspire you to stay committed to your rehabilitation.",
        "Lastly, our focus on active rehabilitation brings long-term health benefits. By participating in these programs, you not only build strength and resilience but also reduce the risk of future injuries. This proactive approach promotes your overall well-being, setting you up for sustained health and vitality in the long run.",
      ],
    },
    {
      kind: "prose",
      heading: "Is Active Rehab Right for You?",
      paragraphs: [
        "If you are recovering from an injury, recovering from surgery, or managing a chronic pain condition, active rehab in Geneva may be an excellent option for you. Our team is here to assess your situation and determine the best course of action to support your recovery.",
      ],
    },
    {
      kind: "prose",
      heading: "Schedule Your Consultation Today!",
      paragraphs: [
        "Don\u2019t let pain or injury hold you back any longer. Contact Genesis Integrative Medicine today to schedule your consultation for active rehab in Geneva. Our compassionate team is dedicated to helping you regain your strength, mobility, and quality of life. Take the first step toward your recovery journey and experience the benefits of active rehabilitation today!",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* PRP Injections in Geneva                                                    */
/* -------------------------------------------------------------------------- */

export const PRP_CONTENT: ServicePageContent = {
  slug: "prp-injections-geneva",
  urlPath: "/services/prp-injections-geneva/",
  meta: {
    title: "PRP Injections in Geneva | Heal Your Injuries Faster",
    description:
      "Repair your damaged tissues with Genesis Integrative Medicine. We use PRP injections in Geneva, IL, to help your body heal naturally from pain. Book a visit.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/prp-injections-geneva/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-4img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "PRP Injections in Geneva" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "PRP Injections in Geneva",
    intro:
      "At Genesis Integrative Medicine, we are dedicated to helping our patients harness the body\u2019s natural healing power through cutting-edge regenerative therapies. One of our most sought-after treatments is PRP injections in Geneva, a minimally invasive and innovative procedure that uses the body\u2019s own platelets to accelerate healing and promote tissue regeneration. Whether you\u2019re dealing with chronic pain, recovering from sports injuries, or looking for a more youthful appearance, PRP injections in Geneva offer a safe, effective, and non-surgical solution.",
  },
  highlights: [
    { icon: "leaf", label: "Your own blood", note: "Natural biologics" },
    { icon: "clock", label: "Minimal downtime", note: "Back to life fast" },
    { icon: "shield", label: "Low risk", note: "No allergic reaction" },
    { icon: "target", label: "Versatile use", note: "Joints, tendons, skin" },
  ],
  featuredImage: {
    src: "/images/services/prp/prp-centrifuge.jpg",
    alt: "Preparation of PRP blood injection with vial of blood in centrifuge",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "PRP Injections",
    description:
      "Minimally invasive Platelet-Rich Plasma therapy that uses your body\u2019s own platelets to accelerate healing and promote tissue regeneration.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/prp-injections-geneva/",
  },
  sections: [
    {
      kind: "prose",
      heading: "What Are PRP Injections?",
      paragraphs: [
        "PRP, or Platelet-Rich Plasma, is a concentration of platelets derived from your own blood. Platelets are essential for healing, as they contain growth factors that play a crucial role in tissue repair and regeneration. In the PRP injections procedure, a small sample of your blood is drawn, and then it\u2019s processed in a centrifuge to isolate the platelets and plasma. This concentrated solution is then injected into the target area to stimulate and expedite the healing process.",
      ],
    },
    {
      kind: "prose",
      heading: "Benefits of PRP Injections in Geneva",
      paragraphs: [
        "Patients in Geneva and the surrounding areas choose PRP injections for a variety of compelling reasons related to their health and wellness. One of the key advantages of PRP therapy is that it promotes natural healing. By using your body\u2019s own healing mechanisms, PRP injections can reduce the need for medications or surgical procedures, offering a more organic path to recovery.",
        "Another benefit of PRP injections is that they are minimally invasive. The procedure involves a simple blood draw followed by targeted injections, making it a convenient and relatively painless option for many patients. Additionally, PRP therapy is considered safe with low risks. Since the treatment uses your own blood, there is minimal chance of infection or allergic reaction.",
        "Finally, PRP injections are highly versatile, making them effective for a wide range of conditions. Whether you\u2019re dealing with joint pain, recovering from a sports injury, or addressing cosmetic concerns such as hair loss or wrinkles, PRP therapy offers a flexible and natural solution tailored to your individual needs.",
      ],
    },
    {
      kind: "prose",
      heading: "Conditions Treated by PRP Injections in Geneva",
      paragraphs: [
        "PRP injections in Geneva are highly versatile and can effectively treat a wide range of musculoskeletal and cosmetic concerns. Whether you\u2019re an athlete recovering from a sports injury or someone managing age-related conditions, PRP therapy provides an effective and natural treatment option tailored to your needs.",
        "For individuals experiencing joint pain, PRP injections are particularly beneficial. They can be used to treat conditions such as osteoarthritis in the knees, hips, and shoulders by reducing inflammation and promoting the repair of damaged cartilage. This makes PRP an excellent option for those seeking relief from chronic joint discomfort without resorting to surgery.",
        "Athletes and active individuals suffering from chronic tendon injuries, such as tennis elbow or Achilles tendinitis, can also benefit from PRP injections. The treatment helps accelerate the healing process, reducing downtime and promoting a faster return to normal activity. Similarly, PRP therapy is effective in treating muscle injuries, whether caused by sports or overuse, by aiding in the repair of damaged muscle tissue.",
        "Beyond musculoskeletal issues, PRP is also gaining popularity as a solution for hair loss. Both men and women experiencing pattern baldness can see improvements in hair growth and scalp health with PRP therapy, as it stimulates hair follicles and promotes natural regrowth. Additionally, for those seeking non-invasive cosmetic treatments, PRP offers a natural option for skin rejuvenation. It can help reduce wrinkles, fine lines, and sagging skin, giving patients a more youthful and refreshed appearance without the need for more aggressive procedures.",
      ],
    },
    {
      kind: "prose",
      heading: "How PRP Injections Work",
      paragraphs: [
        "The process of PRP injections in Geneva is straightforward yet remarkably effective. It begins with a simple blood draw, in which a small amount of blood is taken from your arm. This sample is the foundation for creating the platelet-rich plasma that will fuel the healing process.",
        "Next, the blood is placed in a centrifuge, a device that spins at high speed to separate the platelets from the other components of your blood. This step is crucial, as it isolates the platelets, which contain the essential growth factors responsible for tissue repair and regeneration.",
        "Once the platelets are separated, they are concentrated to form a potent solution rich in healing growth factors. This concentrated PRP solution is then ready for the final step.",
        "In the last phase of the procedure, the PRP solution is injected directly into the area that requires treatment. Whether it\u2019s a joint, tendon, or skin, the injection delivers these growth factors to the specific site, promoting faster healing and regeneration. This process is minimally invasive, making it an appealing option for many patients.",
      ],
    },
    {
      kind: "prose",
      heading: "What to Expect During and after the Procedure",
      paragraphs: [
        "When you come in for PRP injections in Geneva, you\u2019ll find that the procedure is both quick and relatively painless. Most appointments last less than an hour, including the time needed for preparation. This makes PRP therapy a convenient option for those with busy schedules, allowing you to receive treatment and return to your day with minimal disruption.",
        "During the injection itself, you may experience slight discomfort, but most patients find it to be well-tolerated. The sensation is typically brief, and any discomfort is mild compared to more invasive procedures.",
        "After the procedure, it\u2019s normal to experience some minor swelling, bruising, or soreness at the injection site. These side effects are usually mild and subside within a few days. In some cases, depending on the condition being treated, multiple sessions may be necessary to achieve the best possible results. Each session builds on the previous one, promoting gradual and sustained healing.",
      ],
    },
    {
      kind: "prose",
      heading: "Recovery and Results",
      image: {
        src: "/images/services/prp/patient-active.jpg",
        alt: "Active patient back to work after PRP therapy",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "One of the key advantages of PRP injections in Geneva is the minimal downtime involved. After the procedure, most patients can return to their normal activities immediately, making it a convenient treatment option for those with busy lives. However, depending on the area treated, your provider may advise you to avoid strenuous exercise or activities for a few days to allow the body to begin the healing process undisturbed.",
        "As for results, you may start noticing improvements in your symptoms within a few weeks after your initial treatment. This gradual improvement is a sign that the PRP is beginning to stimulate healing in the targeted area. The benefits of PRP therapy continue to build over time, and you can expect ongoing improvements in the months that follow as your body\u2019s natural healing mechanisms are enhanced by the treatment. This extended period of recovery and regeneration is one of the reasons PRP is such a powerful and lasting option for many patients.",
      ],
    },
    {
      kind: "prose",
      heading:
        "Why Choose Genesis Integrative Medicine for PRP Injections in Geneva?",
      paragraphs: [
        "At Genesis Integrative Medicine, our team of skilled practitioners is committed to delivering the highest standard of care to our patients. With a focus on regenerative and functional medicine, we create personalized, holistic treatment plans designed to meet each individual\u2019s unique needs. There are several compelling reasons to choose us for PRP injections in Geneva.",
        "First and foremost, our providers are highly trained in regenerative medicine and possess extensive experience in administering PRP treatments. This expertise allows us to ensure that you receive the most effective care possible.",
        "We also prioritize customized treatments. We take the time to thoroughly understand your specific condition and personal goals, enabling us to craft a treatment plan that maximizes your results and enhances your overall well-being.",
        "In addition, we utilize state-of-the-art technology to process and deliver PRP injections. This commitment to using the latest advancements ensures that you receive the highest quality and most effective treatment available, further enhancing the outcomes of your PRP therapy.",
      ],
    },
    {
      kind: "list",
      heading: "Is PRP Right for You?",
      intro:
        "PRP injections in Geneva are a versatile and effective treatment for a variety of conditions, but they may not be the best option for everyone. During your consultation, our providers will review your medical history and current symptoms to determine whether PRP is right for you.",
      items: [
        "Suffer from joint pain, tendon injuries, or muscle injuries.",
        "Are looking for a non-surgical solution to reduce wrinkles or hair loss.",
        "Want a natural, low-risk option for healing and tissue regeneration.",
      ],
      outro:
        "However, PRP is not recommended for individuals with certain health conditions, such as active infections, cancer, or blood disorders.",
    },
    {
      kind: "prose",
      heading: "Book Your Appointment for PRP Injections in Geneva",
      paragraphs: [
        "If you\u2019re ready to take the next step in your healing journey, contact Genesis Integrative Medicine today to learn more about PRP injections in Geneva. Our team is here to answer any questions you may have and to help you achieve your health and wellness goals through cutting-edge, regenerative treatments. Don\u2019t let pain or aging hold you back\u2014experience the benefits of PRP injections in Geneva and take control of your health naturally.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Medical Weight Loss / Peptide                                               */
/* -------------------------------------------------------------------------- */

export const PEPTIDE_WEIGHT_LOSS_CONTENT: ServicePageContent = {
  slug: "peptide-weight-loss",
  urlPath: "/services/peptide-weight-loss/",
  meta: {
    title: "Medical Weight Loss in Geneva | Reach Your Healthy Goals",
    description:
      "Reset your metabolism with Genesis Integrative Medicine. Try our medical weight loss program in Geneva, IL, to feel more energy every day. Book a consult now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/peptide-weight-loss/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-8img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Medical Weight Loss" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Medical Weight Loss Program",
    subtitle: "Medical Weight Loss in Geneva",
    intro:
      "Welcome to Genesis Integrative Medicine, where we redefine the journey to a healthier, more vibrant you. Our cutting-edge services cater to those seeking effective and non-invasive weight loss treatments. Explore the transformative power of our Lipotropic Peptides and Lipo Laser Therapy. Visit Genesis Integrative Medicine today!",
  },
  highlights: [
    { icon: "target", label: "Metabolism reset", note: "Not just speed-up" },
    { icon: "heart", label: "No hormones", note: "No side effects" },
    { icon: "leaf", label: "Doctor-directed", note: "Medical supervision" },
    { icon: "bolt", label: "Long-term results", note: "Keep the weight off" },
  ],
  featuredImage: {
    src: "/images/services/peptide/lipotropic-peptides.webp",
    alt: "Lipotropic peptides for medical weight loss program",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Medical Weight Loss Program",
    description:
      "A doctor-directed medical weight loss program combining Lipotropic Peptides and Lipo Laser Therapy to reset metabolism and reduce stubborn fat naturally.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/peptide-weight-loss/",
  },
  sections: [
    {
      kind: "prose",
      heading: "Lipotropic Peptides",
      paragraphs: [
        "Lipotropic compounds are a combination of amino acids, vitamins, and minerals that help metabolize fat in the body. Lipotropic peptides can speed up the process of fat breakdown and enhance your weight loss results.",
      ],
    },
    {
      kind: "prose",
      heading: "Lipo Laser",
      paragraphs: [
        "Lipo Laser is a safe and non-invasive form of body sculpting. It reduces inches from your body by eliminating fat cells. Treatments target specific parts of the body by using advance laser technology that is virtually painless with little to no down time.",
      ],
    },
    {
      kind: "prose",
      heading: "Lipo Laser Therapy",
      image: {
        src: "/images/services/peptide/lipo-laser.webp",
        alt: "Lipo laser therapy for body contouring",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "Unleash the potential of non surgical Lipo Laser Therapy to redefine your weight loss journey. This non-invasive approach leverages laser energy to penetrate deep into adipose tissue, promoting the release of stored fat. Witness the magic unfold as your body naturally eliminates these fat cells, leaving you with noticeable and lasting results.",
      ],
    },
    {
      kind: "prose",
      heading: "About Our Medical Weight Loss Program",
      paragraphs: [
        "Losing weight can be frustrating, especially when you aren\u2019t seeing the results you\u2019re hoping for. Even if you are eating a healthy diet and working out for hours on end, these weight loss solutions may not be enough for you to lose those stubborn pounds and shave off those extra inches. In this case, you may want to seek an alternative solution and start adding peptides to help boost your weight loss success. At Genesis Integrative Medicine we provide the scientific approach to weight loss.",
        "What makes our medical weight loss program different is that we address the metabolism by resetting it and not speeding it up as do most other programs. Our main focus is to create a healthy environment in the body for your cells to thrive, thereby \u2018hearing\u2019 the hormones your body naturally creates.",
        "Our medical weight loss program combines a series of proprietary products which over the course of your customized program RESET YOUR METABOLISM. These products are safe and natural and have not shown to cause any side effects. Dr. Conroy and the medical experts at Genesis Integrative Medicine are dedicated to each and everyone of their patients. Your dedicated weight loss team will work side by side you and lifestyle, customizing a weight loss plan to fit your goals and your timeframe.",
      ],
    },
    {
      kind: "prose",
      heading: "Is Peptide Therapy Safe?",
      paragraphs: [
        "Peptide therapy is as a safe and effective way to accellerate weight loss. Many of our patients have found that it helps them lose those last stubborn pounds and inches that have refused to budge despite diet and exercise (no hitting a weight-loss wall with this therapy).",
        "Peptides are short strings of amino acids linked together, which act as messengers, instructing cells how to function properly and enhance different functions within the cell. This includes helping your body to use it\u2019s own weight loss tools and resources that were otherwise sluggish or unresponsive. Peptides are easy to use so compliance is high. The result is melting off those extra pounds and inches!",
      ],
    },
    {
      kind: "prose",
      heading: "Discover the Power of Lipotropic Peptides",
      paragraphs: [
        "Enhance your weight loss journey today! These specialized peptides play a key role in supporting the breakdown and removal of fat from the body. Our tailored approach incorporates Lipotropic Peptides to optimize your body\u2019s natural fat-burning processes, leading to sustainable and long-lasting results.",
      ],
    },
    {
      kind: "list",
      heading:
        "Our medical weight loss program can help you achieve your health and wellness goals especially if:",
      items: [
        "Diets aren\u2019t enough",
        "Your exercise program hasn\u2019t worked",
        "You are feeling frustrated",
        "You have a slow metabolis",
      ],
      outro:
        "You are ready to take your lifestyle changes to the next level with the help of Peptide weight loss treatments and a customized medical weight loss program today!",
    },
    {
      kind: "prose",
      heading:
        "Lipotropic Peptides or Semaglutide? The Difference is Clear",
      paragraphs: [
        "Lipotropic peptides offer several advantages over Semaglutide for individuals seeking weight loss solutions. Unlike Semaglutide, which works primarily by regulating blood sugar and appetite through hormonal pathways, lipotropic peptides focus on enhancing the body\u2019s natural fat-burning processes. These peptides help stimulate metabolism, improve liver function, and promote the breakdown of stored fat, particularly in stubborn areas.",
        "Semaglutide also comes with more side effects. Potential side effects such as nausea, vomiting, and gastrointestinal discomfort, which can disrupt quality of life. Long-term safety is another area of debate, as data on its effects beyond several years is limited. Semaglutide injection may increase the risk that you will develop tumors of the thyroid gland, including medullary thyroid carcinoma (MTC; a type of thyroid cancer). Laboratory animals who were given semaglutide developed tumors, but it is not known if this medication increases the risk of tumors in humans.",
        "At Genesis Integrative Medicine in Geneva, we\u2019ve found lipotropic peptides to be the superior option.",
      ],
    },
    {
      kind: "list",
      heading: "Why Clients Love Our Program",
      items: [
        "No pills, bars or shakes",
        "No hormones",
        "No exercise",
        "No side-effects",
        "Doctor-directed",
        "Keep the weight off long-tern",
      ],
    },
    {
      kind: "prose",
      heading: "invisa-RED\u2122 Laser Technology",
      paragraphs: [
        "invisa-RED\u2122 is the latest innovation in body slimming laser lipo technology that can be used to shorten the time it takes to reach your desired weight loss goal. Treatments are safe, non-invasive alternative to traditional fat reduction procedures. Each session removes up to an inch of unwanted fat from any problem area. Treatments are ideal for both men and women, eliminating fat in areas that are unresponsive to diet and exercise.",
      ],
    },
    {
      kind: "subsections",
      heading: "Program Benefits",
      subs: [
        {
          heading: "Weight Loss",
          items: [
            "Individualized Programs",
            "Nutrition Modification and Education",
            "Increase Metabolism",
            "Lowers Cortisol Level",
            "Lifestyle Modification Counseling",
          ],
        },
        {
          heading: "Body Contouring And Aesthetics",
          items: [
            "Cellulite Elimination",
            "Stretch mark-Fading",
            "Wrinkle Reduction",
            "Increase Collagen Production",
            "Tightens and Rejuvenates Skin",
            "Improved Circulation",
            "Area Specification Fat Reduction",
          ],
        },
      ],
    },
    {
      kind: "list",
      heading: "The Following Areas Can Be Treated",
      items: [
        "Chin",
        "Arms",
        "Waist",
        "Hips",
        "Back",
        "Buttocks",
        "Legs (Front/Back)",
        "Chest (men)",
      ],
    },
    {
      kind: "prose",
      heading: "The Easiest Way To Lose Weight",
      paragraphs: [
        "Our mission is to revitalize your health, regain your confidence, and make your vision a reality. Our patients results speak for themselves thanks to our medical professionals who offer the most innovative programs in weight loss backed by science. All our individualized programs are safe, painless, and extremely effective in providing real weight loss results.",
      ],
    },
    {
      kind: "prose",
      heading:
        "Your transformation begins with your first visit to Genesis Integrative Medicine Clinic.",
      paragraphs: [
        "Call us today to schedule a FREE consultation with one of our specialists!",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Regenerative Medicine                                                       */
/* -------------------------------------------------------------------------- */

export const REGENERATIVE_MEDICINE_CONTENT: ServicePageContent = {
  slug: "regenerative-medicine",
  urlPath: "/services/regenerative-medicine/",
  meta: {
    title: "Regenerative Medicine | Restore Mobility with New Therapy",
    description:
      "Avoid risky surgeries by visiting Genesis Integrative Medicine. We offer regenerative medicine treatment in Geneva, IL, for arthritis relief. Schedule today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/regenerative-medicine/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-5img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Regenerative Medicine" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Regenerative Medicine in Geneva, IL",
    intro:
      "At Genesis Integrative Medicine in Geneva, IL, we specialize in regenerative medicine, a cutting-edge approach to healing that harnesses the body\u2019s natural ability to repair itself. Unlike conventional treatments that merely mask symptoms, regenerative medicine aims to address the root cause of pain and injuries, offering a more natural and long-lasting solution. Every one of our services is aimed at expanding the body\u2019s capacity to heal itself.",
  },
  highlights: [
    { icon: "spark", label: "HCT/Ps + PRP", note: "Advanced biologics" },
    { icon: "target", label: "Root-cause", note: "Not just symptoms" },
    { icon: "clock", label: "Results in 4\u20136 wks", note: "Build over months" },
    { icon: "shield", label: "Surgery alternative", note: "Non-invasive path" },
  ],
  featuredImage: {
    src: "/images/services/regenerative-medicine.webp",
    alt: "Regenerative medicine therapy at Genesis Integrative Medicine",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Regenerative Medicine",
    description:
      "Regenerative therapies including human cellular tissue products (HCT/Ps) and Platelet-Rich Plasma (PRP) to stimulate tissue repair, reduce inflammation, and promote healing.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/regenerative-medicine/",
  },
  sections: [
    {
      kind: "prose",
      heading: "Understanding the Body\u2019s Natural Healing Process",
      paragraphs: [
        "The human body possesses an incredible capacity for self-repair. When you suffer an injury, your body initiates a complex healing process, which includes inflammation, tissue regeneration, and remodeling. However, various factors such as chronic conditions, aging, and severe injuries can impede these natural processes, leading to prolonged pain and dysfunction.",
        "Regenerative medicine works by enhancing and accelerating the body\u2019s innate healing mechanisms. By using advanced therapies using human cellular tissue products (HCT/Ps) and Platelet-Rich Plasma (PRP), we can stimulate tissue repair, reduce inflammation, and promote the regeneration of damaged tissues, offering relief from chronic pain and enhancing overall recovery.",
      ],
    },
    {
      kind: "subsections",
      heading: "Conditions That Respond Well to Regenerative Medicine",
      intro:
        "Regenerative medicine is particularly effective in treating a wide range of conditions, including:",
      subs: [
        {
          heading: "Knee Pain",
          paragraphs: [
            "Knee pain can arise from various sources, including arthritis, injuries, and general wear and tear from daily activities or sports. Osteoarthritis, a common form of arthritis, results from the breakdown of cartilage that cushions the ends of bones in the joints, leading to pain, swelling, and decreased mobility. Injuries such as meniscal tears or ligament damage can also contribute to knee pain. Regenerative therapies, such as human cellular tissue products (HCT/Ps) and Platelet-Rich Plasma (PRP), offer a promising solution by promoting the repair of damaged cartilage.",
          ],
        },
        {
          heading: "Back Pain",
          paragraphs: [
            "Chronic back pain can stem from various conditions, including degenerative disc disease, spinal injuries, or muscle strain. Regenerative treatments in Geneva are effective in promoting tissue repair and reducing inflammation in the spine. These therapies can help regenerate damaged discs, alleviate pain, and improve overall spinal health, offering a non-surgical alternative for long-term relief.",
          ],
        },
        {
          heading: "Headaches",
          paragraphs: [
            "Chronic headaches and migraines can significantly impact an individual\u2019s quality of life. They can be triggered by various factors, including cervical spine problems, muscle tension, or even stress. In these cases, regenerative medicine addresses the underlying issues contributing to these headaches. By addressing the root causes, regenerative medicine provides long-term relief for chronic headache sufferers.",
          ],
        },
        {
          heading: "Athlete Recovery",
          paragraphs: [
            "Athletes often face injuries that can hinder their performance and prolong recovery times. Common sports injuries include ligament tears, tendonitis, and muscle strains. Regenerative therapies, such as human cellular tissue products (HCT/Ps) and PRP, can significantly benefit athletes by speeding up the healing process and reducing downtime. These treatments enhance tissue regeneration, decrease inflammation, and promote faster recovery of injured muscles, tendons, and ligaments.",
          ],
        },
        {
          heading: "Arthritis",
          paragraphs: [
            "Arthritis is known for inflammation and degeneration of the joints. Osteoarthritis and rheumatoid arthritis are two common types. Osteoarthritis occurs when the protective cartilage on the ends of bones wears down over time, leading to pain, stiffness, and reduced joint mobility. Rheumatoid arthritis, an autoimmune disorder, causes the immune system to attack the joints, resulting in inflammation and joint damage. Regenerative treatments target the damaged joint tissues, promoting repair and reducing inflammation. These therapies can significantly relieve pain, improve joint function, and enhance the quality of life for patients in Geneva. By addressing the underlying causes of arthritis, regenerative medicine offers a long-term solution for managing this chronic condition.",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading:
        "Experience the Benefits of Regenerative Medicine at Genesis Integrative Medicine",
      image: {
        src: "/images/services/regenerative-medicine/lab-vials.jpg",
        alt: "Regenerative medicine lab vials and biologic samples",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "Our clinic uses cells based on human cells, including bone marrow and adipose (fat) tissue. These cells have the unique ability to differentiate into various cell types, such as bone, cartilage, and muscle cells. When used in regenerative medicine, human cells are harvested, concentrated, and injected into the damaged area, where they help repair and regenerate tissues, reduce inflammation, and modulate the immune response, leading to improved function and pain relief.",
      ],
    },
    {
      kind: "prose",
      heading: "PRP (Platelet-Rich Plasma)",
      image: {
        src: "/images/services/regenerative-medicine/knee-therapy.jpg",
        alt: "Regenerative knee therapy session",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "Platelet-Rich Plasma (PRP) therapy is another powerful regenerative treatment offered at our Geneva clinic. The PRP process involves drawing a small amount of the patient\u2019s blood, which is then placed in a centrifuge to separate the platelet-rich plasma from other blood components. This concentrated PRP, rich in growth factors and healing proteins, is then injected into the injured or painful area.",
        "PRP therapy enhances the body\u2019s natural healing process by stimulating tissue repair, reducing inflammation, and promoting new cell growth, making it an effective treatment for various musculoskeletal conditions.",
      ],
    },
    {
      kind: "prose",
      heading:
        "Experience the Benefits of Regenerative Medicine at Genesis Integrative Medicine",
      paragraphs: [
        "If you\u2019re struggling with chronic pain or recovering from an injury, regenerative medicine at Genesis Integrative Medicine in Geneva, IL, offers a natural and effective solution. Our expert team is dedicated to helping you achieve optimal health and wellness through advanced regenerative therapies. Don\u2019t let pain hold you back any longer\u2014schedule a consultation with us today and discover how regenerative medicine can transform your life.",
        "Experience the future of healing with Genesis Integrative Medicine. Contact us now to learn more and take the first step towards a pain-free, healthier you.",
      ],
    },
  ],
  faqHeading: "Regenerative Medicine FAQ",
  faqs: [
    {
      question: "What\u2019s involved in regenerative medicine?",
      answer:
        "Your Genesis Integrative Medicine provider injects into the area of injury or disease based on a customized treatment plan to address your situation. During your in-office treatment, your Genesis Integrative Medicine provider can use a topical anesthetic to numb the areas of injection and keep you comfortable. Depending on the type and location of your injury, you may need multiple injections to enjoy the full benefit.",
    },
    {
      question: "How long does it take to see results from regenerative medicine?",
      answer:
        "Regenerative medicine can be effective in alleviating pain and increasing your functionality, but it doesn\u2019t work quickly. It takes time for new cells to develop and replace the old ones. As new tissue continues to grow, you can begin to see results within 4-6 weeks after treatment, results that continue to improve over the next several months. Regenerative medicine may help provide long-term relief of chronic pain and revitalize your overall health and functionality, with results sometimes lasting for years. Regenerative medicine also can reduce the need for surgery, allowing your body to heal naturally from the inside out.",
    },
    {
      question: "What are the benefits of regenerative medicine?",
      answer:
        "Regenerative medicine techniques offer an alternative to surgery, helping you to enjoy increased functionality without invasive or traumatic procedures. The benefits of regenerative medicine become more noticeable over time as new cells develop. For many, regenerative medicine can reduce dependence on pain medications while providing long-term relief of pain and inflammation associated with chronic medical conditions. Find out how regenerative medicine can work for your pain and dysfunction by calling the office or booking a consultation online today.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Cold Laser Therapy                                                          */
/* -------------------------------------------------------------------------- */

export const COLD_LASER_CONTENT: ServicePageContent = {
  slug: "cold-laser",
  urlPath: "/services/cold-laser/",
  meta: {
    title: "Cold Laser Therapy in Geneva | Non-Invasive Pain Relief",
    description:
      "Stimulate your body\u2019s healing with Genesis Integrative Medicine. Get cold laser therapy in Geneva, IL, for arthritis or sports injuries. Contact us for help.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/cold-laser/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-6img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Cold Laser Therapy" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Cold Laser Therapy",
    intro:
      "Welcome to Genesis Integrative Medicine, where cutting-edge treatments meet compassionate care. Discover the transformative power of Cold Laser Therapy, a non-invasive and innovative approach to pain management that goes beyond traditional methods.",
  },
  highlights: [
    { icon: "bolt", label: "Light energy", note: "Stimulates healing" },
    { icon: "clock", label: "Fast sessions", note: "Painless treatment" },
    { icon: "shield", label: "No incisions", note: "Zero downtime" },
    { icon: "target", label: "Chronic pain", note: "Joint, back, neck" },
  ],
  featuredImage: {
    src: "/images/services/cold-laser.webp",
    alt: "Cold laser therapy treatment session at Genesis Integrative Medicine",
    width: 1200,
    height: 800,
  },
  video: {
    provider: "vimeo",
    id: "281680594",
    title: "Cold Laser Therapy at Genesis Integrative Medicine",
    kicker: "See it in action",
    heading: "Cold Laser Therapy demonstration",
  },
  serviceJsonLd: {
    name: "Cold Laser Therapy",
    description:
      "Non-invasive low-level laser light therapy that stimulates the body\u2019s natural healing to relieve chronic pain, reduce inflammation, and improve mobility.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/cold-laser/",
  },
  sections: [
    {
      kind: "prose",
      paragraphs: [
        "Get the benefits of the Healing Power of Cold Laser Therapy only with the best \u2013 Genesis Integrative Medicine, a leading cold laser chiropractic treatment center in Illinois.",
        "At Genesis Integrative Medicine, we specialize in Cold Laser Therapy for pain, a revolutionary treatment that harnesses the healing potential of low-level laser light. Whether you\u2019re seeking relief from chronic pain or recovering from an injury, our experienced team is dedicated to guiding you toward optimal wellness.",
      ],
    },
    {
      kind: "benefits",
      heading: "Why Choose Cold Laser Therapy?",
      subs: [
        {
          heading: "Pain Relief Redefined",
          paragraph:
            "Experience the next level of pain management with Cold Laser Treatment. Our state-of-the-art technology targets pain at its source, providing relief without invasive procedures or medications.",
        },
        {
          heading: "Tailored Treatment Plans",
          paragraph:
            "Every individual is unique, and so is their pain. Our expert practitioners create personalized treatment plans, ensuring you receive the care that aligns with your needs and goals.",
        },
        {
          heading: "Chiropractic Excellence",
          paragraph:
            "Our Cold Laser Chiropractic Treatment combines the expertise of our chiropractors with the advanced healing capabilities of cold laser technology.",
        },
        {
          heading: "Knee Rejuvenation",
          paragraph:
            "Discover a non-surgical solution for knee pain with our Cold Laser Knee Treatment. Say goodbye to discomfort and hello to improved mobility as we target inflammation and promote tissue repair.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Your Journey to Wellness Starts Here",
      image: {
        src: "/images/services/cold-laser/laser-therapy.jpg",
        alt: "Cold laser therapy session in progress",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "At Genesis Integrative Medicine, we believe in empowering our patients to live their best lives. Cold Laser Therapy for pain is not just a treatment; it\u2019s a journey toward a pain-free and vibrant future. Join us as we redefine healthcare and embrace a holistic approach to healing.",
        "Ready to experience the benefits of Cold Laser Treatment for yourself? Contact us today to schedule your consultation and take the first step towards a life of vitality and well-being. Your journey to optimal health begins here at Genesis Integrative Medicine.",
      ],
    },
  ],
  faqHeading: "Cold Laser Q & A",
  faqs: [
    {
      question: "What is cold laser therapy?",
      answer:
        "Cold laser therapy uses light energy to improve your natural healing process. This safe, effective therapy can alleviate many types of chronic pain that affect your neck, heels, and shoulders, or pain that persists after surgery. Additionally, this noninvasive treatment can improve your overall functionality and help you recover after an injury. Following a cold laser therapy plan, the team at Genesis Integrative Medicine can help you achieve goals like faster recovery time, increased range of motion, enhanced cellular function, regeneration of damaged tissue, and reduced pain and inflammation. Not only can cold laser therapy immediately address pain and mobility issues, but the results can last for the long term. In some cases, laser treatments can delay or prevent the need for surgery.",
    },
    {
      question: "What can I expect during cold laser therapy sessions?",
      answer:
        "Your Genesis Integrative Medicine provider uses a hand-held device to deliver specific wavelengths of light energy through the skin and into the area of injury. The deep layers of tissue beneath the skin\u2019s surface absorb the light energy, triggering the body\u2019s natural healing response to repair damaged tissue and reduce existing inflammation. As a result, your pain decreases while your mobility increases. Treatment is fast and painless, requiring no incisions or other invasive procedures. This reduces your risk for surgical complications, such as infections or reactions to anesthesia.",
    },
    {
      question: "Am I a good candidate for cold laser therapy?",
      answer:
        "To determine if you\u2019re a good candidate for cold laser therapy, your Genesis Integrative Medicine provider reviews your medical history and performs a physical exam. Depending on the nature of your injury or your medical condition, your provider may recommend cold laser therapy, as well as other therapeutic techniques, like physical therapy, chiropractic care, or regenerative medicine. Your Genesis Integrative Medicine provider also creates a timeline for additional treatments to ensure you receive the maximum benefit. They follow your progress and how well cold laser therapy is relieving your symptoms throughout your treatment. Learn more about the benefits of cold laser therapy for chronic pain and inflammation by calling the office or using the online booking feature today.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Convenience lookup by slug                                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Peripheral Neuropathy                                                       */
/* -------------------------------------------------------------------------- */

export const PERIPHERAL_NEUROPATHY_CONTENT: ServicePageContent = {
  slug: "peripheral-neuropathy-treatment",
  urlPath: "/services/peripheral-neuropathy-treatment/",
  meta: {
    title: "Peripheral Neuropathy in Geneva | Advanced Nerve Care",
    description:
      "Find a real solution for nerve damage at Genesis Integrative Medicine. We treat peripheral neuropathy in Geneva, IL, without heavy drugs. Book a consult now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/peripheral-neuropathy-treatment/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/Peripheral-Neuropathy-Treatment-img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Peripheral Neuropathy" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Peripheral Neuropathy",
  },
  highlights: [
    { icon: "target", label: "Root-cause", note: "Not just symptoms" },
    { icon: "heart", label: "At-home protocols", note: "Comfort of your home" },
    { icon: "shield", label: "Drug-free", note: "Avoid surgery" },
    { icon: "spark", label: "State-of-the-art", note: "Latest equipment" },
  ],
  featuredImage: {
    src: "/images/services/peripheral-neuropathy.webp",
    alt: "Peripheral neuropathy treatment at Genesis Integrative Medicine",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Peripheral Neuropathy Treatment",
    description:
      "Non-invasive, root-cause treatment program for peripheral neuropathy using state-of-the-art protocols to relieve nerve pain, tingling, and numbness without heavy medications.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/peripheral-neuropathy-treatment/",
  },
  sections: [
    {
      kind: "prose",
      heading: "Peripheral Neuropathy Q & A",
      image: {
        src: "/images/services/peripheral-neuropathy/foot-therapy.jpg",
        alt: "Peripheral neuropathy foot therapy consultation",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "Peripheral neuropathy, a result of damage to the nerves located outside of the brain and spinal cord (peripheral nerves), often causes weakness, numbness, and pain, usually in the hands and feet.",
        "More than 20 million people in the United States have been estimated to have some form of peripheral neuropathy, but this figure may be significantly higher as not all people with the symptoms of peripheral neuropathy are tested for the disease. Neuropathy is often misdiagnosed due to its complex array of symptoms.",
        "Symptoms can range from mild to disabling. The symptoms depend on the type of nerve fibers affected and the type and severity of the damage. Symptoms may develop over days, weeks, or years. Unlike nerve cells in the central nervous system, peripheral nerve cells continue to grow throughout life and have the ability to regenerate when given the right environment to do so!",
        "The standard medical treatment for Peripheral Neuropathy is drugs and surgery. This treats the symptoms and not the cause. Our goal is to get to the root cause of the neuropathy and achieve a more permanent long-term sustainable solution.",
      ],
    },
    {
      kind: "list",
      intro:
        "Our customized treatment program includes the most state-of-the-art equipment and protocols, many of which can be done in the comfort of your own home. This type of treatment is for you if you suffer from have:",
      items: [
        "Numbness Or Tingling In Hands, Arms, Or Legs",
        "Diabetic Nerve Pain",
        "Muscle Weakness",
        "Sharp, Jabbing, Throbbing, Or Burning Pain",
        "Difficulty Sleeping From Leg Or Foot Discomfort",
        "Balance and Issues with Falling",
      ],
    },
    {
      kind: "prose",
      paragraphs: [
        "This depends on the severity of your Peripheral Neuropathy. In our custom examination, once the severity is determined, we can better give you an idea as to how long before you start to see results. Some patients see results almost immediately and others take longer if there is more damage to the nerves.",
        "Again, by getting to the cause of your neuropathy we work towards fixing the problem rather than masking it by only treating symptoms as the underlying condition continues to get worse. Those that seek out or cutting-edge treatment for their Peripheral Neuropathy want to avoid drugs and surgery and to know that they are working towards a true solution!",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* ED / Shockwave Men's Wellness                                               */
/* -------------------------------------------------------------------------- */

export const ED_SHOCKWAVE_CONTENT: ServicePageContent = {
  slug: "ed-shockwave-mens-wellness",
  urlPath: "/services/ed-shockwave-mens-wellness/",
  meta: {
    title: "Shockwave Therapy for ED in Geneva | Improve Performance",
    description:
      "Boost your confidence with help from Genesis Integrative Medicine. We use shockwave therapy for erectile dysfunction in Geneva, IL, to aid blood flow. Call us.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/ed-shockwave-mens-wellness/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2025/10/AS_145291108-ED-hero_preview-860x573-1.jpeg",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "ED / Shockwave Men\u2019s Wellness" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "ED / Shockwave Men\u2019s Wellness",
  },
  highlights: [
    { icon: "heart", label: "Non-invasive", note: "No pills, no surgery" },
    { icon: "bolt", label: "Acoustic waves", note: "Boost blood flow" },
    { icon: "clock", label: "No downtime", note: "Quick sessions" },
    { icon: "target", label: "Whole wellness", note: "Vitality restored" },
  ],
  featuredImage: {
    src: "/images/services/ed/ed-hero.jpeg",
    alt: "Shockwave therapy for men\u2019s wellness at Genesis Integrative Medicine",
    width: 860,
    height: 573,
  },
  serviceJsonLd: {
    name: "ED Shockwave Therapy & Men\u2019s Wellness",
    description:
      "Non-invasive shockwave therapy and comprehensive men\u2019s wellness programs designed to improve blood flow, stimulate tissue regeneration, and restore sexual performance and vitality.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/ed-shockwave-mens-wellness/",
  },
  sections: [
    {
      kind: "prose",
      heading: "Geneva, IL Leading Men\u2019s Wellness Clinic",
      paragraphs: [
        "If you\u2019re struggling with erectile dysfunction (ED), low performance, or decreased vitality, shockwave therapy and men\u2019s wellness treatments can help restore confidence and function naturally. These non-invasive treatments are designed to improve blood flow, stimulate tissue regeneration, and support overall sexual health\u2014no pills, no surgery, no downtime.",
        "At our Geneva, IL clinic, we believe men deserve to feel their best at every stage of life. Shockwave therapy isn\u2019t just about ED\u2014it can revitalize your sexual performance, enhance stamina, and boost overall well-being. Don\u2019t let sexual health challenges hold you back. Explore our comprehensive men\u2019s wellness services today.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Men\u2019s Wellness Matters",
      paragraphs: [
        "Your sexual health is closely tied to overall vitality, confidence, and quality of life. When blood flow, hormonal balance, and tissue health are optimized, you can perform better, feel stronger, and enjoy life more fully.",
        "ED, low libido, or performance issues often indicate underlying circulation or tissue health problems. Shockwave therapy targets the root cause, stimulating blood vessel growth and tissue repair to restore natural function and confidence.",
      ],
    },
    {
      kind: "list",
      heading: "ED / Shockwave Therapy: Restore Performance Naturally",
      intro: "Benefits of Shockwave & Men\u2019s Wellness Treatments",
      items: [
        "Shockwave therapy enhances blood flow to the penis, helping achieve stronger and longer-lasting erections without medications.",
        "Treatments promote tissue repair and regeneration, boosting overall sexual function and endurance.",
        "Quick sessions with no downtime\u2014get back to your normal routine immediately.",
        "Targeted therapy supports lasting improvements in sexual health, not just temporary fixes.",
        "Regaining sexual function improves self-esteem, relationships, and quality of life.",
      ],
    },
    {
      kind: "prose",
      heading: "Combining Shockwave Therapy with Men\u2019s Wellness Solutions",
      paragraphs: [
        "For best results, we combine shockwave therapy with personalized men\u2019s wellness programs. This may include proprietary supplements, laser therapy, and lifestyle optimization strategies designed to enhance sexual performance and overall vitality.",
        "Our holistic approach ensures you\u2019re not just treating symptoms but addressing the underlying causes of ED and low performance. By targeting blood flow, tissue health, and hormone support, we help men restore function, energy, and confidence naturally.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Choose Us for Men\u2019s Wellness in Geneva, IL",
      paragraphs: [
        "We know you have options, but our clinic stands out because we focus on comprehensive men\u2019s health solutions rather than temporary fixes. Our team combines advanced shockwave therapy, targeted supplements, and holistic wellness strategies to deliver lasting results.",
        "Whether you\u2019re experiencing ED, low libido, or other performance issues, our goal is to help you regain vitality and confidence so you can live life to the fullest.",
      ],
    },
    {
      kind: "list",
      heading: "What to Expect During Your Consultation",
      items: [
        "A thorough assessment of your sexual health and overall wellness",
        "Personalized treatment plan with shockwave therapy and supplements",
        "Clear explanation of what results to expect and a timeline for improvement",
      ],
    },
    {
      kind: "prose",
      heading: "Take the First Step Toward Restored Vitality",
      paragraphs: [
        "Don\u2019t let ED or low performance hold you back. Schedule your consultation today and discover how Geneva, IL men are restoring their sexual health, confidence, and performance naturally with shockwave therapy and men\u2019s wellness solutions.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Allergy Testing in Geneva                                                   */
/* -------------------------------------------------------------------------- */

export const ALLERGY_TESTING_CONTENT: ServicePageContent = {
  slug: "allergy-testing-geneva",
  urlPath: "/services/allergy-testing-geneva/",
  meta: {
    title: "Allergy Testing in Geneva | Find Your Triggers Today",
    description:
      "Stop sneezing and itching with help from Genesis Integrative Medicine. Our allergy testing in Geneva, IL, pinpoint causes of your discomfort. Call us today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/allergy-testing-geneva/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-3img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "Allergy Testing in Geneva" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Allergy Testing in Geneva",
    intro:
      "At Genesis Integrative Medicine, we understand how allergies can significantly impact your quality of life. Whether you experience seasonal allergies, food sensitivities, or environmental triggers, our team is dedicated to helping you find relief. With allergy testing in Geneva, we provide comprehensive evaluations to identify the root cause of your symptoms and develop a personalized treatment plan to improve your well-being.",
  },
  highlights: [
    { icon: "target", label: "Pinpoint triggers", note: "Skin, blood, patch" },
    { icon: "leaf", label: "Holistic plan", note: "Whole-person care" },
    { icon: "shield", label: "Long-term relief", note: "Beyond symptom mgmt" },
    { icon: "heart", label: "Personalized", note: "Tailored to you" },
  ],
  featuredImage: {
    src: "/images/services/allergy/woman-outdoors.jpg",
    alt: "Woman enjoying outdoors despite allergies",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Allergy Testing",
    description:
      "Comprehensive allergy testing including skin prick, IgE blood testing, elimination diet, and patch testing to identify environmental, food, and chemical allergens and create a personalized treatment plan.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/allergy-testing-geneva/",
  },
  sections: [
    {
      kind: "list",
      heading: "What Is Allergy Testing?",
      intro:
        "Allergy testing is a diagnostic tool that helps pinpoint specific allergens causing your symptoms. By identifying these triggers, we can tailor a treatment plan to reduce or eliminate your exposure, improving your overall health and quality of life. At Genesis Integrative Medicine, we offer several types of allergy testing in Geneva to address a wide range of allergic conditions, including the following:",
      items: [
        "Environmental Allergies: Sensitivities to pollen, mold, dust mites, and animal dander are common causes of seasonal or year-round allergy symptoms.",
        "Food Allergies and Sensitivities: These can cause various symptoms, from digestive discomfort to skin reactions and respiratory issues.",
        "Chemical and Environmental Sensitivities: Reactions to everyday chemicals or pollutants may lead to chronic symptoms such as fatigue, headaches, or inflammation.",
      ],
    },
    {
      kind: "list",
      heading: "Why Allergy Testing Is Important",
      image: {
        src: "/images/services/allergy/women-outdoor.jpg",
        alt: "Women enjoying an allergy-free day outdoors",
        width: 1200,
        height: 800,
      },
      intro:
        "Allergies often present themselves in ways that may not be immediately recognizable, and they can vary in severity. For some, allergies cause mild discomfort, while for others, they can lead to more serious health complications. Without proper diagnosis, allergy sufferers may continue to experience symptoms that interfere with daily life, such as the following:",
      items: [
        "Chronic fatigue",
        "Headaches or migraines",
        "Skin rashes, itching, or hives",
        "Respiratory problems such as coughing, wheezing, or nasal congestion",
        "Gastrointestinal issues",
      ],
      outro:
        "By opting for allergy testing in Geneva, you take a crucial step toward identifying the underlying causes of these symptoms. Once we know what triggers your body\u2019s reactions, we can implement targeted therapies and lifestyle changes to manage or eliminate your allergy-related health concerns.",
    },
    {
      kind: "subsections",
      heading: "Types of Allergy Testing We Offer",
      intro:
        "At Genesis Integrative Medicine, we provide several allergy testing options in Geneva to ensure accurate results tailored to your specific needs:",
      subs: [
        {
          heading: "1. Skin Prick Testing",
          paragraphs: [
            "One of the most common methods of allergy testing is the skin prick test. During this test, small amounts of potential allergens are applied to the surface of your skin, usually on your forearm or back. If you\u2019re allergic to a substance, a small bump or reaction will appear within minutes. This test is highly effective for diagnosing environmental allergens, such as pollen, dust, pet dander, and mold.",
          ],
        },
        {
          heading: "2. Blood Testing (IgE Testing)",
          paragraphs: [
            "For those who may not be suitable candidates for skin testing, or for more complex cases, we offer blood testing. This test measures the presence of immunoglobulin E (IgE) antibodies in your blood, which are produced in response to allergens. Blood testing is particularly useful for identifying food allergies and some environmental triggers.",
          ],
        },
        {
          heading: "3. Elimination Diet and Food Sensitivity Testing",
          paragraphs: [
            "Food sensitivities and intolerances can often go unnoticed but can still cause significant health issues. To determine these sensitivities, we may recommend an elimination diet or specialized food sensitivity testing. These tests help identify specific foods that may be contributing to digestive issues, fatigue, skin problems, or headaches.",
          ],
        },
        {
          heading: "4. Patch Testing",
          paragraphs: [
            "For individuals dealing with contact dermatitis or other skin-related allergic reactions, patch testing may be recommended. This test involves placing small patches containing potential allergens on your skin to see if any delayed reactions occur, typically over a 48- to 72-hour period.",
          ],
        },
        {
          heading: "What to Expect during Allergy Testing in Geneva",
          paragraphs: [
            "When you visit Genesis Integrative Medicine for allergy testing in Geneva, your experience will begin with a comprehensive consultation. We\u2019ll discuss your symptoms, medical history, and any potential allergens you\u2019ve been exposed to. Based on this information, we will recommend the most appropriate testing method for you.",
            "Once the testing is complete, we will interpret the results and create a personalized treatment plan. Our approach is holistic, addressing not only your allergy symptoms but also underlying health concerns that could be contributing to your body\u2019s heightened sensitivity.",
          ],
        },
      ],
    },
    {
      kind: "benefits",
      heading: "Benefits of Allergy Testing at Genesis Integrative Medicine",
      intro:
        "Choosing allergy testing in Geneva with Genesis Integrative Medicine comes with many benefits:",
      subs: [
        {
          heading: "1. Personalized Care",
          paragraph:
            "We understand that every individual\u2019s allergy profile is unique. That\u2019s why we take a personalized approach to allergy testing, ensuring that your treatment plan is tailored to your specific triggers and health concerns.",
        },
        {
          heading: "2. Comprehensive Testing Options",
          paragraph:
            "Our clinic offers a wide range of allergy testing methods, ensuring that we can accurately diagnose even the most complex allergy cases. Whether you\u2019re dealing with environmental allergies, food sensitivities, or chemical intolerances, we have the tools to identify the root cause of your symptoms.",
        },
        {
          heading: "3. Holistic Approach",
          paragraph:
            "At Genesis Integrative Medicine, we believe in addressing the whole person. Our treatment plans go beyond managing symptoms; we work with you to improve your overall health and well-being through lifestyle changes, nutritional counseling, and targeted therapies.",
        },
        {
          heading: "4. Long-Term Relief",
          paragraph:
            "Once we identify your allergens, we provide effective treatment options, including immunotherapy, dietary adjustments, and environmental modifications. By targeting the cause of your allergies, we aim to bring long-term relief and improve your quality of life.",
        },
      ],
    },
    {
      kind: "list",
      heading: "Treatment Options after Allergy Testing",
      image: {
        src: "/images/services/allergy/woman-park-music.jpg",
        alt: "Young woman relaxing outdoors after successful allergy treatment",
        width: 1200,
        height: 800,
      },
      intro:
        "Once your allergens have been identified, the next step is to create a treatment plan. Depending on your specific triggers and symptoms, this plan may include the following:",
      items: [
        "Avoidance Strategies: We will work with you to identify ways to avoid your triggers, whether it\u2019s through diet modifications, environmental changes, or lifestyle adjustments.",
        "Immunotherapy (Allergy Shots): For individuals with severe or persistent allergies, immunotherapy can help desensitize your immune system over time, reducing your reactions to allergens.",
        "Nutritional Support: Our team offers dietary counseling to help you manage food sensitivities and improve your overall health.",
        "Holistic Therapies: Complementary treatments such as acupuncture, detoxification, and supplementation may be recommended to support your immune system and reduce inflammation.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Choose Genesis Integrative Medicine for Allergy Testing?",
      paragraphs: [
        "When you choose allergy testing in Geneva at Genesis Integrative Medicine, you\u2019re partnering with a team that prioritizes your health and wellness. We\u2019re committed to using the most advanced testing methods to accurately identify your allergies and provide you with a clear path to relief. Our holistic approach ensures that we don\u2019t just treat your symptoms; we help you achieve long-lasting health.",
      ],
    },
    {
      kind: "prose",
      heading: "Schedule Your Allergy Testing Today",
      paragraphs: [
        "If you\u2019re tired of dealing with allergy symptoms that disrupt your life, it\u2019s time to take action. Schedule your appointment for allergy testing in Geneva at Genesis Integrative Medicine today, and start your journey to a healthier, allergy-free life.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* IV Nutrition Therapy                                                        */
/* -------------------------------------------------------------------------- */

export const IV_NUTRITION_CONTENT: ServicePageContent = {
  slug: "iv-nutrition-therapy",
  urlPath: "/services/iv-nutrition-therapy/",
  meta: {
    title: "IV Nutrition Therapy in Geneva | Recover and Rejuvenate",
    description:
      "Boost your recovery speed at Genesis Integrative Medicine. We offer iv nutrition therapy in Geneva, IL, to fight fatigue and chronic pain. Call us today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/services/iv-nutrition-therapy/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-7img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    { name: "Services", item: "https://genesisintegrativemed.com/services/" },
    { name: "IV Nutrition Therapy" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "IV Nutrition Therapy",
  },
  highlights: [
    { icon: "bolt", label: "Energy boost", note: "Knock out fatigue" },
    { icon: "shield", label: "Immune support", note: "Medical-grade" },
    { icon: "spark", label: "Custom blends", note: "Tailored to goals" },
    { icon: "heart", label: "Relaxed suite", note: "Comfortable setting" },
  ],
  featuredImage: {
    src: "/images/services/iv-nutrition-therapy.webp",
    alt: "IV nutrition therapy at Genesis Integrative Medicine",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "IV Nutrition Therapy",
    description:
      "Customized IV nutrition therapy using medical-grade ingredients (including the Myer\u2019s Cocktail) to boost energy, immunity, focus, and overall wellness in a comfortable IV suite.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/services/iv-nutrition-therapy/",
  },
  sections: [
    {
      kind: "prose",
      heading: "IV Nutrition Therapy Q & A",
      image: {
        src: "/images/services/iv-nutrition/iv-drip.jpg",
        alt: "IV nutrition drip therapy session",
        width: 1200,
        height: 800,
      },
      paragraphs: [
        "First, our medical team will complete a consultation either in person or via telehealth to ensure you are a good candidate for IV Nutrition. Then they will then help to guide you on what the best type of IV Nutrition and frequency of treatment is for your individual goals.",
        "Actual treatment sessions are relaxed and comfortable in our IV Nutrition Suite with lounge chairs, charging stations for your devices and soothing ambiance.",
        "At Genesis Integrative Medicine we use only the highest quality medical grade ingredients for your therapy. This is customized based on medical history, existing health and treatment goals.",
        "Therapy options include the popular Myer\u2019s Cocktail or can be more focused to address individual concerns like fatigue, a weak immune system, weight loss and brain fog.",
      ],
    },
    {
      kind: "list",
      intro: "IV nutrition therapy can successfully help with:",
      items: [
        "Knocking out fatigue and increasing energy",
        "Boosting the immune system",
        "Smoothing out lines and wrinkles",
        "liminating those stubborn pounds when diets have failed",
        "Improving focus, concentration and memory",
        "Overall health and wellness",
      ],
      outro:
        "Many chronic conditions like Fibroymyalgia, Lyme Disease and Chronic Fatigue Syndrome respond well to IV nutrition therapy as well.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Convenience lookup by slug                                                  */
/* -------------------------------------------------------------------------- */

export const SERVICE_PAGES = {
  sciatica: SCIATICA_CONTENT,
  "chiropractic-care": CHIROPRACTIC_CARE_CONTENT,
  "active-rehab-geneva": ACTIVE_REHAB_CONTENT,
  "prp-injections-geneva": PRP_CONTENT,
  "peptide-weight-loss": PEPTIDE_WEIGHT_LOSS_CONTENT,
  "regenerative-medicine": REGENERATIVE_MEDICINE_CONTENT,
  "cold-laser": COLD_LASER_CONTENT,
  "peripheral-neuropathy-treatment": PERIPHERAL_NEUROPATHY_CONTENT,
  "ed-shockwave-mens-wellness": ED_SHOCKWAVE_CONTENT,
  "allergy-testing-geneva": ALLERGY_TESTING_CONTENT,
  "iv-nutrition-therapy": IV_NUTRITION_CONTENT,
} as const;
