
// Utilities/index.js
import { ethers } from "ethers";

export function formatEther(value) {
  return ethers.formatEther(value);
}

export function parseEther(value) {
  return ethers.parseEther(value);
}

export async function getBalance(providerUrl, address) {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const balance = await provider.getBalance(address);
  console.log("Balance of", address, ":", formatEther(balance));
}
