import React from "react";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";
import Image from "next/image";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Image src={logoImg.src} alt="" width="130" height="52" />
    </S.HeaderContainer>
  );
};

export default Header;
