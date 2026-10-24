export const translations = {
  en: {
    siteTitle: "Seoul Indies",
    news: "News",
    presenting: "Presenting",
    games: "Games",
    friends: "Friends",
    tagline: "Supporting Seoul's indie game developers.",
    exploreGames: "Explore Games",
  },

  ko: {
    siteTitle: "서울 인디즈",
    news: "소식",
    presenting: "소개",
    games: "게임",
    friends: "파트너",
    tagline: "서울의 인디 게임 개발자를 지원합니다.",
    exploreGames: "게임 둘러보기",
  },
} as const;

export type Locale = keyof typeof translations;
