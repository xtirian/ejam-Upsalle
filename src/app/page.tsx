"use client";
import dynamic from "next/dynamic";
import "./style.scss";

import SpecialOfferGrid from "@/components/special-offer-grid";

const DynamicConfirmation = dynamic(()=> import('@/components/special-offer-grid/index'),
{
  ssr: false,
  loading: () => <p>Loading...</p>
})


export default function Home() { 

  return (
    <main className="main_container">
      <section className="main_sect">
        <h1 className="main_title">Wait ! your order in progress.</h1>

        <h2 className="main_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </h2>
      </section>
      <DynamicConfirmation />
      
    </main>
  );
}
