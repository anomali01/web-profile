export const PROFILE = {
  name: 'Abinaya Arya Zaidan',
  initials: 'AZ',
  title: 'Informatics Student',
  subtitle: 'Web & Desktop Developer',
  location: 'Kepanjen, Malang, East Java',
  phone: '+62 812-2782-5205',
  email: 'agus8u7@gmail.com',
  github: 'github.com/anomali01',
  githubUrl: 'https://github.com/anomali01',
  summary:
    'A 20-year-old Informatics student at Semen Indonesia International University (6th semester) with hands-on experience building web and desktop applications. Proficient in JavaScript, Python, and PHP with an understanding of the Laravel framework. Known as a hardworking, diligent, and responsible individual who thrives in a team environment and enjoys solving complex problems.',
  experience: [
    {
      role: 'Website Developer',
      org: 'MAMA (Marketplace Mahasiswa)',
      date: 'Jan 2026',
      links: {
        repo: 'https://github.com/anomali01/mama-marketplace',
        live: 'https://mama-marketplace.vercel.app',
      },
      points: [
        'Built an e-commerce platform focused on university students with three user roles: seller, buyer, and validator (admin from student organization/BEM).',
        'Transactions are verified by validators to ensure security and accountability.',
        'Developed using Laravel with Blade engine, PHP as the primary language, and MySQL as the database.',
      ],
      tags: ['Laravel', 'Blade', 'PHP', 'MySQL'],
    },
    {
      role: 'Website Developer',
      org: 'TOKOKU',
      date: 'Mar 2025',
      links: {
        repo: 'https://github.com/mohfarizalsholahuddinghonniuisi23/pemrograman-web/tree/main/Uas_TokoKu',
      },
      points: [
        'Led a team in developing a full-featured e-commerce website named TOKOKU.',
        'Built with Laravel using SQLite as the database, Bootstrap 5 for the frontend, and JavaScript for interactivity.',
        'PHP served as the primary backend language.',
      ],
      tags: ['Laravel', 'SQLite', 'Bootstrap 5', 'JavaScript', 'PHP'],
    },
    {
      role: 'Desktop App Developer',
      org: 'Banking System Application',
      date: 'Apr 2024',
      links: {},
      points: [
        'Developed a GUI-based banking system application using Java Swing.',
        'Implemented core features: customer registration, authentication (PIN/password), deposit, cash withdrawal, transfers, balance inquiry, and transaction history.',
      ],
      tags: ['Java', 'Java Swing'],
    },
  ],
  education: [
    {
      school: 'Universitas Internasional Semen Indonesia',
      major: 'Informatics',
      date: '2023 – 2027',
      note: 'Currently in Semester 6.',
    },
  ],
  organizations: [
    {
      name: 'Himpunan Informatika UISI',
      role: 'PSDM Division',
      date: '2024 – 2026',
    },
    {
      name: 'IF-League 2024 UISI',
      role: 'Head of Event Committee',
      date: '2024',
    },
    {
      name: 'PKKMB 2025 UISI',
      role: 'Equipment Division Committee',
      date: 'Sep 2025',
    },
  ],
  skills: [
    { name: 'JavaScript', level: 85 },
    { name: 'PHP', level: 80 },
    { name: 'Python', level: 72 },
    { name: 'Java', level: 68 },
    { name: 'Laravel Framework', level: 78 },
    { name: 'Bootstrap 5', level: 82 },
    { name: 'MySQL / SQLite', level: 75 },
    { name: 'Team Leadership', level: 88 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Prompt Crafting', level: 80 },
  ],
} as const
