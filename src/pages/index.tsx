export default function Index() {
  return (
    <div className="p-8 w-full bg-white">
      <div className="grid gap-8 grid-cols-4">
        {[...Array(10)].map((_, i) => {
          return (
            <div
              key={i}
              className="m-auto rounded-lg shadow-lg cursor-pointer overflow-hidden"
            >
              <img
                src={`https://picsum.photos/seed/${i}/500/750`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
