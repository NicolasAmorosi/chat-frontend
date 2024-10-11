import { Icon } from "../components/ui/Icon";

export function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-zinc-800">
      <Icon iconName="chat" className=" w-14 h-14" />
      <h1 className="text-4xl font-bold text-white">
        Bienvenido a la app chat
      </h1>
    </div>
  );
}
