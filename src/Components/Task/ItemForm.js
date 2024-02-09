import { useEffect, useRef, useState } from "react";
import api from "../../api/invoice-data";

export function ItemForm({ handleTotal, handleAddNewItem, material }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [fieldError, setFieldError] = useState("")
  const itemRef = useRef(null)


  useEffect(() => {
    itemRef.current?.focus()
  }, [material])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item === '') {
      itemRef.current.focus()
      setFieldError("Make sure all fields are have correct input")
      return
    }
    const newMaterial = {
      id: crypto.randomUUID(),
      itemName: item,
      quantity: quantity,
      singlePrice: price,
      fullPrice: price * quantity,
    };

    try {
      const response = await api.post("/list", newMaterial);
      handleAddNewItem(response.data);
      handleTotal(price * quantity);
    } catch (err) {
      console.log("error" + err.message);
    }
    setItem("");
    setQuantity("");
    setPrice("");
    setFieldError('')
  };

  return (
    <div className="w-12/12 bg-white shadow rounded-lg mb-4 p-3">
      <div>
        <h4 className="font-bold">Generate Invoice {fieldError ? <span className="px-3 text-red text-sm font-normal bg-cardLightRed">{fieldError}</span>: null}</h4>
      </div>
      <form className="" action="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="w-6/12 mx-2">
            <div className="">
              <label
                htmlFor="item"
                className="w-full text-xs font-bold text-labelGrey p-1"
              >
                ITEM:
              </label>
            </div>
            <input
              id="item"
              className="focus:outline-none w-full border-2  border-labelGrey py-2 px-2 focus:shadow-lg rounded"
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              ref={itemRef}
            />
          </div>
          <div className="w-2/12 mx-2">
            <div>
              <label
                htmlFor="quantity"
                className="w-full text-xs font-bold text-labelGrey p-1"
              >
                QUANTITY:
              </label>
            </div>
            <input
              id="quantity"
              className="focus:outline-none w-full border-2  border-labelGrey py-2 px-2 focus:shadow-lg rounded"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="w-2/12 mx-2">
            <div>
              <label
                htmlFor="price"
                className="w-full text-xs font-bold text-labelGrey p-1"
              >
                PRICE:
              </label>
            </div>
            <input
              id="price"
              className="focus:outline-none w-full border-2 border-labelGrey py-2 px-2 focus:shadow-lg rounded"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="w-2/12 rounded flex items-end my-0 mx-2">
            <button
              type="submit"
              className="w-full bg-logoBlueThree rounded font-bold text-white text-sm h-[43px] border-2 border-logoBlueThree "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
