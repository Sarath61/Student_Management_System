import Image from "next/image";
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from "./components/Drawer/Drawer";
export default function Home() {
  return (
    <>
    <nav className="bg-gray-300 h-16">
        <div className="w-[95%] m-auto flex flex-row items-center justify-between">
        <div className="">
            <img src="https://e7.pngegg.com/pngimages/1006/739/png-clipart-school-information-management-system-student-information-system-computer-software-student-management-text-logo-thumbnail.png" alt="missing image" className="h-16"/>
        </div>
        <div className="flex text-2xl font-medium">
            <h1 className="text-red-500">Student Portal</h1>
            <h1 className="text-blue-600">-ERP</h1>
        </div>
        <div>
            <img src="" alt="" />
            <h3 className="font-medium mb-1">2100100061</h3>
            <div className="flex gap-2">
                <LogoutIcon/>
                <button>Logout</button>
            </div>
        </div>
        </div>
    </nav>
    <main className="bg-slate-100 h-screen">
        <div>
            <div>
                <Drawer/>
            </div>
        </div>
    </main>
    </>
  );
}
