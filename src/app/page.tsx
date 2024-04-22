import Image from "next/image";
import {Card} from "../components/Card";
import Api from "@/components/Api"

export default function Home() {
  return (
    <div className="container">
      <h1>VERSUS APP</h1>
      <div className="card-grid">
        <Card/>
        <Api/>
      </div>
    </div>
  );
}
