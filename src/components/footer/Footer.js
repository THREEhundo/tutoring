import React from "react";
import { Facebook, LinkedIn, Gmail, FooterBanner } from "../../assets/index.js";

const socialsArray = [
  {
    icon: Facebook,
    name: "facebook",
  },
  {
    icon: LinkedIn,
    name: "linkedin",
  },
  {
    icon: Gmail,
    name: "gmail",
  },
];
export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-pale-orange flex flex-wrap items-center py-10 justify-around"
    >
      <Banner />
      <EuniceFooterInfo />
      <SocialsList />
    </footer>
  );
};

const Banner = () => {
  return (
    <section className="bg-gradient-to-t from-black to-white">
      <img
        className="w-screen flex z-1 pb-10"
        src={FooterBanner}
        alt="banner placeholder"
      />
    </section>
  );
};

const EuniceFooterInfo = () => (
  <section className="text-left">
    <p className="text-xs">Eunice Baik</p>
    <p className="text-xs">
      New Haven, CT <span className="text-xl leading-4 align-bottom">⇆</span>{" "}
      New York, NY
    </p>
  </section>
);

const SocialIcons = socialsArray.map((link, index) => {
  return (
    <li key={index} className="rounded-full border-2 border-light-green mx-1">
      <a href={`#${link.name}`}>
        <img className="w-8" src={link.icon} alt={link.name} />
      </a>
    </li>
  );
});

const SocialsList = () => (
  <ul className="flex w-1/4 justify-center">{SocialIcons}</ul>
);

//* '("-->" "//" "/**" "/*" "*/" "<!--" ":=" "->>" "<<-" "->" "<-"
//*   "<=>" "==" "!=" "<=" ">=" "=:=" "!==" "&&" "||" "..." ".."
//*   nil nil nil nil nil nil nil nil nil nil nil nil nil nil
//*   "|||" "///" "&&&" "===" "++" "--" "=>" "|>" "<|" "||>" "<||"
//*   "|||>" "<|||" ">>" "<<" nil nil "::=" "|]" "[|" "{|" "|}"
//*   "[<" ">]" ":?>" ":?" nil "/=" "[||]" "!!" "?:" "?." "::"
//*   "+++" "??" "###" "##" ":::" "####" ".?" "?=" "=!=" "<|>"
//*   "<:" ":<" ":>" ">:" "<>" "***" ";;" "/==" ".=" ".-" "__"
//*   "=/=" "<-<" "<<<" ">>>" "<=<" "<<=" "<==" "<==>" "==>" "=>>"
//*   ">=>" ">>=" ">>-" ">-" "<~>" "-<" "-<<" "=<<" "---" "<-|"
//*   "<=|" "/\\" "\\/" "|=>" "|~>" "<~~" "<~" "~~" "~~>" "~>"
//*   "<$>" "<$" "$>" "<+>" "<+" "+>" "<*>" "<*" "*>" "</>" "</" "/>"
//*   "<->" "..<" "~=" "~-" "-~" "~@" "^=" "-|" "_|_" "|-" "||-"
//*   "|=" "||=" "#{" "#[" "]#" "#(" "#?" "#_" "#_(" "#:" "#!" "#="
//*   "&="))
