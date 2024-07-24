import { PrismaClient, Book } from "@prisma/client";
const prisma = new PrismaClient();

type BookProps = {
    books: Book[];
};

export default async function Home() {
    const books = await prisma.book.findMany();
    return (
        <div className="flex flex-col">
            <h1>Hello</h1>
            {books.map((book) => {
                return (
                    <div key={book.id} className="flex gap-2 bg-gray-400">
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                );
            })}
        </div>
    );
}
