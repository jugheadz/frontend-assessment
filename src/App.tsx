import "./App.css";
import Section from "./components/section";
import Articles from "./components/articles";
import Introduction from "./components/introduction";
import IntroductionImages from "./components/introductionImages";

function App() {
  return (
    <main className="font-sans max-w-[1280px] mx-auto flex flex-col gap-20 p-20">
      <Section classNames="flex gap-6">
        <IntroductionImages/>
        <Introduction/>
      </Section>
      <Section classNames="flex flex-col gap-6">
        <h1 className="uppercase text-center text-4xl">All the latest from AEG</h1>
        <Articles/>
      </Section>
    </main>
  );
}

export default App;
