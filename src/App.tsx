import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import type { User } from "./types/User";
import UserList from "./components/UserList";

export default function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const [clients, setClients] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [allClients, setAllClients] = useState<User[]>([]);
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    async function handleSearch(searchTerm: string) {
        if (!searchTerm.trim()) {
            setClients(allClients);
            return;
        }

        setLoading(true);
        try {
            const filtered = allClients.filter((client) =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setClients(filtered);

            // Ou se preferir buscar na API diretamente:
            /*
          const response = await fetch(
              `${API_URL}${searchTerm}`
          );
          const data = await response.json();
          setClients(data);
          */
        } catch (error) {
            console.error("Erro na busca:", error);
            setError("Erro ao buscar usuários");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        async function loadClients() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                const formattedData = data.map((client: any) => ({
                    id: client.id.toString(),
                    name: client.name,
                    company: client.company.name,
                    email: client.email,
                    phone: client.phone,
                    address: client.address.city,
                }));

                setAllClients(formattedData);
                setClients(formattedData);
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "Erro desconhecido"
                );
            } finally {
                setLoading(false);
            }
        }

        loadClients();
    }, []);

    return (
        <div className="h-screen w-full  p-4 flex justify-start flex-col items-center bg-gray-300">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Campo de Busca
            </h1>
            <div className="w-full border mb-10"></div>
            <div className="mb-8">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="w-full p-4">
                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                        <span className="ml-3">Carregando usuários...</span>
                    </div>
                ) : error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
                        {error}
                    </div>
                ) : clients.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {clients.map((user) => (
                            <UserList key={user.id} user={user} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-center">
                        Nenhum usuário encontrado com esse nome.
                    </div>
                )}
            </div>
        </div>
    );
}
