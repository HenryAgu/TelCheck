import { toast } from "sonner";

interface NetworkData {
  prefixes: string[];
  name: string;
  imgSrc: string;
}

const networkData: NetworkData[] = [
  {
    prefixes: [
      "0803",
      "0703",
      "0903",
      "0806",
      "0706",
      "0813",
      "0810",
      "0814",
      "0816",
      "0906",
      "0913",
    ],
    name: "MTN",
    imgSrc: "/images/mtn.jpg",
  },
  {
    prefixes: ["0805", "0807", "0705", "0811", "0815", "0905", "0915"],
    name: "Glo",
    imgSrc: "/images/GloLogo.png",
  },
  {
    prefixes: [
      "0802",
      "0808",
      "0708",
      "0701",
      "0812",
      "0901",
      "0902",
      "0904",
      "0907",
      "0912",
      "0911",
    ],
    name: "Airtel",
    imgSrc: "/images/airtel.png",
  },
  {
    prefixes: ["0809", "0817", "0818", "0908", "0909"],
    name: "9mobile",
    imgSrc: "/images/9mobile.jpg",
  },
  {
    prefixes: ["0804"],
    name: "Ntel",
    imgSrc: "/images/ntel.jpg",
  },
  {
    prefixes: ["0819", "07028", "07029"],
    name: "Starcomms",
    imgSrc: "/images/starcomms.png",
  },
  {
    prefixes: ["0702"],
    name: "Smile",
    imgSrc: "/images/smile.jpg",
  },
  {
    prefixes: ["0707"],
    name: "Zoom",
    imgSrc: "/images/zoom.jpg",
  },
];

export const useVerifyNumber = () => {
  const verifyNumber = (input: string) => {
    if (!input.trim()) {
      toast("Please enter a phone number");
      return;
    }

    const network = networkData.find((network) =>
      network.prefixes.some((prefix) => input.startsWith(prefix))
    );

    if (network) {
      return {
        name: network.name,
        imgSrc: network.imgSrc,
        message: `${
          network.name === "9mobile" ||
          network.name === "Starcomms" ||
          network.name === "Zoom" ||
          network.name === "Smile"
            ? `This is a ${network.name} phone number.`
            : `This is an ${network.name} phone number.`
        }`,
      };
    } else {
      return { name: null, imgSrc: null, message: "Unknown network" };
    }
  };

  return { verifyNumber };
};
