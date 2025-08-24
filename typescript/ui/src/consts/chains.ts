import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // Add Rari Chain
  rari: {
    protocol: 'ethereum' as const,
    chainId: 1918988905,
    domainId: 1918988905,
    name: 'rari',
    displayName: 'RARI Chain Testnet',
    nativeToken: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: [
      { http: 'https://rari-testnet.calderachain.xyz/http' },
      { http: 'https://rari.caff.testnet.espresso.network' }
    ],
    blockExplorers: [
      {
        name: 'Rari Explorer',
        url: 'https://rari-testnet.hub.caldera.xyz/',
        apiUrl: 'https://rari-testnet.hub.caldera.xyz/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 2,
    },
    logoURI: '/logo.svg', // You may want to add a custom Rari logo
  },
  
  // Add AppChain
  appchain: {
    protocol: 'ethereum' as const,
    chainId: 4661,
    domainId: 4661,
    name: 'appchain',
    displayName: 'AppChain Testnet',
    nativeToken: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: [
      { http: 'https://appchaintestnet.rpc.caldera.xyz/http' },
      { http: 'https://appchain.caff.testnet.espresso.network' }
    ],
    blockExplorers: [
      {
        name: 'AppChain Explorer',
        url: 'https://appchaintestnet.hub.caldera.xyz/',
        apiUrl: 'https://appchaintestnet.hub.caldera.xyz/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 2,
    },
    logoURI: '/logo.svg', // You may want to add a custom AppChain logo
  },

  // Keep existing commented examples
  // solanamainnet: {
  //   ...solanamainnet,
  //   // SVM chains require mailbox addresses for the token adapters
  //   mailbox: solanamainnetAddresses.mailbox,
  //   // Including a convenient rpc override because the Solana public RPC does not allow browser requests from localhost
  //   rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
  //     ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }, ...solanamainnet.rpcUrls]
  //     : solanamainnet.rpcUrls,
  // },
  // eclipsemainnet: {
  //   ...eclipsemainnet,
  //   mailbox: eclipsemainnetAddresses.mailbox,
  // },
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },
};