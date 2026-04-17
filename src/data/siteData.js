import { Magneta5, Magneta4, Magneta3 } from "../assets/Photos/Magenta";
import { MagnetaAudio } from "../assets/Audio";
import { MagentaLogo } from "../assets/Logos";
import {
  AbdallahRectangle,
  AbdelsalemRectangle,
  AchrefRectangle,
  AmiraRectangle,
  BayaRectangle,
  DoniaRectangle,
  JallouliRectangle,
  LaythRectangle,
  MakniRectangle,
  MezghaniRectangle,
  OlaRectangle,
  OussemaRectangle,
  PlaceholderRectangle,
  RonzRectangle,
  SmaouiRectangle,
  TriguiRectangle,
} from "../assets/Team/Rectangle";

import {
  AbdalallahSquare,
  AbdelsallemSquare,
  AchrefSquare,
  AmiraSquare,
  BayaSquare,
  DoniaSquare,
  JallouliSquare,
  LaythSquare,
  MakniSquare,
  MezghanniSquare,
  OlaSquare,
  OussemaSquare,
  PlaceholderSquare,
  RonzSquare,
  SmaouiSquare,
  TriguiSquare,
} from "../assets/Team/Square";

import {
  AhmedCheikhrouhou,
  AkramTaktak,
  AmineEllouze,
  HediTmar,
  HelaAidi,
  InesCheniour,
  MariemMarrekchi,
  MohamedKharrat,
  Syrine,
  TahaMtira,
  TakouaBouchouicha,
  WalidLaabidi,
  Yoldez,
} from "../assets/Photos/Speakers";

import {
  ClosingCermony,
  IOTSession,
  Leoni,
  OnlineSession,
  OpeningCermony,
  Pitching1,
  Pitching2,
  Pitching3,
  WelcomingBack,
} from "../assets/Photos/Gallery";

import { ENIF1, ENIF2, ENIF3, ENIF4, ENIF5 } from "../assets/Logos";
import {
  ENIF1img1,
  ENIF1img2,
  ENIF1img3,
  ENIF1img4,
  ENIF1img5,
  ENIF1img6,
} from "../assets/Photos/enif1";
import {
  ENIF2img1,
  ENIF2img2,
  ENIF2img3,
  ENIF2img4,
  ENIF2img5,
  ENIF2img6,
} from "../assets/Photos/enif2";
import {
  ENIF3img1,
  ENIF3img2,
  ENIF3img3,
  ENIF3img4,
  ENIF3img5,
  ENIF3img6,
} from "../assets/Photos/enif3";
import {
  ENIF4img1,
  ENIF4img2,
  ENIF4img3,
  ENIF4img4,
  ENIF4img5,
  ENIF4img6,
} from "../assets/Photos/enif4";
import {
  ENIF5img1,
  ENIF5img2,
  ENIF5img3,
  ENIF5img4,
  ENIF5img5,
  ENIF5img6,
} from "../assets/Photos/enif5";

import {
  acm,
  airfit,
  daad,
  dgima,
  enis,
  habemus,
  leoni,
  leti,
  olivia,
  regim,
  relev,
} from "../assets/Logos/Sponsors";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Bootcamp", href: "#bootcamp" },
  { label: "Timeline", href: "#timeline" },
  { label: "Guests", href: "#guests" },
  { label: "Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
];

export const STATS = [
  { value: 130, label: "Participants", suffix: "+" },
  { value: 2, label: "Days", suffix: "" },
  { value: 9, label: "Sponsors", suffix: "+" },
];

export const SESSIONS = [
  {
    title:
      "From Writing to Publishing: A Complete Guide to IEEE Research Success",
    speaker: "Jalyn Kelley",
    date: "April 18, 2026",
  },
];

export const TIMELINE_EVENTS = [
  { date: "03 May", time: "09:00", title: "Check-in" },
  { date: "03 May", time: "09:30", title: "Opening Ceremony" },
  { date: "03 May", time: "10:00", title: "Introduction to IAS" },
  { date: "03 May", time: "10:30", title: "Coffee Break" },
  { date: "03 May", time: "11:00", title: "Panel Discussion" },
  { date: "03 May", time: "12:30", title: "Lunch" },
  {
    date: "03 May",
    time: "14:00",
    title: "Afternoon Workshops/ Pitching Session",
  },
  { date: "03 May", time: "17:00", title: "Closing Ceremony" },
];

export const GUESTS = [
  {
    name: "Ahmed Cheikhrouhou",
    role: "AI Research Engineer @ InstaDeep",
    img: AhmedCheikhrouhou,
  },
  {
    name: "Akram Taktak",
    role: "Guest Speaker",
    img: AkramTaktak,
  },
  {
    name: "Amine Ellouze",
    role: "Robotics & IoT Consultant",
    img: AmineEllouze,
  },
  {
    name: "Hedi Tmar",
    role: "Guest Speaker",
    img: HediTmar,
  },
  {
    name: "Hela Aidi",
    role: "Communication Trainer",
    img: HelaAidi,
  },
  {
    name: "Ines Cheniour",
    role: "General Manager & Design Thinker",
    img: InesCheniour,
  },
  {
    name: "Mariem Marakchi",
    role: "Instructor @ GOMYCODE",
    img: MariemMarrekchi,
  },
  {
    name: "Mohamed Kharrat",
    role: "Serial Entrepreneur & IoT Expert",
    img: MohamedKharrat,
  },
  {
    name: "Syrine Benkaji",
    role: "Biological Engineering Student",
    img: Syrine,
  },
  {
    name: "Taha Mtira",
    role: "Industrial Management Student",
    img: TahaMtira,
  },
  {
    name: "Takoua Bouchouicha",
    role: "Biological Engineering Student",
    img: TakouaBouchouicha,
  },
  {
    name: "Walid Labidi",
    role: "Guest Speaker",
    img: WalidLaabidi,
  },
  {
    name: "Yoldez Atitallah",
    role: "HR Manager & Radio Presenter",
    img: Yoldez,
  },
];

export const TEAM = [
  // --- COORDINATORS ---
  {
    name: "Ahmed Jallouli",
    role: "Coordinator",
    bio: "Ahmed Jalouli is a 22-year-old computer science engineering student at the National Engineering School of Sfax. He is actively engaged in IEEE activities and currently serves as Awards & Funds Manager in the IEEE ENIS Student Branch, where he contributes to managing initiatives and supporting student-led programs. He is also a Third Place Student Award winner for the IEEE Smart Village (ISV) Student Paper Competition 2025, reflecting his involvement in impactful IEEE projects and competitions at the international level.",
    portrait: JallouliRectangle,
    thumbnail: JallouliSquare,
    facebook: "https://www.facebook.com/ahmed.jallouli.836076",
    instagram: "https://www.instagram.com/ahmed.jallouli2/",
    linkedin: "https://www.linkedin.com/in/jallouli-ahmed/",
  },
  {
    name: "Mohamed Yassine Trigui",
    role: "Coordinator",
    bio: "Mohamed Yassine Trigui is a 22-year-old computer science engineering student at the National Engineering School of Sfax, with a strong interest in technology, digital communication, and community engagement. He is an active member of IEEE and currently serves as Media Manager in the IEEE ENIS Student Branch, where he leads content strategy, manages digital presence, and supports the promotion of student-led initiatives and technical events.",
    portrait: TriguiRectangle,
    thumbnail: TriguiSquare,
    facebook: "https://www.facebook.com/mohamedyassine.trigui.54",
    instagram: "https://www.instagram.com/med_yassine_trigui/",
    linkedin: "www.linkedin.com/in/mohamed-yassine-trigui",
  },
  {
    name: "Ola Chakroun",
    role: "Coordinator",
    bio: "Ola Chakroun is a 22-year-old computer science engineering student at the National Engineering School of Sfax. She previously served as Vice Chair of the IEEE IAS ENIS Student Branch Chapter, where she contributed to leading technical activities and supporting member engagement.",
    portrait: OlaRectangle,
    thumbnail: OlaSquare,
    facebook: "https://www.facebook.com/ola.chakroun.7",
    instagram: "https://www.instagram.com/ola__chakroun/",
    linkedin: "https://www.linkedin.com/in/ola-chakroun-147836332/",
  },

  // --- EXECUTIVE / TREASURER ---
  {
    name: "Abdallah Sallem",
    role: "Treasurer",
    bio: "Manages the finances, budget planning, and resource allocation for the team.",
    portrait: AbdallahRectangle,
    thumbnail: AbdalallahSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },

  // --- MANAGERS ---
  {
    name: "Ahmed Makni",
    role: "Design Manager",
    bio: "Crafts the visual identity and overarching aesthetics of our projects.",
    portrait: MakniRectangle,
    thumbnail: MakniSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Med Achraf Bensaad",
    role: "Design Manager",
    bio: "Brings aesthetics and functionality together to create beautiful user experiences.",
    portrait: AchrefRectangle,
    thumbnail: AchrefSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Ahmed Smaoui",
    role: "Logistic Manager",
    bio: "Handles operations on the ground, ensuring resources are exactly where they need to be.",
    portrait: SmaouiRectangle,
    thumbnail: SmaouiSquare,
    facebook: "https://www.facebook.com/ahmed.smaoui.5030",
    instagram:
      "https://www.instagram.com/ahmedsmaoui2003?igsh=eDFkY3JpbXd6cjJh&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/ahmed-smaoui-b3339a329/",
  },
  {
    name: "Donia Bahloul",
    role: "Logistic Manager",
    bio: "Works seamlessly to coordinate on-site logistics and crisis management.",
    portrait: DoniaRectangle,
    thumbnail: DoniaSquare,
    facebook: "https://www.facebook.com/donia.bahloul.474564/",
    instagram: "https://www.instagram.com/doniabahloul/",
    linkedin: "https://www.linkedin.com/in/donia-bahloul-90507632a/",
  },
  {
    name: "Mariem Megdiche",
    role: "Media Manager",
    bio: "Mariem Megdiche a 21-year-old , computer science engineering at the National Engineering School of Sfax. Enthusiastic and highly responsible tech professional. As an active IEEE committee member, she combines a passion for innovation with strong teamwork and leadership skills to drive impactful engineering projects",
    portrait: MezghaniRectangle,
    thumbnail: MezghanniSquare,
    facebook: "https://www.facebook.com/maryouma.megdiche",
    instagram: "https://www.instagram.com/mariemmegdiche7/",
    linkedin: "https://www.linkedin.com/in/mariem-megdiche-a6591438a/",
  },
  {
    name: "Oussema Ben Elhadj",
    role: "Planning Manager",
    bio: "Develops the schedules and timelines, ensuring every phase is perfectly timed.",
    portrait: OussemaRectangle,
    thumbnail: OussemaSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Yassine Meftah",
    role: "Planning Manager",
    bio: "Strategizes the project roadmaps to turn overarching visions into actionable steps.",
    portrait: PlaceholderRectangle,
    thumbnail: PlaceholderSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Amina Jarraya",
    role: "Sponsoring Manager",
    bio: "The voice of the team to the outside world. Secures partnerships and sponsorships.",
    portrait: AmiraRectangle,
    thumbnail: AmiraSquare,
    facebook: "https://www.facebook.com/amina.jarraya.963",
    instagram: "#",
    linkedin: "https://www.linkedin.com/in/amina-jarraya-a1b700384/",
  },
  {
    name: "Abdessalem Baccar",
    role: "Video Editing Manager",
    bio: "Baccar Abdessalem is a 21-year-old computer enginnering student at the National Engineering School of Sfax, with a strong interest in technology. He is an active member of IEEE.",
    portrait: AbdelsalemRectangle,
    thumbnail: AbdelsallemSquare,
    facebook: "https://www.facebook.com/abd.slem.baccar",
    instagram: "https://www.instagram.com/baccar_abdessalem/",
    linkedin: "https://www.linkedin.com/in/baccar-abd-essalem-168767374/",
  },
  {
    name: "Baya Kchaou",
    role: "Decoration Manager",
    bio: "Baya Kchaou, a 21-year-old Biological Engineering student, is passionate, highly responsible, and driven by curiosity for science and innovation. With a strong interest in biotechnology and life sciences, she combines analytical thinking with dedication and teamwork to contribute effectively to impactful projects. Motivated to learn and grow, she brings enthusiasm, discipline, and a collaborative spirit to every challenge she takes on.",
    portrait: BayaRectangle,
    thumbnail: BayaSquare,
    facebook: "https://www.facebook.com/baybou.kchaou.5?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/bayaa_kchaou/?hl=en",
    linkedin: "#",
  },

  // --- Ambassador Coordinator ---
  {
    name: "Ronz Lamis Ben Hamida",
    role: "Ambassador Coordinator",
    bio: "Ronz Lamis Ben Hamida is a 23-year-old biological engineering student at the National Engineering School of Sfax with a strong interest in biotechnology, health sciences and scientific research. She is actively involved in IEEE and technical initiatives that promote innovation and community impact. She has also contributed as an ambassador in several technology and innovation events, supporting communication, coordination and participant engagement.",
    portrait: RonzRectangle,
    thumbnail: RonzSquare,
    facebook: "https://www.facebook.com/share/1Dtqk9U16r/",
    instagram: "https://www.instagram.com/ronz_lamis?igsh=aXYyMHB3dGU2a24y",
    linkedin: "www.linkedin.com/in/ronz-lamis-ben-hamida-197b9833b",
  },

  // --- TECH / WEBMASTER ---
  {
    name: "Layth Khemakhem",
    role: "Webmaster",
    bio: "Layth Khemakhem is a 22-year-old Computer Science Engineering student at the National Engineering School of Sfax (ENIS). A tech enthusiast with a passion for digital communication and community building, Layth serves as the Media Manager for the IEEE ENIS Student Branch. In this role, he leads design and event management efforts, competes in technical challenges, and mentors fellow members on their projects.",
    portrait: LaythRectangle,
    thumbnail: LaythSquare,
    facebook: "https://www.facebook.com/laith.khemakhem/",
    instagram: "https://www.instagram.com/laythkhemakhem/",
    linkedin: "https://www.linkedin.com/in/layth-khemakhem-867763314/",
  },

  //Logistic Team

  {
    name: "Ilyes Hakmouni",
    role: "Logistic Member",
    bio: "Handles operations on the ground, ensuring resources are exactly where they need to be.",
    portrait: PlaceholderRectangle,
    thumbnail: PlaceholderSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Amin Frikha",
    role: "Logistic Member",
    bio: "Handles operations on the ground, ensuring resources are exactly where they need to be.",
    portrait: PlaceholderRectangle,
    thumbnail: PlaceholderSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },

  // Ambassadors
  {
    name: "Emna Bensaid",
    role: "ENIS Ambassador",
    bio: "Encourages student involvement in IEEE activities, promotes events, and fosters a sense of community among members.",
    portrait: PlaceholderRectangle,
    thumbnail: PlaceholderSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Emna Abbassi",
    role: "ENIS Ambassador",
    bio: "Encourages student involvement in IEEE activities, promotes events, and fosters a sense of community among members.",
    portrait: PlaceholderRectangle,
    thumbnail: PlaceholderSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Hedi Gouiaa",
    role: "ENIS Ambassador",
    bio: "Encourages student involvement in IEEE activities, promotes events, and fosters a sense of community among members.",
    portrait: PlaceholderRectangle,
    thumbnail: PlaceholderSquare,
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  
];

// Note: Adjust this import path depending on where this file is located

export const GALLERY_IMAGES = [
  {
    src: OpeningCermony,
    alt: "Opening Ceremony",
    span: "col-span-2",
  },
  {
    src: WelcomingBack,
    alt: "Welcoming Packs",
    span: "",
  },
  {
    src: IOTSession,
    alt: "IoT Technical Session",
    span: "",
  },
  {
    src: Pitching1,
    alt: "Team Pitching Session",
    span: "",
  },
  {
    src: Pitching2,
    alt: "Pitching and Presentation",
    span: "col-span-2",
  },
  {
    src: Leoni,
    alt: "Leoni Booth and Networking",
    span: "",
  },
  {
    src: Pitching3,
    alt: "Final Pitching Session",
    span: "col-span-2",
  },
  {
    src: OnlineSession,
    alt: "Remote Online Session",
    span: "",
  },
  {
    src: ClosingCermony,
    alt: "Closing Ceremony and Awards",
    span: "col-span-2",
  },
];

export const EDITIONS = [
  {
    id: "1",
    date: "02 May, 2018",
    theme: "IOT",
    logo: ENIF1,
    description:
      "The Industrial IoT Forum was held on May 2, 2018, at ENIS. It gathered around 200 participants to explore innovations and trends in the Internet of Things (IoT). The event featured 10 conferences and 2 hands-on workshops, including one focused on BLE communications. Organized by the Department of Computer Science, the forum aimed to strengthen connections between students and industry professionals. It highlighted opportunities in various sectors such as manufacturing, transportation, and healthcare.",
    images: [ENIF1img1, ENIF1img2, ENIF1img3, ENIF1img4, ENIF1img5, ENIF1img6],
  },
  {
    id: "2",
    date: "05-12 December, 2021",
    theme: "Olivia Competition",
    logo: ENIF2,
    description:
      "It began on December 5 with the theme of IoT. The first day kicked off with an opening ceremony, the announcement of the Olivia competition, and training sessions led by Ms. Yoldez Atitallah and Mr. Mohamed Kharrat. On December 12, the second day featured the Olivia competition and a TechXchange conference organized by the IEEE Computer Society ENIS Student Chapter. The event concluded with team presentations and the awarding of prizes to four winning teams.",
    images: [ENIF2img1, ENIF2img2, ENIF2img3, ENIF2img4, ENIF2img5, ENIF2img6],
  },
  {
    id: "3",
    date: "05-06 December, 2022",
    theme: "IOT & Robotics",
    logo: ENIF3,
    description:
      "ENIF 3.0, held in 2022 as the third edition of the event, focused on the Internet of Things (IoT) and robotics, bringing together students and professionals to explore emerging technologies. The program included technical workshops as well as sessions on interpersonal skills, helping participants develop both technical and soft skills. A key highlight was the Olivia competition, where teams presented their prototypes to a panel of professional judges, gaining valuable feedback and real-world exposure.",
    images: [ENIF3img1, ENIF3img2, ENIF3img3, ENIF3img4, ENIF3img5, ENIF3img6],
  },
  {
    id: "4",
    date: "03 December, 2023",
    theme: "E-Health, IOT & AI",
    logo: ENIF4,
    description:
      "This edition focused on e-health, IoT, and AI to address health issues related to climate change. It featured personal development workshops and an innovative solutions competition (Hacking EcoHealth Competition). Prior to the main event, a bootcamp was held, offering sessions on the IoT development process for startups, the impact of pollution on human health, and personal development. Our partners for this edition were DAAD and AIRFIT.",
    images: [ENIF4img1, ENIF4img2, ENIF4img3, ENIF4img4, ENIF4img5, ENIF4img6],
  },
  {
    id: "5",
    date: "30 November - 01 December, 2024",
    theme: "Industry 5.0",
    logo: ENIF5,
    description:
      "The 5th edition of ENIF, held at the National School of Engineers of Sfax under the theme “Advanced Technologies for a Sustainable Future,” highlighted Industry 5.0 and the central role of humans within it. Leoni, as a strategic sponsor, contributed to this edition with an insightful conference on IoT in Industry 5.0. Through a mix of conferences, workshops, and an industrial hackathon, the event enabled participants to turn their knowledge into innovative solutions directly applicable to current technological challenges.",
    images: [ENIF5img1, ENIF5img2, ENIF5img3, ENIF5img4, ENIF5img5, ENIF5img6],
  },
];

export const SPONSORS = [
  acm,
  airfit,
  daad,
  dgima,
  enis,
  habemus,
  leoni,
  leti,
  olivia,
  regim,
  relev,
];
export const RADIO = [
  {
    radioName: "Magenra Web Radio",
    logo: MagentaLogo,
    date: "11 April 2026",
    duration: "28 minutes",
    audioUrl: MagnetaAudio,
    photos: [
      { src: Magneta5, alt: "Magenta Show" },
      { src: Magneta4, alt: "Magenta Live" },
      { src: Magneta3, alt: "Magenta Post-Show" },
    ],
  },
];
