import Counter from "@/components/Counter";
import Image from "next/image";
import os from "os"; // 노드 API
export default function Home() {
  console.log("안녕-서버");
  console.log(os.hostname());

  return (
    <div>
      <h1>홈페이지다 !! 버전4</h1>
      <Counter />
      <Image
        alt="shop"
        width={400}
        height={400}
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
      />
    </div>
  );
}
