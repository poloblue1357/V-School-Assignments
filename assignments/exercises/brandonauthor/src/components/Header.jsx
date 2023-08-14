import lastDesi from "./lastDesi.png"

function Header() {

    return (
        <div className="flex justify-center align-center">
            <h1 className="hover:font-serif ml-2 flex justify-center align-center">Brandon Patterson - Author / Husband / Father</h1>
            <img src={lastDesi} length="400" width="200" className="flex justify-center align-center" />
            <a target="_blank" href="https://www.amazon.com/Client-Brett-Simons-Novel/dp/B0BJY9NLTC">
                <button className="hover:underline text:md border-2 bg-tDark justify-center">
                    Buy Now
                </button>
            </a>
        </div>
        
    )
}

export default Header