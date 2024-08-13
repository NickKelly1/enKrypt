import { NetworkNames, CoingeckoPlatform } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";
import { EtherscanActivity } from "../libs/activity-handlers";
import assetsInfoHandler from "@/providers/ethereum/libs/assets-handlers/assetinfo-mew";
import shNFTHandler from "@/libs/nft-handlers/simplehash";

const seiOptions: EvmNetworkOptions = {
  name: NetworkNames.Sei,
  name_long: "Sei Network",
  homePage: "https://www.sei.io/",
  blockExplorerTX: "https://seitrace.com/tx/[[txHash]]",
  blockExplorerAddr: "https://seitrace.com/address/[[address]]",
  chainID: "0x531",
  isTestNetwork: false,
  currencyName: "ETH",
  currencyNameLong: "Sei ETH",
  node: "https://evm-rpc.sei-apis.com",
  icon: require("./icons/sei.png"),
  coingeckoID: "sei-network",
  coingeckoPlatform: CoingeckoPlatform.Sei,
  NFTHandler: shNFTHandler,
  assetsInfoHandler,
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const sei = new EvmNetwork(seiOptions);

export default sei;
