import Image from "next/image";
// import HomeImg from "@public/home.jpg";
import HomeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          src={HomeImg}
          alt="car factory"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
