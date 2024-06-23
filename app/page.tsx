"use client";

import { useState } from "react";
// import dynamic from "next/dynamic";
// import _ from "lodash";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading a dynamic...</p>,
// });

export default function Home() {
  // const [isVisible, setVisible] = useState(false);
  return (
    <main>
      <h1>Hello Naseer from HomePage.</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}

// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import { Metadata } from "next";
// import HeavyComponent from "./components/HeavyComponent";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <main>
//       <h1>
//         Hello {session && <span>{session.user!.name}</span>} from HomePage.
//       </h1>
//       <HeavyComponent />
//       <strong className="font-poppins py-50 px-40">I am Naseer Ullah</strong>
//       <Link href="/users">Users</Link>
//       <ProductCard />
//     </main>
//   );
// }

// export const metadata: Metadata = {
//   title: "Naseer Shop App",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: product.title,
//     description: product.description,
//   };
// }

// Use Above⬆️ Or Below⬇️ Code at one time
// Last Episodes Image Optimization tutorials from below //

// import Image from "next/image";
// import coffee from "@/public/images/coffee.jpg";

// export default async function Home() {
//   return (
//     <main className="relative h-screen">
//       <Image
//         src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBFjvG3jkEqMZ4tScTVZI5yFvfYkSLsEbkal-asmNAs58vEqaRhE5EigA-dIgOSfNDwI6iaknc2gaJcUsnakOweHQc0O4uxVhi7buK5OAFAGDWQZq-hUSBfHAFX0sVDmNDjLcu4AGA9fV3g9BHtYQgXFJ1Ib3KY9F3KPocJYEonN4z1uEPozEYvkCP6ak/w672-h378/JavaScript%20Programming%20Language.png"
//         alt="Coffee"
//         fill
//         className="object-cover"
//         // style={{ objectFit: "cover" }}
//         sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
//         quality={100}
//         priority
//       />
//       {/* <Image src={coffee} alt="Coffee" /> */}
//     </main>
//   );
// }
