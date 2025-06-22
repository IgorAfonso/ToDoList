import SvgIcon from "@/assets/svg/DashBoard";

export default function SideBar() {
  return (
    <div className="hidden md:block flex-col h-[100%] w-[20%] bg-primary items-left px-5">
      <h1 className="text-white font-work mt-10 text-3xl font-semibold">
        ToDo
      </h1>
      <div className="flex flex-row items-center mt-10 hover:bg-gray500 hover:rounded-lg">
        <SvgIcon width={30} height={30} />
        <button className="text-white text-xl font-work">Dashboard</button>
      </div>
    </div>
  );
}
