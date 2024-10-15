import "./App.css";
import Section from "./components/section";
import Articles from "./components/articles";
import Introduction from "./components/introduction";
import IntroductionImages from "./components/introductionImages";

function App() {
  return (
    <main>
      <Section>
        <IntroductionImages/>
        <Introduction/>
      </Section>
      <Section>
        <Articles/>
      </Section>
    </main>
  );
}

export default App;
