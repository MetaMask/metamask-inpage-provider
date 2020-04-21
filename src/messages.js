module.exports = {
  errors: {
    disconnected: () => `MetaMask: Lost connection to MetaMask background process.`,
    sendSiteMetadata: () => `MetaMask: Failed to send site metadata. This is an internal error, please report this bug.`,
    unsupportedSync: (method) => `MetaMask: The MetaMask Web3 object does not support synchronous methods like ${method} without a callback parameter.`, // TODO:deprecation:remove
  },
  warnings: {
    // TODO:deprecation:remove
    autoReloadDeprecation: `MetaMask: MetaMask will soon stop reloading pages on network change.\nFor more information, see: https://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44 \nSet 'ethereum.autoRefreshOnNetworkChange' to 'false' to silence this warning: https://metamask.github.io/metamask-docs/API_Reference/Ethereum_Provider#ethereum.autorefreshonnetworkchange`,
    // deprecated methods
    enableDeprecation: `MetaMask: 'ethereum.enable()' is deprecated and will be removed in the future. Please use "ethereum.request({ method: 'eth_requestAccounts' })" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    isConnectedDeprecation: `MetaMask: 'ethereum.isConnected()' is deprecated and will be removed in the future. Please listen for the relevant events instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    sendDeprecation: `MetaMask: 'ethereum.send(...)' is deprecated and will be removed in the future. Please use 'ethereum.request(method: string, params: Array<any> | Object)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      chainIdChanged: `MetaMask: The event 'chainIdChanged' is deprecated and will be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      close: `MetaMask: The event 'close' is deprecated and will be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      networkChanged: `MetaMask: The event 'networkChanged' is deprecated and will be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      notification: `MetaMask: The event 'notification' is deprecated and will be removed in the future. Please use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    },
    // misc
    experimentalMethods: `MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
  },
}
