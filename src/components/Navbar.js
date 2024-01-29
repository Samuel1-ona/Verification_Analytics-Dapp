import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/token">Token</Link>
      <Link href="/token_transfer">token_transfer</Link>
    </div>
  );
}
