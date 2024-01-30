
export function StatsCard( {background, value, text, children} ) {
  return (
    <div className={`${background} w-4/12 ms-3 rounded shadow-md`}>
      <div className="p-3">
        {children}
        <h4>{value}</h4>
        <p className="text-sm font-bold text-sideBarText">{text}</p>
      </div>
    </div>
  );
}
