export const NotFound = () => {
  const path = location.pathname;

  return (
    <div className="py-6 text-center">
      <span className="font-bold">{path}</span> is not found !
    </div>
  );
};
