/**
 * Content module for the /conditions-treated/* pages.
 *
 * Preserves verbatim body copy, JSON-LD data model, and metadata from the
 * live site (genesisintegrativemed.com). Reuses the ServicePageContent shape
 * so the shared services template can render both surfaces.
 *
 * DO NOT paraphrase or rewrite copy — see the migration brief.
 */

import type { ServicePageContent, RelatedNav } from "@/app/lib/services-content";

/* -------------------------------------------------------------------------- */
/* Shared: full conditions list (used at bottom of every condition page)      */
/* -------------------------------------------------------------------------- */

export const ALL_CONDITIONS_LIST = [
  { label: "Neck Pain", href: "/conditions-treated/neck-pain/" },
  { label: "Back Pain", href: "/conditions-treated/back-pain/" },
  { label: "Headaches", href: "/conditions-treated/headaches/" },
  { label: "Shoulder Pain", href: "/conditions-treated/shoulder-pain/" },
  { label: "Foot Pain", href: "/conditions-treated/foot-pain/" },
  { label: "Sciatica", href: "/conditions-treated/sciatica/" },
  { label: "Herniated Disc", href: "/conditions-treated/herniated-disc/" },
  { label: "Neuropathy", href: "/conditions-treated/neuropathy/" },
  { label: "Joint Pain", href: "/conditions-treated/joint-pain/" },
  { label: "Tendonitis", href: "/conditions-treated/tendonitis/" },
  { label: "Erectile Dysfunction (ED)", href: "/conditions-treated/erectile-dysfunction-ed/" },
  { label: "Bursitis", href: "/conditions-treated/bursitis/" },
  { label: "Allergies", href: "/conditions-treated/allergies/" },
] as const;

export const CONDITIONS_RELATED_NAV: RelatedNav = {
  kicker: "Also treated",
  heading: "Conditions Treated",
  items: ALL_CONDITIONS_LIST,
  footerLabel: "View all conditions",
  footerHref: "/conditions-treated/",
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/  (index)                                              */
/* -------------------------------------------------------------------------- */

export const CONDITIONS_INDEX_META = {
  title: "Integrative Medicine in Geneva | Professional Local Care",
  description:
    "Discover a path toward total wellness through Genesis Integrative Medicine. We serve every patient with personalized care in Geneva, IL. Schedule a visit now.",
  canonicalOrigin: "https://genesisintegrativemed.com/conditions-treated/",
  ogImage:
    "https://genesisintegrativemed.com/wp-content/uploads/2022/07/neck-pain-img.webp",
  datePublished: "2022-07-13T05:00:10+00:00",
  dateModified: "2026-04-09T10:38:02+00:00",
} as const;

export const CONDITIONS_INDEX_HERO = {
  kicker: "Personalized care in Geneva",
  h1: "Conditions Treated",
  subtitle: "Are you suffering with:",
  intro:
    "Genesis Integrative Medicine offers a comprehensive, integrative approach to caring for the conditions that disrupt your daily life. Explore the areas we treat and take the first step toward a healthier, pain-free future.",
} as const;

export const CONDITIONS_INDEX_CARDS = [
  {
    title: "Neck Pain",
    href: "/conditions-treated/neck-pain/",
    image: "/images/conditions/cards/neck-pain.webp",
    alt: "Neck Pain",
  },
  {
    title: "Back Pain",
    href: "/conditions-treated/back-pain/",
    image: "/images/conditions/cards/back-pain.webp",
    alt: "Back Pain",
  },
  {
    title: "Headaches",
    href: "/conditions-treated/headaches/",
    image: "/images/conditions/cards/headaches.webp",
    alt: "Headache",
  },
  {
    title: "Shoulder Pain",
    href: "/conditions-treated/shoulder-pain/",
    image: "/images/conditions/cards/shoulder-pain.webp",
    alt: "Shoulder Pain",
  },
  {
    title: "Foot Pain",
    href: "/conditions-treated/foot-pain/",
    image: "/images/conditions/cards/foot-pain.webp",
    alt: "Foot Pain",
  },
  {
    title: "Sciatica",
    href: "/conditions-treated/sciatica/",
    image: "/images/conditions/cards/sciatica.webp",
    alt: "Sciatica",
  },
  {
    title: "Herniated Disc",
    href: "/conditions-treated/herniated-disc/",
    image: "/images/conditions/cards/herniated-disc.webp",
    alt: "Herniated Disc",
  },
  {
    title: "Neuropathy",
    href: "/conditions-treated/neuropathy/",
    image: "/images/conditions/cards/neuropathy.webp",
    alt: "Neuropathy",
  },
  {
    title: "Joint Pain",
    href: "/conditions-treated/joint-pain/",
    image: "/images/conditions/cards/joint-pain.jpg",
    alt: "Joint Pain",
  },
  {
    title: "Tendonitis",
    href: "/conditions-treated/tendonitis/",
    image: "/images/conditions/cards/tendonitis.webp",
    alt: "Tendonitis",
  },
  {
    title: "Erectile Dysfunction (ED)",
    href: "/conditions-treated/erectile-dysfunction-ed/",
    image: "/images/conditions/cards/ed.avif",
    alt: "Man looking worried while sitting in bed",
  },
  {
    title: "Bursitis",
    href: "/conditions-treated/bursitis/",
    image: "/images/conditions/cards/bursitis.webp",
    alt: "Bursitis",
  },
  {
    title: "Allergies",
    href: "/conditions-treated/allergies/",
    image: "/images/conditions/cards/allergies.webp",
    alt: "Allergies",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* /conditions-treated/neck-pain/                                             */
/* -------------------------------------------------------------------------- */

export const NECK_PAIN_CONTENT: ServicePageContent = {
  slug: "neck-pain",
  urlPath: "/conditions-treated/neck-pain/",
  meta: {
    title: "Neck Pain Doctor in Geneva | Relieve Stiffness and Tension",
    description:
      "Find neck pain relief in Geneva, IL, with Genesis Integrative Medicine. Schedule a consultation with our neck pain doctors today to improve quality of life.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/neck-pain/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Neck Pain" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Top Neck Pain Doctor in Geneva, IL",
    intro:
      "Neck pain is a common complaint that can disrupt your daily life, making it difficult to focus, sleep, or even perform routine tasks. If you are searching for an effective and lasting solution, Genesis Integrative Medicine provides neck pain doctors in Geneva, IL. With a holistic approach that addresses the root causes of your discomfort, we are dedicated to improving your quality of life.",
  },
  highlights: [
    { icon: "target", label: "Root-cause focus", note: "Beyond symptom masking" },
    { icon: "spark", label: "Integrative team", note: "Chiro, PT, injections" },
    { icon: "heart", label: "Personalized plan", note: "Tailored to your case" },
    { icon: "shield", label: "Long-term relief", note: "Prevent recurrence" },
  ],
  featuredImage: {
    src: "/images/conditions/neck-pain/patient-couch.jpg",
    alt: "Neck pain treatment consultation",
    width: 1024,
    height: 683,
  },
  serviceJsonLd: {
    name: "Neck Pain Treatment",
    description:
      "Integrative, multidisciplinary care for acute and chronic neck pain \u2014 including chiropractic adjustments, therapeutic injections, rehab, and cold laser therapy \u2014 designed to address the root cause and restore mobility.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/neck-pain/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Understanding the Causes of Neck Pain",
      paragraphs: [
        "Neck pain can stem from a variety of factors, and understanding its origin is key to providing effective treatment. Common causes include poor posture, injuries such as whiplash, degenerative conditions such as arthritis, and stress-related muscle tension. These issues can lead to inflammation, nerve compression, and misalignment in the cervical spine.",
        "The severity and duration of neck pain can vary. Acute pain may last only a few days, while chronic neck pain persists for weeks or even months. Regardless of its intensity, neck pain should not be ignored. Consulting a skilled neck pain doctor in Geneva, IL, ensures that your condition is properly diagnosed and treated.",
      ],
    },
    {
      kind: "prose",
      heading: "Symptoms That May Indicate a Need for Care",
      paragraphs: [
        "Neck pain can present in various ways, depending on the underlying cause. Symptoms might include stiffness, sharp or shooting pain, limited range of motion, and headaches. In some cases, individuals may experience numbness or tingling in their arms, hands, or shoulders. These symptoms could indicate a more serious issue, such as nerve compression or herniated discs, that requires specialized attention.",
        "If neck pain is interfering with your ability to work, exercise, or enjoy daily activities, it is time to seek professional help. The experienced team at Genesis Integrative Medicine is equipped to handle even complex cases, providing comprehensive care tailored to your needs.",
      ],
    },
    {
      kind: "prose",
      heading: "How a Neck Pain Doctor in Geneva, IL, Can Help",
      paragraphs: [
        "At Genesis Integrative Medicine, we take a multidisciplinary approach to neck pain treatment. Our goal is to identify the root cause of your discomfort and develop a personalized plan that promotes healing and long-term relief.",
        "One of the first steps in your care is a thorough evaluation. This includes a detailed review of your medical history, an assessment of your posture and movement, and, if necessary, advanced diagnostic imaging. By gaining a full understanding of your condition, our neck pain doctors in Geneva, IL, can create an effective treatment plan.",
      ],
    },
    {
      kind: "prose",
      heading: "Personalized Treatment Options",
      paragraphs: [
        "Our treatment strategies are designed to address both the symptoms and underlying causes of neck pain. A combination of therapies may be recommended to achieve the best results. Chiropractic adjustments can realign the cervical spine, reducing pressure on nerves and restoring mobility. Massage therapy and myofascial release techniques help relieve muscle tension and improve circulation, which can accelerate healing.",
        "For individuals with inflammation or nerve-related pain, we may incorporate therapeutic injections. These targeted treatments can reduce swelling and provide immediate relief, allowing other therapies to be more effective. Rehabilitation exercises are often a key component of our approach, helping to strengthen neck muscles, improve posture, and prevent future injuries.",
        "Cold laser therapy and other advanced modalities may also be used to stimulate cellular repair and reduce discomfort. By combining these therapies, our neck pain doctors in Geneva, IL, provide a comprehensive and integrative solution tailored to your unique condition.",
      ],
    },
    {
      kind: "prose",
      heading: "Preventing Recurring Neck Pain",
      paragraphs: [
        "At Genesis Integrative Medicine, our care extends beyond symptom management. We are committed to empowering our patients with the tools and knowledge they need to maintain a pain-free lifestyle. This often includes education on ergonomics, stress management techniques, and personalized exercise plans.",
        "Proper posture is a crucial aspect of neck pain prevention. Many individuals develop neck pain due to prolonged periods of sitting or looking down at electronic devices. Adjusting your workstation, taking regular breaks, and practicing mindfulness in your movements can significantly reduce strain on your cervical spine.",
      ],
    },
    {
      kind: "prose",
      heading: "What Sets Genesis Integrative Medicine Apart",
      paragraphs: [
        "Choosing a neck pain doctor in Geneva, IL, is an important decision. At Genesis Integrative Medicine, we stand out for our patient-centered approach and commitment to holistic care. Our team takes the time to understand your concerns, answer your questions, and involve you in every step of the treatment process.",
        "With years of experience and access to the latest advancements in integrative medicine, our neck pain doctors in Geneva, IL, offer effective solutions for a wide range of conditions. Whether you are dealing with a recent injury or a chronic issue, you can trust us to provide the care and support you need.",
      ],
    },
    {
      kind: "prose",
      heading: "Schedule Your Consultation Today",
      paragraphs: [
        "Living with neck pain can be frustrating and debilitating, but you don\u2019t have to face it alone. A compassionate neck pain doctor in Geneva, IL, is ready to help you find relief and regain your mobility. At Genesis Integrative Medicine, we are dedicated to delivering comprehensive care that prioritizes your overall well-being.",
        "Take the first step toward a pain-free life by scheduling a consultation today. Together, we will uncover the source of your discomfort and develop a personalized treatment plan that works for you. With the right neck pain doctors in Geneva, IL, you can move beyond neck pain and embrace a healthier, more active lifestyle.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/back-pain/                                             */
/* -------------------------------------------------------------------------- */

export const BACK_PAIN_CONTENT: ServicePageContent = {
  slug: "back-pain",
  urlPath: "/conditions-treated/back-pain/",
  meta: {
    title: "Back Pain Relief in Geneva | End Chronic Aches Today",
    description:
      "Move without discomfort at Genesis Integrative Medicine this week. We focus on back pain relief in Geneva, IL, for your recovery. Call for an appointment.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/back-pain/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Back Pain" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Back Pain",
    subtitle: "Back Pain Doctor in Geneva, IL",
    intro:
      "Living with back pain can be a challenging and frustrating experience, impacting your daily life and overall well-being. At Genesis Integrative Medicine, our back pain doctor in Geneva offers a comprehensive and integrative approach to managing and alleviating back pain.",
  },
  highlights: [
    { icon: "target", label: "Root-cause focus", note: "Not just symptoms" },
    { icon: "spark", label: "Integrative team", note: "Chiro, PT, PRP" },
    { icon: "heart", label: "Personalized care", note: "Your goals, your plan" },
    { icon: "shield", label: "Lasting relief", note: "Long-term recovery" },
  ],
  featuredImage: {
    src: "/images/conditions/back-pain/back-consult.jpg",
    alt: "Back pain consultation with a compassionate provider",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Back Pain Treatment",
    description:
      "Comprehensive, integrative back pain care combining chiropractic adjustments, trigger point therapy, physical therapy, shockwave therapy (EPAT), regenerative medicine, and nutritional counseling.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/back-pain/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Back Pain Doctor in Geneva, IL",
      paragraphs: [
        "By combining traditional medical treatments with alternative therapies, we aim to address the root causes of your pain and provide long-lasting relief, empowering you to regain control of your health and live a pain-free life. You don\u2019t have to live with any level of back pain thanks to our integrative back pain doctor in Geneva.",
      ],
    },
    {
      kind: "list",
      heading: "Understanding Back Pain",
      intro:
        "Back pain is a common condition that can range from a dull ache to a sharp, stabbing sensation. It can be caused by a variety of factors, including injuries, poor posture, degenerative conditions, and more. Our back pain doctors in Geneva understand the complexities of back pain and take a holistic approach to diagnosis and treatment.",
      items: [
        "Muscle Strain: Overuse or sudden movements can cause muscle strain, leading to pain and stiffness in the back.",
        "Herniated Discs: When the soft inner material of a spinal disc pushes through the outer layer, it can compress nerves and cause pain.",
        "Degenerative Disc Disease: As spinal discs deteriorate over time, they can cause pain and limit mobility.",
        "Arthritis: Osteoarthritis can affect the spine, causing pain and inflammation.",
        "Poor Posture: Slouching or improper body mechanics can lead to chronic back pain.",
        "Injury or Trauma: Accidents or falls can cause injuries that result in back pain.",
      ],
    },
    {
      kind: "prose",
      heading: "Integrative Treatments for Back Pain",
      paragraphs: [
        "Our comprehensive approach to back pain treatment in Geneva includes chiropractic care, Trigger Point Therapy, physical therapy, Shockwave Therapy (EPAT), regenerative medicine, nutritional counseling, and mind-body techniques.",
        "Chiropractic adjustments realign the spine to alleviate pain, while Trigger Point Therapy targets specific muscle knots to relieve tension and discomfort. Physical therapy strengthens the muscles supporting the spine, and Shockwave Therapy (EPAT) uses acoustic waves to stimulate healing and reduce pain.",
        "Regenerative medicine, including PRP and stem cell treatments, aids in tissue repair. Nutritional counseling ensures you receive essential nutrients to support healing, and mind-body techniques such as mindfulness, meditation, and yoga help manage stress and enhance mental well-being.",
      ],
    },
    {
      kind: "prose",
      heading: "The Benefits of Seeing a Back Pain Doctor in Geneva",
      paragraphs: [
        "Choosing our back pain doctor in Geneva for your treatment offers numerous benefits beyond just pain relief. Our integrative approach focuses on improving your overall health and well-being, providing comprehensive care that addresses the root causes of your pain.",
        "Our expert team of healthcare professionals is skilled in various fields, including chiropractic care, acupuncture, physical therapy, and regenerative medicine. This expertise ensures you receive the best possible care tailored to your specific needs.",
        "Our clinic offers innovative treatments, featuring cutting-edge regenerative medicine therapies and integrative approaches to promote healing and provide lasting relief from back pain. These advanced treatments aim to address the root causes of pain for more effective results.",
        "We provide comprehensive care by addressing all aspects of your health, ensuring a holistic approach to back pain treatment. This focus on overall well-being aims to promote long-term relief and enhance your quality of life.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Choose Genesis Integrative Medicine?",
      paragraphs: [
        "At Genesis Integrative Medicine, our commitment to providing the highest quality care and support is at the core of everything we do. Located in Geneva, our clinic specializes in treating back pain through a comprehensive and integrative approach. Our experienced back pain doctor and dedicated team in Geneva prioritize personalized care tailored to meet each patient\u2019s unique needs and health goals, ensuring a path to recovery that aligns with your lifestyle.",
        "We are proud to offer cutting-edge regenerative medicine therapies and integrative treatments designed to accelerate healing and provide lasting relief from back pain. Our innovative treatments utilize the latest advancements in medical technology to support your body\u2019s natural healing processes, helping you regain mobility and live a pain-free life.",
        "Our holistic approach addresses all aspects of your health, going beyond symptom management to promote overall well-being and long-term relief. We understand that back pain can affect various areas of your life, and our comprehensive care plan includes lifestyle modifications, nutritional guidance, and stress management techniques to ensure a balanced and healthy recovery.",
        "One of the most significant benefits of working with our team at Genesis Integrative Medicine is the genuine care and attention we provide as you navigate your health journey. Our team isn\u2019t just focused on treating symptoms; we are dedicated to understanding you as a whole person.",
        "We take the time to listen to your concerns, understand your personal health history, and tailor our approach to align with your individual needs and goals. This compassionate, patient-centered approach not only enhances the effectiveness of your treatment but also fosters a supportive and empathetic environment where you feel valued and understood. By working with a team that truly cares about your overall well-being, you can experience a more holistic and fulfilling path to health and recovery.",
        "Choosing Genesis Integrative Medicine means choosing a partner in your health journey. Our Geneva back pain doctors are dedicated to empowering you with the knowledge and tools you need to achieve optimal health and well-being. Experience the difference of integrative medicine and take the first step toward a pain-free life today.",
      ],
    },
    {
      kind: "prose",
      heading: "Take the First Step toward Pain Relief",
      paragraphs: [
        "If you\u2019re ready to find relief from back pain, our back pain doctor in Geneva is here to help. Our integrative approach offers comprehensive care that addresses the root causes of your pain and promotes healing. Whether you\u2019ve been struggling with back pain for years or are experiencing new symptoms, we invite you to explore our range of services and discover the benefits of integrative medicine.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/headaches/                                             */
/* -------------------------------------------------------------------------- */

export const HEADACHES_CONTENT: ServicePageContent = {
  slug: "headaches",
  urlPath: "/conditions-treated/headaches/",
  meta: {
    title: "Headache Treatment in Geneva | Restore Your Focus Today",
    description:
      "Stop frequent head pain with help from Genesis Integrative Medicine. We use headache treatment in Geneva, IL, to restore your health. Schedule a visit now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/headaches/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Headaches" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Headaches",
    subtitle: "Headache Doctor in Geneva, IL",
    intro:
      "If you are suffering from persistent headaches, consider seeking integrative medicine. This type of treatment combines mainstream treatments and natural methods. Integrative medicine is typically used when conventional treatments are ineffective or when the patient prefers a more natural approach.",
  },
  highlights: [
    { icon: "target", label: "Root-cause approach", note: "Beyond symptom relief" },
    { icon: "spark", label: "Chiropractic + rehab", note: "Multi-modal care" },
    { icon: "heart", label: "Personalized wellness", note: "Stress, sleep, diet" },
    { icon: "shield", label: "Migraine specialists", note: "Long-term relief" },
  ],
  featuredImage: {
    src: "/images/conditions/headaches/healthcare-worker.jpg",
    alt: "Healthcare worker discussing headache treatment options",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Headache Treatment",
    description:
      "Integrative headache and migraine care combining chiropractic adjustments, rehab, personalized wellness programs, regenerative injections, and trigger point injections to address root causes.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/headaches/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Headache Doctor in Geneva, IL",
      paragraphs: [
        "Our personalized plans include dietary supplements, mind/body therapies, and manipulation therapy. According to the American Chiropractic Association, spinal manipulation is an effective headache treatment option for many sufferers. Chiropractic adjustment can improve acute and chronic neck pain, which can reduce the number of headaches you\u2019ll experience \u2014 whether you suffer from migraines or tension headaches.",
      ],
    },
    {
      kind: "prose",
      heading: "Don\u2019t Manage Symptoms. Get to the Root Cause of Headaches",
      paragraphs: [
        "When it comes to headache relief, merely managing symptoms is like blowing away smoke instead of extinguishing the fire. At our Geneva practice, we believe in looking beyond the surface to uncover the true source of your headaches. Often, headaches are a sign of underlying issues such as injury or chronic inflammation. By identifying and addressing these root causes, we don\u2019t just provide temporary relief; we work towards long-term healing.",
        "Injuries, whether recent or past, can lead to structural imbalances that contribute to persistent headaches. Inflammation, too, plays a significant role, often as a result of stress, poor posture, or nutritional deficiencies. By focusing on these fundamental issues, we can develop a comprehensive treatment plan that not only alleviates your pain but also enhances your overall health and well-being.",
        "Don\u2019t settle for masking your symptoms\u2014take control of your health by addressing the root cause of your headaches with a holistic, integrative approach.",
      ],
    },
    {
      kind: "prose",
      heading: "Common Causes of Headaches",
      paragraphs: [
        "The team at Genesis will explore potential causes of your headaches. Some of these causes may be common, and some may be unexpected. We also know that headaches arise from a constellation of factors \u2013 there\u2019s not going to be one simple solution. However, with a personalized wellness plan, we can get you back to feeling your best.",
        "Past or recent injuries, particularly to the neck or head, can lead to chronic headaches. Even minor injuries can cause structural imbalances that put pressure on nerves and muscles, leading to persistent pain. Addressing the underlying injury is crucial for long-term relief.",
        "Poor gut health, including issues like leaky gut or food sensitivities, can contribute to headaches. Inflammation in the gut can trigger systemic inflammation, which often manifests as headaches. A healthy digestive system is essential for reducing headache frequency and intensity.",
        "One of the most common headache triggers, stress, leads to tension in the muscles, particularly around the neck and shoulders. This tension can result in tension headaches or migraines. Managing stress through relaxation techniques, exercise, and lifestyle changes is key to preventing stress-related headaches.",
        "Imbalances in muscle strength or flexibility, especially in the neck, shoulders, and back, can contribute to headaches. These imbalances can strain certain muscles while others overcompensate, leading to tension and pain that radiates to the head.",
        "Sitting or standing with poor posture puts undue stress on the spine and muscles, especially in the upper body. Over time, this can lead to tension headaches. Improving posture through ergonomic adjustments and exercises can help alleviate these headaches.",
        "Not drinking enough water can cause dehydration, leading to headaches. Dehydration reduces blood flow to the brain and can cause the brain to temporarily shrink from fluid loss, triggering pain. Staying well-hydrated is an easy way to prevent headaches.",
        "Hormonal fluctuations, particularly in women, can trigger headaches, especially migraines. Changes in estrogen levels during menstruation, pregnancy, or menopause are common culprits. Addressing hormonal health can significantly reduce headache frequency.",
        "Poor sleep quality or sleep disorders like insomnia or sleep apnea can lead to chronic headaches. Lack of restorative sleep can increase stress and muscle tension, contributing to headaches. Improving sleep hygiene and addressing sleep disorders are important for headache prevention.",
      ],
    },
    {
      kind: "prose",
      heading: "How is a Migraine Different Than Other Headaches?",
      paragraphs: [
        "Migraines differ from normal headaches in their severity and symptoms. While normal headaches cause mild to moderate pain, migraines involve intense, throbbing pain, often accompanied by nausea, sensitivity to light and sound, and sometimes visual disturbances. Migraines can be debilitating and last longer than typical headaches.",
        "At Genesis Integrative Medicine, we specialize in identifying and addressing the root causes of migraines, offering personalized care to help reduce their frequency and severity for long-term relief.",
      ],
    },
    {
      kind: "prose",
      heading: "A Multi-layered Approach Tailored to Your Needs",
      paragraphs: [
        "Our doctors and practitioners are trained in many modalities, which is why we\u2019re a go-to destination for headache care in Geneva. Each of our therapies offers a unique approach to headache relief, and when combined, they can provide a comprehensive solution tailored to your specific needs, leading to more effective and lasting results.",
        "Chiropractic adjustments can realign the spine, particularly the cervical spine (neck), to reduce tension and pressure on nerves that may be causing headaches. By correcting misalignments, chiropractic care can alleviate muscle tension and improve blood flow, providing relief from both tension headaches and migraines.",
        "Rehab focuses on strengthening and balancing the muscles, especially in the neck, shoulders, and upper back, to prevent and reduce headaches. Through targeted exercises and physical therapy, rehab can correct muscle imbalances and improve posture, reducing the likelihood of tension headaches caused by muscle strain.",
        "A personalized wellness program addresses the unique factors contributing to your headaches, such as stress, diet, and lifestyle. By tailoring a holistic approach that includes stress management techniques, nutritional guidance, and lifestyle changes, personalized wellness can reduce headache frequency and intensity by addressing the root causes.",
        "Regenerative injections, such as Platelet-Rich Plasma (PRP) or stem cell therapy, can promote healing in damaged tissues that might be contributing to headaches. These injections help repair and regenerate tissues in the neck and upper back, reducing inflammation and pain and providing long-lasting relief from headaches caused by injury or chronic inflammation.",
        "Trigger Point Injections are a therapeutic option designed to relieve tension and stress in muscles, particularly in the upper back and neck. These injections target specific \u201Ctrigger points,\u201D which are tight bands of muscle that can cause pain and discomfort. By injecting a small amount of anesthetic or saline directly into these points, the treatment helps to relax the muscles, alleviate pain, and reduce the occurrence of tension-related headaches. This service is especially beneficial for individuals who suffer from chronic muscle tightness or stress-induced headaches.",
      ],
    },
    {
      kind: "prose",
      heading: "Find Headache Relief at Genesis Integrative Medicine in Geneva, IL",
      paragraphs: [
        "Are you tired of living with chronic headaches? At Genesis Integrative Medicine, we\u2019re here to help you find lasting relief. Our holistic approach combines chiropractic care, rehabilitation, personalized wellness programs, and regenerative injections to address the root causes of your headaches. Whether you\u2019re dealing with tension headaches, migraines, or chronic pain, our team is dedicated to providing personalized care that targets your specific needs.",
        "Don\u2019t let headaches control your life any longer. Discover the path to lasting relief at our Geneva clinic. Contact us today to schedule your consultation and start your journey to a headache-free life.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Convenience lookup                                                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* /conditions-treated/foot-pain/                                             */
/* -------------------------------------------------------------------------- */

export const FOOT_PAIN_CONTENT: ServicePageContent = {
  slug: "foot-pain",
  urlPath: "/conditions-treated/foot-pain/",
  meta: {
    title: "Foot Pain Relief in Geneva | Expert Podiatric Solutions",
    description:
      "Step lively with the help of Genesis Integrative Medicine. We offer foot pain relief in Geneva, IL, without surgery for plantar fasciitis. Call us now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/foot-pain/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Foot Pain" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Foot Pain",
    subtitle: "Foot Pain Q & A",
  },
  highlights: [
    { icon: "shield", label: "Non-surgical first", note: "Conservative care" },
    { icon: "target", label: "Plantar fasciitis", note: "Specialists in Geneva" },
    { icon: "bolt", label: "Shock wave + PRP", note: "Advanced modalities" },
    { icon: "heart", label: "Custom orthotics", note: "Personalized support" },
  ],
  featuredImage: {
    src: "/images/conditions/foot-pain/foot-problem.jpg",
    alt: "Foot pain",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Foot Pain Treatment",
    description:
      "Non-surgical, integrative care for plantar fasciitis and other foot pain \u2014 including shockwave therapy, PRP, cold laser therapy, and custom orthotics \u2014 designed to resolve pain without surgery.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/foot-pain/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "list",
      intro: "You are more likely to get plantar fasciitis if you:",
      items: [
        "You are an avid runner",
        "Have extreme foot arches, either flat feet or high arches",
        "Sudden change in activity level",
        "Are obese or gain weight suddenly",
        "Have a tight Achilles tendon",
        "Often wear shoes with poor arch support or soft soles",
      ],
    },
    {
      kind: "list",
      intro:
        "At Genesis Integrative Medicine we provide non-surgical conservative intervention treatments which we highly recommend over surgery for the following reasons:",
      items: [
        "Minimal risk of adverse effects as compared to surgery",
        "Rehabilitation/ recovery is generally short and pain-free",
        "At least 80% of patients experience complete resolution of symptoms (thus not requiring surgical intervention)",
      ],
      outro:
        "The medical professionals at Genesis Integrative Medicine will determine which non-surgical treatment for plantar fasciitis is best for your needs.",
    },
    {
      kind: "prose",
      heading: "Shock Wave Therapy",
      paragraphs: [
        "Shock wave Therapy is a non-invasive therapy that uses high-energy sound waves to promote healing in the affected area. This therapy can help reduce inflammation, improve circulation, and relieve pain in the foot. Shockwave treatment is a safe and effective option for patients dealing with conditions such as plantar fasciitis or Achilles tendonitis.",
        "It is estimated that shock wave therapy is effective in resolving greater than 70% of cases of chronic plantar fasciitis pain. Most patients have pain relief immediately after EPAT. EPAT has a cumulative effect so repeating the procedure can be beneficial. The full effect of the course of 3 treatments may take up to 6 weeks after the last treatment.",
      ],
    },
    {
      kind: "prose",
      heading: "PRP",
      paragraphs: [
        "PRP therapy is an innovative treatment option that uses a patient\u2019s own platelets to promote healing and reduce inflammation. This therapy involves taking a small amount of the patient\u2019s blood, processing it to concentrate the platelets, and injecting the resulting solution into the affected area of the foot. PRP therapy is a safe and effective option for patients dealing with conditions such as plantar fasciitis or tendonitis.",
        "The use of ultrasound for the injection of platelet-rich plasma increases the precision of injection and the quality of results while decreasing the chance of complications. PRP injection therapy is generally completed in just one session but may require additional injections depending on the clinical circumstances.",
      ],
    },
    {
      kind: "prose",
      heading: "Cold Laser Treatment",
      paragraphs: [
        "Cold laser treatment is a non-invasive therapy that uses low-level laser energy to stimulate healing in the affected area. This therapy can reduce inflammation, relieve pain, and promote the growth of healthy tissue in the foot. Cold laser treatment is a safe and effective option for patients dealing with conditions such as plantar fasciitis or arthritis.",
      ],
    },
    {
      kind: "prose",
      heading: "Custom Orthotics",
      paragraphs: [
        "Custom orthotics are specially designed inserts that can be worn in your shoes to help provide support and reduce pain in the foot. Our skilled medical professionals will work with you to create a customized orthotic that meets your specific needs and helps you find relief from foot pain. Orthotics are a safe and effective option for patients dealing with conditions such as flat feet, plantar fasciitis, or bunions.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/shoulder-pain/                                         */
/* -------------------------------------------------------------------------- */

export const SHOULDER_PAIN_CONTENT: ServicePageContent = {
  slug: "shoulder-pain",
  urlPath: "/conditions-treated/shoulder-pain/",
  meta: {
    title: "Shoulder Pain Treatment in Geneva, IL | Restore Mobility",
    description:
      "Move without pain from Genesis Integrative Medicine. We provide shoulder pain treatment in Geneva, IL, to improve everyday function. Schedule your consultation.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/shoulder-pain/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Shoulder Pain" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Shoulder Pain",
    intro:
      "At Genesis Integrative Medicine in Geneva, IL, we specialize in helping patients address shoulder pain through advanced, holistic treatments. If you\u2019re searching for a shoulder pain doctor in Geneva, IL, our integrative approach combines physical therapy, chiropractic care, and other therapies to address both the symptoms and root causes of your shoulder pain.",
  },
  highlights: [
    { icon: "target", label: "Root-cause focus", note: "Not just symptom relief" },
    { icon: "spark", label: "Integrative team", note: "PT + chiro + PRP" },
    { icon: "heart", label: "Nutritional care", note: "Anti-inflammatory diet" },
    { icon: "shield", label: "Long-term relief", note: "Prevent recurrence" },
  ],
  featuredImage: {
    src: "/images/conditions/shoulder-pain/athlete-physio.jpg",
    alt: "Athlete doing physiotherapy",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Shoulder Pain Treatment",
    description:
      "Advanced, holistic shoulder pain care combining physical therapy, chiropractic adjustments, regenerative medicine (PRP), nutritional guidance, and lifestyle coaching to address the root causes of pain.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/shoulder-pain/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Comprehensive Shoulder Pain Diagnosis",
      paragraphs: [
        "When you visit our clinic for shoulder pain, we conduct an in-depth assessment to understand your condition thoroughly. As your trusted shoulder pain doctor clinic in Geneva, IL, we perform physical examinations, review your medical history, and, when needed, use advanced imaging techniques to diagnose the root cause of your pain accurately. This comprehensive approach enables us to develop an effective, individualized treatment plan.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Choose an Integrative Approach to Shoulder Pain?",
      paragraphs: [
        "At Genesis Integrative Medicine, we believe that addressing shoulder pain requires a holistic perspective. Shoulder pain can result from overuse, injury, arthritis, or even poor posture. A traditional medical approach might focus only on the symptoms, but our integrative treatments aim to identify and treat the root causes. Our shoulder pain doctor clinic in Geneva, IL, offers a range of non-invasive therapies that promote healing, alleviate discomfort, and improve overall well-being.",
        "When searching for a shoulder pain doctor in Geneva, IL, it\u2019s important to choose a provider who views your health holistically. By taking into account lifestyle factors, physical strain, and even stress levels, we develop a personalized approach that addresses the full spectrum of your health needs.",
      ],
    },
    {
      kind: "prose",
      heading: "Physical Therapy for Lasting Shoulder Pain Relief",
      paragraphs: [
        "Our physical therapy program is a cornerstone of shoulder pain treatment. Guided by your shoulder pain doctor in Geneva, IL, physical therapy focuses on strengthening the muscles around the shoulder, improving range of motion, and preventing future injuries. With targeted exercises and mobility drills, we can help you regain strength and flexibility, making daily tasks more manageable. Physical therapy also emphasizes posture correction, which can play a significant role in preventing shoulder pain from returning.",
      ],
    },
    {
      kind: "prose",
      heading: "Chiropractic Care for Shoulder Pain",
      paragraphs: [
        "Chiropractic care is another effective method we employ to treat shoulder pain. Misalignment in the spine or neck can place additional strain on the shoulders, leading to pain and limited mobility. Your shoulder pain doctor in Geneva, IL, may recommend chiropractic adjustments to correct these misalignments and restore balance to your body. By addressing these underlying issues, chiropractic care not only alleviates pain but also promotes proper joint function and body mechanics.",
      ],
    },
    {
      kind: "prose",
      heading: "Regenerative Medicine Options",
      paragraphs: [
        "For patients seeking innovative options, we offer regenerative medicine treatments that encourage natural healing and tissue repair. As a leading shoulder pain doctor clinic in Geneva, IL, we provide therapies such as platelet-rich plasma (PRP) injections, which harness the body\u2019s own growth factors to promote healing. PRP injections may help reduce inflammation and support tissue regeneration in the shoulder joint, allowing you to recover faster and with less discomfort.",
      ],
    },
    {
      kind: "prose",
      heading: "Nutritional Guidance for Pain Management",
      paragraphs: [
        "Diet and nutrition can significantly impact inflammation levels, which is why we integrate nutritional counseling into our shoulder pain treatment plans. An anti-inflammatory diet can help reduce pain and support the healing process, particularly for patients with chronic shoulder conditions such as arthritis. Your shoulder pain doctor in Geneva, IL, will provide personalized dietary recommendations to improve your body\u2019s ability to recover and manage pain effectively.",
      ],
    },
    {
      kind: "prose",
      heading: "Lifestyle Adjustments for Long-Term Relief",
      paragraphs: [
        "Our commitment to holistic healing means that we don\u2019t just address shoulder pain in the short term; we aim to help you prevent future issues as well. We work closely with patients to identify lifestyle factors, such as posture, repetitive motions, and stress, that may contribute to shoulder pain. Your shoulder pain doctor in Geneva, IL, will offer guidance on ergonomic adjustments, exercise routines, and stress management techniques to ensure that you stay pain-free and healthy.",
      ],
    },
    {
      kind: "prose",
      heading:
        "What to Expect When Working with Shoulder Pain Doctors at Genesis Integrative Medicine in Geneva, IL",
      paragraphs: [
        "When you choose Genesis Integrative Medicine as your shoulder pain doctor in Geneva, IL, you can expect compassionate care and a patient-centered approach. Our team takes the time to listen to your concerns, understand your health goals, and design a treatment plan tailored specifically to you. We believe that healing is a collaborative process, and we empower you with the knowledge and tools needed to take control of your health.",
      ],
    },
    {
      kind: "prose",
      heading: "Take the First Step Toward Shoulder Pain Relief",
      paragraphs: [
        "Shoulder pain doesn\u2019t have to limit your quality of life. By choosing Genesis Integrative Medicine, you\u2019re selecting a shoulder pain doctor in Geneva, IL, who prioritizes your overall well-being and treats the root causes of pain. Our integrative approach, combining traditional and holistic therapies, offers you a path to long-lasting relief, improved mobility, and enhanced health. Contact us today to schedule a consultation and start your journey toward a pain-free life.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/sciatica/                                              */
/* -------------------------------------------------------------------------- */

export const CONDITIONS_SCIATICA_CONTENT: ServicePageContent = {
  slug: "sciatica",
  urlPath: "/conditions-treated/sciatica/",
  meta: {
    title: "Sciatica Treatment in Geneva, IL | Expert Pain Solutions",
    description:
      "Improve your daily mobility with focused sciatica treatment at Genesis Integrative Medicine. We target nerve pressure in Geneva, IL. Contact our office today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/sciatica/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Sciatica" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Sciatica",
    subtitle: "Sciatica Doctor in Geneva",
    intro:
      "At Genesis Integrative Medicine, we understand that living with sciatica can be debilitating and can affect every aspect of your life. Our sciatica doctor in Geneva offers a comprehensive, integrative approach to managing and alleviating sciatic nerve pain, empowering you to regain control of your health and well-being. By combining traditional medical treatments with complementary therapies, we aim to address the root causes of your pain and provide long-lasting relief.",
  },
  highlights: [
    { icon: "target", label: "Root-cause care", note: "Nerve-focused" },
    { icon: "spark", label: "Integrative team", note: "PT + chiro + PRP" },
    { icon: "heart", label: "Personalized plans", note: "Tailored to you" },
    { icon: "shield", label: "Long-term relief", note: "Holistic recovery" },
  ],
  featuredImage: {
    src: "/images/conditions/sciatica/pexels-olly.jpg",
    alt: "Woman enjoying in the park while the leaves all around her",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Sciatica Treatment",
    description:
      "Comprehensive, integrative sciatica care combining chiropractic adjustments, trigger point injections, physical therapy, shockwave therapy (EPAT), and regenerative medicine to address the root causes of sciatic nerve pain.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/sciatica/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
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
      kind: "prose",
      heading: "Integrative Treatments for Sciatica",
      paragraphs: [
        "Our integrative approach to sciatica treatment includes a variety of therapies and techniques to provide comprehensive care and lasting relief.",
        "Chiropractic adjustments can help realign the spine, reducing pressure on the sciatic nerve and alleviating pain. Our skilled chiropractors use gentle, targeted techniques to improve spinal alignment and promote healing.",
        "Trigger Point Injections involve the precise injection of a small amount of anesthetic or saline directly into muscle knots, or \u201Ctrigger points,\u201D to relieve pain and tension. This therapy can help alleviate sciatica pain by relaxing tight muscles, reducing inflammation, and improving circulation, ultimately enhancing the body\u2019s natural healing processes.",
        "Physical therapy is an essential component of our integrative approach to sciatica treatment. Our sciatica doctor in Geneva works with skilled physical therapists to develop personalized exercise programs that strengthen the muscles supporting the spine, improve flexibility, and reduce pain.",
        "Shockwave Therapy (EPAT) uses high-energy acoustic waves to stimulate the healing of tissues, reduce inflammation, and improve circulation, all of which can alleviate sciatica pain. This non-invasive treatment targets the affected muscles and tissues, promoting relief and accelerating the body\u2019s natural healing processes.",
        "Our clinic offers cutting-edge regenerative medicine therapies \u2013 such as platelet-rich plasma (PRP) and stem cell treatments \u2013 to promote healing and reduce inflammation in patients with sciatica. These innovative therapies can help repair damaged tissues and improve overall function.",
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
      kind: "list",
      heading: "Why Choose Genesis Integrative Medicine?",
      intro:
        "At Genesis Integrative Medicine, we are dedicated to providing our patients with the highest quality care and support. Our experienced sciatica doctor in Geneva offers a comprehensive, integrative approach to treating sciatic nerve pain, ensuring you receive personalized care tailored to your unique needs and goals.",
      items: [
        "Our team of healthcare professionals, including our Geneva sciatica doctor, is skilled in a variety of fields \u2013 including chiropractic care, acupuncture, physical therapy, and regenerative medicine \u2013 ensuring you receive the best care possible.",
        "Our clinic offers cutting-edge regenerative medicine therapies and integrative treatments to promote healing and provide lasting relief from sciatica pain.",
        "We address all aspects of your health, ensuring a holistic approach to sciatica treatment that promotes overall well-being and long-term relief.",
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
/* /conditions-treated/herniated-disc/                                        */
/* -------------------------------------------------------------------------- */

export const HERNIATED_DISC_CONTENT: ServicePageContent = {
  slug: "herniated-disc",
  urlPath: "/conditions-treated/herniated-disc/",
  meta: {
    title: "Herniated Disc Treatment in Geneva | Advanced Spine Care",
    description:
      "Reduce back and neck pain with the help of Genesis Integrative Medicine. We provide herniated disc treatment in Geneva, IL, for lasting relief. Call us today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/herniated-disc/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Herniated Disc" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Herniated Disc Doctor in Geneva",
    intro:
      "Living with a herniated disc can be a painful and frustrating experience, impacting your ability to perform daily tasks and enjoy life to the fullest. If you\u2019re dealing with persistent back pain, numbness, or weakness, finding the right care is crucial. At Genesis Integrative Medicine, we offer comprehensive, patient-focused treatment for herniated discs that addresses both symptoms and underlying causes. As a leading herniated disc doctor in Geneva, we specialize in innovative, non-surgical approaches to help you recover, manage pain, and regain your mobility.",
  },
  highlights: [
    { icon: "shield", label: "Non-surgical", note: "Minimally invasive" },
    { icon: "target", label: "Root-cause focus", note: "Beyond symptom relief" },
    { icon: "spark", label: "PRP + shock wave", note: "Advanced modalities" },
    { icon: "heart", label: "Personalized care", note: "Tailored plans" },
  ],
  featuredImage: {
    src: "/images/conditions/herniated-disc/spine-model.jpg",
    alt: "Female doctor showing a spine model to a patient",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Herniated Disc Treatment",
    description:
      "Comprehensive, non-surgical herniated disc care combining chiropractic adjustments, regenerative medicine (PRP), physical therapy, shock wave therapy, and cold laser therapy to address root causes and restore mobility.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/herniated-disc/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Understanding Herniated Discs",
      paragraphs: [
        "A herniated disc, also known as a slipped or ruptured disc, occurs when the soft, gel-like center of a spinal disc pushes through a tear in the tougher exterior. This condition can compress nearby nerves, leading to pain, numbness, and weakness, typically in the back, neck, arms, or legs. The pain from a herniated disc can vary in intensity, from a mild ache to debilitating discomfort that interferes with everyday activities. Consulting a skilled herniated disc doctor in Geneva can help you get an accurate diagnosis and start an effective treatment plan tailored to your needs.",
        "Common causes of herniated discs include age-related degeneration, improper lifting techniques, trauma, and repetitive movements that strain the spine. Genetics, obesity, and a sedentary lifestyle can also increase the risk of developing this condition. Recognizing the signs early and seeking help from a knowledgeable herniated disc specialist can prevent further complications and promote faster recovery.",
      ],
    },
    {
      kind: "list",
      heading: "Common Symptoms of a Herniated Disc",
      intro:
        "The symptoms of a herniated disc depend on the location of the affected disc and whether it is pressing on a nerve. You may experience pain, tingling, numbness, or muscle weakness in the area served by the affected nerves. If you have any of these symptoms, it\u2019s important to consult with a herniated disc doctor in Geneva:",
      items: [
        "Back or Neck Pain: Pain that worsens with movement or prolonged sitting, often radiating to the arms or legs.",
        "Numbness or Tingling: Affected areas may feel numb or tingly, often extending from the back down the arms or legs.",
        "Muscle Weakness: Weakened muscles in the area of the affected nerves can impact your ability to lift, grip, or perform everyday movements.",
        "Sciatica: Pain that shoots down one leg from the buttock to the foot, often caused by a herniated disc in the lower back.",
      ],
      outro:
        "If you are experiencing these symptoms, early intervention with a herniated disc doctor in Geneva is essential for managing pain and preventing further nerve damage.",
    },
    {
      kind: "list",
      heading: "Our Holistic Approach to Herniated Disc Treatment",
      intro:
        "At Genesis Integrative Medicine, we believe in treating herniated discs with a holistic approach that addresses the root cause of your pain, rather than just masking the symptoms. As trusted herniated disc doctors in Geneva, we offer a combination of advanced therapies that promote healing, reduce inflammation, and restore function without the need for invasive surgery. Our goal is to help you achieve lasting pain relief and get back to enjoying your life. Here are some of the treatment options we provide:",
      items: [
        "Chiropractic Care: Our chiropractic adjustments focus on realigning the spine, reducing nerve compression, and alleviating pain. This non-invasive approach can significantly improve mobility and promote natural healing, making it an ideal option for herniated disc patients.",
        "Regenerative Medicine: We use regenerative therapies, such as platelet-rich plasma (PRP) injections, to promote the repair of damaged tissues and reduce inflammation. These treatments harness your body\u2019s natural healing power to support disc recovery and relieve nerve pressure.",
        "Physical Therapy: Customized physical therapy programs are designed to strengthen the muscles supporting your spine, improve flexibility, and reduce the stress on the herniated disc. Our therapists will work with you to develop exercises tailored to your specific condition and recovery goals.",
        "Shock Wave Therapy: Shock wave therapy is a non-invasive treatment that uses acoustic waves to promote healing and relieve pain. These waves stimulate blood flow and tissue regeneration, helping to reduce inflammation and accelerate recovery. It\u2019s an effective treatment option offered by our herniated disc specialist in Geneva.",
        "Cold Laser Therapy: Cold laser therapy is a safe and painless way to manage pain and inflammation from herniated discs. By using low-level laser energy, this therapy helps to increase circulation, reduce inflammation, and stimulate tissue repair. It\u2019s a great option for promoting healing and enhancing overall well-being.",
      ],
    },
    {
      kind: "prose",
      heading: "Personalized Care from Your Herniated Disc Doctor in Geneva",
      paragraphs: [
        "Every patient\u2019s experience with a herniated disc is unique, and at Genesis Integrative Medicine, we tailor our approach to meet your specific needs. As your herniated disc doctor in Geneva, we start with a comprehensive evaluation that includes reviewing your medical history, conducting a physical examination, and, if necessary, ordering imaging studies such as X-rays or MRIs to accurately diagnose your condition.",
        "Once we have a clear understanding of the extent and cause of your herniated disc, we will develop a customized treatment plan that addresses your symptoms and supports your overall health. We believe in empowering our patients through education, helping you understand your condition and the steps you can take to manage it effectively.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Choose Genesis Integrative Medicine?",
      paragraphs: [
        "Choosing Genesis Integrative Medicine means partnering with a team that prioritizes your well-being and recovery. Our integrative approach combines the best of traditional and alternative therapies, ensuring you receive comprehensive care that supports your body\u2019s natural healing abilities. As your dedicated herniated disc doctors in Geneva, we strive to provide a comfortable, supportive environment where you can focus on your recovery.",
        "Our commitment to personalized care means you\u2019ll receive the attention and guidance you need at every stage of your treatment. We understand the physical and emotional toll a herniated disc can take, and our goal is to help you find relief through minimally invasive, effective treatments.",
      ],
    },
    {
      kind: "prose",
      heading: "What to Expect during Your Visit",
      paragraphs: [
        "When you visit our clinic, your initial consultation with one of our herniated disc doctors in Geneva will involve a thorough evaluation of your symptoms, medical history, and lifestyle factors that may be contributing to your condition. We take the time to listen to your concerns and answer any questions you may have about your treatment options.",
        "Based on your diagnosis, we will outline a personalized treatment plan that may include a combination of chiropractic care, physical therapy, regenerative medicine, or other modalities suited to your needs. Throughout your treatment, we will monitor your progress closely, making adjustments as needed to ensure you are getting the best possible outcomes.",
      ],
    },
    {
      kind: "prose",
      heading: "Take the First Step toward Pain Relief Today",
      paragraphs: [
        "If you\u2019re struggling with the pain and limitations of a herniated disc, don\u2019t wait to seek help. Contact Genesis Integrative Medicine to schedule an appointment with a skilled herniated disc doctor in Geneva. Our holistic, patient-focused approach is designed to provide relief from pain, improve your mobility, and help you regain control over your life.",
        "At Genesis Integrative Medicine, we are committed to helping you find lasting solutions for your herniated disc. Let us guide you through a personalized treatment plan that addresses your unique needs and puts you on the path to recovery. Call us today to take the first step toward a healthier, pain-free future with the support of a dedicated herniated disc doctor in Geneva.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Convenience lookup                                                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* /conditions-treated/neuropathy/                                            */
/* -------------------------------------------------------------------------- */

export const NEUROPATHY_CONTENT: ServicePageContent = {
  slug: "neuropathy",
  urlPath: "/conditions-treated/neuropathy/",
  meta: {
    title: "Neuropathy Doctor in Geneva | Relief from Nerve Pain",
    description:
      "End the tingling and burning nerve pain today with Genesis Integrative Medicine. Our neuropathy doctors in Geneva, IL, restore health without drugs. Call now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/neuropathy/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Neuropathy" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Neuropathy Doctor in Geneva",
    intro:
      "Living with neuropathy can be a debilitating and distressing experience, affecting your daily activities, sleep, and overall quality of life. Neuropathy, often characterized by tingling, burning, or shooting pain in the extremities, can make even simple tasks challenging.",
  },
  highlights: [
    { icon: "target", label: "Root-cause care", note: "Beyond symptom masking" },
    { icon: "shield", label: "Drug-free", note: "Non-invasive protocols" },
    { icon: "spark", label: "Advanced modalities", note: "Shockwave, PRP, laser" },
    { icon: "heart", label: "Personalized plan", note: "Whole-person approach" },
  ],
  featuredImage: {
    src: "/images/conditions/neuropathy/tingling-hand.jpg",
    alt: "Tingling and numbness in his hand which causes pain",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Neuropathy Treatment",
    description:
      "Comprehensive, integrative neuropathy care combining shockwave therapy, cold laser therapy, electrical nerve stimulation, regenerative medicine (PRP), and customized nutrition to address the root cause of nerve pain.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/neuropathy/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      paragraphs: [
        "At Genesis Integrative Medicine, our goal is to provide comprehensive, personalized care for those struggling with neuropathy. If you\u2019re searching for a neuropathy doctor in Geneva, our team is dedicated to finding the root cause of your symptoms and creating a holistic treatment plan that helps you regain control of your health.",
      ],
    },
    {
      kind: "prose",
      heading: "Understanding Neuropathy",
      paragraphs: [
        "Neuropathy is a condition that involves damage to the peripheral nerves, which transmit signals between the brain, spinal cord, and the rest of the body. This nerve damage can result in a wide range of symptoms, including pain, numbness, weakness, and impaired coordination, often affecting the hands, feet, arms, or legs. Neuropathy can stem from various causes, including diabetes, autoimmune diseases, infections, injuries, and even certain medications. Finding the right neuropathy doctor in Geneva is crucial for accurately diagnosing your condition and developing a personalized treatment approach that addresses your specific needs.",
      ],
    },
    {
      kind: "list",
      heading: "Common Symptoms of Neuropathy",
      intro:
        "Neuropathy symptoms can vary widely depending on the type and extent of nerve damage. Some people experience mild tingling, while others may suffer from severe pain that disrupts their daily lives. Common symptoms that indicate you may need to see a neuropathy doctor in Geneva include the following:",
      items: [
        "Tingling or burning sensations in the hands or feet",
        "Sharp, shooting pains or cramps",
        "Numbness or reduced ability to feel temperature or touch",
        "Muscle weakness or difficulty moving",
        "Sensitivity to touch or pressure",
        "Difficulty with balance and coordination",
      ],
      outro:
        "If you are experiencing any of these symptoms, it\u2019s essential to seek help from a neuropathy specialist who can guide you toward effective treatment options. Early intervention can make a significant difference in managing the condition and preventing further nerve damage.",
    },
    {
      kind: "list",
      heading: "Holistic Treatment Approach",
      intro:
        "At Genesis Integrative Medicine, we believe that treating neuropathy requires a comprehensive approach that goes beyond merely addressing symptoms. As a leading neuropathy doctor in Geneva, we combine advanced medical therapies with integrative treatments to create a customized care plan for each patient. Our holistic approach focuses on reducing pain, enhancing nerve function, and improving overall quality of life through a combination of the following therapies:",
      items: [
        "Shockwave Therapy: Shockwave therapy is a non-invasive treatment that utilizes acoustic waves to promote healing and relieve pain in injured tissues. By stimulating blood flow, reducing inflammation, and accelerating cell regeneration, it helps the body repair damaged muscles, tendons, and joints. Shockwave therapy is effective for chronic pain conditions, soft tissue injuries, and musculoskeletal disorders.",
        "Cold Laser Therapy: Cold laser therapy uses low-intensity laser light to penetrate tissues and promote cellular healing. This painless treatment helps reduce inflammation, enhance circulation, and accelerate tissue repair. It\u2019s particularly beneficial for those dealing with chronic pain, joint inflammation, and soft tissue injuries, offering a natural, non-invasive way to speed up recovery.",
        "Electrical Nerve Stimulation: Electrical nerve stimulation uses low-level electrical impulses to target nerves and block pain signals, providing relief from acute or chronic pain. This non-invasive therapy improves circulation, reduces muscle spasms, and promotes healing. It\u2019s commonly used for conditions like arthritis, neuropathy, and post-surgical recovery, offering a drug-free approach to pain management.",
        "Regenerative Medicine: Regenerative medicine focuses on harnessing the body\u2019s natural healing processes to repair and regenerate damaged tissues. Using therapies like stem cell treatments, platelet-rich plasma (PRP), and tissue engineering, it stimulates the body to heal injuries, reduce inflammation, and regenerate healthy tissues. Regenerative medicine is a powerful option for treating joint pain, musculoskeletal injuries, and degenerative conditions.",
        "Customized Nutrition: Customized nutrition creates personalized dietary plans based on an individual\u2019s unique needs, lifestyle, and health goals. By considering factors like genetics, nutrient deficiencies, and specific health conditions, customized nutrition helps optimize energy levels, support weight management, and improve overall well-being. This tailored approach ensures the body gets exactly what it needs for optimal health and healing.",
      ],
    },
    {
      kind: "prose",
      heading: "Personalized Care from Your Neuropathy Doctor in Geneva",
      paragraphs: [
        "Every person\u2019s experience with neuropathy is unique, and a one-size-fits-all approach rarely leads to optimal outcomes. At Genesis Integrative Medicine, we take the time to understand your specific situation, reviewing your medical history, symptoms, and potential underlying causes. Our neuropathy doctor in Geneva conducts thorough evaluations, including diagnostic testing and physical assessments, to determine the best course of action for your treatment.",
        "We prioritize open communication and collaboration, ensuring that you are fully informed about your condition and the available treatment options. Our integrative approach aims to address not only the physical symptoms of neuropathy but also the emotional and mental toll it can take. By focusing on the whole person, we strive to help you achieve lasting relief and improved quality of life.",
      ],
    },
    {
      kind: "prose",
      heading: "Why Choose Genesis Integrative Medicine?",
      paragraphs: [
        "As a trusted neuropathy doctor in Geneva, Genesis Integrative Medicine offers a patient-centered approach that combines the best of conventional and integrative medicine. Our goal is to provide comprehensive care that addresses the root causes of neuropathy, rather than simply masking the symptoms. By working with a multidisciplinary team of healthcare professionals, we can offer a wide range of therapies tailored to your needs.",
        "Choosing Genesis Integrative Medicine means gaining access to cutting-edge treatments and compassionate care that prioritizes your well-being. We are committed to helping you find relief from neuropathy and supporting you on your journey to better health. Our holistic approach ensures that you receive the most effective, minimally invasive treatments available, all while maintaining a focus on your overall wellness.",
      ],
    },
    {
      kind: "prose",
      heading: "What to Expect at Your Appointment",
      paragraphs: [
        "When you visit our clinic, you will receive a thorough consultation with our neuropathy doctor in Geneva, who will take the time to listen to your concerns and perform a detailed evaluation. We will discuss your symptoms, medical history, and any previous treatments you\u2019ve tried, allowing us to develop a personalized care plan. Diagnostic tests may be recommended to pinpoint the cause and severity of your neuropathy, ensuring we address the issue at its source.",
        "Once your treatment plan is in place, our team will support you every step of the way, making adjustments as needed to ensure the best possible outcomes. Whether you\u2019re seeking relief from pain, improved mobility, or a better understanding of your condition, our dedicated team is here to help.",
      ],
    },
    {
      kind: "prose",
      heading: "Schedule Your Appointment Today",
      paragraphs: [
        "At Genesis Integrative Medicine, we are committed to providing innovative, integrative care that empowers you to live your best life. Let our neuropathy doctors in Geneva guide you through a personalized treatment plan that addresses your unique needs and helps you find relief.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/tendonitis/                                            */
/* -------------------------------------------------------------------------- */

export const TENDONITIS_CONTENT: ServicePageContent = {
  slug: "tendonitis",
  urlPath: "/conditions-treated/tendonitis/",
  meta: {
    title: "Tendonitis Treatment in Geneva | Relief for Joint Pain",
    description:
      "Stop the recurring aches by starting tendonitis treatment at Genesis Integrative Medicine. We restore your flexibility in Geneva, IL. Schedule an appointment.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/tendonitis/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Tendonitis" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Tendonitis and Bursitis Doctor in Geneva",
    intro:
      "Living with pain from tendonitis or bursitis can be incredibly frustrating, especially when it interferes with daily activities and the things you love most. At Genesis Integrative Medicine, our goal is to offer comprehensive, personalized care that addresses the root causes of your discomfort. If you\u2019re searching for a tendonitis and bursitis doctor in Geneva, we are here to provide the holistic and integrative treatment options you need to find relief and reclaim your quality of life.",
  },
  highlights: [
    { icon: "target", label: "Root-cause care", note: "Beyond symptom relief" },
    { icon: "spark", label: "PRP + shockwave", note: "Regenerative therapies" },
    { icon: "heart", label: "Nutritional support", note: "Anti-inflammatory" },
    { icon: "shield", label: "Long-term relief", note: "Prevent flare-ups" },
  ],
  featuredImage: {
    src: "/images/conditions/tendonitis/chiropractor-arm.jpg",
    alt: "Chiropractor massaging the arm of a patient",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Tendonitis and Bursitis Treatment",
    description:
      "Integrative treatment for tendonitis and bursitis combining physical therapy, manual adjustments, PRP injections, trigger point injections, shockwave therapy, cold laser therapy, and nutritional guidance.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/tendonitis/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Understanding Tendonitis and Bursitis",
      paragraphs: [
        "Tendonitis and bursitis are common conditions that involve inflammation and pain in the body\u2019s connective tissues. Tendonitis is the inflammation of a tendon, the thick fibrous cords that attach muscle to bone, often caused by repetitive strain or acute injury. Bursitis, on the other hand, affects the bursae, which are small fluid-filled sacs that cushion the joints, tendons, and muscles. Bursitis commonly develops due to repetitive motion, pressure, or overuse of a joint. Both conditions are often associated with pain, swelling, stiffness, and reduced range of motion, making even simple tasks feel daunting.",
        "If you\u2019re dealing with these conditions, seeing a tendonitis and bursitis doctor in Geneva can help you get a proper diagnosis and treatment plan tailored to your specific needs. At Genesis Integrative Medicine, we focus on creating individualized treatment protocols to reduce inflammation, promote healing, and prevent future flare-ups.",
      ],
    },
    {
      kind: "prose",
      heading: "Signs You May Need a Tendonitis and Bursitis Doctor in Geneva",
      paragraphs: [
        "Knowing when to seek professional care can make a significant difference in managing tendonitis and bursitis effectively. Some signs that it\u2019s time to see a tendonitis and bursitis doctor in Geneva include persistent pain that doesn\u2019t improve with rest, swelling around a joint, redness or warmth in the affected area, and difficulty moving the affected joint without discomfort. Ignoring these symptoms can lead to more severe complications, so early intervention is crucial.",
      ],
    },
    {
      kind: "list",
      heading: "Holistic Approach to Treatment",
      intro:
        "At Genesis Integrative Medicine, we believe in addressing the whole person rather than just the symptoms. Our approach to treating tendonitis and bursitis goes beyond conventional medicine by combining the best of integrative therapies to support your body\u2019s natural healing processes. As tendonitis and bursitis doctors in Geneva, we utilize a range of treatments, including physical therapy, manual adjustments, acupuncture, regenerative medicine, and nutritional guidance.",
      items: [
        "Physical Therapy and Rehabilitation: Targeted exercises and stretches help improve flexibility, strengthen muscles, and restore proper function to the affected areas. Our physical therapists work closely with our doctors to develop a personalized program tailored to your unique condition.",
        "Manual Adjustments and Myofascial Release: Manual therapies can help realign the body, relieve pressure on inflamed tissues, and enhance mobility. These hands-on techniques are designed to reduce tension, improve circulation, and support the body\u2019s structural balance.",
        "Regenerative Medicine: Our tendonitis and bursitis doctors in Geneva offer advanced regenerative medicine options, such as platelet-rich plasma (PRP) injections, which use your body\u2019s own healing properties to repair damaged tendons and bursae. This cutting-edge treatment can accelerate recovery and improve overall outcomes.",
        "Trigger Point Injections: Trigger point injections target areas of muscle tightness, known as trigger points, to relieve pain and tension. By injecting a small amount of anesthetic or saline solution directly into the affected muscle, the treatment helps release tight knots, reduce muscle tension, and alleviate discomfort. It\u2019s an effective therapy for managing muscle pain, headaches, and tension in the neck and back.",
        "Shockwave Therapy: Shockwave therapy delivers high-energy acoustic waves to the affected area, promoting tissue healing and pain relief. This non-invasive treatment stimulates blood flow and collagen production, helping to break down scar tissue and reduce inflammation. It\u2019s an ideal option for those suffering from chronic pain, soft tissue injuries, or musculoskeletal conditions.",
        "Cold Laser Therapy: Cold laser therapy uses low-level laser light to penetrate tissues, reducing inflammation and stimulating the body\u2019s natural healing processes. The painless treatment enhances blood circulation and accelerates tissue repair, making it an excellent choice for managing pain and promoting recovery from injuries or chronic conditions.",
        "Nutritional and Lifestyle Guidance: Diet and lifestyle choices play a crucial role in managing inflammation and supporting overall joint health. Our integrative approach includes personalized nutrition plans and supplements to help reduce inflammation and support your body\u2019s healing processes.",
      ],
    },
    {
      kind: "prose",
      heading: "Personalized Care Tailored to Your Needs",
      paragraphs: [
        "Every patient is different, and at Genesis Integrative Medicine, we take the time to listen to your concerns and understand your medical history, lifestyle, and goals. Whether your tendonitis or bursitis is due to sports injuries, repetitive work-related tasks, or general wear and tear, one of our tendonitis and bursitis doctors in Geneva will create a treatment plan tailored specifically to your needs. We aim to get to the root cause of your pain and provide long-lasting solutions, rather than just masking the symptoms.",
      ],
    },
    {
      kind: "prose",
      heading: "The Benefits of Choosing Genesis Integrative Medicine",
      paragraphs: [
        "Choosing the right healthcare provider is essential when dealing with chronic pain conditions such as tendonitis and bursitis. As your tendonitis and bursitis doctors in Geneva, we offer a compassionate, patient-centered approach that emphasizes long-term wellness. Our integrative treatments are designed to minimize downtime, reduce the need for invasive procedures, and help you get back to enjoying your daily activities as quickly and safely as possible.",
        "We prioritize open communication and will guide you through every step of your treatment journey. Our multidisciplinary team works collaboratively to ensure you receive the best possible care, utilizing a combination of conventional and alternative therapies that are backed by science and tailored to your body\u2019s unique needs.",
      ],
    },
    {
      kind: "prose",
      heading: "What to Expect at Your Visit",
      paragraphs: [
        "When you come to Genesis Integrative Medicine, you\u2019ll start with a comprehensive consultation with a tendonitis and bursitis doctor in Geneva. We will perform a thorough evaluation, which may include a physical exam, medical history review, and imaging tests if necessary, to accurately diagnose your condition. From there, we will discuss your treatment options and develop a customized care plan that aligns with your goals and lifestyle.",
        "Throughout your care, we will monitor your progress and adjust your treatment as needed, ensuring you receive the most effective and up-to-date therapies available. Our goal is to help you achieve long-term relief and prevent future recurrences of tendonitis or bursitis.",
      ],
    },
    {
      kind: "prose",
      heading: "Schedule an Appointment Today",
      paragraphs: [
        "If you\u2019re ready to take control of your health and find relief from tendonitis or bursitis, Genesis Integrative Medicine is here to help. As your trusted tendonitis and bursitis doctors in Geneva, we are committed to providing compassionate, effective care that addresses the root causes of your pain. Don\u2019t let tendonitis or bursitis hold you back any longer. Contact us today to schedule an appointment and start your journey toward a pain-free life.",
        "At Genesis Integrative Medicine, we believe in empowering our patients with the knowledge and tools they need to achieve optimal health. Let our tendonitis and bursitis doctors in Geneva guide you toward recovery with an integrative approach that prioritizes your wellness every step of the way.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/bursitis/                                              */
/* -------------------------------------------------------------------------- */

export const BURSITIS_CONTENT: ServicePageContent = {
  slug: "bursitis",
  urlPath: "/conditions-treated/bursitis/",
  meta: {
    title: "Bursitis Treatment in Geneva | Expert Therapy for Joints",
    description:
      "Eliminate persistent shoulder and hip aches using bursitis treatment at Genesis Integrative Medicine. We help Geneva, IL, residents. Call today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/bursitis/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Bursitis" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Bursitis",
    subtitle: "Bursitis Q & A",
  },
  highlights: [
    { icon: "target", label: "Joint-focused", note: "Shoulder, elbow, hip" },
    { icon: "shield", label: "Non-surgical", note: "Conservative first" },
    { icon: "spark", label: "Expert diagnosis", note: "Selective tissue test" },
    { icon: "heart", label: "Personalized care", note: "Cause-specific plan" },
  ],
  featuredImage: {
    src: "/images/conditions/bursitis/shoulder-pain.jpg",
    alt: "Shoulder joint pain, severe ache",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Bursitis Treatment",
    description:
      "Non-surgical, integrative bursitis treatment for shoulder, elbow, hip, and other joints \u2014 combining physical examination, selective tissue testing, and conservative therapies to reduce inflammation and restore mobility.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/bursitis/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      paragraphs: [
        "Bursitis condition that affects the small, fluid-filled sacs \u2014 called bursae\u2014 that cushion the bones, tendons and muscles near your joints. Bursitis occurs when bursae become inflamed. Whether it\u2019s the knee, shoulder, or ankle, bursitis can be painful and hold you back from your normal activities. Tendons are connective tissues found on either side of a joint. These tendons attach to muscles which control joint movement. Every joint also has a bursa. These fluid-filled sacs minimize the rubbing and resistance so your joints can move freely. It is because of this that these conditions can often go hand-in-hand.",
        "The most common areas for bursitis are in the shoulder, elbow and hip. Bursitis is often times a painful condition that should be treated as soon as possible.",
        "Naturally, as we age, our bodies tend to become less flexible and make us more susceptible to conditions such as bursitis. Other health diagnosis such as diabetes and rheumatoid arthritis weaken body tissue, resulting in a higher risk of bursitis.",
        "Sometimes if you\u2019ve started a new activity, such as playing a new sport, you may be putting stress on parts of your body that aren\u2019t accustomed to it.",
      ],
    },
    {
      kind: "list",
      intro:
        "The symptoms from bursitis can come on suddenly or develop overtime. When a tendon or bursa is inflamed, pain can manifest in different ways:",
      items: [
        "Sharp pain when moving or touching the joint.",
        "Aching when the joint is at rest.",
        "Swelling and redness in the injured area.",
        "May feel warm to the touch.",
      ],
      outro:
        "Most cases of bursitis can be treated with conservative, non-surgical procedures. Treatment for bursitis and tendonitis can be similar in nature and is highly dependent on the cause. For an accurate treatment, your specialist at Genesis Integrative Medicine will conduct a physical exam, often including a selective tissues test to determine which tendon is causing the pain.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/allergies/                                             */
/* -------------------------------------------------------------------------- */

export const ALLERGIES_CONTENT: ServicePageContent = {
  slug: "allergies",
  urlPath: "/conditions-treated/allergies/",
  meta: {
    title: "Allergy Care in Geneva | Advanced Treatment for Adults",
    description:
      "Eliminate your sneezing and watery eyes using allergy care at Genesis Integrative Medicine. We provide modern care in Geneva, IL. Visit our office today.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/allergies/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-1img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Allergies" },
  ],
  hero: {
    kicker: "Genesis Integrative Medicine",
    h1: "Allergies",
    subtitle: "Allergies Q & A",
  },
  highlights: [
    { icon: "target", label: "MRT testing", note: "140 foods, 30 chemicals" },
    { icon: "shield", label: "Food + airborne", note: "Full spectrum care" },
    { icon: "spark", label: "Immunotherapy", note: "Shots or sublingual" },
    { icon: "heart", label: "Elimination diet", note: "Personalized plan" },
  ],
  featuredImage: {
    src: "/images/conditions/allergies/rash-arm.jpg",
    alt: "Woman with rash or papule and scratch on her arm",
    width: 1600,
    height: 1067,
  },
  serviceJsonLd: {
    name: "Allergy Treatment",
    description:
      "Advanced allergy diagnosis and treatment combining immune response testing (including MRT), elimination diet planning, and immunotherapy (allergy shots or sublingual drops) to identify triggers and relieve symptoms.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/allergies/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      paragraphs: [
        "Do you have allergy symptoms and suspect certain foods might be the cause? At Genesis Integrative Medicine we can test your immune system response to specific food proteins, which can be part of helping to determine whether you have an allergy.",
        "A food allergy is a common type of allergy and can cause serious allergic reactions in some people. Nut allergies, in particular, can cause a severe, someitmes life-threatening response. If someone with a food allergy eats or comes across products containing those specific food proteins your immune system activates the release of too much of the antibody IgE. IgE activation causes the release of a substance called histamine, which causes an allergic reaction.",
        "A mediator release test is a blood test that identifies our body\u2019s reactions to 140 foods and 30 food chemicals by measuring the number of mediators released and the subsequent changes in white blood cells.",
        "Specifically, the MRT test can identify which items cause an inflammatory response in your body. MRT is the foundation of fully addressing food sensitivities and achieving the maximum outcomes in the shortest period of time.",
        "Testing gives you insight into your allergies and the triggers that cause symptoms and helps your provider create the right treatment options, including an elimination diet, to relieve symptoms and prevent life-threatening complications. Immunotherapy is another treatment of choice for airborne allergens and can either be done with allergy shots or sublingual drops.",
        "If you struggle with seasonal or year-round allergies, schedule an in-office allergy test by calling Genesis Integrative Medicine today.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Convenience lookup                                                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* /conditions-treated/joint-pain/                                            */
/* -------------------------------------------------------------------------- */

export const JOINT_PAIN_CONTENT: ServicePageContent = {
  slug: "joint-pain",
  urlPath: "/conditions-treated/joint-pain/",
  meta: {
    title: "Joint Pain Doctor in Geneva, IL | Holistic Treatments",
    description:
      "Move with total confidence after meeting a Geneva joint pain doctor at Genesis Integrative Medicine. We provide expert spinal support. Schedule your exam now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/joint-pain/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2022/07/service-5img.webp",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Joint Pain" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Joint Pain Doctor in Geneva",
    intro:
      "Modern medicine doesn\u2019t have a great solution to joint pain. Although joint pain can significantly impact your quality of life, the remedies aren\u2019t always appealing. Surgery and medications have obvious downsides, but what if there was a third option?",
  },
  highlights: [
    { icon: "target", label: "Root-cause care", note: "Whole-body approach" },
    { icon: "shield", label: "Avoid surgery", note: "Non-invasive options" },
    { icon: "spark", label: "PRP + regen", note: "Advanced modalities" },
    { icon: "heart", label: "Personalized plan", note: "One-on-one care" },
  ],
  featuredImage: {
    src: "/images/conditions/joint-pain/joint-consult.jpg",
    alt: "Joint pain consultation at Genesis Integrative Medicine",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Joint Pain Treatment",
    description:
      "Holistic, non-surgical joint pain care combining chiropractic adjustments, physical therapy, PRP, regenerative medicine, cold laser therapy, therapeutic injections, and shockwave therapy for back, neck, knee, shoulder, ankle, and hip pain.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/joint-pain/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      paragraphs: [
        "At Genesis Integrative Medicine in Geneva, IL, we specialize in holistic, patient-centered recovery. We focus on stimulating the body\u2019s own healing properties, which have been shown to result in long-term success without damaging tissues. If you\u2019re looking for comprehensive, natural solutions for joint pain, then our team is ready to meet you.",
      ],
    },
    {
      kind: "prose",
      heading: "Understanding the Body\u2019s Natural Healing Process",
      paragraphs: [
        "The human body possesses an incredible capacity for self-repair. When you suffer an injury, your body initiates a complex healing process, which includes inflammation, tissue regeneration, and remodeling. However, various factors such as chronic conditions, aging, and severe injuries can impede these natural processes, leading to prolonged pain and dysfunction.",
        "Regenerative medicine works by enhancing and accelerating the body\u2019s innate healing mechanisms. By using advanced therapies using human cellular tissue products (HCT/Ps) and Platelet-Rich Plasma (PRP), we can stimulate tissue repair, reduce inflammation, and promote the regeneration of damaged tissues, offering relief from chronic pain and enhancing overall recovery.",
      ],
    },
    {
      kind: "prose",
      heading: "Avoid Surgery and Long-term Pain Medications",
      paragraphs: [
        "Many patients face the daunting prospect of surgery or the long-term use of pain medications to manage joint pain. However, surgeries often have low success rates and extended recovery times, while pain medications can lead to dependency and other health issues. Genesis Integrative Medicine in Geneva, IL, provides natural and effective treatments that help you get back to the activities you love without the need for invasive procedures or prolonged medication use.",
        "At Genesis Integrative Medicine, we address joint pain in various parts of the body, tailoring our approach to each specific area for optimal results:",
        "We provide targeted treatments for back pain, addressing issues such as spinal misalignments, muscle strain, and disc problems to alleviate discomfort and improve mobility.",
        "Our therapies for neck pain focus on reducing inflammation, relieving muscle tension, and correcting postural issues that contribute to chronic pain.",
        "Whether due to injury, arthritis, or overuse, our knee pain treatments aim to restore function, reduce inflammation, and promote healing through non-invasive methods.",
        "We offer specialized care for shoulder pain, addressing conditions like rotator cuff injuries, bursitis, and tendonitis with tailored therapeutic approaches.",
        "Our treatments for ankle pain focus on improving stability, reducing inflammation, and promoting recovery from sprains, strains, and other injuries.",
        "For hip pain, we provide therapies that enhance joint function, reduce pain, and improve mobility, helping you maintain an active lifestyle.",
      ],
    },
    {
      kind: "prose",
      heading: "Personalized One-on-One Care",
      paragraphs: [
        "At Genesis Integrative Medicine, we believe in the power of personalized care. Our dedicated team works one-on-one with each patient to develop a customized treatment plan that addresses their unique needs and goals. This individualized approach ensures that you receive the most effective care for lasting relief from joint pain.",
      ],
    },
    {
      kind: "prose",
      heading: "Services to Alleviate Joint Pain",
      paragraphs: [
        "Our clinic offers a variety of advanced services designed to alleviate joint pain and promote overall wellness:",
        "Our chiropractic care involves gentle, precise adjustments to correct spinal misalignments and improve overall joint function. By realigning the spine, we relieve pressure on nerves that may be contributing to joint pain and other symptoms. Chiropractic adjustments can help restore proper movement patterns, reduce inflammation, and enhance the body\u2019s natural ability to heal itself. This non-invasive approach is particularly effective for conditions such as back pain, neck pain, and headaches, offering a natural pathway to relief and improved joint health.",
        "Physical therapy at Genesis Integrative Medicine focuses on targeted exercises and techniques designed to strengthen muscles, enhance flexibility, and support overall joint health. Our skilled physical therapists work with patients to create customized exercise programs that address specific areas of weakness or dysfunction. Techniques may include manual therapy, stretching, strength training, and functional exercises that help restore normal movement patterns and prevent future injuries. Physical therapy is essential for rehabilitation following an injury, surgery, or as part of a comprehensive treatment plan for chronic pain conditions.",
        "Platelet-Rich Plasma (PRP) therapy utilizes the body\u2019s own healing properties to promote tissue repair and reduce inflammation. This innovative treatment involves extracting a small amount of the patient\u2019s blood, processing it to concentrate the platelets, and then injecting the PRP directly into the affected joint or tissue. The growth factors and healing proteins in PRP stimulate the body\u2019s natural healing processes, accelerating recovery and reducing pain. Our PRP therapy in Geneva is particularly effective for treating conditions such as osteoarthritis, tendon injuries, and ligament sprains.",
        "Our regenerative medicine treatments harness the body\u2019s innate ability to heal and regenerate damaged tissues. This cutting-edge approach includes the use of stem cells, growth factors, and other biologic agents that stimulate tissue repair and regeneration. Regenerative medicine offers promising solutions for patients with chronic joint pain, arthritis, and other degenerative conditions. By promoting the regeneration of healthy tissue, these treatments can significantly reduce pain and improve joint function, offering an alternative to traditional surgical interventions.",
        "Cold laser therapy is a non-invasive treatment that uses low-level laser light to reduce pain and inflammation while accelerating tissue repair. This therapy works by stimulating cellular activity and enhancing blood flow to the affected area, which promotes healing and reduces pain. Cold laser therapy can help many individuals in Geneva and is effective for a wide range of conditions, including joint pain, muscle strains, and soft tissue injuries. The treatment is painless, quick, and has no known side effects, making it an excellent option for patients seeking non-invasive pain relief.",
        "Therapeutic injections at Genesis Integrative Medicine involve the precision delivery of anti-inflammatory and pain-relieving medications directly to the affected joints. These injections can include corticosteroids, hyaluronic acid, or other specialized medications that help reduce inflammation, alleviate pain, and improve joint function. Therapeutic injections are particularly beneficial for conditions such as arthritis, bursitis, and tendinitis, providing targeted relief that helps patients regain mobility and reduce discomfort.",
        "Shockwave therapy is an advanced treatment that uses high-energy sound waves to stimulate healing and reduce pain in chronic conditions. The sound waves promote increased blood flow, break down scar tissue, and stimulate the body\u2019s natural healing processes. Shockwave therapy is effective for treating a variety of musculoskeletal conditions, including plantar fasciitis, tendinitis, and chronic joint pain. This non-invasive therapy offers a promising alternative for patients who have not responded to other treatments, helping to reduce pain and improve function without the need for surgery.",
      ],
    },
    {
      kind: "prose",
      heading: "Start Your Journey to Pain-Free Living",
      paragraphs: [
        "If you\u2019re ready to experience lasting relief from joint pain, we invite you to book a session with Genesis Integrative Medicine in Geneva, IL. Our team of doctors, chiropractors, and practitioners is here to provide you with the natural, effective treatments you need to reclaim your life and enjoy your favorite activities once again.",
        "Contact us today to schedule a consultation and discover how our integrative approach can help you achieve pain-free living",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* /conditions-treated/erectile-dysfunction-ed/                               */
/* -------------------------------------------------------------------------- */

export const ED_CONDITION_CONTENT: ServicePageContent = {
  slug: "erectile-dysfunction-ed",
  urlPath: "/conditions-treated/erectile-dysfunction-ed/",
  meta: {
    title: "Erectile Dysfunction Treatment Geneva | Restore Vitality",
    description:
      "Reclaim your confidence by choosing erectile dysfunction treatment at Genesis Integrative Medicine. We provide modern solutions in Geneva, IL. Call us right now.",
    canonicalOrigin:
      "https://genesisintegrativemed.com/conditions-treated/erectile-dysfunction-ed/",
    ogImage:
      "https://genesisintegrativemed.com/wp-content/uploads/2025/11/Erectile_1_e0ddfed7e1.jpg",
  },
  breadcrumbs: [
    { name: "Home", item: "https://genesisintegrativemed.com/" },
    {
      name: "Conditions Treated",
      item: "https://genesisintegrativemed.com/conditions-treated/",
    },
    { name: "Erectile Dysfunction (ED)" },
  ],
  hero: {
    kicker: "Conditions Treated",
    h1: "Erectile Dysfunction (ED)",
    subtitle: "Restore Confidence, Strength, and Intimacy Naturally",
    intro:
      "Erectile Dysfunction (ED) is one of the most common men\u2019s health challenges\u2014yet also one of the most treatable. At Genesis Integrative Medicine in Geneva, IL, we take a natural, comprehensive approach to addressing ED by treating its root causes and restoring optimal function and confidence.",
  },
  highlights: [
    { icon: "shield", label: "Non-invasive", note: "No pills, no surgery" },
    { icon: "bolt", label: "Shockwave therapy", note: "Regenerative care" },
    { icon: "target", label: "Root-cause focus", note: "Not just symptoms" },
    { icon: "heart", label: "Whole-person care", note: "Confidential + holistic" },
  ],
  featuredImage: {
    src: "/images/conditions/ed/erectile-1.jpg",
    alt: "Erectile dysfunction",
    width: 1200,
    height: 800,
  },
  serviceJsonLd: {
    name: "Erectile Dysfunction (ED) Treatment",
    description:
      "Natural, non-invasive erectile dysfunction treatment combining shockwave therapy, nutritional support, and hormone optimization to restore blood flow, regenerate tissue, and improve stamina and confidence.",
    canonicalServiceUrl:
      "https://genesisintegrativemed.com/conditions-treated/erectile-dysfunction-ed/",
  },
  layout: "sidebar",
  relatedNav: CONDITIONS_RELATED_NAV,
  sections: [
    {
      kind: "prose",
      heading: "Understanding Erectile Dysfunction",
      paragraphs: [
        "ED occurs when a man is unable to achieve or maintain an erection firm enough for sexual activity. While occasional difficulty is normal, frequent or ongoing ED can signal underlying issues such as poor circulation, hormone imbalance, or nerve dysfunction.",
        "When left untreated, ED can impact self-esteem, relationships, and overall quality of life\u2014but effective solutions are available.",
      ],
    },
    {
      kind: "list",
      heading: "Common Causes of Erectile Dysfunction",
      items: [
        "Decreased blood flow due to vascular changes or aging",
        "Low testosterone and hormonal imbalance",
        "Stress, anxiety, or emotional factors",
        "Diabetes, high blood pressure, or cardiovascular disease",
        "Lifestyle factors such as smoking or poor diet",
      ],
    },
    {
      kind: "list",
      heading: "Signs & Symptoms",
      intro: "You may be experiencing ED if you notice:",
      items: [
        "Trouble getting or keeping an erection",
        "Reduced sexual desire or performance confidence",
        "Fatigue or lack of stamina",
        "Anxiety around intimacy",
      ],
    },
    {
      kind: "list",
      heading: "Our Integrative Approach to ED in Geneva, IL",
      intro:
        "At Genesis Integrative Medicine, we focus on restoring your body\u2019s natural ability to perform through regenerative, non-invasive treatments. Our men\u2019s wellness team uses shockwave therapy, nutritional support, and hormone optimization to:",
      items: [
        "Improve penile blood flow",
        "Regenerate damaged tissue",
        "Enhance stamina and vitality",
        "Support long-term wellness and balance",
      ],
      outro:
        "We treat the whole person, not just the symptom\u2014helping you feel confident, strong, and energized again.",
    },
    {
      kind: "prose",
      heading: "Treatment Options for ED",
      paragraphs: [
        "The most effective, drug-free solution for ED offered at our clinic is:",
      ],
    },
    {
      kind: "prose",
      heading: "\uD83D\uDD39 Shockwave Therapy for ED",
      paragraphs: [
        "A non-surgical, regenerative treatment that uses soundwave technology to increase circulation, stimulate new blood vessel growth, and naturally enhance sexual performance.",
      ],
    },
    {
      kind: "list",
      heading: "Why Choose Genesis Integrative Medicine",
      items: [
        "Advanced, non-invasive ED treatments",
        "Holistic, whole-body approach",
        "Personalized plans tailored to your goals",
        "Confidential, supportive care from experienced professionals",
      ],
    },
    {
      kind: "prose",
      heading: "Schedule Your Consultation Today",
      paragraphs: [
        "Living with erectile dysfunction can be discouraging, but you don\u2019t have to face it alone. A compassionate men\u2019s wellness specialist in Geneva, IL, is here to help you regain your confidence, restore performance, and improve your overall well-being.",
        "At Genesis Integrative Medicine, we take a personalized, holistic approach to men\u2019s health\u2014addressing not just the symptoms of ED, but the underlying causes.",
        "Take the first step toward renewed vitality by scheduling your consultation today. Together, we\u2019ll identify the factors affecting your performance and create a custom treatment plan designed to help you feel your best again. With the right care, you can restore confidence, strengthen relationships, and enjoy a healthier, more active life.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Convenience lookup                                                          */
/* -------------------------------------------------------------------------- */

export const CONDITION_PAGES = {
  "neck-pain": NECK_PAIN_CONTENT,
  "back-pain": BACK_PAIN_CONTENT,
  headaches: HEADACHES_CONTENT,
  "foot-pain": FOOT_PAIN_CONTENT,
  "shoulder-pain": SHOULDER_PAIN_CONTENT,
  sciatica: CONDITIONS_SCIATICA_CONTENT,
  "herniated-disc": HERNIATED_DISC_CONTENT,
  neuropathy: NEUROPATHY_CONTENT,
  tendonitis: TENDONITIS_CONTENT,
  bursitis: BURSITIS_CONTENT,
  allergies: ALLERGIES_CONTENT,
  "joint-pain": JOINT_PAIN_CONTENT,
  "erectile-dysfunction-ed": ED_CONDITION_CONTENT,
} as const;
