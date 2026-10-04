/**
 * Facts and phrasing come from public pages on tis.edu.in
 * (home, vision and mission, why choose us, pedagogy, houses,
 * boarding facilities, admissions, FAQ) plus the published motto.
 * Longer passages are paraphrased. Contact details are unchanged.
 */

const photo = (id, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const school = {
  name: "Tula’s International School",
  short: "TIS",
  motto: "Knowledge is the supreme wealth",
  established: 2012,
  email: "info@tis.edu.in",
  phoneDisplay: "+91 98379 83791",
  phoneHref: "tel:+919837983791",
  landlines: ["0135-2699444", "0135-2699666"],
  addressLines: [
    "Dhoolkot, P.O. Selaqui",
    "Chakrata Road, Dehradun 248011",
    "Uttarakhand, India",
  ],
  mapUrl: "https://maps.google.com/?q=Tulas+International+School+Dhoolkot+Dehradun",
  site: "https://tis.edu.in/",
  admissionsUrl: "https://tis.edu.in/admission-procedure/",
};

export const nav = [
  { href: "#story", label: "Story" },
  { href: "#academics", label: "Academics" },
  { href: "#campus", label: "Campus" },
  { href: "#houses", label: "Houses" },
];

export const heroFacts = [
  { value: "2012", label: "Established" },
  { value: "22", label: "Acre campus" },
  { value: "IV–XII", label: "CBSE grades" },
  { value: "7", label: "Houses" },
];

export const ribbon = [
  "CBSE, New Delhi",
  "Boarding and day",
  "Grades IV–XII",
  "22-acre campus",
  "Seven houses",
  "Vegetarian kitchen",
  "Dehradun",
];

export const vision = [
  "Personal growth put to work in the service of society.",
  "Curiosity and a real appetite for learning, kept alive on purpose.",
  "Future-ready citizens of strong character, loyal to the country’s values.",
];

export const mission = [
  "Help students excel academically and grow as people.",
  "Develop into a benchmark institution in education.",
  "Offer quality teaching and a wider learning life than the timetable.",
  "Raise a generation willing to serve humanity.",
];

export const pillars = [
  {
    title: "Affiliated to CBSE, New Delhi",
    copy: "A national curriculum that moves with reform, including life skills alongside the core subjects. Faculty come from across India and are trained to notice how each student actually learns.",
  },
  {
    title: "The foothills as a campus",
    copy: "Twenty-two acres at Dhoolkot, Selaqui, on Chakrata Road. Playing fields sit among gardens and tree-lined walks, and the day’s places are kept within walking distance.",
  },
  {
    title: "Gurukul, with present-tense tools",
    copy: "Students still go to their teachers for knowledge and counsel. Around that relationship: laboratories, a digital library, smart classrooms, and coaches who treat sport as a craft.",
  },
  {
    title: "Boarding and day, co-educational",
    copy: "A fully residential school that also welcomes day scholars. Separate boarding for girls and boys, a vegetarian kitchen, and a campus watched over around the clock.",
  },
];

export const stages = [
  {
    years: "Classes IV–VIII",
    title: "Middle years",
    copy: "A broad CBSE programme where the habit is curiosity: practical lessons, art, sport, and class sizes that let a teacher know the child.",
  },
  {
    years: "Classes IX–X",
    title: "Secondary",
    copy: "Board-facing academics with more than one way to show understanding — written tests, projects, quizzes, seminars, and practical work.",
  },
  {
    years: "Class XI",
    title: "Senior secondary",
    copy: "Registration opens for Class XI along with Classes IV–IX. A seat is confirmed after counselling with the child, when a place is open.",
  },
];

export const pedagogy = [
  {
    title: "Inquiry in the room",
    copy: "Teachers work through constructive, collaborative, inquiry-based lessons so students take part, inside class and outside it.",
  },
  {
    title: "A 360° view of progress",
    copy: "Assessment includes poster-making, plays, quizzes, and written tests, so a subject is seen from more than one angle.",
  },
  {
    title: "Arts and sport as curriculum",
    copy: "Performing arts and craft are regular. Sport is coached with the aim of taking a student past amateur level.",
  },
  {
    title: "Student voice",
    copy: "Councils for the library, school, mess, academics, sport, IT, and pastoral care give students a place to raise what should change.",
  },
  {
    title: "A wider map",
    copy: "Model United Nations, exchanges, excursions, camping, and trekking are part of how students practise a public life.",
  },
  {
    title: "Care on campus",
    copy: "A round-the-clock infirmary and a clinical counsellor keep wellbeing in the centre of the day, not at the edge of it.",
  },
];

export const facilities = [
  {
    title: "Sport, taken seriously",
    copy: "Coaches and grounds a residential school can actually use every day, including federation-approved courts.",
    image: photo("photo-1574629810360-7efbbe195018", 1600),
    tags: [
      "Football",
      "Lawn tennis",
      "Badminton",
      "Squash",
      "Basketball",
      "Cricket nets",
      "Volleyball",
      "Taekwondo",
      "Table tennis",
      "Skating",
    ],
  },
  {
    title: "Libraries",
    copy: "An air-conditioned digital library and a reference library, built to make reading a daily habit.",
    image: photo("photo-1524995997946-a1c2e315a42f", 900),
  },
  {
    title: "Laboratories",
    copy: "Science laboratories, a computer lab, and a lab for mathematics practicals.",
    image: photo("photo-1532094349884-543bc11b234d", 900),
  },
  {
    title: "Wellbeing",
    copy: "An infirmary with ambulance support, a clinical counsellor, and CCTV placed across the campus.",
    image: photo("photo-1576091160550-2173dba999ef", 900),
  },
  {
    title: "Stage and gathering",
    copy: "An auditorium seating 500 and more, plus an open-air amphitheatre for the noisier kinds of learning.",
    image: photo("photo-1503095396549-807759245b35", 900),
  },
  {
    title: "The working day",
    copy: "Two dining halls, a vegetarian kitchen, a cafeteria, a gymnasium, and a guest house for visiting families.",
    image: photo("photo-1414235077428-338989a2e8c0", 900),
  },
];

export const houses = [
  "Olympian",
  "Spartan",
  "Trojan",
  "Titan",
  "Starks",
  "Valkyrie",
  "Athena",
];

export const boarding = [
  {
    title: "A room of one’s own work",
    copy: "Dorms house four students. Each has a bed and storage, a cupboard, a study table, a book rack, and a soft board. Windows are large enough to keep the hills in view.",
  },
  {
    title: "Adults who stay",
    copy: "House masters and house mothers look after academic and emotional needs, with tutors beside them. Cleaners are on duty through the day.",
  },
  {
    title: "Food and laundry",
    copy: "Meals are vegetarian. Laundry runs on washers, dryers, and ironing equipment sized for a boarding house, not a cupboard.",
  },
  {
    title: "Safety, stated plainly",
    copy: "The campus is under CCTV, with an ambulance available for emergencies. Separate boarding houses serve girls and boys.",
  },
];

export const steps = [
  {
    when: "September",
    title: "Registration opens",
    copy: "Applications are taken for Classes IV–IX and XI. The academic year begins in the first week of April and ends on 31 March.",
  },
  {
    when: "The form",
    title: "Apply and register",
    copy: "Complete the form at the admission office or online, with a registration fee of ₹15,000. The fee is neither transferable nor refundable.",
  },
  {
    when: "31 March",
    title: "Reach the school in time",
    copy: "Forms should arrive by 31 March of the admission year. Seats are offered first-come, first-served, and can fill before that date.",
  },
  {
    when: "Counselling",
    title: "A conversation with the child",
    copy: "Admission is finalised after counselling, and only when a seat is open. Mid-year vacancies are occasional; the admission office can confirm them by email.",
  },
];

export const grades = ["IV", "V", "VI", "VII", "VIII", "IX", "XI"];

export const stays = ["Boarding", "Day"];

export const heroSlides = [
  {
    src: photo("photo-1427504494785-3a9ca7044f45", 2000),
    alt: "Students walking between school buildings",
  },
  {
    src: photo("photo-1509062522246-3755977927d7", 2000),
    alt: "Students in class during a lesson",
  },
  {
    src: photo("photo-1544735716-392fe2489ffa", 2000),
    alt: "Himalayan foothills above a green valley",
  },
];

export const scenes = {
  classroom: {
    src: photo("photo-1577896851231-70ef18881754", 1600),
    alt: "Students working together in a classroom",
  },
  boarding: {
    src: photo("photo-1555854877-bab0e564b8d5", 1400),
    alt: "A quiet student room with a bed and desk",
  },
};
