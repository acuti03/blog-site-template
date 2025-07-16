"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    // Se la cronologia ha almeno una pagina precedente
    if (window.history.length > 1) {
      setHasHistory(true);
    }
  }, []);

  const handleBack = () => {
    if (hasHistory) {
      router.back(); // Torna indietro
    } else {
      router.push("/"); // Fallback alla home
    }
  };

  return (
    <button
      onClick={handleBack}
      className="text-[#0070f3] font-medium mt-[10%] flex hover:cursor-pointer"
    >
      ← Indietro
    </button>
  );
}