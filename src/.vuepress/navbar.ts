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
          { text: "文章1", icon: "pen-to-square", link: "1" },
          { text: "文章2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "作品文章",
        icon: "pen-to-square",
        prefix: "作品文章/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "作者介绍", icon: "pen-to-square", link: "作者介绍" },
      { text: "站点介绍", icon: "pen-to-square", link: "站点介绍" },
    ],
  },
]);
