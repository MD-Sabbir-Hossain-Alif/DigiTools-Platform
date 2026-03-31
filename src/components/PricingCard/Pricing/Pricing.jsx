import { IoCheckmarkOutline } from "react-icons/io5";

const Pricing = ({ pricing }) => {
    const { name, description, price, tag, features, cta } = pricing;
    // console.log(prices);

    return (
        <>
            <div
                className={`card bg-base-100 shadow-sm border border-gray-200 rounded-2xl ${tag ? "linear-bg text-white" : "text-color"}`}
            >
                <div className="card-body relative text-left">
                    {tag && (
                        <span className="absolute -top-2 right-1/2 translate-x-1/2 badge badge-sm border-none font-medium badge-warning py-2 px-3 bg-amber-200">
                            {tag}
                        </span>
                    )}
                    <h2 className="text-xl lg:text-2xl font-bold mt-4">
                        {name}
                    </h2>
                    <p
                        className={`${tag ? "linear-bg text-white" : "text-[#627382]"}`}
                    >
                        {description}
                    </p>
                    <p>
                        <span className="text-4xl font-bold">{price}</span>
                        <span
                            className={`${tag ? "text-white" : "text-[#627382]"}`}
                        >
                            /Month
                        </span>
                    </p>
                    <ul className="mt-2 flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <IoCheckmarkOutline className="text-green-500 text-lg" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-2 bg-white rounded-full">
                        <button
                            className={`btn btn-block ${tag ? "linear-text" : "linear-btn"} rounded-full text-white`}
                        >
                            {cta}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
