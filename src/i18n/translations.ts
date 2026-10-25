export const translations = {
  en: {
    //nav-header ------------------
    siteTitle: "Seoul Indies",
    news: "News",
    presenting: "Presenting",
    games: "Games",
    friends: "Friends",
    //welcome ------------------
    welcomeT: "Welcome! 어서오세요!",
    welcomeP1:
      "Seoul Indies is a Korean-English bilingual meetup for game developers, enthusiasts, and generally cool people. Show your games, play some games, get feedback, and hang out.",
    welcomeP2:
      "Join our Discord, or reach out to us on socials with any questions you may have!",
    //meetup ------------------
    meetupT1: "Next Meetup",
    meetupT2: "Previous Meetups",
    //FAQ ------------------
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What are the meetups like?",
          answer:
            "Monthly meetups are a great chance to meet new people! We arrive at 8, start presentations at 8:30, break out the snacks around 9:30, and finish up at 11. Meetups are posted a few weeks in advance on the News page. The entry fee will be posted with the event notice. We also often get together in smaller groups during the month. Being on our Discord is a great way to keep up to date!",
        },
        {
          question: "What are the presentations like?",
          answer:
            "Presentations should encourage participation, showcase gameplay, and be under 10 minutes long. Videos are fine, but keep it engaging and fun. We want to see your amazing game!",
        },
        {
          question: "How can I apply to present?",
          answer:
            "Click Present above and fill out the form. We usually take five presentations a month. If the form is closed, we've reached the maximum for that month.",
        },
        {
          question: "Can I pitch my product or service to the audience?",
          answer: "No.",
        },
        {
          question: "I don't speak English or Korean.",
          answer:
            "No worries! We'll interpret for you and do our best to accommodate different languages.",
        },
        {
          question: "What equipment do I need?",
          answer:
            "We have a projector with HDMI input. Please let us know in advance if you need any additional equipment.",
        },
      ],
    },
  },

  ko: {
    siteTitle: "서울 인디즈",
    news: "소식",
    presenting: "소개",
    games: "게임",
    friends: "파트너",
    welcomeT: "어서오세요! Welcome!",
    welcomeP1:
      "서울 인디즈는 게임 개발자, 게임 애호가, 그리고 완전 멋진 사람들을 위한 한국어/영어 이중 언어 모임입니다. 여러분, 게임을 소개하고, 함께 게임을 즐기고, 피드백을 주고 받고, 친목을 다져보세요.",
    welcomeP2:
      "디스코드 서버에 참여하거나 소셜 미디어를 통해 궁금한 점을 문의해 주세요!",
    meetupT1: "다음 모임",
    meetupT2: "이전 모임",
    faq: {
      title: "FAQ",
      items: [
        {
          question: "모임은 어떤 식으로 진행되나요?",
          answer:
            "정기 모임은 새로운 사람들을 만나고 교류할 수 있는 좋은 기회입니다. 발표와 게임 소개를 함께 즐기며, 자세한 일정과 참가비는 각 모임 공지에서 확인하실 수 있습니다. 디스코드에 참여하면 최신 소식을 받아볼 수 있습니다.",
        },
        {
          question: "발표는 어떤 식으로 진행되나요?",
          answer:
            "발표는 게임 플레이를 보여주고 참여를 유도하는 방식으로 진행해 주세요. 발표 시간은 10분 이내를 권장하며, 재미있고 흥미로운 내용이면 좋습니다. 여러분의 멋진 게임을 보여주세요!",
        },
        {
          question: "발표 신청은 어떻게 하나요?",
          answer:
            "상단의 발표 신청 버튼을 눌러 양식을 작성해 주세요. 보통 한 달에 다섯 팀의 발표를 진행하며, 신청이 마감된 경우 다음 기회에 신청해 주세요.",
        },
        {
          question: "제품이나 서비스를 홍보해도 되나요?",
          answer:
            "아니요. 모임의 발표는 게임과 개발 경험을 공유하는 데 초점을 맞추고 있습니다.",
        },
        {
          question: "영어나 한국어를 못해도 참여할 수 있나요?",
          answer:
            "물론입니다! 가능한 범위에서 통역을 도와드리고, 다양한 언어를 사용하는 분들이 참여할 수 있도록 노력하겠습니다.",
        },
        {
          question: "어떤 장비가 필요한가요?",
          answer:
            "HDMI 입력을 지원하는 프로젝터가 준비되어 있습니다. 추가 장비가 필요하다면 미리 알려주세요.",
        },
      ],
    },
  },
} as const;

export type Locale = keyof typeof translations;
