import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import api from "~/lib/apiClient";

export const loader: LoaderFunction = async () => {
  try {
    const data = await api.usersGet();
    return new Response(JSON.stringify(data.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Response("Failed to fetch users", { status: 500 });
  }
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <div className="mt-8">
          <h2 className="text-xl font-bold">User Data</h2>
          <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
