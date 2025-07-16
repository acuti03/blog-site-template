"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const encodedSearchQuery = encodeURI(query);
    router.replace(`?q=${encodedSearchQuery}`);
  };

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        value={searchQuery}
        onChange={onSearch}
        type="text"
        placeholder="Cerca"
        className="pl-8 rounded-2xl"
      />
    </div>
  );
}
