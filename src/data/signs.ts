
import { Sign } from "../types";

export const sampleSigns: Sign[] = [
  {
    id: "1",
    title: "The Appearance of the Dajjal (Antichrist)",
    arabicTitle: "ظهور الدجال",
    description: "The emergence of a deceiver who will claim divinity and perform false miracles, leading many astray before the Day of Judgment.",
    category: "major",
    reference: "Sahih Muslim 2897",
    votes: 125,
    hasOccurred: false,
    verifications: [
      {
        id: "v1",
        userId: "u1",
        username: "scholar123",
        text: "There are many false prophets and deceivers in our time, but the true Dajjal as described has not yet appeared.",
        date: "2023-04-15",
        votes: 45
      }
    ],
    comments: [
      {
        id: "c1",
        userId: "u2",
        username: "truth_seeker",
        text: "How will we recognize the Dajjal when he appears?",
        date: "2023-05-20",
        votes: 12,
        replies: [
          {
            id: "r1",
            userId: "u3",
            username: "hadith_student",
            text: "The Prophet (peace be upon him) said he will be blind in one eye and the word 'kafir' (disbeliever) will be written between his eyes, visible to all believers.",
            date: "2023-05-21",
            votes: 28
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "The Descent of Jesus",
    arabicTitle: "نزول عيسى عليه السلام",
    description: "Prophet Jesus (peace be upon him) will return to Earth, break the cross, kill the swine, and abolish the Jizyah (tax on non-Muslims).",
    category: "major",
    reference: "Sahih al-Bukhari 2476",
    votes: 210,
    hasOccurred: false,
    verifications: [],
    comments: [
      {
        id: "c2",
        userId: "u4",
        username: "muslim_scholar",
        text: "Jesus (peace be upon him) will come as a just ruler and will follow the teachings of Islam.",
        date: "2023-03-15",
        votes: 34,
        replies: []
      }
    ]
  },
  {
    id: "3",
    title: "Prevalence of Earthquakes",
    arabicTitle: "كثرة الزلازل",
    description: "An increase in the frequency and intensity of earthquakes worldwide.",
    category: "minor",
    reference: "Sahih al-Bukhari 7121",
    votes: 567,
    hasOccurred: true,
    verifications: [
      {
        id: "v2",
        userId: "u5",
        username: "geo_researcher",
        text: "According to USGS data, major earthquakes have increased significantly over the last century.",
        link: "https://earthquake.usgs.gov/earthquakes/",
        date: "2023-02-10",
        votes: 89
      },
      {
        id: "v3",
        userId: "u6",
        username: "data_analyst",
        text: "While perception of increased earthquakes exists, scientific data shows normal fluctuations in seismic activity.",
        link: "https://www.nature.com/articles/s41598-020-69356-6",
        date: "2023-02-12",
        votes: 64
      }
    ],
    comments: []
  },
  {
    id: "4",
    title: "The Spread of Riba (Interest/Usury)",
    arabicTitle: "انتشار الربا",
    description: "The widespread acceptance and normalization of interest-based financial systems throughout society.",
    category: "minor",
    reference: "Sunan Ibn Majah 2278",
    votes: 892,
    hasOccurred: true,
    verifications: [
      {
        id: "v4",
        userId: "u7",
        username: "finance_expert",
        text: "The entire global banking system is now based on interest. Even many Islamic banks use questionable workarounds.",
        date: "2023-01-05",
        votes: 215
      }
    ],
    comments: [
      {
        id: "c3",
        userId: "u8",
        username: "concerned_muslim",
        text: "What are some halal alternatives to conventional banking?",
        date: "2023-01-15",
        votes: 67,
        replies: [
          {
            id: "r2",
            userId: "u9",
            username: "islamic_finance",
            text: "Look for genuine profit-sharing arrangements, equity-based investments, and interest-free loans (Qard Hasan).",
            date: "2023-01-16",
            votes: 43
          }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "The Coming of Gog and Magog",
    arabicTitle: "خروج يأجوج ومأجوج",
    description: "The release of the tribes of Gog and Magog who will spread corruption throughout the Earth.",
    category: "major",
    reference: "Sahih Muslim 2937",
    votes: 98,
    hasOccurred: false,
    verifications: [],
    comments: []
  },
  {
    id: "6",
    title: "The Rising of the Sun from the West",
    arabicTitle: "طلوع الشمس من المغرب",
    description: "A day will come when the sun will rise from the west instead of the east, marking a point when faith will no longer be accepted from those who hadn't believed before.",
    category: "major",
    reference: "Sahih Muslim 159",
    votes: 47,
    hasOccurred: false,
    verifications: [],
    comments: []
  },
  {
    id: "7",
    title: "Increase in Killing",
    arabicTitle: "كثرة القتل",
    description: "An increase in murders and warfare throughout the world.",
    category: "minor",
    reference: "Sahih al-Bukhari 7062",
    votes: 732,
    hasOccurred: true,
    verifications: [
      {
        id: "v5",
        userId: "u10",
        username: "peace_activist",
        text: "According to global conflict databases, the number of armed conflicts has increased dramatically in recent decades.",
        date: "2023-06-20",
        votes: 129
      }
    ],
    comments: []
  },
  {
    id: "8",
    title: "Loss of Trust",
    arabicTitle: "ضياع الأمانة",
    description: "People will no longer honor their trusts and promises, with betrayal becoming commonplace.",
    category: "minor",
    reference: "Sahih al-Bukhari 6496",
    votes: 623,
    hasOccurred: true,
    verifications: [],
    comments: []
  },
  {
    id: "9",
    title: "The Barefoot Bedouins Competing in Building Tall Buildings",
    arabicTitle: "تطاول الحفاة العراة رعاة الشاء في البنيان",
    description: "People who were once poor desert dwellers will compete in constructing tall buildings.",
    category: "minor",
    reference: "Sahih Muslim 8",
    votes: 875,
    hasOccurred: true,
    verifications: [
      {
        id: "v6",
        userId: "u11",
        username: "architecture_enthusiast",
        text: "The Gulf states, particularly UAE and Saudi Arabia, were once inhabited by bedouin tribes and are now home to some of the world's tallest skyscrapers.",
        link: "https://www.skyscrapercenter.com/countries",
        date: "2023-04-03",
        votes: 342
      }
    ],
    comments: []
  },
  {
    id: "10",
    title: "The Appearance of the Beast of the Earth",
    arabicTitle: "خروج دابة الأرض",
    description: "A creature will emerge from the earth and mark believers and non-believers.",
    category: "major",
    reference: "Surah An-Naml 27:82",
    votes: 32,
    hasOccurred: false,
    verifications: [],
    comments: []
  }
];
