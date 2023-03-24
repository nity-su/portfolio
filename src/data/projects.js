import nftMarketScreenShots from "../asset/images/nft-marketplace-screenshot/index";
import konkrit from "../asset/images/konkrit-screenshot/index";
import loginNextJs from "../asset/images/login-ex-project/index";
import characterScreenShot from "../asset/images/3d-project/index";

export const projects = [
  {
    id: "3d-project",
    title: "ThreeJs 구현 연습",
    description: `3D 이미지로 내놓는 NFT와 맞물려 웹페이지 내에서도 3D의 필요성이 높아질 것이라 판단하여, ThreeJs 기초와 Cannon 라이브러리를 학습했습니다.`,
    skills: ["react", "ThreeJs", "react-fiber", "react-cannon"],
    images: characterScreenShot,
    gitHub: "https://github.com/nity-su/3d-projectWithCannon",
    link: "https://moving-character.netlify.app/",
  },
  {
    id: "nft-marketplace",
    title: "NFT-Marketplace",
    description: `블록체인 스쿨 최종 프로젝트로 진행한 결과물이며, NFT 마켓에서 요구하는 ERC-721 등록과 거래 기능을 구현했습니다. 
      또한 특정 프로필 이미지를 선택하여 NFT를 대표하는 로고를 넣도록 cloudinary를 활용한 업로드 기능을 추가했습니다. 처음으로 블록체인 데이터를 활용한 프로젝트였습니다.`,
    skills: ["mysql", "vercel", "web3.js", "react", "cloudinary"],
    images: nftMarketScreenShots,
    gitHub: "https://github.com/nity-su/portfolio",
    link: "https://scw-metamusic.netlify.app",
  },
  {
    id: "konkrit",
    title: "Clone Project",
    description:
      "clone 프로젝트이며 Flex와 Grid를 사용하여 반응형에 초점을 두고 개발했습니다.",
    skills: ["react", "web3.js"],
    images: konkrit,
    gitHub: "https://github.com/nity-su/l-clone-konkirt-with-kaikas-1",
    link: "https://clone-project-inblockchainschool.netlify.app",
  },
  {
    id: "login-ex-project",
    title: "NextJs & TypeScript 활용한 로그인",
    description:
      "tpyescript와 NextJs의 활용하고자 간단한 로그인 시스템을 구축했습니다. DB로 연결되어 저장이 가능하며 비밀번호는 bcrypt 암호화를 통해서 해쉬로 변환된 후에 저장됩니다. 사이트를 만들면서 다양한 orm이 존재하다는 것을 깨닫게 되었습니다.",
    skills: ["NextJs", "Typescript", "Prisma", "PlanetScale"],
    images: loginNextJs,
    gitHub: "https://github.com/nity-su/NextJsRegisterExample",
    link: "https://nity-nextjs-login.netlify.app",
  },
];
