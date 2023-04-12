const heads = ["Langs", "Frontend", "Tools"]
const activeBg = "bg-gradient-to-r from-[#e71d36] to-[#011627]"



export default function Skills(){
    return(
        <div className="flex justify-center w-[30%]">
            <div className="flex justify-between w-full">
                {
                    heads.map(h =>(
                        <>
                            <span className="cursor-pointer px-8 rounded-2xl py-1"> {h} </span>
                        </>
                        ))
                }
            </div>
        </div>
    )
}