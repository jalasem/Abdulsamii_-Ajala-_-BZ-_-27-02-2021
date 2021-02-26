export interface Question {
  questionText: string;
  questionType: string;
  answerKey: string;
  options?: SelectOption[];
}

export interface SelectOption {
  icon: string;
  title: string;
  subtitle: string;
}

const questionList: Question[] = [
  {
    questionText: "What type of insurance are you looking for?",
    questionType: "select",
    answerKey: "insuranceType",
    options: [
      {
        icon: "/vectors/briefcase.svg",
        title: "Professional Liability",
        subtitle: "Erros & Omissions (E&O insurance)",
      },
      {
        icon: "/vectors/cloud-rain.svg",
        title: "General Liability",
        subtitle: "Help mitigate against loss (CGL insurance)",
      },
      {
        icon: "/vectors/package.svg",
        title: "Business Owner’s Policy",
        subtitle: "The complete package (BOP)",
      },
      {
        icon: "/vectors/wifi.svg",
        title: "Cyber",
        subtitle: "Internet-bsed risks (CLIC)",
      },
    ],
  },
  {
    questionText: "What’s the name of your business?",
    questionType: "input",
    answerKey: "businessName",
  },
];

export default questionList;
