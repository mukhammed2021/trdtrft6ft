import { authConfig as authOptions } from "@/app/api/auth/[...nextauth]/auth.config";
import { getServerSession } from "next-auth";

export async function auth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
} 