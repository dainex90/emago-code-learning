

const HeaderText = (props) => {
    return (
        <h1 className='main-header-style'> {props.text} <span style={{fontFamily: 'monospace',color: 'orange'}}>{props.specialText}</span></h1>
    );
}


export default HeaderText;