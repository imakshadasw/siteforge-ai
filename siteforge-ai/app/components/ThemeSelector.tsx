type Props = {
  theme: string;
  setTheme: (theme: string) => void;
};

const themes = [
  {
    name: "Dark",
    color: "bg-cyan-500",
  },
  {
    name: "Modern",
    color: "bg-purple-500",
  },
  {
    name: "Luxury",
    color: "bg-yellow-500",
  },
  {
    name: "Corporate",
    color: "bg-blue-500",
  },
];

export default function ThemeSelector({
  theme,
  setTheme,
}: Props) {
  return (
    <div>
      <h3 className="text-cyan-400 font-semibold mb-3">
        Choose Theme
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {themes.map((item) => (
          <button
            key={item.name}
            onClick={() => setTheme(item.name)}
            className={`border rounded-xl p-4 transition ${
              theme === item.name
                ? "border-cyan-400 scale-105"
                : "border-gray-700"
            }`}
          >
            <div
              className={`w-full h-10 rounded-lg mb-3 ${item.color}`}
            />

            <p>{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}