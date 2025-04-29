import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-white bg-gray-800 hover:bg-gray-700">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[260px] bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Admin Menu</h2>
        <Separator className="bg-gray-600 mb-4" />

        <ul className="space-y-4">
          <li><a href="/admin-dashboard" className="hover:text-teal-400">Dashboard</a></li>
          <li><a href="/users" className="hover:text-teal-400">Users</a></li>
          <li><a href="/reports" className="hover:text-teal-400">Reports</a></li>
          <li><a href="/settings" className="hover:text-teal-400">Settings</a></li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
