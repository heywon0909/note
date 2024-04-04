import { getProducts } from "@/service/products";
import Link from "next/link";
import Image from "next/image";
// export const revalidate = 3;
import clotehsImage from "../../../public/images/clothes.jpg";

import MeowArticle from "@/components/MeowArticle";
export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clotehsImage} alt="Clotehs" />
      <ul>
        {products.map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            <li key={index}>{product.name}</li>
          </Link>
        ))}
      </ul>
      {/* <MeowArticle /> */}
    </>
  );
}
