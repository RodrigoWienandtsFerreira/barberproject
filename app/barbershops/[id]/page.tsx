import Image from "next/image";
import { db } from "../../_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import { Button } from "../../_components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceItem from "../../_components/service-item";

interface BarbershopPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BarbershopPage = async ({ params }) => {
  const { id } = await params;
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    notFound();
  }

  return (
    <div>
      <div className="relative w-full h-[250px]">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="p-5 border-b border-solid">
        <h1 className="font-bold text-xl mb-3">{barbershop.name}</h1>
        <div className="flex items-center gap-2 mb-2 ">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="text-primary fill-primary " size={18} />
          <p className="text-sm">5,0 (500 avaliações)</p>
        </div>
      </div>
      <div>
        <div className="p-5 border-b border-solid space-y-3">
          <h2 className="font-bold uppercase text-gray-400 text-xs">
            Sobre nós
          </h2>
          <p className="text-sm text-justify">{barbershop?.description}</p>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h2 className="font-bold uppercase text-gray-400 text-xs ">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarbershopPage;
