/**
 * Homepage content, extracted from the live site (genesisintegrativemed.com)
 * during site migration. Text preserved verbatim per the migration brief.
 * All internal links use the new site's route slugs (see app/lib/site-config.ts).
 */

import { CONTACT } from "./site-config";

export const HOME_META = {
  title: "Multidisciplinary Medicine | Genesis Integrative Medicine",
  description:
    "Find a path to recovery through multidisciplinary medicine at Genesis Integrative Medicine. Our clinic serves the people of Geneva, IL. Schedule an exam now.",
  canonicalPath: "/",
  ogImage: "/images/logo/Genesis_Logo.png",
} as const;

export const HERO = {
  kicker: "Integrative Medicine — Geneva, IL",
  siteTitle: "Genesis Integrative Medicine",
  headline: "Geneva\u2019s Trusted Partner in Wellness",
  intro:
    "Welcome to Genesis Integrative! At our center, we are dedicated to providing you with comprehensive wellness and effective pain relief solutions. Our integrative approach combines advanced medical practices with holistic therapies to address the root causes of your health concerns. With our team of compassionate and skilled providers, your journey to optimal health and pain-free living is within reach. Experience personalized care designed to meet your unique needs and help you achieve lasting well-being.",
  primaryCta: { label: "Get Started", href: "/contact/" },
  secondaryCta: { label: "Explore Services", href: "/services/" },
  bookingCta: {
    label: "Schedule Appointment",
    href: CONTACT.bookingUrl,
    external: true,
  },
} as const;

/**
 * Service preview cards — copy taken verbatim from the H3 blocks on the
 * live homepage. Links point to the corresponding new-site slugs.
 */
export const SERVICE_CARDS = [
  {
    title: "Chiropractic",
    body:
      "At Genesis Integrative Medicine we are proud to offer the most advanced chiropractic technology on the market, as well as multiple chiropractic techniques to best suit our patients\u2019 needs.",
    href: "/services/chiropractic-care/",
  },
  {
    title: "Regenerative Medicine",
    body:
      "The experts at Genesis Integrative Medicine can greatly reduce the need for surgery by not only treating, but healing injured tissue before the damage progresses further.",
    href: "/services/regenerative-medicine/",
  },
  {
    title: "Joint Pain",
    body:
      "When you have damage to your joints, muscles, or nerves, physical medicine \u2014 a physical approach to treatment rather than relying on medication or surgery \u2014 can be an essential part of your recovery.",
    href: "/conditions-treated/joint-pain/",
  },
  {
    title: "Medical Weight Loss",
    body:
      "What makes our medical weight loss program different is that we address the metabolism by resetting it and not speeding it up as do most other programs.",
    href: "/services/peptide-weight-loss/",
  },
] as const;

export const WHY_INTEGRATIVE = {
  heading: "Why Integrative Medicine?",
  paragraphs: [
    "Genesis Integrative Medicine takes an approach to health care designed to solve an age-old problem for patients \u2014 too many doctors and a lack of communication between them.",
    "At Genesis Integrative Medicine, patients in Geneva, Illinois, have access to both traditional medical services and alternative therapies like chiropractic care for a variety of conditions, all under the same roof. The result is a cutting-edge, integrated solution to health care and disease prevention with experienced and skilled providers who work together to ensure optimum health.",
    "We strive to get to the root of your health concerns, utilizing a holistic approach that considers the mind, body, and soul.",
  ],
  ctas: [
    { label: "Request an Appointment", href: "/contact/" },
    { label: "Conditions Treated", href: "/conditions-treated/" },
  ],
  featureCards: [
    {
      title: "Featured Services",
      body:
        "We provide individual care and treatment related to all musculoskeletal complaints, nerve entrapments, and auto vehicle accidents and sports injuries and more!",
      href: "/services/",
      image: "/images/home/service-box.webp",
      alt: "service-box-img",
    },
    {
      title: "Qualified Professionals",
      body:
        "Our mission is to help people take charge of their health by understanding their problems and making the necessary changes to achieve optimal health.",
      href: "/our-providers/",
      image: "/images/home/team-box.webp",
      alt: "team-box-img",
    },
    {
      title: "Conditions Treated",
      body:
        "Our clinic is a functional and integrated center mainly focused on improving your overall physical performance and getting you out of pain as quickly as possible.",
      href: "/conditions-treated/",
      image: "/images/home/article-box.webp",
      alt: "article-box-img",
    },
  ],
} as const;

export const SURGERIES_SECTION = {
  heading: "Surgeries and Medication: Last Resort Instead of First Choice",
  paragraphs: [
    "Despite trends in modern medicine, surgeries and pain medications shouldn\u2019t be the first choice for dealing with pain, injury, and chronic symptoms. Why? Because they often address only the symptoms rather than the underlying causes.",
    "Surgery carries risks such as infections, complications, and prolonged recovery times, which can sometimes lead to more pain and additional procedures. Pain medications, while providing temporary relief, can lead to dependency, tolerance, and a host of side effects that impact overall health and well-being.",
    "In contrast, non-invasive approaches like physical therapy, lifestyle modifications, and integrative therapies focus on healing the root causes, promoting long-term recovery, and improving overall health. Our approach doesn\u2019t involve the same risks associated with surgeries and medications. A root-cause wellness plan not only alleviates pain but also enhances the body\u2019s natural healing processes and prevents future issues.",
  ],
} as const;

export const UNLOCK_PAIN_FREE = {
  heading: "Unlock Your Path to Pain-Free Living",
  paragraphs: [
    "Our practitioners specialize in chronic pain and injury recovery. Unlike other doctors whose only solution is painkillers, we accelerate your body\u2019s own healing process through integrative medicine. Because everyone\u2019s body is different, we will explore many therapies to find what works for you.",
    "Address acute pain with active rehab and PRP. Maintain long-term wellness with health coaching and chiropractic. Our Geneva team is here for you every step of the way.",
  ],
} as const;

export const WHY_CHOOSE_US = {
  heading: "Why Choose Us?",
  blocks: [
    {
      title: "No Wait Time",
      body:
        "Experience seamless healthcare with our no wait time policy, ensuring you receive prompt attention and immediate care without delays.",
      icon: "/images/home/icon-no-wait.png",
      alt: "icons8-kill-time-100",
    },
    {
      title: "We Listen",
      body:
        "No more frustrating appointments leaving you feeling unheard. We take the time to truly listen and understand your unique health needs and goals.",
      icon: "/images/home/icon-listen.png",
      alt: "icons8-listen",
    },
    {
      title: "Finances Explained Up Front",
      body:
        "We provide transparent financial information from the outset, giving you clear and comprehensive explanations of costs to eliminate any surprises.",
      icon: "/images/home/icon-finances.png",
      alt: "icons8-money-bag-100",
    },
    {
      title: "All Providers Under One Roof",
      body:
        "No more time-consuming referrals. Enjoy the convenience of having all your healthcare needs met in one location, with a full spectrum of integrative medicine providers working together to optimize your wellness journey.",
      icon: "/images/home/icon-team.png",
      alt: "icons8-user-groups-100",
    },
  ],
} as const;

export const CONDITIONS_STRIP = {
  heading: "What Our Patients are Saying",
  subheading: "Patients Come to Us for These Conditions and More",
  reviewsLink: {
    label: "View More Reviews",
    href: CONTACT.reviewsUrl,
    external: true,
  },
  conditions: [
    {
      title: "Chronic Pain",
      body:
        "Integrative pain management addresses chronic pain by combining medical treatments with holistic therapies to reduce inflammation, improve mobility, and enhance overall quality of life.",
      href: "/conditions-treated/",
    },
    {
      title: "Sciatica",
      body:
        "Blending active rehab, chiropractic, and lifestyle modifications, we help alleviate sciatica pain, promote nerve healing, and prevent future flare-ups.",
      href: "/conditions-treated/sciatica/",
    },
    {
      title: "Herniated Disc",
      body:
        "Integrative approaches to herniated disc treatment incorporate spinal adjustments, targeted exercises, and regenerative therapies to relieve pain, restore function, and support disc recovery.",
      href: "/conditions-treated/herniated-disc/",
    },
    {
      title: "Neuropathy",
      body:
        "Comprehensive neuropathy care involves nutritional support, electrotherapy, laser therapy, platelet rich plasma (PRP) and stress management techniques to reduce nerve pain, improve circulation, and enhance nerve health.",
      href: "/conditions-treated/neuropathy/",
    },
    {
      title: "Tendonitis & Bursitis",
      body:
        "For patients dealing with tendonitis and bursitis in Geneva, integrative rehab combines anti-inflammatory treatments, therapeutic exercises, and manual therapies to reduce pain, promote healing, and prevent recurrence. shockwave and cold laser therapy and platelet-rich plasma (PRP) injections",
      href: "/conditions-treated/tendonitis/",
    },
    {
      title: "Allergies",
      body:
        "Integrative management of allergies includes dietary adjustments, immune support, and natural remedies to minimize symptoms, improve immune function, and enhance overall well-being. MRT allergy testing",
      href: "/conditions-treated/allergies/",
    },
  ],
} as const;

export const GET_STARTED = {
  heading: "Get Started with Integrative Medicine in Geneva",
  paragraphs: [
    "You are invited to become a patient at Genesis Integrative in Geneva, IL, where your health and wellness are our top priorities. Many of our patients struggle with chronic pain for years before finding us. However, they find newfound hope after their first consultation.",
    "Through chiropractic, advanced technologies, and holistic wellness, our team gets to the root causes of your health concerns. We admit that our approach is unique, but it\u2019s shown to be effective time and time again. Whether you\u2019re dealing with chronic pain, injury, or other health issues, our tailored treatment plans are designed to meet your specific needs and help you achieve lasting well-being. Join us at Genesis Integrative and take the first step towards a healthier, more vibrant life.",
  ],
  cta: { label: "Get Started", href: "/contact/" },
  image: {
    src: "/images/home/about-couple-outdoors.jpg",
    alt: "Man and woman snuggling outdoors",
    width: 1200,
    height: 800,
  },
} as const;

export const HOME_CONTACT = {
  heading: "Contact Us",
  formEmbed: {
    // Same LeadConnector inline form used on the live site so the
    // backend integration (submissions, automations) is preserved.
    src: "https://api.leadconnectorhq.com/widget/form/ToXLBiqT0qS6iABzJ9HD",
    height: 1400,
    title: "Contact Genesis Integrative Medicine",
  },
} as const;

/**
 * Insurance carriers featured on the live homepage. Assets downloaded from
 * the original CDN and stored in /public/images/insurance/.
 */
export const INSURANCE = {
  kicker: "In-network with",
  heading: "Insurance we work with",
  carriers: [
    { name: "Blue Cross Blue Shield", logo: "/images/insurance/bcbs.webp" },
    { name: "Aetna", logo: "/images/insurance/aetna.png" },
    { name: "UnitedHealthcare", logo: "/images/insurance/united-healthcare.png" },
    { name: "Medicare", logo: "/images/insurance/medicare.webp" },
    { name: "Cigna", logo: "/images/insurance/cigna.webp" },
    { name: "Humana", logo: "/images/insurance/humana.png" },
  ],
} as const;

export const REVIEWS_BADGE = {
  src: "/images/home/reviews-badge.png",
  alt: "read our reviews -1",
} as const;

/**
 * Full conditions catalog — image + title for every condition on the
 * live /conditions-treated/ index page. Images stored in /public/images/conditions/.
 * Order mirrors the live page's card grid; links point to internal routes.
 */
export const CONDITIONS_CATALOG = [
  { title: "Neck Pain", href: "/conditions-treated/neck-pain/", image: "/images/conditions/neck-pain.webp", alt: "Neck Pain" },
  { title: "Back Pain", href: "/conditions-treated/back-pain/", image: "/images/conditions/back-pain.webp", alt: "Back Pain" },
  { title: "Headaches", href: "/conditions-treated/headaches/", image: "/images/conditions/headaches.webp", alt: "Headache" },
  { title: "Shoulder Pain", href: "/conditions-treated/shoulder-pain/", image: "/images/conditions/shoulder-pain.webp", alt: "Shoulder Pain" },
  { title: "Foot Pain", href: "/conditions-treated/foot-pain/", image: "/images/conditions/foot-pain.webp", alt: "Foot Pain" },
  { title: "Sciatica", href: "/conditions-treated/sciatica/", image: "/images/conditions/sciatica.webp", alt: "Sciatica" },
  { title: "Herniated Disc", href: "/conditions-treated/herniated-disc/", image: "/images/conditions/herniated-disc.webp", alt: "Herniated Disc" },
  { title: "Neuropathy", href: "/conditions-treated/neuropathy/", image: "/images/conditions/neuropathy.webp", alt: "Neuropathy" },
  { title: "Tendonitis", href: "/conditions-treated/tendonitis/", image: "/images/conditions/tendonitis.webp", alt: "Tendonitis" },
  { title: "Bursitis", href: "/conditions-treated/bursitis/", image: "/images/conditions/bursitis.webp", alt: "Bursitis" },
  { title: "Joint Pain", href: "/conditions-treated/joint-pain/", image: "/images/conditions/joint-pain.jpg", alt: "Joint Pain" },
  { title: "Allergies", href: "/conditions-treated/allergies/", image: "/images/conditions/allergies.webp", alt: "Allergies" },
  { title: "Erectile Dysfunction (ED)", href: "/conditions-treated/erectile-dysfunction-ed/", image: "/images/conditions/erectile-dysfunction-ed.avif", alt: "Man looking worried while sitting in bed" },
] as const;

/**
 * Full services catalog — image + title for every service on the
 * live /services/ index page, mapped to our internal routes.
 * Images stored in /public/images/services/.
 */
export const SERVICES_CATALOG = [
  { title: "Chiropractic Care", href: "/services/chiropractic-care/", image: "/images/services/chiropractic-care.webp", alt: "Chiropractic care" },
  { title: "Active Rehab", href: "/services/active-rehab-geneva/", image: "/images/services/active-rehab.webp", alt: "Active rehab" },
  { title: "PRP Injections", href: "/services/prp-injections-geneva/", image: "/images/services/prp-injections.webp", alt: "PRP injections" },
  { title: "Regenerative Medicine", href: "/services/regenerative-medicine/", image: "/images/services/regenerative-medicine.webp", alt: "Regenerative medicine" },
  { title: "Cold Laser", href: "/services/cold-laser/", image: "/images/services/cold-laser.webp", alt: "Cold laser therapy" },
  { title: "Peptide Weight Loss", href: "/services/peptide-weight-loss/", image: "/images/services/peptide-weight-loss.webp", alt: "Medical weight loss" },
  { title: "Peripheral Neuropathy", href: "/services/peripheral-neuropathy-treatment/", image: "/images/services/peripheral-neuropathy.webp", alt: "Peripheral neuropathy treatment" },
  { title: "ED Shockwave & Men's Wellness", href: "/services/ed-shockwave-mens-wellness/", image: "/images/services/ed-shockwave.jpeg", alt: "ED shockwave therapy" },
  { title: "Allergy Testing", href: "/services/allergy-testing-geneva/", image: "/images/services/allergy-testing.webp", alt: "Allergy testing" },
  { title: "IV Nutrition Therapy", href: "/services/iv-nutrition-therapy/", image: "/images/services/iv-nutrition-therapy.webp", alt: "IV nutrition therapy" },
  { title: "Sciatica", href: "/services/sciatica/", image: "/images/services/sciatica.webp", alt: "Sciatica treatment" },
] as const;
