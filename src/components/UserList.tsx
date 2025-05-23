import type { User } from "../types/User";

export default function UserList({ user }: { user: User }) {
    return (
        <div className=" mix-w-60 h-40 bg-white rounded-3xl  flex justify-center items-center flex-col p-4 gap-4 shadow-xl/20 hover:shadow-xl/30">
            <h1>
                <strong> Nome: </strong>
                {user.name}
            </h1>
            <p>
                <strong> Email:</strong> {user.email}
            </p>
            <p>
                <strong>Cidade:</strong> {user.address.city}
            </p>
        </div>
    );
}
