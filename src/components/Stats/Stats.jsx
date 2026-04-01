const Stats = () => {
    return (
        <section className="linear-bg">
            <div className=" max-w-308 mx-auto w-full px-4 flex justify-evenly items-center  text-white text-center py-8 md:py-12 lg:py-15">
                <div className="">
                    <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold">
                        50K
                    </h3>
                    <p className="text-xs md:text-lg lg-text-2xl text-gray-200 font-medium">
                        Active Users
                    </p>
                </div>
                <hr className="border w-10 sm:w-20 rotate-90 border-gray-400" />
                <div className="">
                    <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold">
                        200+
                    </h3>
                    <p className="text-xs md:text-lg lg-text-2xl text-gray-200 font-medium">
                        Premium Tools
                    </p>
                </div>
                <hr className="border w-10 sm:w-20 rotate-90 border-gray-400" />
                <div className="">
                    <h3 className="text-2xl md:text-4xl lg:text-6xl font-extrabold">
                        4.9
                    </h3>
                    <p className="text-xs md:text-lg lg-text-2xl text-gray-200 font-medium">
                        Rating
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
