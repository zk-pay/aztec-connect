import { generateHydraS1Attester } from "@attestations-collections/base/hydra-s1";
import { hydraS1GroupPropertiesEncoders } from "@attestations-collections/base/hydra-s1/hydra-s1-properties-encoder";
import { Network } from "topics/attester";
import { BadgesCollection } from "topics/badge";

export const hydraS1AccountboundAttester = generateHydraS1Attester(
  {
    attesterAddress: "0x095590c542571df14c6220c3163112286a5f7518",
    rootsRegistryAddress: "0xece747769bd44a7854c8c0913a91aa801e42d0d0",
  },
  {
    name: "hydra-s1-accountbound",
    network: Network.Polygon,
    groupPropertiesEncoder: hydraS1GroupPropertiesEncoders.accountboundEncoder,
    attestationsCollections: [],
  }
);

export const hydraS1AccountboundBadges: BadgesCollection = {
  collectionIdFirsts: {
    [Network.Polygon]: 20000001,
  },
  badges: [],
};
