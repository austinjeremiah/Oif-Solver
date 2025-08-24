import { type WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { zeroAddress } from 'viem';

const ROUTER = '0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3';
const ITT = '0x5f94BC7Fb4A2779fef010F96b496cD36A909E818';

// From your TOML config
const RARI_USDC = '0xF56B17DC903A3be90BE93A9668cA09D945468fE9';
const APPCHAIN_USDC = '0xc25232BF077c941A34588718EB03840FcB7A4a88';
const RARI_INPUT_SETTLER = '0xA6665B1a40EEdBd7BD178DDB9966E9e61662aa00';
const APPCHAIN_OUTPUT_SETTLER = '0x9D480daA8019F2e6086067530fBe56009f8BA5ae';

const NETWORK_SEPARATOR = '101010';

export const TOP_MAX = {
  'basesepolia': {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  'optimismsepolia': {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  'arbitrumsepolia': {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  'sepolia': {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  // Add limits for new chains
  'rari': {
    [RARI_USDC]: 100e6, // USDC has 6 decimals
    [zeroAddress]: 1e16,
  },
  'appchain': {
    [APPCHAIN_USDC]: 100e6, // USDC has 6 decimals
    [zeroAddress]: 1e16,
  },
}

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    // Existing ITT token configurations
    {
      addressOrDenom: ITT,
      chainName: 'optimismsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|basesepolia|' + ITT,
        },
        {
          token: 'ethereum|arbitrumsepolia|' + ITT,
        },
        {
          token: 'ethereum|sepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: ITT,
      chainName: 'basesepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + ITT,
        },
        {
          token: 'ethereum|arbitrumsepolia|' + ITT,
        },
        {
          token: 'ethereum|sepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: ITT,
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + ITT,
        },
        {
          token: 'ethereum|basesepolia|' + ITT,
        },
        {
          token: 'ethereum|sepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: ITT,
      chainName: 'sepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + ITT,
        },
        {
          token: 'ethereum|arbitrumsepolia|' + ITT,
        },
        {
          token: 'ethereum|basesepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },

    // ETH configurations for existing chains
    {
      addressOrDenom: zeroAddress,
      chainName: 'optimismsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'basesepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|sepolia|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'sepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
        {
          token: 'ethereum|basesepolia|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },

    // NEW: Add USDC token for Rari (origin chain)
    {
      addressOrDenom: RARI_USDC,
      chainName: 'rari',
      collateralAddressOrDenom: RARI_INPUT_SETTLER,
      connections: [
        {
          token: 'ethereum|appchain|' + APPCHAIN_USDC,
        },
      ],
      decimals: 6,
      logoURI: '/deployments/warp_routes/USDC/logo.svg', // You may need to add USDC logo
      name: 'USD Coin',
      standard: 'Intent',
      symbol: 'USDC',
      protocol: 'ethereum',
    },

    // NEW: Add USDC token for AppChain (destination chain)  
    {
      addressOrDenom: APPCHAIN_USDC,
      chainName: 'appchain',
      collateralAddressOrDenom: APPCHAIN_OUTPUT_SETTLER,
      connections: [
        {
          token: 'ethereum|rari|' + RARI_USDC,
        },
      ],
      decimals: 6,
      logoURI: '/deployments/warp_routes/USDC/logo.svg',
      name: 'USD Coin',
      standard: 'Intent',
      symbol: 'USDC',
      protocol: 'ethereum',
    },

    // NEW: Add ETH for Rari
    {
      addressOrDenom: zeroAddress,
      chainName: 'rari',
      collateralAddressOrDenom: RARI_INPUT_SETTLER,
      connections: [
        {
          token: 'ethereum|appchain|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },

    // NEW: Add ETH for AppChain
    {
      addressOrDenom: zeroAddress,
      chainName: 'appchain',
      collateralAddressOrDenom: APPCHAIN_OUTPUT_SETTLER,
      connections: [
        {
          token: 'ethereum|rari|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
  ],
  
  // Interchain fee constants
  options: {
    interchainFeeConstants: [
      {
        amount: 3e14,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        destination: 'sepolia',
        addressOrDenom: zeroAddress,
      },
      {
        amount: 75e16,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        destination: 'sepolia',
        addressOrDenom: ITT,
      },
      {
        amount: 1e10,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia', 'sepolia'].join(
          NETWORK_SEPARATOR,
        ),
        destination: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        addressOrDenom: zeroAddress,
      },
      {
        amount: 5e16,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia', 'sepolia'].join(
          NETWORK_SEPARATOR,
        ),
        destination: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        addressOrDenom: ITT,
      },
      // NEW: Add fees for Rari <-> AppChain
      {
        amount: 1e14, // Adjust as needed
        origin: 'rari',
        destination: 'appchain',
        addressOrDenom: zeroAddress,
      },
      {
        amount: 1e14, // Adjust as needed  
        origin: 'rari',
        destination: 'appchain',
        addressOrDenom: RARI_USDC,
      },
    ],
  },
};