// Sample/generic course data for colleges without detailed fee data
import type { FeeRecord } from "./srmfees";

// Helper to generate course records for a college
function generateCourses(
    collegeId: string,
    collegeName: string,
    campus: string,
    courses: { branch: string; program: string; level: "UG" | "PG"; fee: string }[]
): FeeRecord[] {
    return courses.map((c, idx) => ({
        id: `${collegeId}-${idx + 1}`,
        collegeId,
        collegeName,
        campus,
        level: c.level,
        program: c.program,
        branch: c.branch,
        tuitionPerYear: c.fee,
        notes: "Fees are indicative. Contact college for exact details.",
    }));
}

// Loyola College courses
export const loyolaCourses: FeeRecord[] = generateCourses(
    "loyola",
    "Loyola College",
    "Nungambakkam, Chennai",
    [
        { branch: "B.A. Economics", program: "B.A.", level: "UG", fee: "₹45,000" },
        { branch: "B.Com General", program: "B.Com", level: "UG", fee: "₹42,000" },
        { branch: "B.Com Corporate Secretaryship", program: "B.Com", level: "UG", fee: "₹48,000" },
        { branch: "B.Sc. Computer Science", program: "B.Sc.", level: "UG", fee: "₹55,000" },
        { branch: "B.Sc. Physics", program: "B.Sc.", level: "UG", fee: "₹40,000" },
        { branch: "B.Sc. Chemistry", program: "B.Sc.", level: "UG", fee: "₹40,000" },
        { branch: "B.Sc. Mathematics", program: "B.Sc.", level: "UG", fee: "₹38,000" },
        { branch: "B.A. English Literature", program: "B.A.", level: "UG", fee: "₹35,000" },
        { branch: "B.A. History", program: "B.A.", level: "UG", fee: "₹32,000" },
        { branch: "BBA", program: "BBA", level: "UG", fee: "₹65,000" },
        { branch: "M.A. Economics", program: "M.A.", level: "PG", fee: "₹55,000" },
        { branch: "M.Com", program: "M.Com", level: "PG", fee: "₹50,000" },
        { branch: "M.Sc. Computer Science", program: "M.Sc.", level: "PG", fee: "₹65,000" },
        { branch: "M.A. English", program: "M.A.", level: "PG", fee: "₹45,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,20,000" },
    ]
);

// SRM Easwari Engineering College courses
export const srmEaswariCourses: FeeRecord[] = generateCourses(
    "srm-easwari",
    "SRM Easwari Engineering College",
    "Ramapuram, Chennai",
    [
        { branch: "B.E. Computer Science and Engineering", program: "B.E.", level: "UG", fee: "₹1,50,000" },
        { branch: "B.E. Electronics and Communication", program: "B.E.", level: "UG", fee: "₹1,35,000" },
        { branch: "B.E. Mechanical Engineering", program: "B.E.", level: "UG", fee: "₹1,20,000" },
        { branch: "B.E. Electrical and Electronics", program: "B.E.", level: "UG", fee: "₹1,20,000" },
        { branch: "B.E. Civil Engineering", program: "B.E.", level: "UG", fee: "₹1,10,000" },
        { branch: "B.Tech Artificial Intelligence", program: "B.Tech", level: "UG", fee: "₹1,60,000" },
        { branch: "B.Tech Information Technology", program: "B.Tech", level: "UG", fee: "₹1,45,000" },
        { branch: "M.E. Computer Science", program: "M.E.", level: "PG", fee: "₹1,00,000" },
        { branch: "M.E. VLSI Design", program: "M.E.", level: "PG", fee: "₹95,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,25,000" },
    ]
);

// SRM Valliammai Engineering College courses
export const srmValliammaiCourses: FeeRecord[] = generateCourses(
    "srm-valliammai",
    "SRM Valliammai Engineering College",
    "Kattankulathur, Chennai",
    [
        { branch: "B.E. Computer Science and Engineering", program: "B.E.", level: "UG", fee: "₹1,40,000" },
        { branch: "B.E. Information Technology", program: "B.E.", level: "UG", fee: "₹1,35,000" },
        { branch: "B.E. Electronics and Communication", program: "B.E.", level: "UG", fee: "₹1,25,000" },
        { branch: "B.E. Electrical and Electronics", program: "B.E.", level: "UG", fee: "₹1,15,000" },
        { branch: "B.E. Mechanical Engineering", program: "B.E.", level: "UG", fee: "₹1,10,000" },
        { branch: "B.E. Civil Engineering", program: "B.E.", level: "UG", fee: "₹1,05,000" },
        { branch: "B.Tech Data Science", program: "B.Tech", level: "UG", fee: "₹1,50,000" },
        { branch: "M.E. Computer Science", program: "M.E.", level: "PG", fee: "₹90,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,20,000" },
    ]
);

// Hindustan University courses
export const hindustanCourses: FeeRecord[] = generateCourses(
    "hindustan",
    "Hindustan University",
    "Padur, Chennai",
    [
        { branch: "B.Tech Aerospace Engineering", program: "B.Tech", level: "UG", fee: "₹2,50,000" },
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹2,20,000" },
        { branch: "B.Tech Mechanical Engineering", program: "B.Tech", level: "UG", fee: "₹2,00,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹2,00,000" },
        { branch: "B.Tech Civil Engineering", program: "B.Tech", level: "UG", fee: "₹1,80,000" },
        { branch: "B.Arch Architecture", program: "B.Arch", level: "UG", fee: "₹2,75,000" },
        { branch: "BBA Aviation Management", program: "BBA", level: "UG", fee: "₹1,50,000" },
        { branch: "M.Tech Aerospace Engineering", program: "M.Tech", level: "PG", fee: "₹1,50,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹2,00,000" },
    ]
);

// Sri Ramachandra Institute courses
export const sriRamachandraCourses: FeeRecord[] = generateCourses(
    "sri-ramachandra",
    "Sri Ramachandra Institute of Higher Education and Research",
    "Porur, Chennai",
    [
        { branch: "MBBS", program: "MBBS", level: "UG", fee: "₹22,50,000" },
        { branch: "BDS", program: "BDS", level: "UG", fee: "₹8,50,000" },
        { branch: "B.Pharm", program: "B.Pharm", level: "UG", fee: "₹2,50,000" },
        { branch: "B.Sc. Nursing", program: "B.Sc.", level: "UG", fee: "₹1,80,000" },
        { branch: "BPT Physiotherapy", program: "BPT", level: "UG", fee: "₹2,00,000" },
        { branch: "B.Sc. Medical Lab Technology", program: "B.Sc.", level: "UG", fee: "₹1,50,000" },
        { branch: "MD General Medicine", program: "MD", level: "PG", fee: "₹35,00,000" },
        { branch: "MS General Surgery", program: "MS", level: "PG", fee: "₹32,00,000" },
        { branch: "MDS Orthodontics", program: "MDS", level: "PG", fee: "₹18,00,000" },
        { branch: "M.Pharm", program: "M.Pharm", level: "PG", fee: "₹1,50,000" },
    ]
);

// Bharath Institute courses
export const bharathCourses: FeeRecord[] = generateCourses(
    "bharath",
    "Bharath Institute of Higher Education and Research",
    "Selaiyur, Chennai",
    [
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹1,80,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹1,60,000" },
        { branch: "B.Tech Mechanical Engineering", program: "B.Tech", level: "UG", fee: "₹1,50,000" },
        { branch: "B.Tech Civil Engineering", program: "B.Tech", level: "UG", fee: "₹1,40,000" },
        { branch: "MBBS", program: "MBBS", level: "UG", fee: "₹18,00,000" },
        { branch: "BDS", program: "BDS", level: "UG", fee: "₹6,50,000" },
        { branch: "B.Arch Architecture", program: "B.Arch", level: "UG", fee: "₹2,00,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,50,000" },
        { branch: "M.Tech Computer Science", program: "M.Tech", level: "PG", fee: "₹1,20,000" },
    ]
);

// Vels University courses
export const velsCourses: FeeRecord[] = generateCourses(
    "vels",
    "Vels University",
    "Pallavaram, Chennai",
    [
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹1,50,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹1,35,000" },
        { branch: "MBBS", program: "MBBS", level: "UG", fee: "₹15,00,000" },
        { branch: "BDS", program: "BDS", level: "UG", fee: "₹5,00,000" },
        { branch: "BBA", program: "BBA", level: "UG", fee: "₹1,00,000" },
        { branch: "B.Com", program: "B.Com", level: "UG", fee: "₹65,000" },
        { branch: "B.Sc. Nursing", program: "B.Sc.", level: "UG", fee: "₹1,20,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,50,000" },
        { branch: "M.Tech", program: "M.Tech", level: "PG", fee: "₹1,00,000" },
    ]
);

// AMET University courses
export const ametCourses: FeeRecord[] = generateCourses(
    "amet",
    "AMET University",
    "Kanathur, Chennai",
    [
        { branch: "B.Tech Marine Engineering", program: "B.Tech", level: "UG", fee: "₹3,50,000" },
        { branch: "B.Tech Naval Architecture", program: "B.Tech", level: "UG", fee: "₹3,00,000" },
        { branch: "B.Sc. Nautical Science", program: "B.Sc.", level: "UG", fee: "₹2,50,000" },
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹1,80,000" },
        { branch: "B.Tech Mechanical Engineering", program: "B.Tech", level: "UG", fee: "₹1,60,000" },
        { branch: "BBA Shipping Management", program: "BBA", level: "UG", fee: "₹1,50,000" },
        { branch: "MBA Shipping and Logistics", program: "MBA", level: "PG", fee: "₹2,00,000" },
        { branch: "M.Tech Marine Engineering", program: "M.Tech", level: "PG", fee: "₹1,80,000" },
    ]
);

// Dr. M.G.R. University courses
export const drMgrCourses: FeeRecord[] = generateCourses(
    "dr-mgr",
    "Dr. M.G.R. Educational and Research Institute",
    "Maduravoyal, Chennai",
    [
        { branch: "MBBS", program: "MBBS", level: "UG", fee: "₹16,00,000" },
        { branch: "BDS", program: "BDS", level: "UG", fee: "₹5,50,000" },
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹1,50,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹1,35,000" },
        { branch: "B.Pharm", program: "B.Pharm", level: "UG", fee: "₹1,80,000" },
        { branch: "B.Sc. Nursing", program: "B.Sc.", level: "UG", fee: "₹1,20,000" },
        { branch: "BPT Physiotherapy", program: "BPT", level: "UG", fee: "₹1,50,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,40,000" },
        { branch: "M.Pharm", program: "M.Pharm", level: "PG", fee: "₹1,20,000" },
    ]
);

// PRIST University courses
export const pristCourses: FeeRecord[] = generateCourses(
    "prist",
    "Ponnaiyah Ramajayam Institute of Science & Technology",
    "Vallam, Thanjavur",
    [
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹95,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹85,000" },
        { branch: "B.Tech Mechanical Engineering", program: "B.Tech", level: "UG", fee: "₹80,000" },
        { branch: "B.Pharm", program: "B.Pharm", level: "UG", fee: "₹1,20,000" },
        { branch: "BBA", program: "BBA", level: "UG", fee: "₹60,000" },
        { branch: "B.Com", program: "B.Com", level: "UG", fee: "₹45,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,00,000" },
        { branch: "M.Tech", program: "M.Tech", level: "PG", fee: "₹75,000" },
    ]
);

// Crescent University courses
export const crescentCourses: FeeRecord[] = generateCourses(
    "crescent",
    "Crescent Institute of Science & Technology",
    "Vandalur, Chennai",
    [
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹1,85,000" },
        { branch: "B.Tech Artificial Intelligence", program: "B.Tech", level: "UG", fee: "₹2,00,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹1,70,000" },
        { branch: "B.Tech Mechanical Engineering", program: "B.Tech", level: "UG", fee: "₹1,50,000" },
        { branch: "B.Tech Civil Engineering", program: "B.Tech", level: "UG", fee: "₹1,40,000" },
        { branch: "B.Arch Architecture", program: "B.Arch", level: "UG", fee: "₹2,25,000" },
        { branch: "BBA", program: "BBA", level: "UG", fee: "₹1,20,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,80,000" },
        { branch: "M.Tech Computer Science", program: "M.Tech", level: "PG", fee: "₹1,20,000" },
    ]
);

// Vel Tech University courses
export const veltechCourses: FeeRecord[] = generateCourses(
    "veltech",
    "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    "Avadi, Chennai",
    [
        { branch: "B.Tech Computer Science", program: "B.Tech", level: "UG", fee: "₹1,45,000" },
        { branch: "B.Tech Artificial Intelligence", program: "B.Tech", level: "UG", fee: "₹1,60,000" },
        { branch: "B.Tech Mechanical Engineering", program: "B.Tech", level: "UG", fee: "₹1,25,000" },
        { branch: "B.Tech Electronics and Communication", program: "B.Tech", level: "UG", fee: "₹1,30,000" },
        { branch: "B.Tech Civil Engineering", program: "B.Tech", level: "UG", fee: "₹1,15,000" },
        { branch: "B.Tech Aerospace Engineering", program: "B.Tech", level: "UG", fee: "₹1,70,000" },
        { branch: "MBA", program: "MBA", level: "PG", fee: "₹1,35,000" },
        { branch: "M.Tech Computer Science", program: "M.Tech", level: "PG", fee: "₹95,000" },
    ]
);

// Meenakshi Academy courses
export const meenakshiCourses: FeeRecord[] = generateCourses(
    "meenakshi",
    "Meenakshi Academy of Higher Education & Research",
    "Alapakkam, Chennai",
    [
        { branch: "MBBS", program: "MBBS", level: "UG", fee: "₹18,00,000" },
        { branch: "BDS", program: "BDS", level: "UG", fee: "₹6,00,000" },
        { branch: "B.Pharm", program: "B.Pharm", level: "UG", fee: "₹2,00,000" },
        { branch: "B.Sc. Nursing", program: "B.Sc.", level: "UG", fee: "₹1,50,000" },
        { branch: "BPT Physiotherapy", program: "BPT", level: "UG", fee: "₹1,80,000" },
        { branch: "B.Sc. Allied Health Sciences", program: "B.Sc.", level: "UG", fee: "₹1,20,000" },
        { branch: "MD General Medicine", program: "MD", level: "PG", fee: "₹30,00,000" },
        { branch: "MDS Orthodontics", program: "MDS", level: "PG", fee: "₹15,00,000" },
        { branch: "M.Pharm", program: "M.Pharm", level: "PG", fee: "₹1,30,000" },
    ]
);

// Chettinad courses
export const chettinadCourses: FeeRecord[] = generateCourses(
    "chettinad",
    "Chettinad Dental College & Research Institute",
    "Kelambakkam, Chennai",
    [
        { branch: "BDS", program: "BDS", level: "UG", fee: "₹7,50,000" },
        { branch: "MDS Orthodontics", program: "MDS", level: "PG", fee: "₹18,00,000" },
        { branch: "MDS Prosthodontics", program: "MDS", level: "PG", fee: "₹16,00,000" },
        { branch: "MDS Periodontics", program: "MDS", level: "PG", fee: "₹14,00,000" },
        { branch: "MDS Oral Surgery", program: "MDS", level: "PG", fee: "₹17,00,000" },
        { branch: "MDS Conservative Dentistry", program: "MDS", level: "PG", fee: "₹15,00,000" },
        { branch: "MDS Pedodontics", program: "MDS", level: "PG", fee: "₹14,00,000" },
        { branch: "MDS Oral Pathology", program: "MDS", level: "PG", fee: "₹12,00,000" },
    ]
);

// College course mapping
export const collegeCourseMap: Record<string, FeeRecord[]> = {
    loyola: loyolaCourses,
    "srm-easwari": srmEaswariCourses,
    "srm-valliammai": srmValliammaiCourses,
    hindustan: hindustanCourses,
    "sri-ramachandra": sriRamachandraCourses,
    bharath: bharathCourses,
    vels: velsCourses,
    amet: ametCourses,
    "dr-mgr": drMgrCourses,
    prist: pristCourses,
    crescent: crescentCourses,
    veltech: veltechCourses,
    meenakshi: meenakshiCourses,
    chettinad: chettinadCourses,
};

// College descriptions
export const collegeDescriptions: Record<string, string[]> = {
    loyola: [
        "Loyola College is one of India's most prestigious autonomous colleges, affiliated to the University of Madras. Established in 1925 by the Society of Jesus, it has been a beacon of academic excellence for nearly a century. Located in the heart of Chennai at Nungambakkam, the college offers a rich blend of traditional values and modern education.",
        "The college offers undergraduate and postgraduate programs in Arts, Science, Commerce, and Business Administration. With NAAC A++ accreditation, Loyola is renowned for its rigorous academic standards, distinguished faculty, and emphasis on holistic development including sports, cultural activities, and community service.",
        "Loyola's alumni network includes prominent figures in politics, business, academia, and arts. The college's placement cell ensures strong career opportunities for students, with companies from various sectors recruiting from campus. The historic campus, vibrant student life, and commitment to social justice make Loyola a top choice for students seeking quality education.",
    ],
    "srm-easwari": [
        "SRM Easwari Engineering College, located in Ramapuram, Chennai, is a premier engineering institution affiliated to Anna University. Established in 1996, the college is part of the prestigious SRM Group and has earned a reputation for quality technical education and strong industry connections.",
        "The college offers undergraduate and postgraduate programs in various engineering disciplines, with state-of-the-art laboratories, modern classrooms, and dedicated research centers. NBA accredited programs and experienced faculty ensure students receive industry-relevant education.",
        "With excellent placement records featuring top recruiters like TCS, Infosys, Wipro, and Cognizant, SRM Easwari prepares students for successful careers in technology and engineering. The campus offers comprehensive facilities including hostels, libraries, sports complex, and technology incubation centers.",
    ],
    "srm-valliammai": [
        "SRM Valliammai Engineering College, situated in Kattankulathur, Chennai, is a well-established engineering college affiliated to Anna University. Part of the renowned SRM Group, the college has been providing quality technical education since 1999.",
        "The institution offers B.E., B.Tech, and M.E. programs across various engineering streams. With AICTE approval and focus on practical learning, students benefit from modern infrastructure, well-equipped labs, and industry-oriented curriculum.",
        "The college maintains strong placement records with leading IT and core engineering companies. Located near the SRM University campus, students enjoy access to shared resources and a vibrant academic environment. Extra-curricular activities, technical clubs, and entrepreneurship cells ensure holistic development.",
    ],
    hindustan: [
        "Hindustan Institute of Technology and Science (HITS), commonly known as Hindustan University, is a prestigious deemed-to-be university located in Padur, Chennai. Established in 1985, it is renowned for its aerospace engineering programs and has strong ties with aviation and defense industries.",
        "The university offers a wide range of undergraduate, postgraduate, and doctoral programs in engineering, architecture, management, and sciences. With NAAC A accreditation, Hindustan is known for its research-oriented approach and international collaborations with universities worldwide.",
        "Hindustan's aerospace engineering program is particularly notable, with the university having its own airstrip and aircraft for hands-on training. The placement cell ensures students secure positions in leading aviation companies, IT firms, and multinational corporations. The green campus offers modern amenities and a conducive learning environment.",
    ],
    "sri-ramachandra": [
        "Sri Ramachandra Institute of Higher Education and Research (SRIHER) is a Category A Plus deemed-to-be university specializing in medical and health sciences education. Established in 1985 in Porur, Chennai, it is one of South India's premier medical institutions.",
        "The university offers comprehensive programs in medicine, dentistry, pharmacy, nursing, and allied health sciences. With NAAC A+ accreditation, SRIHER maintains the highest standards of medical education with a 2000+ bed multispecialty teaching hospital providing extensive clinical exposure to students.",
        "SRIHER's medical programs are highly sought after, with graduates working in leading hospitals and research institutions worldwide. The university emphasizes evidence-based medicine, research, and compassionate healthcare. Modern facilities, experienced faculty, and strong ethics make it a top choice for aspiring healthcare professionals.",
    ],
    bharath: [
        "Bharath Institute of Higher Education and Research (BIHER) is a multidisciplinary deemed-to-be university located in Selaiyur, Chennai. Established in 1984, the institution offers programs across engineering, medicine, dentistry, architecture, and management.",
        "The university provides undergraduate, postgraduate, and doctoral programs with emphasis on practical learning and research. With modern infrastructure, well-equipped laboratories, and experienced faculty, BIHER ensures quality education across all disciplines.",
        "BIHER's engineering and medical programs are well-recognized, with students placed in leading companies and hospitals. The sprawling campus offers comprehensive facilities including hospitals, hostels, libraries, and sports complexes. The university focuses on innovation, entrepreneurship, and holistic development of students.",
    ],
    vels: [
        "Vels Institute of Science, Technology and Advanced Studies (VISTAS), commonly known as Vels University, is a multidisciplinary deemed-to-be university in Pallavaram, Chennai. Established in 1992, it has grown into a comprehensive academic institution offering diverse programs.",
        "The university offers programs in engineering, medicine, dentistry, pharmacy, nursing, management, and arts & science. With NAAC A++ accreditation, Vels maintains high academic standards and emphasizes practical, industry-relevant education across all disciplines.",
        "Vels University has strong placement records with students joining leading companies in various sectors. The campus features modern infrastructure, medical and dental hospitals, research centers, and excellent sports facilities. Cultural activities and student clubs ensure holistic development.",
    ],
    amet: [
        "AMET University (Academy of Maritime Education and Training) is India's first maritime university, located in Kanathur, Chennai. Established in 1993, it specializes in maritime education and has become a global leader in training marine professionals.",
        "The university offers specialized programs in marine engineering, nautical science, naval architecture, and shipping management, along with conventional engineering and management courses. With state-of-the-art maritime simulators and training ships, students receive world-class hands-on training.",
        "AMET graduates are sought after by major shipping companies and maritime organizations worldwide. The university has collaborations with international maritime institutions and industry bodies. The campus features specialized labs, swimming pools, and maritime training facilities unique to maritime education.",
    ],
    "dr-mgr": [
        "Dr. M.G.R. Educational and Research Institute is a deemed-to-be university located in Maduravoyal, Chennai. Established in 1988, it offers programs across medicine, dentistry, engineering, pharmacy, and allied health sciences.",
        "The university provides comprehensive undergraduate and postgraduate programs with NAAC A accreditation. Named after the legendary actor and former Tamil Nadu Chief Minister Dr. M.G. Ramachandran, the institution emphasizes accessible quality education.",
        "With attached teaching hospitals and modern laboratories, students receive excellent clinical and practical training. The university has strong placement records in healthcare and engineering sectors. The campus offers complete academic and residential facilities for students from across India.",
    ],
    prist: [
        "Ponnaiyah Ramajayam Institute of Science and Technology (PRIST) is a deemed-to-be university with its main campus in Vallam, Thanjavur. Established in 1985, it offers affordable quality education across multiple disciplines.",
        "The university provides programs in engineering, pharmacy, management, arts, and science. With satellite campuses and study centers across Tamil Nadu, PRIST has made higher education accessible to students from diverse backgrounds.",
        "PRIST emphasizes practical learning and industry connections, with placement support for all programs. The peaceful campus in the cultural heartland of Tamil Nadu offers a conducive environment for academic pursuits. The university is known for its inclusive admission policies and supportive academic atmosphere.",
    ],
    crescent: [
        "B.S. Abdur Rahman Crescent Institute of Science and Technology is a prestigious deemed-to-be university located in Vandalur, Chennai. Established in 1984, it has emerged as one of South India's leading technical institutions.",
        "The university offers undergraduate, postgraduate, and doctoral programs in engineering, architecture, management, and sciences. With NAAC A accreditation and NBA accredited programs, Crescent maintains high academic standards and emphasizes research and innovation.",
        "Crescent has excellent placement records with students joining top IT companies, core engineering firms, and multinational corporations. The green campus features modern infrastructure, advanced laboratories, and comprehensive sports and recreational facilities. The university promotes entrepreneurship and has produced numerous successful startups.",
    ],
    veltech: [
        "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology is a deemed-to-be university located in Avadi, Chennai. Established in 1990, it is known for its focus on research, innovation, and industry collaboration.",
        "The university offers programs in engineering, management, and sciences with emphasis on emerging technologies like AI, robotics, and aerospace. Multiple research centers and industry partnerships ensure students work on cutting-edge projects.",
        "Vel Tech has strong placement records with companies across IT, core engineering, and research sectors. The university has produced numerous patents and publications. The campus features advanced research labs, innovation centers, and comprehensive academic facilities.",
    ],
    meenakshi: [
        "Meenakshi Academy of Higher Education and Research (MAHER) is a prestigious deemed-to-be university specializing in medical and health sciences. Located in Alapakkam, Chennai, it offers comprehensive healthcare education across multiple disciplines.",
        "The university provides programs in medicine, dentistry, pharmacy, nursing, physiotherapy, and allied health sciences. With NAAC A+ accreditation and attached teaching hospitals, students receive excellent clinical training and exposure.",
        "MAHER graduates are well-placed in leading hospitals and healthcare institutions. The university emphasizes patient care, clinical research, and community health. Modern hospital facilities, experienced faculty, and strong ethical foundations prepare students for successful healthcare careers.",
    ],
    chettinad: [
        "Chettinad Dental College and Research Institute is part of the Chettinad Academy of Research and Education (CARE), a prestigious deemed-to-be university in Kelambakkam, Chennai. Established in 1993, it is one of South India's premier dental institutions.",
        "The college offers BDS and MDS programs across all dental specializations. With state-of-the-art dental clinics, advanced equipment, and experienced faculty, students receive comprehensive clinical training in all aspects of dentistry.",
        "Chettinad dental graduates are highly sought after for their clinical skills and professional approach. The attached dental hospital provides extensive patient exposure. The institution emphasizes evidence-based dentistry, research, and ethical dental practice.",
    ],
};
