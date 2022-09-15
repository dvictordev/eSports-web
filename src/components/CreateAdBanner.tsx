import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="pt-1 self-stretch bg-backgroundGradient mt-8 rounded-lg overflow-hidden">
      <div className=" bg-[#2A2634] px-8 py-8 rounded-b-lg flex justify-between items-center">
        <div className="">
          <strong className="font-black text-white text-2xl block">
            Não encontrou o seu Duo ?
          </strong>
          <span className="text-zinc-400 mt-1 b-4 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="bg-violet-500 px-4 py-2 flex gap-1 rounded text-white hover:bg-violet-600 transition delay-75  items-center">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
