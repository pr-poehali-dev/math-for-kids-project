
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-100 to-white py-20">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-primary animate-fade-in">
            Математика для самых маленьких!
          </h1>
          <p className="text-xl text-gray-700">
            Здесь вы найдете интересные и понятные материалы для изучения математики в начальной школе.
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/numbers">Начать обучение</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/games">Играть в игры</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1974&auto=format&fit=crop"
            alt="Математические инструменты"
            className="rounded-lg shadow-lg hover-scale"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg rotate-6 hover:rotate-0 transition-all">
            <span className="text-5xl">🧮</span>
          </div>
          <div className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-lg -rotate-6 hover:rotate-0 transition-all">
            <span className="text-5xl">📝</span>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-2xl font-bold hover:bg-purple-100 transition-colors">
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
