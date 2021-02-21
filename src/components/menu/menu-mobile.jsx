import React from "react";
import { useRouter } from "next/router";

import { menu } from "utils/data";

export function MenuMobile() {
  const router = useRouter();
  return (
    <div className="block md:hidden py-6">
      <select
        className="dark:bg-dark-bg-primary dark:text-dark-text-primary dark:border-gray-700 border rounded py-1 px-3"
        value={router.pathname}
        onChange={(e) => {
          router.push(e.target.value);
        }}
      >
        <option disabled>Quick Start</option>
        {menu.quickStart.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>Postgres</option>
        {menu.postgres.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>Hasura</option>
        {menu.hasura.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>GraphQL</option>
        {menu.graphql.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>Authentication</option>
        {menu.auth.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>Storage</option>
        {menu.storage.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>Custom API</option>
        {menu.customAPI.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>Libraries</option>
        {menu.libraries.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
        <option disabled>CLI</option>
        {menu.cli.map((item) => {
          return <option value={item.link}>{item.name}</option>;
        })}
      </select>
    </div>
  );
}
