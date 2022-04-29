import React from react


function Update (){

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
return(
    <div>
        <button value={getYear}>Update</button>
    </div>
)