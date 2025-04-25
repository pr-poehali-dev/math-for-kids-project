
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: "🔢",
      title: "Цифры и счет",
      description: "Учимся узнавать цифры и считать предметы с помощью игр и упражнений",
      link: "/numbers"
    },
    {
      icon: "➕",
      title: "Сложение и вычитание",
      description: "Освоим первые арифметические операции в интересной форме",
      link: "/addition"
    },
    {
      icon: "📐",
      title: "Геометрия",
      description: "Знакомимся с фигурами и их свойствами через интерактивные занятия",
      link: "/geometry"
    }
  ];

  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4">Что вы изучите</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Наши интерактивные уроки помогут детям освоить математику легко и с интересом
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-3xl">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to={feature.link}>Перейти к разделу</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
