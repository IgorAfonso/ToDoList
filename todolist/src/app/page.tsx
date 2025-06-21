import MainTodoDash from "@/components/MainTodoDash";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-row">
        <SideBar />
        <MainTodoDash />
      </div>
    </main>
  );
}
