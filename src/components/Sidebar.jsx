import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.clear();
    // Redirect to homepage or login
    navigate("/");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-white bg-gray-800 hover:bg-gray-700">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[260px] bg-gray-900 text-white flex flex-col justify-between py-6"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Admin Menu</h2>
          <Separator className="bg-gray-600 mb-4" />

          <ul className="space-y-4">
            <li><a href="/admin-dashboard" className="hover:text-teal-400">Dashboard</a></li>
            <li><a href="/reports" className="hover:text-teal-400">Reports</a></li>
            <li><a href="/cars" className="hover:text-teal-400">Car Detector - Live Preview</a></li>
          </ul>
        </div>

        <div className="px-1">
          <Button
            size="sm"
            variant="outline"
            className="w-full text-white bg-red-600 hover:bg-red-500"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;