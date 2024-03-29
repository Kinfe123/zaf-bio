import type { FooterItem, MainNavItem } from "@/types"

import { productCategories } from "@/config/products"
import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
}

export const siteConfig = {
  name: "Zaf pharmaceutical",
  description:
    "A place for you to buy biomedical equipents and gears at a fair and appealing cost for you .",
  url: "https://zaf-bio.vercel.app",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        // {
        //   title: "Build a Board",
        //   href: "/build-a-board",
        //   description: "Build your own custom skateboard.",
        //   items: [],
        // },
        // {
//   title: "Blog",
        //   href: "/blog",
        //   description: "Read our latest blog posts.",
        //   items: [],
        // },
      ],
    },
  //   ...productCategories.map((category) => ({
  //     title: category.title,
  //     items: [
  //       {
  //         title: "All",
  //         href: `/categories/${slugify(category.title)}`,
  //         description: `All ${category.title}.`,
  //         items: [],
  //       },
  //       ...category.subcategories.map((subcategory) => ({
  //         title: subcategory.title,
  //         href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
  //         description: subcategory.description,
  //         items: [],
  //       })),
  //     ],
  //   })),
  ] satisfies MainNavItem[],
  
  
  footerNav: [
    
    {
      title: "",
      items: [
        {
          title: "About",
          href: "/pages/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/pages/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/pages/privacy",
          external: false,
        },
      ],
    },
    // {
    //   title: "Social",
    //   items: [
    //     {
    //       title: "Twitter",
    //       href: links.twitter,
    //       external: true,
    //     },
    //     {
    //       title: "GitHub",
    //       href: links.githubAccount,
    //       external: true,
    //     },
    //     {
    //       title: "Discord",
    //       href: links.discord,
    //       external: true,
    //     },
    //     {
    //       title: "cal.com",
    //       href: links.calDotCom,
    //       external: true,
    //     },
    //   ],
    // },
    // {
    //   title: "Lofi",
    //   items: [
    //     {
    //       title: "beats to study to",
    //       href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    //       external: true,
    //     },
    //     {
    //       title: "beats to chill to",
    //       href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
    //       external: true,
    //     },
    //     {
    //       title: "a fresh start",
    //       href: "https://www.youtube.com/watch?v=rwionZbOryo",
    //       external: true,
    //     },
    //     {
    //       title: "coffee to go",
    //       href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
    //       external: true,
    //     },
    //   ],
    // },
  ] satisfies FooterItem[],
}
