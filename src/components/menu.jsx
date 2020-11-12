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
    link: "/quick-start/frontend-web-app",
    name: "Frontend Web App",
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

const menuHasura = [
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
];

const menuGraphql = [
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
];

const menuAuth = [
  {
    link: "/auth",
    name: "Overview",
  },
  {
    link: "/auth/local-users",
    name: "Local users",
  },
  {
    link: "/auth/oauth-providers",
    name: "OAuth Overview",
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
];

const menuStorage = [
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
];

const menuLibraries = [
  {
    link: "/libraries/nhost-js-sdk",
    name: "Nhost JS SDK",
  },
  {
    link: "/libraries/react-nhost",
    name: "React Nhost",
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

      <MenuHeader>
        <div className="w-5 h-5 mr-3">
          <img src="/images/postgresql.svg" />
        </div>
        <div>PostgreSQL</div>
      </MenuHeader>
      <MenuList menu={menuPostgres} router={router} />

      <MenuHeader>
        <div className="w-5 h-5 mr-2">
          <img src="/images/hasura.svg" />
        </div>
        <div>Hasura</div>
      </MenuHeader>
      <MenuList menu={menuHasura} router={router} />

      <MenuHeader>
        <div className="w-5 h-5 mr-2">
          <img src="/images/graphql.svg" />
        </div>
        <div>GraphQL</div>
      </MenuHeader>
      <MenuList menu={menuGraphql} router={router} />

      <MenuHeader>
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
        <div>Auth</div>
      </MenuHeader>
      <MenuList menu={menuAuth} router={router} />

      <MenuHeader>
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
        <div>Storage</div>
      </MenuHeader>
      <MenuList menu={menuStorage} router={router} />

      <MenuHeader>
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <div>Libraries</div>
      </MenuHeader>
      <MenuList menu={menuLibraries} router={router} />
    </div>
  );
}

function MenuHeader({ children }) {
  return (
    <div className="flex items-center text-sm uppercase text-gray-900 pb-1">
      {children}
    </div>
  );
}

function MenuList({ menu }) {
  const router = useRouter();
  return (
    <div className="pb-4 border-b mb-4">
      {menu.map((item) => {
        const active = item.link === router.pathname;

        const classes = classNames({
          block: true,
          "py-1 text-gray-600 hover:text-gray-800": !active,
          "py-1 text-gray-800 font-semibold text-primary": active,
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
