/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'EN' | 'NL' | 'TR' | 'ES';

export const companyConfig = {
  name: "INCE GLOBAL",
  fullName: "INCE GLOBAL B.V.",
  email: "hello@inceglobal.nl",
  phone: "+31 6 39260208",
  phoneHref: "tel:+31639260208",
  location: "Based in the Netherlands",
  year: "2026",
  url: "https://inceglobal.nl"
};

export const translations = {
  EN: {
    nav: {
      about: "About",
      business: "Business Areas",
      vision: "Vision",
      network: "Network",
      contact: "Contact",
      inquire: "Inquire"
    },
    hero: {
      eyebrow: "INTERNATIONAL BUSINESS & STRATEGIC CONSULTANCY",
      title: "Building Global Business Opportunities",
      subtext: "INCE GLOBAL supports companies, entrepreneurs, and partners across international trade, consultancy, technology, construction, procurement, and corporate growth opportunities.",
      cta_primary: "Start a Conversation",
      cta_secondary: "Explore Business Areas"
    },
    about: {
      label: "ABOUT INCE GLOBAL",
      title: "Practical strategy for cross-border growth.",
      text: "INCE GLOBAL is a Netherlands-based international business and consultancy company helping partners identify, structure, and execute opportunities across trade, technology, construction, procurement, and corporate development. We combine market understanding, operational discipline, and trusted relationships to support sustainable business growth.",
      cards: [
        { title: "International Perspective", desc: "Cross-border thinking with practical execution across selected markets." },
        { title: "Strategic Consultancy", desc: "Structured support for business planning, partnerships, market entry, and growth decisions." },
        { title: "Commercial Execution", desc: "Hands-on coordination for procurement, trade, project development, and operational progress." },
        { title: "Long-Term Partnerships", desc: "A relationship-driven approach focused on trust, clarity, and measurable value." }
      ]
    },
    business: {
      label: "SERVICES",
      title: "Business Areas",
      trade: {
        label: "01 / COMMERCE",
        title: "International Trade",
        desc: "Supporting import, export, sourcing, market access, supplier relationships, and cross-border commercial opportunities."
      },
      consultancy: {
        label: "02 / STRATEGY",
        title: "Consultancy",
        desc: "Advisory support for business strategy, market entry, operational improvement, partnerships, and international growth."
      },
      tech: {
        label: "03 / INNOVATION",
        title: "Technology",
        desc: "Digital platforms, software solutions, AI-enabled workflows, business automation, and technology-driven transformation projects."
      },
      construction: {
        label: "04 / DEVELOPMENT",
        title: "Construction & Project Development",
        desc: "Business support for construction-related opportunities, project coordination, supplier selection, and development partnerships."
      },
      procurement: {
        label: "05 / SOURCING",
        title: "Procurement & Sourcing",
        desc: "Helping companies identify, evaluate, and manage suppliers, products, and procurement processes across selected markets."
      },
      ma: {
        label: "06 / CORPORATE",
        title: "Mergers, Acquisitions & Company Transfers",
        desc: "Supporting business owners and partners in company acquisitions, transfers, strategic partnerships, and growth-oriented corporate transactions."
      },
      learnMore: "Learn More"
    },
    vision: {
      label: "OUR VISION",
      tagline: "To connect markets, people, and opportunities through trusted execution.",
      mission_label: "OUR MISSION",
      mission_text: "To create sustainable business value through international trade, strategic consultancy, technology, procurement, construction-related partnerships, and corporate growth opportunities.",
      vision_label: "OUR VISION",
      vision_text: "To become a trusted international business partner for companies seeking reliable market access, structured growth, and long-term commercial relationships."
    },
    advantages: {
      label: "ADVANTAGE",
      title: "Why Partner With Us",
      text: "We combine international perspective with practical business execution.",
      items: [
        { num: "01", title: "Cross-border mindset", desc: "We understand how different markets, suppliers, partners, and business cultures connect." },
        { num: "02", title: "Practical execution", desc: "We focus on clear steps, reliable communication, and measurable progress." },
        { num: "03", title: "Multi-sector capability", desc: "We work across trade, technology, construction, procurement, consultancy, and corporate development." },
        { num: "04", title: "Trusted relationships", desc: "We value long-term partnerships built on transparency, discipline, and mutual benefit." }
      ]
    },
    network: {
      title: "International Perspective",
      desc: "Based in the Netherlands, INCE GLOBAL works with a cross-border mindset and supports business opportunities across established and emerging markets."
    },
    contact: {
      label: "CONNECT",
      title: "Let's discuss the right opportunity.",
      subtext: "Tell us about your business need, partnership idea, project, or international opportunity. We will get back to you as soon as possible.",
      email: "Email Us",
      phone: "Call Us",
      location_label: "Location",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        phone: "Phone Number",
        subject: "Subject",
        message: "Message",
        submit: "Submit Inquiry",
        success: "Thank you. Your inquiry has been prepared for INCE GLOBAL.",
        default_subject: "Business Inquiry"
      }
    },
    footer: {
      desc: "International business, trade, consultancy, technology, construction, procurement, and corporate development support.",
      rights: "Built for trusted international business.",
      compliance: "International Reach"
    }
  },
  TR: {
    nav: { about: "Hakkımızda", business: "İş Alanları", vision: "Vizyon", network: "Ağ", contact: "İletişim", inquire: "İletişime Geç" },
    hero: {
      eyebrow: "ULUSLARARASI İŞ VE STRATEJİK DANIŞMANLIK",
      title: "Küresel İş Fırsatları İnşa Ediyoruz",
      subtext: "INCE GLOBAL; uluslararası ticaret, danışmanlık, teknoloji, inşaat, tedarik ve kurumsal büyüme fırsatlarında şirketleri, girişimcileri ve ortakları destekler.",
      cta_primary: "Bir Görüşme Başlatın",
      cta_secondary: "İş Alanlarını Keşfedin"
    },
    about: {
      label: "INCE GLOBAL HAKKINDA",
      title: "Sınır ötesi büyüme için pratik strateji.",
      text: "Hollanda merkezli INCE GLOBAL; ticaret, teknoloji, inşaat, tedarik ve kurumsal gelişim alanlarında fırsatları belirleme, yapılandırma ve yürütme konusunda ortaklarına yardımcı olan uluslararası bir iş ve danışmanlık şirketidir.",
      cards: [
        { title: "Uluslararası Bakış", desc: "Seçilmiş pazarlarda pratik uygulama ile sınır ötesi düşünce." },
        { title: "Stratejik Danışmanlık", desc: "İş planlama, ortaklıklar ve büyüme kararları için yapılandırılmış destek." },
        { title: "Ticari Yürütme", desc: "Tedarik, ticaret ve operasyonel ilerleme için uygulamalı koordinasyon." },
        { title: "Uzun Vadeli Ortaklıklar", desc: "Güven, netlik ve ölçülebilir değere odaklanan ilişki odaklı bir yaklaşım." }
      ]
    },
    business: {
      label: "HİZMETLER",
      title: "İş Alanları",
      trade: { label: "01 / TİCARET", title: "Uluslararası Ticaret", desc: "İthalat, ihracat, kaynak bulma ve pazar erişimi desteği." },
      consultancy: { label: "02 / STRATEJİ", title: "Danışmanlık", desc: "İş stratejisi ve uluslararası büyüme için danışmanlık desteği." },
      tech: { label: "03 / İNOVASYON", title: "Teknoloji", desc: "Dijital platformlar, yazılım çözümleri ve yapay zeka destekli iş akışları." },
      construction: { label: "04 / GELİŞİM", title: "İnşaat ve Proje Geliştirme", desc: "İnşaat odaklı fırsatlar ve proje koordinasyonu için iş desteği." },
      procurement: { label: "05 / TEDARİK", title: "Satın Alma ve Tedarik", desc: "Şirketlerin tedarikçileri ve süreçleri yönetmesine yardımcı olma." },
      ma: { label: "06 / KURUMSAL", title: "Birleşme ve Devralmalar", desc: "Şirket devirleri ve kurumsal işlemlerde stratejik ortaklık desteği." },
      learnMore: "Daha Fazlası"
    },
    vision: {
      label: "VİZYONUMUZ",
      tagline: "Güvenilir uygulama ile pazarları, insanları ve fırsatları birbirine bağlamak.",
      mission_label: "MİSYONUMUZ",
      mission_text: "Uluslararası ticaret, danışmanlık ve teknoloji yoluyla sürdürülebilir iş değeri yaratmak.",
      vision_label: "VİZYONUMUZ",
      vision_text: "Güvenilir pazar erişimi ve yapılandırılmış büyüme arayan şirketler için uluslararası bir iş ortağı olmak."
    },
    advantages: {
      label: "AVANTAJ",
      title: "Neden Bizimle Ortak Olmalısınız",
      text: "Uluslararası bakış açısını pratik iş yürütme ile birleştiriyoruz.",
      items: [
        { num: "01", title: "Sınır ötesi zihniyet", desc: "Farklı pazarların ve iş kültürlerinin nasıl bağlandığını anlıyoruz." },
        { num: "02", title: "Pratik uygulama", desc: "Net adımlara, güvenilir iletişime ve ölçülebilir ilerlemeye odaklanıyoruz." },
        { num: "03", title: "Çok sektörlü yetkinlik", desc: "Ticaret, teknoloji, inşaat ve danışmanlık alanlarında çalışıyoruz." },
        { num: "04", title: "Güvene dayalı ilişkiler", desc: "Şeffaflık ve disiplin üzerine inşa edilmiş uzun vadeli ortaklıklara değer veriyoruz." }
      ]
    },
    network: {
      title: "Uluslararası Bakış Açısı",
      desc: "Hollanda merkezli INCE GLOBAL, sınır ötesi bir anlayışla çalışır ve küresel iş fırsatlarını destekler."
    },
    contact: {
      label: "İLETİŞİM",
      title: "Doğru fırsatı tartışalım.",
      subtext: "İş ihtiyacınız veya ortaklık fikriniz hakkında bize bilgi verin. En kısa sürede size dönüş yapacağız.",
      email: "E-post Gönder",
      phone: "Bizi Arayın",
      location_label: "Konum",
      form: {
        name: "Ad Soyad",
        email: "E-posta Adresi",
        company: "Şirket",
        phone: "Telefon Numarası",
        subject: "Konu",
        message: "Mesaj",
        submit: "Mesaj Gönder",
        success: "Teşekkürler. Mesajınız INCE GLOBAL için hazırlandı.",
        default_subject: "İş Talebi"
      }
    },
    footer: {
      desc: "Uluslararası iş, ticaret, danışmanlık, teknoloji, inşaat ve kurumsal gelişim desteği.",
      rights: "Güvenilir uluslararası iş dünyası için inşa edildi.",
      compliance: "Uluslararası Erişim"
    }
  },
  NL: {
    nav: { about: "Over ons", business: "Werkgebieden", vision: "Visie", network: "Netwerk", contact: "Contact", inquire: "Aanvragen" },
    hero: {
      eyebrow: "INTERNATIONAAL BEDRIJF & STRATEGISCH ADVIES",
      title: "Bouwen aan Wereldwijde Zakelijke Kansen",
      subtext: "INCE GLOBAL ondersteunt bedrijven, ondernemers en partners bij internationale handel, consultancy, technologie, bouw, inkoop en groei.",
      cta_primary: "Start een Gesprek",
      cta_secondary: "Verken Werkgebieden"
    },
    about: {
      label: "OVER INCE GLOBAL",
      title: "Praktische strategie voor grensoverschrijdende groei.",
      text: "INCE GLOBAL is een in Nederland gevestigd internationaal adviesbureau dat partners helpt bij het identificeren en uitvoeren van kansen in handel, technologie en bouw.",
      cards: [
        { title: "Internationaal Perspectief", desc: "Grensoverschrijdend denken met praktische uitvoering in geselecteerde markten." },
        { title: "Strategisch Advies", desc: "Gestructureerde ondersteuning voor bedrijfsplanning en marktentree." },
        { title: "Commerciële Uitvoering", desc: "Coördinatie voor inkoop, handel en operationele voortgang." },
        { title: "Langdurige Partnerschappen", desc: "Een relatiegerichte aanpak gericht op vertrouwen en meetbare waarde." }
      ]
    },
    business: {
      label: "DIENSTEN",
      title: "Werkgebieden",
      trade: { label: "01 / COMMERCE", title: "Internationale Handel", desc: "Ondersteuning bij import, export, sourcing en markttoegang." },
      consultancy: { label: "02 / STRATEGIE", title: "Consultancy", desc: "Advisering voor bedrijfsstrategie en internationale groei." },
      tech: { label: "03 / INNOVATIE", title: "Technologie", desc: "Digitale platforms, softwareoplossingen en automatisering." },
      construction: { label: "04 / ONTWIKKELING", title: "Bouw & Projectontwikkeling", desc: "Ondersteuning bij bouwprojecten en ontwikkelingspartnerschappen." },
      procurement: { label: "05 / SOURCING", title: "Inkoop & Sourcing", desc: "Bedrijven helpen bij het beheren van leveranciers en inkoopprocessen." },
      ma: { label: "06 / CORPORATE", title: "Fusies & Overnames", desc: "Ondersteuning bij bedrijfsoverdrachten en strategische partnerschappen." },
      learnMore: "Meer informatie"
    },
    vision: {
      label: "ONZE VISIE",
      tagline: "Markten, mensen en kansen verbinden door vertrouwde uitvoering.",
      mission_label: "ONZE MISSIE",
      mission_text: "Duurzame waarde creëren via internationale handel, consultancy en technologie.",
      vision_label: "ONZE VISIE",
      vision_text: "Een vertrouwde internationale partner worden voor bedrijven die gestructureerde groei zoeken."
    },
    advantages: {
      label: "VOORDEEL",
      title: "Waarom met ons samenwerken",
      text: "Wij combineren internationaal perspectief met praktische uitvoering.",
      items: [
        { num: "01", title: "Grensoverschrijdende mindset", desc: "Wij begrijpen hoe markten, leveranciers en culturen verbonden zijn." },
        { num: "02", title: "Praktische uitvoering", desc: "Wij focussen op duidelijke stappen en meetbare voortgang." },
        { num: "03", title: "Multidisciplinair", desc: "Werken in handel, technologie, bouw en consultancy." },
        { num: "04", title: "Vertrouwde relaties", desc: "Wij waarderen langdurige partnerschappen op basis van transparantie." }
      ]
    },
    network: {
      title: "Internationaal Perspectief",
      desc: "Gevestigd in Nederland, werkt INCE GLOBAL met een grensoverschrijdende mindset en ondersteunt zakelijke kansen."
    },
    contact: {
      label: "CONTACT",
      title: "Laten we de kansen bespreken.",
      subtext: "Vertel ons over uw zakelijke behoefte of partnerschap. Wij nemen zo snel mogelijk contact op.",
      email: "E-mail ons",
      phone: "Bel ons",
      location_label: "Locatie",
      form: {
        name: "Naam",
        email: "E-mailadres",
        company: "Bedrijf",
        phone: "Telefoonnummer",
        subject: "Onderwerp",
        message: "Bericht",
        submit: "Verstuur aanvraag",
        success: "Bedankt. Uw aanvraag is voorbereid voor INCE GLOBAL.",
        default_subject: "Zakelijke aanvraag"
      }
    },
    footer: {
      desc: "Internationale zakelijke ondersteuning op het gebied van handel, consultancy en technologie.",
      rights: "Gebouwd voor vertrouwd internationaal zakendoen.",
      compliance: "Internationaal Bereik"
    }
  },
  ES: {
    nav: { about: "Sobre nosotros", business: "Áreas de negocio", vision: "Visión", network: "Red", contact: "Contacto", inquire: "Inquire" },
    hero: {
      eyebrow: "NEGOCIO INTERNACIONAL Y CONSULTORÍA ESTRATÉGICA",
      title: "Construyendo Oportunidades de Negocio Globales",
      subtext: "INCE GLOBAL apoya a empresas y emprendedores en comercio internacional, consultoría, tecnología, construcción y crecimiento corporativo.",
      cta_primary: "Iniciar una Conversación",
      cta_secondary: "Explorar Áreas de Negocio"
    },
    about: {
      label: "SOBRE INCE GLOBAL",
      title: "Estrategia práctica para el crecimiento transfronterizo.",
      text: "INCE GLOBAL es una consultora internacional con sede en los Países Bajos que ayuda a sus socios a identificar y ejecutar oportunidades en comercio, tecnología y desarrollo.",
      cards: [
        { title: "Perspectiva Internacional", desc: "Pensamiento transfronterizo con ejecución práctica en mercados seleccionados." },
        { title: "Consultería Estratégica", desc: "Apoyo estructurado para la planificación empresarial y entrada a mercados." },
        { title: "Ejecución Comercial", desc: "Coordinación para adquisiciones, comercio y progreso operativo." },
        { title: "Alianzas a Largo Plazo", desc: "Un enfoque basado en la confianza, la claridad y el valor medible." }
      ]
    },
    business: {
      label: "SERVICIOS",
      title: "Áreas de Negocio",
      trade: { label: "01 / COMERCIO", title: "Comercio Internacional", desc: "Apoyo en importación, exportación, abastecimiento y acceso a mercados." },
      consultancy: { label: "02 / ESTRATEGIA", title: "Consultoría", desc: "Asesoramiento en estrategia empresarial y crecimiento internacional." },
      tech: { label: "03 / INNOVACIÓN", title: "Tecnología", desc: "Plataformas digitales, soluciones de software y flujos de trabajo con IA." },
      construction: { label: "04 / DESARROLLO", title: "Construcción y Proyecto", desc: "Apoyo en oportunidades de construcción y alianzas de desarrollo." },
      procurement: { label: "05 / SOURCING", title: "Adquisiciones y Sourcing", desc: "Ayuda a las empresas a gestionar proveedores y procesos de compra." },
      ma: { label: "06 / CORPORATIVO", title: "Fusiones y Adquisiciones", desc: "Apoyo en transferencias de empresas y alianzas estratégicas." },
      learnMore: "Saber más"
    },
    vision: {
      label: "NUESTRA VISIÓN",
      tagline: "Conectar mercados, personas y oportunidades mediante una ejecución fiable.",
      mission_label: "NUESTRA MISIÓN",
      mission_text: "Crear valor empresarial sostenible a través de la consultoría estratégica y la tecnología.",
      vision_label: "NUESTRA VISIÓN",
      vision_text: "Convertirse en un socio internacional de confianza para empresas que buscan un crecimiento estructurado."
    },
    advantages: {
      label: "VENTAJA",
      title: "Por qué asociarse con nosotros",
      text: "Combinamos la perspectiva internacional con la ejecución empresarial práctica.",
      items: [
        { num: "01", title: "Mentalidad transfronteriza", desc: "Entendemos cómo se conectan los mercados y las culturas empresariales." },
        { num: "02", title: "Ejecución práctica", desc: "Nos centramos en pasos claros, comunicación fiable y progreso medible." },
        { num: "03", title: "Capacidad multisectorial", desc: "Trabajamos en comercio, tecnología, construcción y consultoría." },
        { num: "04", title: "Relaciones de confianza", desc: "Valoramos las alianzas a largo plazo basadas en la transparencia." }
      ]
    },
    network: {
      title: "Perspectiva Internacional",
      desc: "Con sede en los Países Bajos, INCE GLOBAL trabaja con una mentalidad transfronteriza y apoya oportunidades globales."
    },
    contact: {
      label: "CONTACTO",
      title: "Hablemos de la oportunidad adecuada.",
      subtext: "Cuéntenos sobre su necesidad de negocio o idea de alianza. Le responderemos lo antes posible.",
      email: "Enviar Email",
      phone: "Llámanos",
      location_label: "Ubicación",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        company: "Empresa",
        phone: "Teléfono",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar consulta",
        success: "Gracias. Su consulta ha sido preparada para INCE GLOBAL.",
        default_subject: "Consulta de Negocios"
      }
    },
    footer: {
      desc: "Apoyo internacional para negocios, comercio, consultoría, tecnología y desarrollo corporativo.",
      rights: "Construido para negocios internacionales confiables.",
      compliance: "Alcance Internacional"
    }
  }
};
