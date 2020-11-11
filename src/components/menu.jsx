import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const menuQuickStart = [
  {
    link: "/quick-start/introduction",
    name: "Introduction",
  },
  {
    link: "/quick-start/nhost-backend",
    name: "Nhost Backend",
  },
  {
    link: "/quick-start/todos-table",
    name: "Todos Table",
  },
  {
    link: "/quick-start/client-app",
    name: "Client App",
  },
  {
    link: "/quick-start/authentication",
    name: "Authentication",
  },
  {
    link: "/quick-start/deploy-app",
    name: "Deployment",
  },
];

const menuPostgres = [
  {
    link: "/postgresql",
    name: "Overview",
  },
  {
    link: "/postgresql/create-tables",
    name: "Create Tables",
  },
  {
    link: "/postgresql/custom-schemas",
    name: "Custom schemas",
  },
];

const menu_hasura = [
  {
    name: "Hasura",
    path: "/hasura",
    menu: [
      {
        link: "/hasura",
        name: "Overview",
      },
      {
        link: "/hasura/tables",
        name: "Tables",
      },
      {
        link: "/hasura/permissions",
        name: "Permissions",
      },
      {
        link: "/hasura/event-triggers",
        name: "Event triggers",
      },
      {
        link: "/hasura/remote-schemas",
        name: "Remote schemas",
      },
    ],
  },
];

const menu_graphql = [
  {
    name: "GraphQL",
    path: "/graphql",
    menu: [
      {
        link: "/graphql/overview",
        name: "Overview",
      },
      {
        link: "/graphql/query",
        name: "Query",
      },
      {
        link: "/graphql/mutation",
        name: "Mutation",
      },
      {
        link: "/graphql/subscription",
        name: "Subscription",
      },
      {
        link: "/graphql/variables",
        name: "Variables",
      },
    ],
  },
];

const menu_auth = [
  {
    name: "Auth",
    path: "/auth",
    menu: [
      {
        link: "/auth",
        name: "Overview",
      },
      {
        link: "/auth/local-users",
        name: "Local users",
      },
      {
        // link: "/auth/local-users",
        name: "OAuth providers",
        path: "/auth/oauth-providers",
        menu: [
          {
            link: "/auth/oauth-providers",
            name: "Overview",
          },
          {
            link: "/auth/oauth-providers/github",
            name: "Github",
          },
          {
            link: "/auth/oauth-providers/google",
            name: "Google",
          },
          {
            link: "/auth/oauth-providers/facebook",
            name: "Facebook",
          },
        ],
      },
      {
        link: "/auth/email-templates",
        name: "Email templates",
      },
      {
        link: "/auth/roles",
        name: "Roles",
      },
      {
        link: "/auth/custom-user-columns",
        name: "Custom user columns",
      },
      {
        link: "/auth/multi-factor-authentication",
        name: "Multi-Factor Authentication",
      },
      {
        link: "/auth/api-reference",
        name: "API Reference",
      },
    ],
  },
];

const menu_storage = [
  {
    name: "Storage",
    path: "/storage",
    menu: [
      {
        link: "/storage",
        name: "Overview",
      },
      {
        link: "/storage/security-rules",
        name: "Security Rules",
      },
      {
        link: "/storage/api-reference",
        name: "API Reference",
      },
    ],
  },
];

const menu_libraries = [
  {
    name: "Libraries",
    path: "/libraries",
    menu: [
      {
        link: "/libraries/nhost-js-sdk",
        name: "Nhost JS SDK",
      },
      {
        link: "/libraries/react-nhost",
        name: "React Nhost",
      },
    ],
  },
];

// const menu_example_apps = [
//   {
//     name: "Example Apps",
//     menu: [
//       {
//         link: "/example-projets/nhost-react-typescript-example-app",
//         name: "Nhost React Typescript Example App",
//       },
//       {
//         link: "/example-projets/nhost-nextjs-example-app",
//         name: "Nhost NextJS Example App",
//       },
//       {
//         link: "/example-projets/nhost-react-native-example-app",
//         name: "Nhost React Native Example App",
//       },
//       {
//         link: "/example-projets/nhost-nuxtjs-example-app",
//         name: "Nhost NuxtJS Example App",
//       },
//     ],
//   },
// ];

export function Menu(props) {
  const router = useRouter();

  return (
    <div>
      <MenuHeader>Quick Start</MenuHeader>
      <MenuList menu={menuQuickStart} router={router} />

      <MenuHeader>PostgreSQL</MenuHeader>
      <MenuList menu={menuPostgres} router={router} />
      {/* <MenuUL menu={menu_example_apps} router={router} /> */}
    </div>
  );
}

function MenuHeader({ children }) {
  return <div className="text-sm uppercase text-gray-900 pb-1">{children}</div>;
}

function MenuList({ menu }) {
  const router = useRouter();
  return (
    <div className="mb-6">
      {menu.map((item) => {
        const active = item.link === router.pathname;

        const classes = classNames({
          block: true,
          "py-1 text-gray-600 hover:text-gray-800": !active,
          "text-gray-800 font-semibold": active,
        });
        return (
          <Link href={item.link} key={item.link}>
            <a className={classes}>{item.name}</a>
          </Link>
        );
      })}
    </div>
  );
}
