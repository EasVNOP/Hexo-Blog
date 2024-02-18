import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "EasHub",
  description: "来这里解放你的创造力",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
