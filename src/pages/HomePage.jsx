import { Link, useNavigate } from "react-router-dom";
import {
  FolderGit,
  History,
  Home,
  LayoutGrid,
  LogOut,
  MessageSquareMore,
  Package2,
  PanelLeft,
  PencilRuler,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Dashboard from "./sub-components/Dashboard";
import AddSkill from "./sub-components/AddSkill";
import AddProject from "./sub-components/AddProject";
import AddSoftwareApplications from "./sub-components/AddSoftwareApplications";
import Account from "./sub-components/Account";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { toast } from "react-toastify";
import Messages from "./sub-components/Messages";
import AddTimeline from "./sub-components/AddTimeline";

const HomePage = () => {
  const [active, setActive] = useState("");
  const { isAuthenticated, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out!");
  };
  const navigateTo = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigateTo("/login");
    }
  }, [isAuthenticated]);
  return (
    <div className="flex bg-gray-200 relative flex-col">
      <div className="fixed z-40 top-0  flex  h-20  bg-gray-200 shadow-xl lg:shadow-none  lg:bg-transparent lg gap-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="mt-5 ml-5">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs ">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className={`group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base`}
              >
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Dashboard"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Dashboard")}
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Add Project"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Add Project")}
              >
                <FolderGit className="h-5 w-5" />
                Add Project
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Add Skill"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Add Skill")}
              >
                <PencilRuler className="h-5 w-5" />
                Add Skill
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Add Uses"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Add Uses")}
              >
                <LayoutGrid className="h-5 w-5" />
                Add Uses
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Profile"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Account")}
              >
                <User className="h-5 w-5" />
                Account
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Add Timeline"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Add Timeline")}
              >
                <History className="h-5 w-5" />
                Timeline
              </Link>
              <Link
                className={`flex items-center gap-4 px-2.5 ${
                  active === "Messages"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground "
                }`}
                onClick={() => setActive("Messages")}
              >
                <MessageSquareMore className="h-5 w-5" />
                Messages
              </Link>
              <Link
                className={
                  "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                }
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex lg:hidden   items-center gap-4 md:grow-0 lg:mx-96 lg:pl-20 lg:bg-gray-200 w-full ">
          <img
            src={user && user.avatar && user.avatar.url}
            alt="avatar"
            className="size-20 rounded-full max-[900px]:hidden border-2 border-gray-500"
          />
          <h1 className="text-4xl font-bold text-gray-600 max-[900px]:text-2xl">
            Welcome back, {user.fullName}
          </h1>
        </div>
      </div>
      <div className="h-screen w-full  lg:container overflow-y-auto pb-20">
        <header className="flex  items-center gap-4 bo  rder-b  px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 max-[900px]:h-[100px]">
          <div className="hidden  lg:flex px-20 gap-20  items-center  md:grow-0 justify-center  lg:bg-gray-200 w-full py-6 ">
            <img
              src={user && user.avatar && user.avatar.url}
              alt="avatar"
              className="size-20 rounded-full max-[900px]:hidden border-2 border-gray-500"
            />
            <h1 className="text-4xl font-bold text-gray-600 max-[900px]:text-2xl uppercase">
              Welcome back , {user.fullName}
            </h1>
          </div>
        </header>
        {(() => {
          switch (active) {
            case "Dashboard":
              return <Dashboard />;
              break;
            case "Add Project":
              return <AddProject />;
              break;
            case "Add Skill":
              return <AddSkill />;
              break;
            case "Add Uses":
              return <AddSoftwareApplications />;
              break;
            case "Add Timeline":
              return <AddTimeline />;
              break;
            case "Messages":
              return <Messages />;
              break;
            case "Account":
              return <Account />;
              break;
            default:
              return <Dashboard />;
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default HomePage;
