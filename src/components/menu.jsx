import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuContainer = styled.div`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  a {
    color: #000;
  }

  ul {
    border-left: 1px solid #ddd;
    margin: 0 0 0 2rem;
    /* margin: 0 auto; */
    padding: 0;
    list-style-type: none;
  }

  /* Skip margin and border for first ul */
  > ul {
    margin-left: 0;
    border: 0;
  }

  li {
    width: 100%;
    font-size: 1.4rem;

    a {
      display: block;
      padding: 0.7rem 2.4rem 0.7rem 1.6rem;
    }

    .li-header {
      display: block;
      padding: 0.7rem 2.4rem 0.7rem 1.6rem;
      margin: 0;

      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    &.header {
      padding: 0.7rem 2.4rem 0.7rem 1.6rem;
      font-weight: bold;
      color: #000;
    }

    &:hover {
      background: #ddd;
    }
    &.active {
      background: #fff;
      border-top: 1px solid #f0f1f2;
      border-bottom: 1px solid #f0f1f2;
      font-weight: bold;
      color: var(--primary-color);
      a {
        color: var(--primary-color);
      }
    }
  }
`;

const menu_quick_start = [
  {
    // link: "/quick-start",
    name: "Quick Start",
    menu: [
      {
        link: "/quick-start/setup",
        name: "Setup",
      },
      {
        link: "/quick-start/table-and-permissions",
        name: "Table and permissions",
      },
      {
        link: "/quick-start/app",
        name: "App",
      },
      {
        link: "/quick-start/add-authentication",
        name: "Add authentication",
      },
      {
        link: "/quick-start/deploy-app",
        name: "Deploy app",
      },
    ],
  },
];

const menu_postgresql = [
  {
    // link: "/postgresql",
    name: "PostgreSQL",
    menu: [
      {
        link: "/postgresql",
        name: "Overview",
      },
      {
        link: "/postgresql/create-tables-in-postgresql",
        name: "Create Tables in PostgreSQL",
      },
      {
        link: "/postgresql/custom-schemas",
        name: "Custom schemas",
      },
    ],
  },
];

const menu_hasura = [
  {
    // link: "/hasura",
    name: "Hasura",
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
    // link: "/hasura",
    name: "GraphQL",
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
      {
        link: "/graphql/headers",
        name: "HTTP Headers",
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

const menu_example_apps = [
  {
    name: "Example Apps",
    menu: [
      {
        link: "/example-projets/nhost-react-typescript-example-app",
        name: "Nhost React Typescript Example App",
      },
      {
        link: "/example-projets/nhost-nextjs-example-app",
        name: "Nhost NextJS Example App",
      },
      {
        link: "/example-projets/nhost-react-native-example-app",
        name: "Nhost React Native Example App",
      },
      {
        link: "/example-projets/nhost-nuxtjs-example-app",
        name: "Nhost NuxtJS Example App",
      },
    ],
  },
];

export function Menu(props) {
  const router = useRouter();

  return (
    <MenuContainer>
      <div>Documentation</div>
      <MenuUL menu={menu_quick_start} router={router} />
      <div>Nhost</div>
      <MenuUL menu={menu_postgresql} router={router} />
      <MenuUL menu={menu_hasura} router={router} />
      <MenuUL menu={menu_graphql} router={router} />
      <MenuUL menu={menu_auth} router={router} />
      <MenuUL menu={menu_storage} router={router} />
      <MenuUL menu={menu_libraries} router={router} />
      <MenuUL menu={menu_example_apps} router={router} />
    </MenuContainer>
  );
}

function menuShouldStartOpen(menu, router) {
  if (!menu) return false;
  if (menu.length < 1) return false;

  return router.pathname.startsWith(menu[0].path);
}

function MenuArrow({ open }) {
  if (open) {
    return (
      <img
        src="/images/arrow-up.svg"
        style={{ height: "10px", width: "10px" }}
      />
    );
  }

  return (
    <img
      src="/images/arrow-up.svg"
      style={{ height: "10px", width: "10px", transform: "rotate(180deg)" }}
    />
  );

  return "false";
}

function MenuUL({ menu, router }) {
  const [subMenuOpen, setSubMenuOpen] = useState(
    menuShouldStartOpen(menu, router)
  );

  if (!menu) return null;

  return (
    <ul>
      {menu.map((item) => {
        const cssClass = item.link === router.pathname ? "active" : "";

        function showSubMenu() {
          return (
            subMenuOpen ||
            router.pathname.startsWith(item.link) ||
            router.pathname.startsWith(item.path)
          );
        }

        return (
          <React.Fragment key={item.name}>
            <li className={cssClass}>
              {item.link ? (
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
              ) : (
                <div
                  className="li-header"
                  onClick={() => setSubMenuOpen(!subMenuOpen)}
                >
                  {item.name}{" "}
                  <div>
                    <MenuArrow open={subMenuOpen} />
                  </div>
                </div>
              )}
            </li>
            {showSubMenu() && <MenuUL menu={item.menu} router={router} />}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
