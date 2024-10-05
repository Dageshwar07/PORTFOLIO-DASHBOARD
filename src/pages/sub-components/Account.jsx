import { Link } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";

const Account = () => {
  const [selectedComponent, setSelectedComponent] = useState("Profile");
  return (
    <div className="flex lg:container flex-col relative lg:px-12">
     
        <nav className="flex gap-4 text-sm lg:text-lg font-semibold px-8 lg:rounded-full z-30 shadow-xl bg-gray-200 w-full sticky top-20 lg:top-0 py-3">
          <Link
            href="#"
            className={
              selectedComponent === "Profile"
                ? "font-semibold text-primary"
                : ""
            }
            onClick={() => setSelectedComponent("Profile")}
          >
            Profile
          </Link>
          <Link
            href="#"
            className={
              selectedComponent === "Update Profile"
                ? "font-semibold text-primary"
                : ""
            }
            onClick={() => setSelectedComponent("Update Profile")}
          >
            Update Profile
          </Link>
          <Link
            href="#"
            className={
              selectedComponent === "Update Password"
                ? "font-semibold text-primary"
                : ""
            }
            onClick={() => setSelectedComponent("Update Password")}
          >
            Update Password
          </Link>
        </nav>

        <div className="grid gap-6">
          {(() => {
            switch (selectedComponent) {
              case "Profile":
                return <Profile />;
                break;
              case "Update Profile":
                return <UpdateProfile />;
                break;
              case "Update Password":
                return <UpdatePassword />;
                break;
              default:
                return <Profile />;
                break;
            }
          })()}
        </div>
      
    </div>
  );
};

export default Account;
