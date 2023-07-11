export default function MonthSelector(props) {

    return (
        <select className="p-4 border-2 outline-none" value={props.selectedMonth} onChange={(e) => props.changeSelectedMonth(e.target.value)}>
            {props.monthList.map((item) => <option key={item.value} value={item.value} className="p-2">{item.content}</option>)}
        </select>
    )
}