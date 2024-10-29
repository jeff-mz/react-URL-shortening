import Hero from "./header/Hero";
import NavMenu from "./header/NavMenu";

function AppHeader() {
  return (
    <header className="w-100 pb-20">
      <NavMenu />
      <Hero />
    </header>
  );
}

export default AppHeader;
