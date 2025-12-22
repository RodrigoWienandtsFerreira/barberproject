import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <>
      <h2 className="text-sm font-bold uppercase text-gray-400 mt-6 mb-3">
        Agendamentos
      </h2>
      <Card>
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
    </>
  );
};

export default BookingItem;
