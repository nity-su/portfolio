import nftMarketScreenShots from "../asset/images/nft-marketplace-screenshot/index";
import konkrit from "../asset/images/konkrit-screenshot/index";
import loginNextJs from "../asset/images/login-ex-project/index";
import characterScreenShot from "../asset/images/3d-project/index";

export const projects = [
  {
    id: "3d-project",
    title: "ThreeJs 구현 연습",
    description: [
      `glb 파일 로더 후 화면 렌더링 | 캐릭터 컨트롤러 구현 | cannon 라이브러리를 활용-이동 간에 물리적 충돌 구현`,
    ],
    skills: ["react", "ThreeJs", "react-fiber", "react-cannon"],
    images: characterScreenShot,
    gitHub: "https://github.com/nity-su/3d-projectWithCannon",
    link: "https://moving-character.netlify.app/",
  },
  {
    id: "nft-marketplace",
    title: "NFT-Marketplace",
    description: [
      `메타마스크 지갑 연결 및 트렌젝션 제출 | web3.Js를 사용하여 블록체인 정보 데이터 활용 | cloudinary를 위한 API 서버 구현 | 데이터 정보 저장을 위한 MySql 서버 구현`,
    ],
    skills: ["mysql", "vercel", "web3.js", "react", "cloudinary"],
    images: nftMarketScreenShots,
    gitHub: "https://github.com/nity-su/portfolio",
    link: "https://scw-metamusic.netlify.app",
  },
  {
    id: "konkrit",
    title: "Clone Project",
    description: ["메타마스크 연결 | atomic 디자인 "],
    skills: ["react", "web3.js"],
    images: konkrit,
    gitHub: "https://github.com/nity-su/l-clone-konkirt-with-kaikas-1",
    link: "https://clone-project-inblockchainschool.netlify.app",
  },
  {
    id: "login-ex-project",
    title: "NextJs & TypeScript 활용한 로그인",
    description: [
      "bcrypt 사용하여 비밀번호 암호화 | Database 접근 및 orm 연동 ",
    ],
    skills: ["NextJs", "Typescript", "Prisma", "PlanetScale"],
    images: loginNextJs,
    gitHub: "https://github.com/nity-su/NextJsRegisterExample",
    link: "https://nity-nextjs-login.netlify.app",
  },
];
