
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <div className="w-full bg-purple-100 py-4 px-6 shadow-md">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-full p-2">
            <span className="text-white text-2xl font-bold">123</span>
          </div>
          <span className="text-primary font-bold text-xl">МатематикаДетям</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground">
                <Link to="/numbers">Цифры и счет</Link>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground">
                <Link to="/addition">Сложение и вычитание</Link>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground">
                <Link to="/geometry">Геометрия</Link>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground">
                <Link to="/games">Игры</Link>
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground">
                <Link to="/tests">Тесты</Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
