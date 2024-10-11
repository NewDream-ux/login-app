import "./VirtualizedData.css";
import { List } from "react-virtualized";
const VirtualizedData = ({ listData, label, individualListData }) => {
    const width = 700;
    const height = 768;
    const rowHeight = 100;

    const rowRenderer = ({ key, index, style }) => {
        return (
            <div key={key} style={style} className="data-container">
                <img src={listData[index].thumbnailUrl} alt={listData[index].title}  onClick={()=>individualListData(listData[index])}/>
                <div>{listData[index].title}</div>
            </div>
        )
    }
    return (
        <div className="list_container">
            <span>{label}</span>
                <List
                    width={width}
                    height={height}
                    rowHeight={rowHeight}
                    rowRenderer={rowRenderer}
                    rowCount={listData.length}
                    overscanRowCount={3}
                />
        </div>
    )
}

export default VirtualizedData;