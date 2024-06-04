export default {
  semi: false,
  singleQuote: true,
  tabWidth: 4,
  useTabs: false,
  overrides: [
    {
      files: ["*.json", "*.yaml", "*.yml", "*.md", "*.markdown"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
