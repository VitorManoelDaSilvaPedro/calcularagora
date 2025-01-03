import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="text-xl mt-40 gap-4 flex justify-center flex-col g items-center">
        <p>Projeto em construção!</p>

        <Button className="w-60">Cálculo de quantos dias faltam</Button>
        
        </div> 
    </>
   
  );
}
