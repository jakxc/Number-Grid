function Grid(props) {
    const gridElements = props.array.map(item => {
        return <div key={item} className="grid-item" onClick={() => props.handleClick(item) }>{item}</div>
    })

    return (
        <div className="grid-container">
            {gridElements}
        </div>
    )
}

export default Grid