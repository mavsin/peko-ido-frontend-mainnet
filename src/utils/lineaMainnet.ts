import { Chain } from "wagmi";

export const lineaMainnet = {
  id: 59144,
  name: "Linea Mainnet",
  network: "Linea Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    public: { http: ["https://linea-mainnet.infura.io/v3"] },
    default: { http: ["https://linea-mainnet.infura.io/v3"] }
  },
  blockExplorers: {
    etherscan: { name: "Lineascan", url: "https://lineascan.build/" },
    default: { name: "Lineascan", url: "https://lineascan.build/" }
  }
} as const satisfies Chain;
