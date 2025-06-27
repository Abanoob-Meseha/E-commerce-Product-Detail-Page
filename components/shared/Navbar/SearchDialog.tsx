import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchSVG from "@/public/assets/svg_tsx/SearchSVG";
import React from "react";
import SubmitInput from "../SubmitInput";
import { Search } from "lucide-react";

const SearchDialog = () => {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <SearchSVG className="text-white cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Search</DialogTitle>
              <DialogDescription>
                Search for products and explore our offers
              </DialogDescription>
              <div className="mt-4">
                <SubmitInput
                  placeholder="Search for Products"
                  buttonIcon={<Search className="text-white cursor-pointer" />}
                  title="Search"
                  type="search"
                />
              </div>
            </DialogHeader>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default SearchDialog;
