import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
    </div>
  );
}
