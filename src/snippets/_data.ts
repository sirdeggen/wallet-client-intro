import { ShoppingBag, FileArchive } from "lucide-react";
import createToken from './create-token.ts?raw';
import listTokens from './list-tokens.ts?raw';
import redeemToken from './redeem-token.ts?raw';
import upload from './upload.ts?raw';
import download from "./download.ts?raw";
import addTokenToOverlay from "./add-token-to-overlay.ts?raw";
import listHelloWorldTokens from "./list-hello-world-tokens.ts?raw";
import spendTokenFromOverlay from "./spend-token-from-overlay.ts?raw";

export const topicsData = [
  {
    id: "tokens",
    title: "Token Creation and Redemption",
    icon: ShoppingBag,
    snippets: [
      {
        id: "createToken",
        title: "Create a token",
        explanation: "Create a token which represents an event ticket, and store it in a basket within the user's wallet.",
        code: createToken
      },
      {
        id: "listTokens",
        title: "List tokens",
        explanation: "Retrieve a list of tokens fromn the user within a specified basket.",
        code: listTokens
      },
      {
        id: "redeemToken",
        title: "Redeem a Token",
        explanation: "Grab the first token of this type in the user's wallet, and spend it.",
        code: redeemToken
      }
    ]
  },
  { 
    id: "data",
    title: "Distributed Data Storage",
    icon: FileArchive,
    snippets: [
      {
        id: "upload",
        title: "Upload a file",
        explanation: "Upload a file to a distributed data server and advertise it's availability using UHRP (Universal Hash Resolution Protocol).",
        code: upload
      },
      {
        id: "download",
        title: "Download a file",
        explanation: "Download a file from the UHRP Distributed Storage Network. First a lookup resolver will discover which URL(s) the file is stored at, then it will download the file and return the data.",
        code: download
      }
    ]
  },
  {
    id: "overlay",
    title: "Using Overlays",
    icon: FileArchive,
    snippets: [
      {
        id: "addTokenToOverlay",
        title: "Add a token to the hello world overlay",
        explanation: "Making use of the Topic Broadcaster to add a token to a general purpose message board overlay which will accept any push drop token with a single UTF-8 data field.",
        code: addTokenToOverlay
      },
      {
        id: "listHelloWorldTokens",
        title: "List hello world tokens",
        explanation: "Making use of the Lookup Resolver to list tokens from the hello world overlay.",
        code: listHelloWorldTokens
      },
      {
        id: "spendTokenFromOverlay",
        title: "Spend a token from the hello world overlay",
        explanation: "Listing hello world tokens from user's wallet, spending one of them, and broadcasting the transaction to the hello world overlay.",
        code: spendTokenFromOverlay
      }
    ]
  }
];
