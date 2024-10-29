import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

export default function App() {
  return (
    <main className="w-100">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </main>
  );
}
