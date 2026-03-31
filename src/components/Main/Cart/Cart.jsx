import { toast } from "react-toastify";

const Cart = ({ cart, carts, setCarts }) => {
    // console.log(cart);
    const { id, name, icon, price } = cart;

    const handelRemoveBtn = () => {
        toast.info(`${name} removed`);
        setCarts(carts.filter((item) => item.id !== id));
        // console.log(filterdCart);
    };
    return (
        <div>
            <li className="list-row text-color shadow flex justify-between items-center p-5 bg-[#f9fafc] rounded-2xl">
                <div className="flex items-center gap-5">
                    <div className="rounded-full py-3 px-3 bg-white">
                        <img src={icon} />
                    </div>
                    <div>
                        <div className="text-xl font-semibold mb-2">{name}</div>
                        <div className=" text-[#627382]">${price}</div>
                    </div>
                </div>

                <button
                    onClick={handelRemoveBtn}
                    className="btn btn-outline btn-error font-bold border-none"
                >
                    Remove
                </button>
            </li>
        </div>
    );
};

export default Cart;
