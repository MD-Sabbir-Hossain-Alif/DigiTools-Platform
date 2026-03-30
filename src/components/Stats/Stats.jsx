const Stats = () => {
    return (
        <section className="max-w-400 mx-auto w-full linear-bg">
            <div className=" max-w-300 mx-auto sm:w-full flex justify-evenly items-center  text-white text-center py-8 sm:py-15">
                <div className="">
                    <h3 className=" text-2xl sm:text-6xl font-extrabold">
                        50K
                    </h3>
                    <p className="text-xs sm:text-2xl text-gray-200 font-medium">
                        Active Users
                    </p>
                </div>
                <hr className="border w-10 sm:w-20 rotate-90 border-gray-400" />
                <div className="">
                    <h3 className=" text-2xl sm:text-6xl font-extrabold">
                        200+
                    </h3>
                    <p className="text-xs sm:text-2xl text-gray-200 font-medium">
                        Premium Tools
                    </p>
                </div>
                <hr className="border w-10 sm:w-20 rotate-90 border-gray-400" />
                <div className="">
                    <h3 className=" text-2xl sm:text-6xl font-extrabold">
                        4.9
                    </h3>
                    <p className="text-xs sm:text-2xl text-gray-200 font-medium">
                        Rating
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
