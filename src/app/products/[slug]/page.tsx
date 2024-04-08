import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}
export default async function PantsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  if (!product) {
    notFound();
  }
  return (
    <>
      <h1> {product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 들 수 있게 해줄거임 SSG
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
