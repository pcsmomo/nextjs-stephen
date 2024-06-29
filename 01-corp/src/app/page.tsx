import Image from 'next/image';
// import HomeImg from "@public/home.jpg";
import HomeImg from 'public/home.jpg';

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          src={HomeImg}
          alt="car factory"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* <div className="flex flex-row">
        <Image height={800} width={600} src={HomeImg} alt="car asdf" />
        <div>Buy our product</div>
      </div> */}
    </div>
  );
}
