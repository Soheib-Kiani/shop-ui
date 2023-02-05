const category = () => {
  return (
    <section className="grid grid-cols-4 place-items-center max-w-7xl mt-1 m-auto">
      <div className="w-24 h-24 shadow-lg text-center rounded-lg bg-red-500">
        <div className="w-full h-3/4 rounded-t-lg bg-yellow-400">img</div>
        <div>text</div>
      </div>
      <div className="w-24 h-24 rounded-lg text-center bg-green-500">
        <div className="w-full h-3/4 rounded-t-lg bg-yellow-400">img</div>
        <div>text</div>
      </div>
      <div className="w-24 h-24 rounded-lg text-center bg-yellow-500">
        <div className="w-full h-3/4 rounded-t-lg bg-yellow-400">img</div>
        <div>text</div>
      </div>
      <div className="w-24 h-24 rounded-lg text-center bg-gray-500">
        <div className="w-full h-3/4 rounded-t-lg bg-yellow-400">img</div>
        <div>text</div>
      </div>
    </section>
  );
};

export default category;
