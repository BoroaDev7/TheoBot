import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import theobotLogo from "@/assets/theobot-logo.png";
export function Navbar() {
  return (
    <div className="h-16 flex justify-center gap-22 items-center bg-[#F9F6EE] shadow-sm">
      <Button
        asChild
        variant={"ghost"}
        className="  flex  w-fit justify-start "
      >
        <Link to="/">
          <img
            className="w-[70px] h-auto"
            src={theobotLogo}
            alt="TheoBot-logo"
          />
        </Link>
      </Button>
      <div className=" flex gap-8 ">
        <Button asChild>
          <Link to="/login"> Log In</Link>
        </Button>
        <Button asChild>
          <Link to="/about"> About</Link>
        </Button>
        <Button asChild>
          <Link to="/chat"> Start Chatting</Link>
        </Button>
      </div>
    </div>
  );
}
