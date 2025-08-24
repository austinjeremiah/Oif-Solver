import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    // mainnet
    // {
    //   address: "0x5F69f9aeEB44e713fBFBeb136d712b22ce49eb88",
    //   chainName: "ethereum",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "optimism",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "arbitrum",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "base",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "gnosis",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "berachain",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "form",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "unichain",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "artela",
    // },

    // testnet
    {
      address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
      chainName: "optimismsepolia",
    },
    {
      address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
      chainName: "arbitrumsepolia",
    },
    {
      address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
      chainName: "sepolia",
    },
    {
      address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
      chainName: "basesepolia",
      initialBlock: 21491220,
      pollInterval: 1000,
      confirmationBlocks: 2,
    },
    // ADD YOUR NEW CHAINS HERE
    {
      address: "0xA6665B1a40EEdBd7BD178DDB9966E9e61662aa00", // Rari input settler address
      chainName: "rari",
      pollInterval: 1000,
      confirmationBlocks: 1, // Based on min_confirmations in TOML
    },
    {
      address: "0x9D480daA8019F2e6086067530fBe56009f8BA5ae", // AppChain output settler address
      chainName: "appchain", 
      pollInterval: 1000,
      confirmationBlocks: 1,
    },
  ],
  customRules: {
    rules: [
      {
        name: "filterByTokenAndAmount",
        args: {
          "11155420": {
            "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(50e18),
            [AddressZero]: BigInt(1e14),
          },
          "84532": {
            "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(50e18),
            [AddressZero]: BigInt(1e14),
          },
          "421614": {
            "0xaf88d065e77c8cC2239327C5EDb3A432268e5831": null,
            [AddressZero]: BigInt(5e15),
          },
          "11155111": {
            "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(5e18),
            [AddressZero]: BigInt(1e14),
          },
          // ADD CUSTOM RULES FOR YOUR NEW CHAINS
          "1918988905": { // Rari chain ID
            "0xF56B17DC903A3be90BE93A9668cA09D945468fE9": BigInt(1e6), // RARI USDC (6 decimals)
            [AddressZero]: BigInt(1e14), // Minimum ETH amount
          },
          "4661": { // AppChain chain ID  
            "0xc25232BF077c941A34588718EB03840FcB7A4a88": BigInt(1e6), // APPCHAIN USDC (6 decimals)
            [AddressZero]: BigInt(1e14), // Minimum ETH amount
          },
        },
      },
      {
        name: "intentNotFilled",
      },
    ],
  },
};

Hyperlane7683MetadataSchema.parse(metadata);

export default metadata;