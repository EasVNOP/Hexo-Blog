import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博客文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "粉丝委托",
        icon: "pen-to-square",
        prefix: "粉丝委托/",
        children: [
          { text: "教程", icon: "pen-to-square", link: "教程" },
          { text: "规则", icon: "pen-to-square", link: "规则" },
        ],
      },
      {
        text: "作品文章",
        icon: "pen-to-square",
        prefix: "作品文章/",
        children: [
          {
            text: "成品书 MindVerse",
            icon: "pen-to-square",
            link: "MindVerse",
          },
        ],
      },
      { text: "作者介绍", icon: "pen-to-square", link: "作者介绍" },
      { text: "站点介绍", icon: "pen-to-square", link: "站点介绍" },
    ],
  },
]);
