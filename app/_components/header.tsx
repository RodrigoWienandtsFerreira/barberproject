import { Card, CardContent } from "@/app/_components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image src="/logo.png" alt="fsw barber" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
