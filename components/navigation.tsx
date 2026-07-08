import {Github, Linkedin} from "lucide-react"
import { ThemeToggle } from "./ui/ThemeToggle";

export const Navbar=()=>{
	return (
    <nav className="flex justify-end z-12 ">
      <ul className="flex max-w-min rounded-full p-10 gap-6 flex items-center justify-center">
        <Linkedin />
        <Github />
        <ThemeToggle/>
      </ul>

    </nav>
  );
}