import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="text-white bg-orange-600 hover:bg-orange-500 border-none shadow-md"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* Sidebar Content */}
      <SheetContent
        side="left"
        className="w-[260px] bg-gradient-to-b from-orange-600 via-orange-700 to-gray-900 text-white flex flex-col justify-between py-6 px-4"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-md">
            Admin Menu
          </h2>
          <Separator className="bg-white/30 mb-4" />

          <ul className="space-y-4 font-medium">
            <li>
              <a
                href="/admin-dashboard"
                className="block hover:text-orange-300 transition-colors"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/reports"
                className="block hover:text-orange-300 transition-colors"
              >
                Reports
              </a>
            </li>
            <li>
              <a
                href="/cars"
                className="block hover:text-orange-300 transition-colors"
              >
                Car Detector - Live Preview
              </a>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="px-1">
          <Button
            size="sm"
            variant="outline"
            className="w-full bg-white text-orange-700 hover:bg-orange-100 font-semibold"
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
