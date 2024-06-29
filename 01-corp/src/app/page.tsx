import HomeImg from 'public/home.jpg';
import Hero from '@/components/herok';

export default function Home() {
  return (
    <Hero
      imgData={HomeImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
