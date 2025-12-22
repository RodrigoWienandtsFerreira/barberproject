import { Input } from "@/app/_components/ui/input";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const app = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rodrigo!</h2>
        <p>Domingo, 21 de Dezembro.</p>
        <div className="flex items-center gap-2 mt-6 ">
          <Input placeholder="Faça sua busca..."></Input>
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner.png"
            alt="banner"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default app;
