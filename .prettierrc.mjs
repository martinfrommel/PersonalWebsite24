// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./tailwind.config.mjs",
  tailwindFunctions: ["tw"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
