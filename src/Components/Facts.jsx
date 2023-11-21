// Desc: This file contains the facts component listing the major issues with crime in Lynchburg, VA.

function Facts(){
    return(
        <div className="facts-container">
            <h1 className="facts-heading">The Facts</h1>  
            <div className="card">
                <h1>
                    Lynchburg Annual Violent Crimes</h1>
                <h2>332</h2>
            </div>
            <div className="card">
                <h1>Lynchburg Annual Property Crime</h1>
                <h2>1,651</h2>
            </div>
            <div className="card">
                <h1>Lynchburg Crime rate per 1,000 residents</h1>
                <h2>25%</h2>
            </div>
            <div className="card">
                <h1>Odds of Becoming a Victim of Violent Crime in Lynchburg, VA</h1>
                <h2>1 in 238</h2>
            </div>
        </div>
    );
}

export default Facts;