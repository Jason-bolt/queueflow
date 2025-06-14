"use client";
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchComponent = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch: (term: string) => void = useDebouncedCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    300,
  );

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={searchParams.get("query") || ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
      />
      <button className="absolute top-1/2 right-2 -translate-y-1/2 transform text-gray-500 transition-colors hover:text-blue-600">
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchComponent;
