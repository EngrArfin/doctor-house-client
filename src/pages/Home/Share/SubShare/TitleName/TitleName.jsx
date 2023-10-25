
const TitleName = ({title, subTitle}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-4xl uppercase border-y-4">{title}</h3>
            <p className="text-yellow-600">---{subTitle}---</p>
            
        </div>
    );
};

export default TitleName;