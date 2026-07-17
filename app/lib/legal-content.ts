/**
 * Legal & compliance page content.
 *
 * Body copy is preserved verbatim from the live pages:
 *   - https://genesisintegrativemed.com/our-terms/
 *   - https://genesisintegrativemed.com/your-privacy/
 *   - https://genesisintegrativemed.com/accessibility-statement/
 *
 * DO NOT paraphrase, summarize, or rewrite this text.
 */

/** A block of text inside a section or subsection. */
export type LegalBlock = {
  /** Optional paragraphs (rendered in order). */
  paragraphs?: readonly string[];
  /** Optional bullet list (rendered as an unordered list). */
  items?: readonly string[];
  /** Optional paragraphs rendered after the bullet list. */
  outro?: readonly string[];
  /** Render text in the uppercase/legal-disclaimer visual variant. */
  uppercase?: boolean;
};

export type LegalSection = LegalBlock & {
  /** Section heading (rendered as H2, also used to build the TOC anchor id). */
  heading: string;
  /** Optional nested subsections rendered under H3s. */
  subsections?: readonly (LegalBlock & { heading: string })[];
};

export type LegalPage = {
  slug: string;
  urlPath: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    kicker: string;
    h1: string;
    subtitle?: string;
  };
  /** Optional intro paragraphs rendered before the first H2. */
  intro?: readonly string[];
  sections: readonly LegalSection[];
  breadcrumbs: readonly { name: string; item?: string }[];
};

const SITE_ORIGIN = "https://genesisintegrativemed.com" as const;

/* -------------------------------------------------------------------------- */
/* Terms & Conditions — /our-terms/                                            */
/* -------------------------------------------------------------------------- */

export const TERMS_PAGE: LegalPage = {
  slug: "our-terms",
  urlPath: "/our-terms/",
  meta: {
    title: "Terms & Conditions | Genesis Integrative Medicine",
    description:
      "Terms and conditions governing use of the Genesis Integrative Medicine website in Geneva, IL.",
    canonical: `${SITE_ORIGIN}/our-terms/`,
  },
  hero: {
    kicker: "Legal",
    h1: "Terms & Conditions",
  },
  breadcrumbs: [
    { name: "Home", item: `${SITE_ORIGIN}/` },
    { name: "Terms & Conditions" },
  ],
  intro: [
    "This Practice Web Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of this Practice Web Site constitutes your agreement to all such terms, conditions, and notices.",
  ],
  sections: [
    {
      heading: "MODIFICATION OF THESE TERMS OF USE",
      paragraphs: [
        "This Practice reserves the right to change the terms, conditions, and notices under which this Practice Web Site is offered, including but not limited to the charges associated with the use of this Practice Web Site.",
      ],
    },
    {
      heading: "LINKS TO THIRD PARTY SITES",
      paragraphs: [
        "This Practice Web Site may contain links to other Web Sites (\u201CLinked Sites\u201D). The Linked Sites are not under the control of this Practice and this Practice is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. This Practice is not responsible for webcasting or any other form of transmission received from any Linked Site. This Practice is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by this Practice of the site or any association with its operators.",
      ],
    },
    {
      heading: "NO UNLAWFUL OR PROHIBITED USE",
      paragraphs: [
        "As a condition of your use of this Practice Web Site, you warrant to this Practice that you will not use this Practice Web Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Practice Web Site in any manner which could damage, disable, overburden, or impair this Practice Web Site or interfere with any other party\u2019s use and enjoyment of this Practice Web Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Practice Web Sites.",
      ],
    },
    {
      heading: "USE OF COMMUNICATION SERVICES",
      paragraphs: [
        "This Practice Web Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, \u201CCommunication Services\u201D), you agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service. By way of example, and not as a limitation, you agree that when using a Communication Service, you will not:",
      ],
      items: [
        "Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.",
        "Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information.",
        "Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.",
        "Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another\u2019s computer.",
        "Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages.",
        "Conduct or forward surveys, contests, pyramid schemes or chain letters.",
        "Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.",
        "Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.",
        "Restrict or inhibit any other user from using and enjoying the Communication Services.",
        "Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.",
        "Harvest or otherwise collect information about others, including e-mail addresses, without their consent.",
        "Violate any applicable laws or regulations.",
      ],
      outro: [
        "This Practice has no obligation to monitor the Communication Services. However, this Practice reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. This Practice reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever.",
        "Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you download the materials.",
      ],
    },
    {
      heading: "LIABILITY DISCLAIMER",
      uppercase: true,
      paragraphs: [
        "THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS PRACTICE WEB SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. THIS PRACTICE AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS PRACTICE WEB SITE AT ANY TIME. ADVICE RECEIVED VIA THIS PRACTICE WEB SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION.",
        "THIS PRACTICE AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON This Practice WEB SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED \u201CAS IS\u201D WITHOUT WARRANTY OR CONDITION OF ANY KIND. THIS PRACTICE AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.",
        "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THIS PRACTICE AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS PRACTICE WEB SITE, WITH THE DELAY OR INABILITY TO USE THIS PRACTICE WEB SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS PRACTICE WEB SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS PRACTICE WEB SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF THIS PRACTICE OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS PRACTICE WEB SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS PRACTICE WEB SITE.",
      ],
    },
    {
      heading: "COPYRIGHT AND TRADEMARK NOTICES:",
      paragraphs: [
        "All contents of this website are Copyright \u00A9 2022 PatientPop Inc. All Rights Reserved. All logos are trademarks and service marks of PatientPop Inc. All other trademarks, service marks and logos used in this website are the property of their respective owners.",
      ],
    },
    {
      heading: "TRADEMARKS",
      paragraphs: [
        "The names of actual companies and products mentioned herein may be the trademarks of their respective owners.",
        "The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred.",
        "Any rights not expressly granted herein are reserved.",
      ],
    },
    {
      heading: "NOTICES",
      paragraphs: [
        "Please contact us by phone at 630-283-6563 or by mail at 1881 S. Randall Rd, Suite C, Geneva, IL 60134.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Privacy Policy — /your-privacy/                                             */
/* -------------------------------------------------------------------------- */

export const PRIVACY_PAGE: LegalPage = {
  slug: "your-privacy",
  urlPath: "/your-privacy/",
  meta: {
    title: "Privacy Policy | Genesis Integrative Medicine",
    description:
      "Privacy policy for the Genesis Integrative Medicine website in Geneva, IL \u2014 how we collect, use, and protect your information.",
    canonical: `${SITE_ORIGIN}/your-privacy/`,
  },
  hero: {
    kicker: "Legal",
    h1: "Privacy Policy",
  },
  breadcrumbs: [
    { name: "Home", item: `${SITE_ORIGIN}/` },
    { name: "Privacy Policy" },
  ],
  sections: [
    {
      heading: "PRIVACY STATEMENT",
      paragraphs: [
        "We are committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Statement of Privacy applies to our Practice\u2019s Web site and governs data collection and usage. By using this website, you consent to the data practices described in this statement.",
      ],
      subsections: [
        {
          heading: "Collection of your Personal Information",
          paragraphs: [
            "This Practice collects personally identifiable information, such as your e-mail address, name, home or work address or telephone number. This Practice also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites.",
            "There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this Web site.",
            "Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others.",
            "This Practice encourages you to review the privacy statements of Web sites you choose to link to from the website so that you can understand how those Web sites collect, use and share your information. This Practice is not responsible for the privacy statements or other content on any other Web sites.",
          ],
        },
        {
          heading: "Use of your Personal Information",
          paragraphs: [
            "This Practice collects and uses your personal information to operate the Web site and deliver the services you have requested. This Practice also uses your personally identifiable information to inform you of other products or services available from this Practice and its affiliates. This Practice may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.",
            "This Practice does not sell, rent or lease its customer lists to third parties. This Practice may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services and they are required to maintain the confidentiality of your information.",
            "This Practice does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent.",
            "This Practice will disclose your personal information, without notice, only if required to do so by law.",
          ],
        },
        {
          heading: "Use of Cookies",
          paragraphs: [
            "The Web site uses \u201Ccookies\u201D to help this Practice personalize your online experience. A cookie is a text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.",
          ],
        },
        {
          heading: "Security of your Personal Information",
          paragraphs: [
            "This Practice secures your personal information from unauthorized access, use or disclosure. This Practice secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other Web sites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.",
          ],
        },
        {
          heading: "Changes to this Statement",
          paragraphs: [
            "This Practice will occasionally update this Statement of Privacy to reflect company and customer feedback. We encourage you to periodically review this Statement to be informed of how this Practice is protecting your information.",
          ],
        },
      ],
    },
    {
      heading: "NOTICES",
      paragraphs: [
        "Please contact us by phone at 630-283-6563 or by mail at 1881 S. Randall Rd, Suite C, Geneva, IL 60134.",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Accessibility Statement — /accessibility-statement/                         */
/* -------------------------------------------------------------------------- */

export const ACCESSIBILITY_PAGE: LegalPage = {
  slug: "accessibility-statement",
  urlPath: "/accessibility-statement/",
  meta: {
    title: "Accessibility Statement | Genesis Integrative Medicine",
    description:
      "Genesis Integrative Medicine is committed to providing a website that is accessible to individuals with disabilities, in conformance with WCAG 2.1, Level A & AA.",
    canonical: `${SITE_ORIGIN}/accessibility-statement/`,
  },
  hero: {
    kicker: "Compliance",
    h1: "Accessibility Statement",
  },
  breadcrumbs: [
    { name: "Home", item: `${SITE_ORIGIN}/` },
    { name: "Accessibility Statement" },
  ],
  sections: [
    {
      heading: "Accessibility Statement",
      paragraphs: [
        "We are committed to providing a website that is accessible to individuals with disabilities, in conformance with the Web Content Accessibility Guidelines (WCAG) 2.1, Level A & AA.",
        "To this end, we regularly test our website in accordance with best practices, using automated and manual testing and with the assistance of accessibility consultant eSSENTIAL Accessibility which is supported by a diverse team of accessibility professionals including users of assistive technologies. We also make available an assistive CX technology application which our customers who have trouble typing, gesturing, moving a mouse, or reading can use for additional accessibility, however it is not required to use our website. The application is free to download and it incorporates tools such as mouse and keyboard replacements, voice recognition, speech enablement, hands-free/touch-free navigation, and more.",
      ],
    },
  ],
};

/**
 * Utility: convert a section heading into a stable anchor id for the TOC.
 */
export function legalAnchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
