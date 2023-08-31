import lastDesi from "./lastDesi.png"

function Header() {

    return (
        <div className="">
            <h1 className="hover:font-serif ml-2 text-tDark">Brandon Patterson - Author / Husband / Father</h1>
            <h1 className="hover:font-serif ml-2 text-tYellow">Brandon Patterson - Author / Husband / Father</h1>
            <h1 className="hover:font-serif ml-2 text-tBlue">Brandon Patterson - Author / Husband / Father</h1>
            <h1 className="hover:font-serif ml-2 text-tOlive">Brandon Patterson - Author / Husband / Father</h1>
            {/* <div className="flex"> */}
                <img src={lastDesi} length="400" width="200" className="
                grayscale 
                hover:grayscale-0 
                hue-rotate-60
                saturate-200" />
                <a target="_blank" href="https://www.amazon.com/Client-Brett-Simons-Novel/dp/B0BJY9NLTC">
                    <button className="hover:underline text:md border-2 border-tBlue bg-tDark">
                        Buy Now
                    </button>
                </a>
            {/* </div> */}
        </div>
        
    )
}

export default Header