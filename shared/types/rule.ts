type Rules = {
  [writing: string]: Writing
};

// Represents a writing system, e.g., Latin or Cyrillic
type Writing = {
  writingName: string;
  languages: {
    [lang: string]: Lang
  };
}

// Represents a language, e.g., Russian or Ukrainian
type Lang = {
  langName: string;
  path?: string;
  rules: {
    [rule: string]: Rule
  };
};

// Represents a rule, e.g., ISO 9 or GOST
type Rule = {
  name: string;
  desc: string;
  map: CharMap
};

// Represents a map of characters, e.g., Д to D
type CharMap = Record<string, string>;

export type { Rules, Writing, Lang, Rule };
