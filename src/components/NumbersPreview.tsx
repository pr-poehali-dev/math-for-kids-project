
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NumbersPreview = () => {
  return (
    <div className="bg-purple-50 py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-6">Познакомьтесь с цифрами</h2>
            <p className="text-gray-700 mb-6">
              В этом разделе дети познакомятся с числами от 0 до 9, научатся их распознавать и использовать для счета.
              Интерактивные упражнения помогут закрепить полученные знания в игровой форме.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/numbers">Изучать цифры</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <Card key={num} className="overflow-hidden hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-32 flex flex-col items-center justify-center bg-white">
                      <span className="text-5xl font-bold text-primary">{num}</span>
                      <div className="mt-2 flex gap-1">
                        {Array.from({ length: num || 1 }).map((_, i) => (
                          <span key={i} className="text-xl">
                            {num === 0 ? "∅" : "●"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersPreview;
