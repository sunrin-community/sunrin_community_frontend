import { createGlobalStyle } from "styled-components";

const FontStyle = createGlobalStyle`
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 100;
  src: url('/fonts/NotoSansKR-Thin.otf');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 300;
  src: url('/fonts/NotoSansKR-Light.otf');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 400;
  src: url('/fonts/NotoSansKR-Regular.otf');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 500;
  src: url('/fonts/NotoSansKR-Medium.otf');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 700;
  src: url('/fonts/NotoSansKR-Bold.otf');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 900;
  src: url('/fonts/NotoSansKR-Black.otf');
}
`;

export default FontStyle;