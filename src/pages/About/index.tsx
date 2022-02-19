import { FC } from "react";
import { IAboutProps } from "../../interfaces/about";

const AboutPage: FC<IAboutProps> = ({ title }) => {
  return <>{title || "This is about component"}</>;
};

export default AboutPage;
