import { z } from "zod";

import { chainMetadata as defaultChainMetadata } from "@hyperlane-xyz/registry";

import type { ChainMap, ChainMetadata } from "@hyperlane-xyz/sdk";
import { ChainMetadataSchema } from "@hyperlane-xyz/sdk";

import { objMerge } from "@hyperlane-xyz/utils";

const customChainMetadata = {
  rari: {
    name: "rari",
    chainId: 1918988905,
    domainId: 1918988905,
    protocol: "ethereum",
    rpcUrls: [
      {
        http: "https://rari-testnet.calderachain.xyz/http",
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
      {
        http: "https://rari.caff.testnet.espresso.network",
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
    ],
    transactionOverrides: {
      gasLimit: 3000000, 
    },
    blockExplorers: [
      {
        name: "Rari Explorer",
        url: "https://rari-testnet.hub.caldera.xyz/",
        apiUrl: "https://rari-testnet.hub.caldera.xyz/api",
      },
    ],
  },
  appchain: {
    name: "appchain",
    chainId: 4661,
    domainId: 4661,
    protocol: "ethereum",
    rpcUrls: [
      {
        http: "https://appchaintestnet.rpc.caldera.xyz/http",
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
      {
        http: "https://appchain.caff.testnet.espresso.network",
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
    ],
    transactionOverrides: {
      gasLimit: 3000000, 
    },
    blockExplorers: [
      {
        name: "AppChain Explorer",
        url: "https://appchaintestnet.hub.caldera.xyz/",
        apiUrl: "https://appchaintestnet.hub.caldera.xyz/api",
      },
    ],
  },
  arbitrumsepolia: {
    chainId: 421614,
    domainId: 421614,
    name: "arbitrumsepolia",
    protocol: "ethereum",
    rpcUrls: [
      {
        http: "https://sepolia-rollup.arbitrum.io/rpc",
        timeout: 30000,
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
      {
        http: "https://arbitrum-sepolia.publicnode.com",
        timeout: 30000,
      },
    ],
    transactionOverrides: {
      gasLimit: 3000000,
    },
  },
  basesepolia: {
    chainId: 84532,
    domainId: 84532,
    name: "basesepolia",
    protocol: "ethereum",
    rpcUrls: [
      {
        http: "https://sepolia.base.org",
        timeout: 30000,
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
      {
        http: "https://base-sepolia.publicnode.com",
        timeout: 30000,
      },
    ],
    transactionOverrides: {
      gasLimit: 3000000,
    },
  },
  sepolia: {
    chainId: 11155111,
    domainId: 11155111,
    name: "sepolia",
    protocol: "ethereum",
    rpcUrls: [
      {
        http: "https://ethereum-sepolia.publicnode.com",
        timeout: 30000,
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
      {
        http: "https://sepolia.gateway.tenderly.co",
        timeout: 30000,
      },
    ],
    transactionOverrides: {
      maxFeePerGas: 50000000000, // 50 gwei
      maxPriorityFeePerGas: 2000000000, // 2 gwei
      gasLimit: 3000000,
    },
  },
  optimismsepolia: {
    chainId: 11155420,
    domainId: 11155420, 
    name: "optimismsepolia",
    protocol: "ethereum",
    rpcUrls: [
      {
        http: "https://sepolia.optimism.io",
        timeout: 30000,
        pagination: {
          maxBlockRange: 1000,
        },
        retry: {
          maxRequests: 5,
          baseRetryMs: 1000,
        },
      },
      {
        http: "https://optimism-sepolia.publicnode.com",
        timeout: 30000,
      },
    ],
    transactionOverrides: {
      gasLimit: 3000000,
    },
    
  },
  
};


const chainMetadata = objMerge<ChainMap<ChainMetadata>>(
  defaultChainMetadata,
  customChainMetadata,
  10,
  true,
);

z.record(z.string(), ChainMetadataSchema).parse(chainMetadata);

export { chainMetadata };