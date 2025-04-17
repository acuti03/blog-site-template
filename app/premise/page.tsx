import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function page() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="items-center flex flex-col w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <p className="leading-7 [&:not(:first-child)]:mt-6">Premise</p>
        <h2 className="text-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
          aspernatur.
        </h2>
      </div>
      <Avatar className="w-28 h-28">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quaerat a consequuntur modi, perferendis minima sapiente accusamus
          fuga excepturi quis natus eaque nesciunt quia, illum soluta doloremque
          temporibus blanditiis similique odit ex repellendus explicabo, officia
          aliquam? Earum quidem itaque, obcaecati commodi delectus iste
          accusamus dolores impedit quis, vitae voluptate. Maxime, dicta. Eaque
          eveniet, ullam expedita quas eum cumque qui animi quia suscipit!
          Dignissimos mollitia nemo facilis illo recusandae. Perspiciatis
          facilis et optio quis voluptatibus, voluptas nemo fuga consequatur,
          repudiandae iusto, aperiam labore. Vel, placeat commodi ratione
          consectetur incidunt voluptas excepturi saepe illo repellat velit
          aliquid soluta facere minus cupiditate blanditiis. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Obcaecati quidem voluptatum
          accusamus expedita animi! Molestias officiis, libero, perferendis
          delectus sequi ad quae minus aspernatur, doloremque aliquid obcaecati
          facilis iusto neque quisquam maxime culpa rerum! Illo harum laudantium
          architecto vel quibusdam quas est? Beatae ratione ipsam molestias
          tempore laboriosam. Debitis ex, expedita beatae omnis soluta maxime
          ipsa obcaecati facere minus nam quae modi perspiciatis corrupti
          accusamus distinctio perferendis amet a numquam aspernatur ut placeat
          porro deleniti non. Voluptatem nihil soluta non maxime, neque eos
          laudantium, nemo rerum doloribus esse corporis, commodi quam. Vero
          odio quae minus fugiat similique veniam earum velit.
        </p>
      </div>
    </div>
  );
}
