import lastDesi from "./lastDesi.png"

function Header() {

    return (
        <div className="">
            <h1 className="hover:font-serif ml-2">Brandon Patterson - Author / Husband / Father</h1>
            <img src={lastDesi} length="400" width="200" className="" />
            <a target="_blank" href="https://www.amazon.com/Client-Brett-Simons-Novel/dp/B0BJY9NLTC">
                <button className="hover:underline text:md border-2 border-tBlue bg-tDark">
                    Buy Now
                </button>
            </a>
        </div>
        
    )
}

export default Header