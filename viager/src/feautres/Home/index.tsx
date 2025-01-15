import Hero from "./components/Hero";
import HowCalculIsDone from "./components/HowCalculIsDone";
import QuestionResponse from "./components/QuestionResponse";
import Simulateur from "./components/Simulateur";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Simulateur />
      <HowCalculIsDone />
      <QuestionResponse />
    </main>
  );
}
