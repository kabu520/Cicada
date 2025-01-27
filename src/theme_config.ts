import Person from "@comp/icons/person.astro";
import { SiteConfig } from "./site_config";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { library, icon } from "@fortawesome/fontawesome-svg-core";

// library.add(faStar);
// const starIcon = icon({ prefix: "fas", iconName: "star" });

const today = new Date();

export const ThemeConfig: Configs = {
  site: {
    title: SiteConfig.title,
    favicon: "/favicon.png",
    logo: "/favicon.png",
    author: "Cicada",
    localSearch: {
      comment: "你可以使用类似 unix 的格式：[扩展搜索](/blog/lkk0v40t/)",
      hits: ["[扩展搜索](/blog/lkk0v40t/)", "[HelloWorld](/blog/lkk0fjvf/)"],
    },
    backgroundBubbles: 20,
    themeColor: "#a57ad4",
  },
  head: [``],
  body: [``],
  header: {
    menu: [
      {
        name: "主页",
        customClass: "home",
        link: "/",
        icon: "local:solid.house",
      },
      {
        name: "博客",
        customClass: "articles",
        icon: "local:solid.pen-fancy",
        children: [
          {
            name: "分类",
            customClass: "categories",
            icon: "local:solid.hard-drive",
            link: "/categories",
          },
          {
            name: "标签",
            customClass: "tags",
            icon: "local:solid.tags",
            link: "/tags",
          },
        ],
      },
      {
        name: "我的",
        customClass: "mine",
        icon: Person,
        children: [
          {
            name: "友链",
            customClass: "friends",
            icon: "local:solid.link",
            link: "./friends",
          },
        ],
      },
      {
        name: "关于",
        customClass: "about",
        link: "/about",
        icon: "local:solid.paper-plane",
      },
    ],
    buttons: [
      {
        icon: "local:solid.house",
        link: "/",
        customClass: "",
        title: "返回主页",
      },
    ],
    functions: {
      headerLogo: "left",
      themeControl: true,
      pagePercent: true,
    },
  },
  aside: {
    authorInfo: {
      avatar: "/avatar.png",  //avif
      description: "",
      socialMedias: [
        {
          link: "https://github.com/kabu520",
          customClass: "github",
          icon: "local:brands.github",
          title: "github",
        },
        {
          link: "mailto:charles_hus@qq.com",
          customClass: "mail-qq",
          icon: "local:solid.envelope",
          title: "QQmail",
        },
        {
          link: "https://space.bilibili.com/450126506",
          customClass: "bilibili",
          icon: "local:brands.bilibili",
          title: "social-bili",
        },
        {
          link: "https://blog.csdn.net/CharlesHsuu",
          customClass: "csdn",
          icon: "local:solid.c",
          title: "social-csdn",
        },
      ],
    },
    announcement: {
      headline: "",
      content:
        "",
    },
    siteInfo: {
      busuanzi: false,
      totalWordCounts: true,
      totalPostCounts: true,
    },
    customCards: [
      {
        // icon: `<i class="fa-solid fa-star"></i>`,
        icon: "local:solid.star",
        title: "推荐文章",
        content: "",//"这里是自定义内容部分<br>啥都可以放",
      },
    ],
  },
  footer: {
    text: "",
    copyright: ``,
    // 也可以使用 {{}} 包裹函数体，并返回替换值
    // You can also use {{}} to wrap the function body and return the replacement value.
    // copyright: `&copy; 2022-{{const today = new Date();return today.getFullYear();}} By [Cicada](/about)`,
  },
  homePage: {
    heroShoot: "/heroimg.jpg",
    heroTitle: "Cicada's Blog",
    heroDescription: "",
    paginationSize: 10,
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: ["Announcement", "SiteInfo"],
      direct: "right",
    },
  },
  postPage: {
    defaultCover: "https://lipsum.app/id/2/1600x1200",
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: [],
    },
    relatedPosts: true,
  },
  tagsPage: {
    floating: true,
  },
  comments: {
    // type: "twikoo",
    // options: {
    //   envId: "",
    //   lang: "zh-CN",
    // },
    // type: "waline",
    // options: {
    //   serverURL: "",
    // },
    type: false,
    options: null,
  },
};
