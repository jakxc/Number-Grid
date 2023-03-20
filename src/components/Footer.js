function Footer(props) {
    return (
        <div className="footer">
            <button onClick={props.handleAddClick}>Plus</button>
            <button onClick={props.handleMinusClick}>Minus</button>
        </div>
    )
}

export default Footer;