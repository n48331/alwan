import Link from "next/link";

const PrimaryBtn = ({ children, url, type }: any) => {
    let typeClass = "";
    if (type == "light") {
        typeClass = "bg-secondary text-primary button-type-2";
        
    } else {
        typeClass = "bg-primary text-white button-type-1";
    }
    return (
        <Link href={url || '#'}>
            
        <div
            className={`button  rounded-full px-6 py-3 outline-none focus:ring-4 focus:ring-green-300 shadow-lg transform active:scale-y-75 transition-transform flex ` + typeClass}
        >

            {children}
        </div>
        </Link>
    );
};

export default PrimaryBtn;