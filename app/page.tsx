import { AboutMe } from "./components/about-me";
import { CV } from "./components/cv";
import { MyStack } from "./components/stack";
import { Tagline } from "./components/tagline";

export default function Home() {
  return (
    <div className="bg-black">
      <Tagline />
      <MyStack />
      <AboutMe />
      <CV />
    </div>
    ///Mi sproyectos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  );
}
