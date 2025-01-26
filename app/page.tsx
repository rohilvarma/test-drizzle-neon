import drizzleConnector from "@/db";
import { postsTable, usersTable } from "@/db/schema";
import Link from "next/link";

export default async function Home() {
  const db = drizzleConnector.database;

  const allPosts = await db.select().from(postsTable);
  const allUsers = await db.select().from(usersTable);
  return (
    <div className="grid grid-cols-3 gap-3 mt-4">
      {allPosts.map((post, index) => {
        return (
          <div key={index} className="rounded-lg p-4 border border-slate-700">
            <Link href={`/post/${post.post_id}`} className="flex flex-col h-full justify-between gap-4">
              <div className="text-2xl font-bold">
                <p className="">
                  {post.title}
                </p>
                <div className="text-sm text-muted-foreground text-right">
                  - {allUsers.find(user => user.id === post.userId)?.firstName}
                </div>
              </div>
              <div className="truncate text-gray-200">{post.content}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
