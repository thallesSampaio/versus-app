import Image from "next/image";
import {Card} from "../components/Card";

export default function Home() {
  return (
    <div className="container">
      <h1>VERSUS APP</h1>
      <div className="card-grid">
        <Card/>
      </div>
    </div>
  );
}
