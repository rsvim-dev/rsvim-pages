import { themes as prismThemes } from "prism-react-renderer";
import type { Config, DefaultParseFrontMatter } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "RSVIM",
  tagline: "The VIM editor reinvented in Rust+TypeScript.",
  favicon:
    "https://cdn.jsdelivr.net/gh/rsvim-dev/assets@main/logo/RSVIM-logo-square.png",

  future: {
    v4: true,
    faster: true,
  },

  // Set the production url of your site here
  url: "https://rsvim.pages.dev/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rsvim-dev", // Usually your GitHub org/user name.
  projectName: "rsvim", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/rsvim-dev/rsvim-pages/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // Your options:

        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],
        language: ["en"],

        // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
        // searchBarShortcutKeymap: "s", // Use 'S' key
        // searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:
      "https://cdn.jsdelivr.net/gh/rsvim-dev/assets@main/logo/RSVIM-logo-square.png",
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "RSVIM",
      logo: {
        src: "https://cdn.jsdelivr.net/gh/rsvim-dev/assets@main/logo/RSVIM-logo-square.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "userManualSidebarId",
          position: "left",
          label: "User Manual",
        },
        {
          type: "docSidebar",
          sidebarId: "apiReferencesSidebarId",
          position: "left",
          label: "API References",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "/sponsor",
          position: "left",
          label: "Sponsor",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/rsvim-dev/rsvim",
          // label: "GitHub",
          className: "header-github-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Reference",
          items: [
            {
              label: "Vim help",
              to: "https://vimhelp.org/",
            },
            {
              label: "Neovim help",
              to: "https://neovim.io/doc/user/index.html",
            },
            {
              label: "Deno API",
              to: "https://docs.deno.com/api/deno/~/Deno",
            },
            {
              label: "WinterTC",
              to: "https://min-common-api.proposal.wintertc.org/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/5KtRUCAByB",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "RFC",
              href: "https://github.com/rsvim-dev/rfc",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RSVIM. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "powershell",
        "bash",
        "python",
        "rust",
        "javascript",
        "typescript",
        "json",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    format: "mdx",
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
      onBrokenMarkdownImages: "warn",
    },
    // Add front matters for generated typedoc APIs.
    parseFrontMatter: async (params: {
      filePath: string;
      fileContent: string;
      defaultParseFrontMatter: DefaultParseFrontMatter;
    }) => {
      // console.log(`params.filePath:${params.filePath}`);
      const result = await params.defaultParseFrontMatter(params);

      const PathSuffixes = {
        "Rsvim/README.md": "Rsvim",
        "RsvimBuf/README.md": "RsvimBuf",
        "RsvimCmd/README.md": "RsvimCmd",
        "RsvimFs/README.md": "RsvimFs",
        "RsvimOpt/README.md": "RsvimOpt",
        "RsvimProc/README.md": "RsvimProc",
        "RsvimRt/README.md": "RsvimRt",
        "RsvimSyn/README.md": "RsvimSyn",
        "TextEncoder/README.md": "TextEncoder",
        "TextDecoder/README.md": "TextDecoder",
      };

      // Set frontmatter by path suffix
      for (const [suffix, title] of Object.entries(PathSuffixes)) {
        if (params.filePath.endsWith(suffix)) {
          result.frontMatter = {
            title: title,
          };
          break;
        }
      }

      // console.log(result);
      return result;
    },
  },
};

export default config;
