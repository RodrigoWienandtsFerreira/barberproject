import { Input } from "@/app/_components/ui/input";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "@/@app/_components/ui/badge";
import { Avatar, AvatarImage } from "@/@app/_components/ui/avatar";

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
        <Card className="mt-6">
          <CardContent className="flex justify-between">
            <div className="flex flex-col gap-2 py-5">
              <Badge>Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Dezembro</p>
              <p className="text-2xl">22</p>
              <p className="text-sm">12:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default app;
