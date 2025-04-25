
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
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
              <Link to="/numbers">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground"
                )}>
                  Цифры и счет
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/addition">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground"
                )}>
                  Сложение и вычитание
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/geometry">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground"
                )}>
                  Геометрия
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/games">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground"
                )}>
                  Игры
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/tests">
                <NavigationMenuLink className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-purple-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-200 hover:text-accent-foreground"
                )}>
                  Тесты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
