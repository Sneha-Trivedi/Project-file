import React from "react";
import Cards from "./Cards";
import { Sub } from "./Sub";
import { Subject } from "./Subject";
import { Whatwe } from "./Whatwe";

export default function Home() {
  return (
    <>
      <Cards />
      <Whatwe />
      <Subject />
      <Sub />
    </>
  );
}
