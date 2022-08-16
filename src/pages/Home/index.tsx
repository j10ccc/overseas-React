import CorpusPart from "./CorpusPart";
import TranslatePart from "./TranslatePart";
import WritingAssistant from "./WritingAssistant";
import "./index.scss";

export default function Home() {
  return (
    <section className="home-page">
      <WritingAssistant />
      <CorpusPart />
      <TranslatePart />
    </section>
  );
}
