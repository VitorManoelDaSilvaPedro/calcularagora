import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import Link from "next/link";


function MenuBar() {
    return (
       <NavigationMenu className="h-20 text-base">

            <NavigationMenuList>
                        <NavigationMenuItem className="ml-4">
            <Link href={"/"}>
                <Image src={"/logo.png"} alt="logo" width={100} height={20} />
            </Link>
        </NavigationMenuItem>
                <NavigationMenuItem>

                     <Link href="/quantos_dias_faltam" legacyBehavior passHref>

                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}, text-xl`}>
                            Quantos dias faltam
                        </NavigationMenuLink>

                     </Link>

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
 
    );
}

export default MenuBar;


