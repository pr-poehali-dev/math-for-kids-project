
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NumbersPreview from "@/components/NumbersPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Features />
      <NumbersPreview />
      
      <footer className="bg-purple-900 text-white py-8">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Математика для начальной школы</h2>
            <p>Увлекательное обучение для самых маленьких</p>
            <div className="mt-6 flex justify-center gap-4">
              <span>🏫 Для учителей</span>
              <span>👨‍👩‍👧‍👦 Для родителей</span>
              <span>👶 Для детей</span>
            </div>
            <p className="mt-8 text-purple-200">© 2023 МатематикаДетям</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
