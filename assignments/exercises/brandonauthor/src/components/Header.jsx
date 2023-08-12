import lastDesi from "./lastDesi.png"

function Header() {

    return (
        <div>
            <h1 className="hover:font-serif">Brandon Patterson - Author / Husband / Father</h1>
            <br />
            <img src={lastDesi} length="400" width="200" className="" />
            <h1>
                <a className="hover:underline hover:text-lg text:md" target="_blank" href="https://www.amazon.com/Client-Brett-Simons-Novel/dp/B0BJY9NLTC">
                    Buy Now
                </a>
            </h1>
        </div>
        
    )
}

export default Header