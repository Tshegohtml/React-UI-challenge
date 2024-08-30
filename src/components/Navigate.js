import Image from '../images/logo.svg';
function navigate() {
    return(
        <div className="nav">
            <div className="My-balance">
            <div className='dollar'>
                <h4> My Balance</h4>
                <h1>$ 921.48 </h1>
            </div>
                

                
                <img src={ Image} className="logo"/>
            </div>
            <div className='Box'>
                
            </div>
            <div></div>
        </div>
    )
}

export default navigate