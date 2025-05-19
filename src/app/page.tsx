import Image from "next/image";
import Link from "next/link";
import Productcard from "@/app/components/productcard"

export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between ">
      <h1>this is main page</h1>
      <Link href={"/users"}>User</Link>
      <Productcard/>
    </main>
  );
}
