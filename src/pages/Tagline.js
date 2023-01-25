

const Tagline = (props) => {

    return (
        <>
            {props.isLoggedIn ? <h1 id='tagline-logged-in' style={{display: 'block'}}> New ways to <span style={{fontFamily: 'monospace',color: 'orange'}}>code.</span></h1> : 
            <h1 id='tagline-home'> Teaching new ways to <span style={{fontFamily: 'monospace',color: 'orange'}}>code.</span></h1>}
        </>
    );   
}


export default Tagline;

            
