import Link from "next/link";
export default function Home() {
  console.log("...executing new");
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Get Start! ON Production
      </h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link href={"/meals"}>Meals</Link>
        <Link href={"/meals/share"}>Share Meals</Link>
        <Link href={"/community"}>Community</Link>
      </div>
    </main>
  );
}
