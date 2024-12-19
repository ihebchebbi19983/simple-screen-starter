import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MainNavbar = () => {
  return (
    <div className="absolute w-full z-20 text-center lg:top-[160px] top-[120px] px-4 font-['WomanFontBold']">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-14 gap-6 items-center">
          
          {/* Le monde Fiori */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors bg-transparent">
              Le monde Fiori
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Collections</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/le-monde-fiori/spring" title="Spring Collection">
                          Discover our fresh spring designs
                        </ListItem>
                        <ListItem href="/category/le-monde-fiori/summer" title="Summer Collection">
                          Light and breezy summer styles
                        </ListItem>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Occasions</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/le-monde-fiori/wedding" title="Wedding">
                          Elegant wedding collections
                        </ListItem>
                        <ListItem href="/category/le-monde-fiori/party" title="Party">
                          Festive party designs
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    src="/Articles/1.png"
                    alt="Le Monde Fiori Collection"
                    className="aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* L'univers Cadeaux */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors bg-transparent">
              L'univers Cadeaux
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Gift Types</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/univers-cadeaux/personalized" title="Personalized Gifts">
                          Custom-made special presents
                        </ListItem>
                        <ListItem href="/category/univers-cadeaux/corporate" title="Corporate Gifts">
                          Professional gift solutions
                        </ListItem>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Special Occasions</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/univers-cadeaux/birthday" title="Birthday">
                          Celebrate with unique gifts
                        </ListItem>
                        <ListItem href="/category/univers-cadeaux/anniversary" title="Anniversary">
                          Memorable anniversary presents
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    src="/Articles/2.png"
                    alt="L'univers Cadeaux Collection"
                    className="aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Le prêt à porter */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors bg-transparent">
              Le prêt à porter
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Categories</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/pret-a-porter/dresses" title="Dresses">
                          Elegant dresses for all occasions
                        </ListItem>
                        <ListItem href="/category/pret-a-porter/tops" title="Tops">
                          Stylish tops and blouses
                        </ListItem>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Collections</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/pret-a-porter/casual" title="Casual Wear">
                          Comfortable daily fashion
                        </ListItem>
                        <ListItem href="/category/pret-a-porter/evening" title="Evening Wear">
                          Stunning evening attire
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    src="/Articles/3.png"
                    alt="Le prêt à porter Collection"
                    className="aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Accessoires */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors bg-transparent">
              Accessoires
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Jewelry</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/accessoires/necklaces" title="Necklaces">
                          Elegant necklace collection
                        </ListItem>
                        <ListItem href="/category/accessoires/earrings" title="Earrings">
                          Beautiful earring designs
                        </ListItem>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Other Accessories</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/accessoires/bags" title="Bags">
                          Stylish bags and purses
                        </ListItem>
                        <ListItem href="/category/accessoires/scarves" title="Scarves">
                          Luxurious scarves collection
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    src="/Articles/4.png"
                    alt="Accessoires Collection"
                    className="aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sur mesure */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors bg-transparent">
              Sur mesure
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Services</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/sur-mesure/consultation" title="Consultation">
                          Personal styling consultation
                        </ListItem>
                        <ListItem href="/category/sur-mesure/fitting" title="Fitting">
                          Professional fitting service
                        </ListItem>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Custom Items</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/sur-mesure/dresses" title="Custom Dresses">
                          Tailored dress creation
                        </ListItem>
                        <ListItem href="/category/sur-mesure/suits" title="Custom Suits">
                          Bespoke suit tailoring
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    src="/NewCollection/Main.png"
                    alt="Sur mesure Services"
                    className="aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Outlet */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[#700100] text-[16px] lg:text-[21px] hover:text-red-400 transition-colors bg-transparent">
              Outlet
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Seasonal Sales</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/outlet/summer-sale" title="Summer Sale">
                          Hot summer deals
                        </ListItem>
                        <ListItem href="/category/outlet/winter-sale" title="Winter Sale">
                          Winter collection clearance
                        </ListItem>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-none mb-3 text-[#700100]">Special Offers</h4>
                      <ul className="grid gap-3 p-4">
                        <ListItem href="/category/outlet/clearance" title="Clearance">
                          Final clearance items
                        </ListItem>
                        <ListItem href="/category/outlet/special-deals" title="Special Deals">
                          Limited time offers
                        </ListItem>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    src="/NewCollection/Together We Feast.png"
                    alt="Outlet Deals"
                    className="aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MainNavbar;