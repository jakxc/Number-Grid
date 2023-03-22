function Grid(props) {
    const gridElements = props.array.map(item => {
        return <div key={item} className="grid-item" onClick={() => props.handleClick(item) }>{item}</div>
    })

    return (
        <div className="content-container">
            <div className="grid-container">
                {gridElements}
            </div>
        </div>
    )
}

export default Grid