function Footer(props) {
    return (
        <div className="footer">
            <button className="btn" onClick={props.handleAddClick}>+</button>
            <button className="btn" onClick={props.handleMinusClick}>-</button>
        </div>
    )
}

export default Footer;