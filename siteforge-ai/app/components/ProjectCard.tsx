type Props = {
  name: string;
  type: string;
  city: string;
};

export default function ProjectCard({
  name,
  type,
  city,
}: Props) {
  return (
    <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-6 hover:border-cyan-400 transition">

      <h2 className="text-2xl font-bold text-cyan-400">
        {name}
      </h2>

      <p className="text-gray-400 mt-2">
        {type}
      </p>

      <p className="mt-1">
        📍 {city}
      </p>

      <div className="flex gap-3 mt-6">

        <button className="bg-cyan-500 px-4 py-2 rounded-lg text-black font-bold">
          Open
        </button>

        <button className="border border-cyan-500 px-4 py-2 rounded-lg">
          Edit
        </button>

        <button className="border border-red-500 text-red-400 px-4 py-2 rounded-lg">
          Delete
        </button>

      </div>

    </div>
  );
}