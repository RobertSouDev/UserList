import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        return setSearchTerm(e.target.value);
    }

    function handleSearch() {
        if (searchTerm.trim()) {
            console.log("Clickou");
            onSearch(searchTerm);
            setSearchTerm("");
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="h-9 border w-full bg-white text-gray-400 flex items-center shadow-xl/30">
            <button
                className="bg-green-600 h-9 px-4 py-2 text-white"
                onClick={handleSearch}
            >
                <IoIosSearch />
            </button>
            <input
                type="text"
                value={searchTerm}
                className="h-9 outline-none  text-center py-"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="buscar..."
            />
        </div>
    );
}
