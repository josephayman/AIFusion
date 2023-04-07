import { api } from "~/utils/api";

export default function Grid() {
  const { data } = api.posts.getAll.useQuery();
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {data?.map((model) => (
        <li key={model.id} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={model.image ?? "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"}
              alt={model.title}
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {model.title}</span>
            </button>
          </div>
          <div className="rounded-md bg-pink-200 px-2">
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-pink-900">
              {model.category}
            </p>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900">
            {model.title}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {model.provider}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-700">
            {model.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
