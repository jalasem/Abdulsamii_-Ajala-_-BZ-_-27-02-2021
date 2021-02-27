export interface Question {
  questionText: string;
  questionType: string;
  description?: string;
  answerKey: string;
  inputType?: string;
  placeholder?: string;
  pattern?: string;
  options?: SelectOption[];
}

export interface SelectOption {
  icon?: string;
  title: string;
  subtitle?: string;
}

const questionList: Question[] = [
  {
    questionText: "What type of insurance are you looking for?",
    questionType: "cards",
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
  {
    questionText: "What’s the phone number?",
    questionType: "input",
    inputType: "tel",
    placeholder: "111-111-1111",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    answerKey: "phoneNumber",
  },
  {
    questionText: "What state do you operate from?",
    questionType: "select",
    answerKey: "bizState",
    options: [
      { title: "Alabama" },
      { title: "Alaska" },
      { title: "American Samoa" },
      { title: "Arizona" },
      { title: "Arkansas" },
      { title: "California" },
      { title: "Colorado" },
      { title: "Connecticut" },
      { title: "Delaware" },
      { title: "District Of Columbia" },
    ],
  },
  {
    questionText: "Do you do your own design?",
    description: "Does your business provide design services?",
    questionType: "cards",
    answerKey: "ownDesign",
    options: [
      {
        icon: "/vectors/droplet.svg",
        title: "Yes",
        subtitle: "We do designs in-house",
      },
      {
        icon: "/vectors/airplay.svg",
        title: "No",
        subtitle: "We’re gonna need some assistance",
      },
    ],
  },
  {
    questionText: "Include building coverage?",
    description: "Does your business provide design services?",
    questionType: "cards",
    answerKey: "ownDesign",
    options: [
      {
        icon: "/vectors/thumbs-up.svg",
        title: "Yes",
      },
      {
        icon: "/vectors/airplay.svg",
        title: "No",
      },
    ],
  },
  {
    questionText: "When did your business begin?",
    questionType: "input",
    inputType: "date",
    answerKey: "bizState",
  },
];

export default questionList;
