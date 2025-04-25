
import NavBar from "@/components/NavBar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Numbers = () => {
  const renderNumberContent = (number: number) => {
    const examples = Array.from({ length: number || 1 }).map((_, i) => i);
    
    return (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex items-center gap-8">
            <div className="text-9xl font-bold text-primary">{number}</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Цифра {number}</h3>
              <p className="text-gray-700">
                {number === 0 
                  ? "Ноль обозначает отсутствие предметов. Это очень важная цифра в математике!"
                  : `Цифра ${number} обозначает ${number} предмет${number > 1 ? 'а' : ''}. Давай научимся её узнавать и использовать!`
                }
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Давай посчитаем!</CardTitle>
              <CardDescription>
                {number === 0 
                  ? "Ноль - это когда ничего нет"
                  : `Вот ${number} предмет${number > 1 ? 'ов' : ''}`
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 p-4 bg-purple-50 rounded-lg">
                {number === 0 ? (
                  <div className="col-span-3 text-center text-2xl">
                    <span>Пусто</span>
                  </div>
                ) : (
                  examples.map((i) => (
                    <div key={i} className="aspect-square bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <span className="text-3xl">🍎</span>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Как писать цифру {number}</CardTitle>
              <CardDescription>Посмотри, как правильно писать цифру {number}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-8xl font-bold text-primary">{number}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Играем и учимся</CardTitle>
            <CardDescription>Интерактивные упражнения с цифрой {number}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-purple-50 rounded-lg text-center">
              <p className="mb-4">Здесь будут интерактивные упражнения с цифрой {number}</p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Раскрась цифру
                </button>
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Найди цифру
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <NavBar />
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Цифры и счет</h1>
        
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid grid-cols-5 md:grid-cols-10 gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <TabsTrigger key={num} value={num.toString()} className="text-xl font-bold">
                {num}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <TabsContent key={num} value={num.toString()} className="pt-8">
              {renderNumberContent(num)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <footer className="bg-purple-900 text-white py-6 mt-12">
        <div className="container text-center">
          <p>© 2023 МатематикаДетям</p>
        </div>
      </footer>
    </div>
  );
};

export default Numbers;
