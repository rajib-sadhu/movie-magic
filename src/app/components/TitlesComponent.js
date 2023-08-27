

const TitlesComponent = ({title, subtitle}) => {
    return (
        <div className="border-b-4 border-[#1C8D73] pb-3 inline-block mb-20" >
            <p className="text-[#206354] font-semibold md:text-xl" >{subtitle}</p>
            <h2 className="md:text-5xl text-2xl font-bold" >{title}</h2>
        </div>
    );
};

export default TitlesComponent;