"use client";

import { useState } from "react";
// import "@covalenthq/goldrush-kit/styles.css";
import {
  GoldRushProvider,
  NFTWalletTokenListView,
  TokenBalancesListView,
  TokenTransfersListView,
} from "@covalenthq/goldrush-kit";
import styles from "./page.module.css";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <main className={styles.main}>
      <GoldRushProvider apikey={process.env.NEXT_PUBLIC_COVALENT_API_KEY}>
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Enter address"
        />
        <NFTWalletTokenListView
          address={address}
          chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
          ]}
        />
        {/* <TokenBalancesListView
          chain_names={[
            "eth-mainnet",
            "matic-mainnet",
            "bsc-mainnet",
            "avalanche-mainnet",
            "optimism-mainnet",
          ]}
          hide_small_balances
          address={address}
        /> */}
        {/* <TokenTransfersListView
          chain_name="eth-mainnet"
          address={address}
          contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        /> */}
      </GoldRushProvider>
    </main>
  );
}
