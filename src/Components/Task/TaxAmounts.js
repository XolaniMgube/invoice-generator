import { motion } from "framer-motion"
export default function TaxAmounts({ total, material }) {
  const fullTotal = material.reduce((acc, mat) => acc + mat.fullPrice, 0);
  const tax = fullTotal * (14 / 100);

  return (
    <div className="tax-amounts"
    >
      <div>
        <div className="">
          <div>
            <label
              htmlFor="contingency"
              className="text-labelGrey text-xs font-bold"
            >
              CONTINGENCY:
            </label>
          </div>
          <div>
            <input
              id="contingency"
              type="text"
              className="border-2 border-labelGrey p-2 w-full rounded"
            />
          </div>
        </div>
        <div className="my-2">
          <div>
            <label
              htmlFor="text-percentage"
              className="text-labelGrey text-xs font-bold"
            >
              TAX PERCENTAGE:
            </label>
          </div>
          <div>
            <input
              id="text-percentage"
              type="text"
              className="border-2 border-labelGrey p-2 w-full rounded"
            />
          </div>
        </div>
      </div>
      <div className="my-3">
        <div className="bg-materialHeader flex p-2 items-center my-1">
          <p className="w-1/2 m-0 text-xs font-bold text-labelGrey">BEFORE TAX: </p>
          <p className="w-1/2 m-0 font-bold">R{fullTotal.toFixed(2)}</p>
        </div>

        <div className="bg-materialHeader flex p-2 items-center my-1">
            <p className="w-1/2 m-0 text-xs font-bold text-labelGrey">TAX AMOUNT: </p>
            <p className="w-1/2 m-0 font-bold">R{tax.toFixed(2)}</p>
        </div>
        <div className="bg-materialHeader flex p-2 items-center my-1">
          <p className="w-1/2 m-0 text-xs font-bold text-labelGrey">GRAND TOTAL: </p>
          <p className="w-1/2 m-0 font-bold">R{(tax + fullTotal).toFixed(2)}</p>
        </div>
        
        
      </div>
    </div>
  );
}
