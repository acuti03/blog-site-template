import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="items-center flex flex-col w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <p className="leading-7 [&:not(:first-child)]:mt-6">About</p>
        <h2 className="text-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Template per Siti
        </h2>
      </div>
      <Avatar className="w-28 h-28">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="leading-7 [&:not(:first-child)]:mt-6 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        Questo sito è un <strong>template per un blog</strong> sviluppato con{" "}
        <strong>Next.js</strong>, <strong>Tailwind CSS</strong> e{" "}
        <strong>shadcn/ui</strong>. Il blog funziona leggendo automaticamente
        file <code>.md</code> (Markdown) che vengono inseriti all&apos;interno
        della cartella <code>posts/</code>. Ogni file deve iniziare con una
        sezione <strong>Front Matter</strong> scritta in formato{" "}
        <code>YAML</code>, che contiene informazioni come:
      </p>
      <ul className="ml-6 list-disc [&>li]:mt-2 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <li>
          <code>title</code>: il titolo del post
        </li>
        <li>
          <code>date</code>: la data di pubblicazione
        </li>
        <li>
          <code>image</code>: un&apos;immagine di anteprima con{" "}
          <code>link</code>, <code>width</code>, e <code>height</code>
        </li>
        <li>
          <code>tags</code>: una lista di tags
        </li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        Grazie al pacchetto <code>gray-matter</code>, il sito è in grado di
        leggere questi metadati e mostrarli automaticamente in una{" "}
        <strong>card</strong> riassuntiva. Quando clicchi su una card, vieni
        reindirizzato alla pagina completa del post, dove il contenuto del file
        Markdown. Il contenuto viene convertito in HTML tramite{" "}
        <code>remark</code> e mostrato usando componenti ottimizzati per la
        lettura.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6 w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        Alcuni contenuti sono tratti dalla documentazione di{" "}
        <Link target="_blank" href="https://nextjs.org" className="underline">
          Next.js
        </Link>
        , distribuita sotto{" "}
        <Link target="_blank" href="https://opensource.org/licenses/MIT" className="underline">
          Licenza MIT
        </Link>
        .
      </p>
    </div>
  );
}
