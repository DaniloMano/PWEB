// src/app/page.js

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Explore as páginas disponíveis:</h1>
      <ul>
        <li>
          <Link href="/movies2">Movies (Client-side)</Link>
        </li>
        <li>
          <Link href="/extreme_ip">Extreme IP Lookup</Link>
        </li>
        <li>
          <Link href="/movies_server_side">Movies (Server-side)</Link>
        </li>
      </ul>
    </div>
  );
}
