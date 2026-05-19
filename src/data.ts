export const PROFILE = {
  name: 'Abinaya Arya Zaidan',
  initials: 'AZ',
  title: 'Informatics Student',
  subtitle: 'Web & Desktop Developer',
  location: 'Kepanjen, Malang, East Java',
  phone: '+62 812-2782-5205',
  whatsappUrl: 'https://wa.me/6281227825205?text=Halo%20Abinaya%2C%20saya%20tertarik%20untuk%20terhubung%20dengan%20kamu!',
  email: 'agus8u7@gmail.com',
  github: 'github.com/anomali01',
  githubUrl: 'https://github.com/anomali01',
  linkedin: 'linkedin.com/in/abinaya-zaidan',
  linkedinUrl: 'https://www.linkedin.com/in/abinaya-zaidan-870b25293/',
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
    {
      name: 'JavaScript',
      category: 'Language',
      desc: 'Built multiple web projects including TOKOKU e-commerce with clean, well-structured, and organized JS code for dynamic frontend interactivity.',
    },
    {
      name: 'PHP',
      category: 'Language',
      desc: 'Primary backend language used across several projects including MAMA Marketplace and TOKOKU, handling server logic, routing, and data management.',
    },
    {
      name: 'Python',
      category: 'Language',
      desc: 'Holds a LinkedIn-certified credential in Artificial Intelligence & Machine Learning, demonstrating foundational knowledge in AI/ML concepts with Python.',
    },
    {
      name: 'Java',
      category: 'Language',
      desc: 'Developed a full GUI-based Banking System application using Java Swing with features like registration, authentication, transfers, and transaction history.',
    },
    {
      name: 'Laravel Framework',
      category: 'Framework',
      desc: 'Used extensively in MAMA Marketplace and TOKOKU projects — handling MVC architecture, Blade templating, Eloquent ORM, and middleware.',
    },
    {
      name: 'Bootstrap 5',
      category: 'Framework',
      desc: 'Applied in the TOKOKU project as the primary frontend framework to build responsive and consistent UI components across pages.',
    },
    {
      name: 'MySQL / SQLite',
      category: 'Database',
      desc: 'Used MySQL in MAMA Marketplace for relational data and SQLite in TOKOKU for a lightweight embedded database solution.',
    },
    {
      name: 'Team Leadership',
      category: 'Soft Skill',
      desc: 'Led the development team for the TOKOKU project and served as Head of Event Committee at IF-League 2024 UISI, coordinating members effectively.',
    },
    {
      name: 'Problem Solving',
      category: 'Soft Skill',
      desc: 'Consistently tackled technical and organizational challenges across academic projects, from debugging complex systems to managing event logistics.',
    },
    {
      name: 'Prompt Crafting',
      category: 'Soft Skill',
      desc: 'Skilled at writing precise and effective AI prompts to accelerate development workflows, generate structured code, and optimize output quality.',
    },
  ],
} as const
