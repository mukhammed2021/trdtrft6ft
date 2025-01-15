import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function EventsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">События</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        {/* Здесь будет таблица событий */}
      </div>
    </div>
  );
} 