import { FC } from "react";
import { IProductProps } from "../../interfaces/product";

const ProductPage: FC<IProductProps> = ({ title }) => {
  return <>{title || "This is product component"}</>;
  
};

export default ProductPage;
