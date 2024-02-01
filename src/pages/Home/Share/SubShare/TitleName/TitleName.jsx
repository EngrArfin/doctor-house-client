
const TitleName = ({title, subTitle}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-15">
            <h3 class="text-3xl font-semibold text-blue-900">{title}</h3>
        <p class="text-gray-700">{subTitle}</p>
            
        </div>
        
    );
};

export default TitleName;