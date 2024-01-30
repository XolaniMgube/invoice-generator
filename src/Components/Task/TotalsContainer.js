import TaxAmounts from "./TaxAmounts";
import { RxCross2 } from "react-icons/rx";

export default function TotalsContainer({ total, material, handleCloseTotals }) {
  return (
    <div className="p-3 w-3/12 absolute right-0 top-12 bg-white rounded-lg shadow-lg">
      <div className="flex justify-end">
        <RxCross2 size="25" className="hover:cursor-pointer" onClick={handleCloseTotals} />
      </div>
      <div className="rounded-xl h-full">
        <h4 className="font-bold">Summary</h4>
        <TaxAmounts total={total} material={material} />
      </div>
    </div>
  );
}
