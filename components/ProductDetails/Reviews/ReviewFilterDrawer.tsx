import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Filter } from "lucide-react";
import FilterByRate from "./FilterByRate";
import FilterByTopic from "./FilterByTopic";

const ReviewFilterDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="flex lg:hidden">
        <div className="p-2 rounded-md border-1 border-primary bg-secondary cursor-pointer">
          <Filter className="text-primary" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Reviews Filters</DrawerTitle>
          <DrawerDescription>
            Minize to Search result Circle by applying filters.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-8">
          {/* rate checkbox collapse */}
          <FilterByRate />
          <div className="footerDashLine h-1 my-4" />
          {/* topics checkbox collapse */}
          <FilterByTopic />
        </div>
        <DrawerFooter>
          <Button>Apply Filters</Button>
          <DrawerClose>
            <Button variant="outline">Reset</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewFilterDrawer;
