"use client";

import { useState } from "react";
import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  TokenTransfersListView,
} from "@covalenthq/goldrush-kit";
import styles from "../page.module.css";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <main className={styles.main}>
      <GoldRushProvider apikey={process.env.NEXT_PUBLIC_COVALENT_API_KEY}>
        <TokenTransfersListView
          chain_name="eth-mainnet"
          address={address}
          contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        />
      </GoldRushProvider>
    </main>
  );
}
