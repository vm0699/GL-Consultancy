export type College = {
  id: string;
  name: string;
  area?: string;
  campuses?: string[];
  affiliation: string;
  popularCourses: string[];
  rating: number;
  imageUrl: string;
  tags: string[];
  slug?: string;
};

export const colleges: College[] = [
  {
    id: "1",
    name: "SRM University",
    campuses: ["Kattankulathur", "Ramapuram", "Vadapalani"],
    affiliation: "Under Section 3 of UGC Act 1956",
    popularCourses: ["B.Tech CSE", "B.Tech ECE", "MBA"],
    rating: 4.6,
    imageUrl: "/srm-university.png",
    tags: ["Engineering", "Deemed University", "NAAC A++"],
    slug: "srm",
  },
  {
    id: "2",
    name: "VIT (Vellore Institute of Technology)",
    campuses: ["Chennai", "Vellore"],
    affiliation: "Deemed to be University",
    popularCourses: ["B.Tech CSE", "B.Tech ECE", "MBA"],
    rating: 4.7,
    imageUrl: "/vit-university.png",
    tags: ["Engineering", "NIRF Ranked", "Research"],
  },
  {
    id: "3",
    name: "Saveetha University",
    area: "Thandalam, Chennai",
    affiliation: "Established under Sec. 3 of UGC Act, 1956",
    popularCourses: ["B.E. CSE", "MBBS", "BDS"],
    rating: 4.3,
    imageUrl: "/saveetha-university.png",
    tags: ["Engineering", "Medical", "Dental"],
  },
  {
    id: "4",
    name: "Sathyabama Institute of Science and Technology",
    area: "Jeppiaar Nagar, Chennai",
    affiliation: "Deemed to be University",
    popularCourses: ["B.Tech CSE", "B.Tech Aero", "MBA"],
    rating: 4.5,
    imageUrl: "/sathyabama-university.png",
    tags: ["Engineering", "NAAC A++", "Research"],
  },
  {
    id: "5",
    name: "Hindustan University",
    area: "Padur, Chennai",
    affiliation: "Deemed University",
    popularCourses: ["B.Tech Aero", "B.Arch", "MBA"],
    rating: 4.4,
    imageUrl:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "NAAC A", "Aerospace"],
  },
  {
    id: "6",
    name: "Sri Ramachandra Institute of Higher Education and Research",
    area: "Porur, Chennai",
    affiliation: "Deemed to be University, Category A Plus",
    popularCourses: ["MBBS", "BDS", "B.Pharm"],
    rating: 4.7,
    imageUrl:
      "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Medical", "NAAC A+", "Research"],
  },
  {
    id: "7",
    name: "Bharath Institute of Higher Education and Research",
    area: "Selaiyur, Chennai",
    affiliation: "Deemed-to-be University",
    popularCourses: ["B.Tech CSE", "MBBS", "BDS"],
    rating: 4.2,
    imageUrl:
      "https://images.pexels.com/photos/1120344/pexels-photo-1120344.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "Medical", "Multidisciplinary"],
  },
  {
    id: "8",
    name: "Vels University",
    area: "Pallavaram, Chennai",
    affiliation: "Deemed to be University",
    popularCourses: ["B.Tech CSE", "BBA", "MBBS"],
    rating: 4.3,
    imageUrl:
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "Management", "NAAC A++"],
  },
  {
    id: "9",
    name: "AMET University",
    area: "Kanathur, Chennai",
    affiliation: "Deemed University",
    popularCourses: ["Marine Engineering", "B.Tech CSE", "MBA"],
    rating: 4.1,
    imageUrl:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "Marine", "Maritime"],
  },
  {
    id: "10",
    name: "Dr. M.G.R. Educational and Research Institute",
    area: "Maduravoyal, Chennai",
    affiliation: "Deemed to be University",
    popularCourses: ["B.Tech CSE", "MBBS", "B.Pharm"],
    rating: 4.2,
    imageUrl:
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "Medical", "NAAC A"],
  },
  {
    id: "11",
    name: "Ponnaiyah Ramajayam Institute of Science & Technology",
    area: "Vallam, Thanjavur",
    affiliation: "Deemed to be University under U/S 3 of UGC Act, 1956",
    popularCourses: ["B.Tech CSE", "MBA", "B.Pharm"],
    rating: 4.0,
    imageUrl:
      "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "Management", "Pharmacy"],
  },
  {
    id: "12",
    name: "Crescent Institute of Science & Technology",
    area: "Vandalur, Chennai",
    affiliation: "Deemed to be University",
    popularCourses: ["B.Tech CSE", "B.Arch", "MBA"],
    rating: 4.4,
    imageUrl:
      "https://images.pexels.com/photos/1184579/pexels-photo-1184579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "NAAC A", "B.S. Abdur Rahman"],
  },
  {
    id: "13",
    name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    area: "Avadi, Chennai",
    affiliation: "Deemed to be University",
    popularCourses: ["B.Tech CSE", "B.Tech Mech", "MBA"],
    rating: 4.2,
    imageUrl:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Engineering", "Research", "Innovation"],
  },
  {
    id: "14",
    name: "Meenakshi Academy of Higher Education & Research",
    area: "Alapakkam, Chennai",
    affiliation: "Deemed to be University",
    popularCourses: ["MBBS", "BDS", "B.Pharm"],
    rating: 4.5,
    imageUrl:
      "https://images.pexels.com/photos/4050316/pexels-photo-4050316.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Medical", "Dental", "NAAC A+"],
  },
  {
    id: "15",
    name: "Chettinad Dental College & Research Institute",
    area: "Kelambakkam, Chennai",
    affiliation: "Deemed University",
    popularCourses: ["BDS", "MDS", "Dental Surgery"],
    rating: 4.4,
    imageUrl:
      "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Dental", "Research", "NAAC A"],
  },
];
