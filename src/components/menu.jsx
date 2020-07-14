import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuContainer = styled.div`
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
      {
        link: "/quick-start/whats-next",
        name: "What's next?",
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
    ],
  },
];

const menu_hasura = [
  {
    // link: "/hasura",
    name: "Hasura",
    menu: [
      {
        link: "/hasura/overview",
        name: "Overview",
      },
      {
        link: "/hasura/tables",
        name: "Tables",
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
        menu: [
          {
            link: "/auth/oauth-providers/overview",
            name: "Overview",
          },
          {
            link: "/auth/oauth-providers/github",
            name: "Github",
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

export function Menu(props) {
  const router = useRouter();

  return (
    <MenuContainer>
      <div>Documentation</div>
      <MenuUL menu={menu_quick_start} router={router} />
      <div>Nhost</div>
      <MenuUL menu={menu_postgresql} router={router} />
      <MenuUL menu={menu_hasura} router={router} />
      <MenuUL menu={menu_auth} router={router} />
      <MenuUL menu={menu_storage} router={router} />
      <div>Libraries</div>
    </MenuContainer>
  );
}

function MenuUL({ menu, router }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  if (!menu) return null;

  return (
    <ul>
      {menu.map((item) => {
        const cssClass = item.link === router.pathname ? "active" : "";

        function showSubMenu() {
          return subMenuOpen || router.pathname.startsWith(item.link);
        }

        return (
          <React.Fragment key={item.link}>
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
                  {item.name} <div>{subMenuOpen ? "close" : "open"}</div>
                </div>
              )}
            </li>
            {showSubMenu() && (
              <div>
                <MenuUL menu={item.menu} router={router} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
