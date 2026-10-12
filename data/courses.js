/*
 * Content for the GitHub-style course pages.
 * Copy is carried over from the previous pages; claims that are not on the live site
 * (e.g. named percentiles for students who are not listed there, "AIIMS") were removed.
 * Targets are worded as targets, not as results.
 */

export const courseData = {
  jee: {
    path: "/jee-coaching/",
    crumb: "JEE coaching",
    h1: "Best JEE Coaching in Nagpur | IIT-JEE Main & Advanced Classes",
    lead:
      "Crack IIT-JEE Main and Advanced with Double Teaching, small batches and weekly computer-based tests on Hudkeshwar Road, Nagpur.",
    resultsCategory: "JEE",
    about: [
      ["Batch size", "30–40 students"],
      ["Duration", "1 year or 2 years"],
      ["For", "Class 11, Class 12 and droppers"],
      ["Tests", "Weekly computer-based mocks"],
      ["Material", "Printed modules and past papers"],
    ],
    overview: {
      title: "Why students choose CSI for JEE in Nagpur",
      paras: [
        "Cracking JEE Main and Advanced demands deep conceptual clarity, mathematical rigour and fast analytical instincts. At Century Science Institute, students build problem-solving principles instead of memorising patterns.",
        "Every day follows the Double Teaching Concept: one hour of Class 11 and 12 board-style derivation practice, followed immediately by one hour of JEE-level multi-concept problems on the same topic.",
      ],
    },
    method: [
      ["Advanced problem-solving", "Weekly discussions covering HC Verma, IE Irodov, SL Loney and MS Chouhan problem frameworks."],
      ["NTA computer-based mock interface", "A simulated test lab that replicates the JEE exam screen, timer and question palette."],
      ["Personal doubt clinic", "Direct access to senior teachers every day after class for one-on-one doubt solving."],
      ["Board + JEE together", "Board theory and JEE problem-solving are covered side by side, so Class 12 marks do not suffer."],
    ],
    syllabus: [
      ["Physics", "Mechanics, Electrodynamics, Optics, Modern Physics and Thermodynamics, with calculus-based problem solving."],
      ["Chemistry", "Physical Chemistry numericals, Organic reaction mechanisms and Inorganic memory charts."],
      ["Mathematics", "Coordinate Geometry, Differential and Integral Calculus, Vectors, 3D Geometry and Algebra."],
    ],
    tests: [
      ["Chapter test", "Weekly", "Computer-based, NTA pattern"],
      ["Full-syllabus mock", "Monthly", "Computer-based, full JEE Main paper"],
      ["Crash test series", "Before the January and April attempts", "Timed full papers with analysis"],
    ],
    faqs: [
      ["What is the batch size for JEE coaching at CSI?", "Batches are limited to 30–40 students for focused mentoring, close observation and individual doubt clearing."],
      ["Do you provide mock tests for JEE Main and Advanced?", "Yes. CSI runs weekly mock tests and full-syllabus tests on a computer-based interface like the NTA exam, with accuracy and percentile analysis."],
      ["Does CSI provide study material for JEE?", "Yes. Students get chapter-wise theory booklets, formula handbooks and solved past questions from previous years."],
      ["Is there a crash course for JEE?", "Yes. Intensive crash courses and rapid test series run before the January and April attempts."],
    ],
    schema: {
      name: "JEE Coaching in Nagpur (Main & Advanced)",
      description: "JEE Main and Advanced coaching in Nagpur with Double Teaching, small batches, weekly computer-based mock tests and study material.",
    },
  },

  neet: {
    path: "/neet-coaching/",
    crumb: "NEET coaching",
    h1: "Best NEET Coaching in Nagpur – Medical Entrance Classes",
    lead:
      "NCERT Biology taught line by line by the director, Physics and Chemistry problem clinics, and weekly 720-mark OMR tests on Hudkeshwar Road, Nagpur.",
    resultsCategory: "NEET",
    about: [
      ["Batch size", "30–40 students"],
      ["Duration", "1 year or 2 years"],
      ["Biology", "Mrs. Meghna Marchatwar, M.Sc. Biology"],
      ["Tests", "Weekly sectional + 720-mark OMR mocks"],
      ["Hostel", "Available with the residential course"],
    ],
    overview: {
      title: "Why medical aspirants choose CSI for NEET in Nagpur",
      paras: [
        "NEET rewards precision, speed and deep conceptual clarity. A score of 650+ needs near-zero errors in NCERT Biology and fast calculation in Physics and Chemistry.",
        "Under director Mrs. Meghna Marchatwar (M.Sc. Biology, 15+ years teaching), students learn every NCERT diagram, summary point and assertion-reason variation while training in timed OMR exam conditions.",
      ],
    },
    method: [
      ["NCERT line-by-line Biology", "Detailed chapter decoding and diagram revision, aiming for 350+ out of 360 in Biology."],
      ["Physics problem clinics", "Mechanics and electromagnetism broken into simple formula patterns and shortcuts."],
      ["Chemistry high-yield charts", "Daily practice on Organic reaction pathways, Inorganic memory charts and Physical Chemistry calculations."],
      ["720-mark OMR test series", "Exam-day conditions with negative marking control and speed practice."],
    ],
    syllabus: [
      ["Biology", "NCERT Class 11 and 12: diversity, cell biology, physiology, genetics, ecology, with diagram practice."],
      ["Physics", "Mechanics, electromagnetism, optics and modern physics, focused on NEET-pattern numericals."],
      ["Chemistry", "Physical, Organic and Inorganic Chemistry with NCERT-based question banks."],
    ],
    tests: [
      ["Sectional test", "Weekly", "OMR, subject-wise"],
      ["Full-syllabus mock", "Monthly", "OMR, 720 marks, NTA pattern"],
      ["Assertion-reason sheets", "Every chapter", "Practice sheets with answer keys"],
    ],
    faqs: [
      ["What is the NEET batch size at CSI?", "Each batch has 30–40 students, for individual attention, regular parent updates and personal mentoring."],
      ["Do you provide mock tests for NEET?", "Yes. Weekly sectional tests and 720-mark full-syllabus OMR mocks in NEET exam conditions."],
      ["Does CSI provide study material for NEET?", "Yes. Updated NEET material, NCERT-based question banks, assertion-reason practice sheets and diagrams."],
      ["Who teaches Biology at CSI Nagpur?", "Director Mrs. Meghna Marchatwar (M.Sc. Biology, B.Ed., A.D.I.D., 15+ years teaching) heads Biology herself."],
    ],
    schema: {
      name: "NEET Medical Entrance Coaching in Nagpur",
      description: "NEET coaching in Nagpur with NCERT Biology taught by the director, Physics and Chemistry clinics and weekly OMR mock tests.",
    },
  },

  cet: {
    path: "/mht-cet-coaching/",
    crumb: "MHT-CET coaching",
    h1: "MHT-CET Coaching Classes in Nagpur (PCM & PCB)",
    lead:
      "State Board aligned PCM and PCB coaching with speed practice on the CET computer interface, on Hudkeshwar Road, Nagpur.",
    resultsCategory: "MHT-CET",
    about: [
      ["Batch size", "30–40 students"],
      ["For", "Class 11, Class 12 and droppers"],
      ["Streams", "PCM (engineering) and PCB (pharmacy)"],
      ["Tests", "Computer-based CET mocks"],
      ["Short courses", "Crash course and test series"],
    ],
    overview: {
      title: "Master the Maharashtra CET exam",
      paras: [
        "MHT-CET questions come largely from the Maharashtra State Board syllabus, but the score depends on calculation speed and shortcuts. Strong textbook understanding plus timed practice is what moves a student into the top percentiles.",
        "At Century Science Institute, structured daily drills and computer-based test practice have helped students like Tejas Dhande score 99.23 percentile.",
      ],
    },
    method: [
      ["PCM engineering focus", "Fast Maths techniques and conceptual Physics and Chemistry problem sets."],
      ["PCB pharmacy focus", "State Board Biology line by line, plus rapid Chemistry calculations."],
      ["Official CET exam interface", "Practice on a computer interface like the one used by the Maharashtra State CET Cell."],
      ["Board exam synced", "Class 12 board theory is covered alongside, so students score well in boards too."],
    ],
    syllabus: [
      ["Physics", "Maharashtra State Board Class 11 and 12 Physics, with CET-speed numericals."],
      ["Chemistry", "Physical, Organic and Inorganic Chemistry from the State Board textbooks."],
      ["Mathematics (PCM)", "Calculus, Algebra, Coordinate Geometry, Vectors and Probability with shortcut methods."],
      ["Biology (PCB)", "State Board Biology, chapter by chapter, with diagram and fact drills."],
    ],
    tests: [
      ["Chapter test", "Weekly", "Computer-based, CET pattern"],
      ["Full mock", "Monthly", "Computer-based, full CET paper"],
      ["Test series", "January to April", "Full-length computer-based papers"],
    ],
    faqs: [
      ["How does CSI prepare students for a high MHT-CET percentile?", "Through Maharashtra State Board textbooks, shortcut methods, formula drills and timed computer-based mock tests in the CET Cell format."],
      ["Are there separate batches for PCM and PCB?", "Yes. There are dedicated batches for engineering (PCM) and pharmacy (PCB) aspirants."],
      ["Do you offer a crash course and test series for MHT-CET?", "Yes. An intensive crash course and a full-length computer-based test series run every year before the exam."],
    ],
    schema: {
      name: "MHT-CET Coaching in Nagpur (Engineering & Pharmacy)",
      description: "MHT-CET coaching in Nagpur with State Board aligned teaching, PCM and PCB batches and computer-based mock tests.",
    },
  },
};
