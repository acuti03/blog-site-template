"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {

    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`?q=${encodedSearchQuery}`);
  }

  return (
    <form onSubmit={onSearch}>
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        type="text"
        placeholder="Search"
        className="w-48 pl-7 rounded-2xl"
      />
    </form>
  );
}
