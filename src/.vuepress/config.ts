import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "EasHub",
  description: "来这里解放你的创造力",

  theme,
  theme: hopeTheme({
    sidebar: "heading",

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
