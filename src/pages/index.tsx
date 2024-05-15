import dynamic from "next/dynamic";

export default function Home() {
  const Tasks = dynamic(() => import("@/components/Tasks"), { ssr: false });
  return (
    <div>
      <Tasks />
    </div>
  );
}
