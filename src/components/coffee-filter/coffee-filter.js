
import '../seach-panel/search-panel.scss';

const CoffeeFilter = (props) => {
    const buttonsData = [
        {country: 'brasil', label: 'Brasil'},
        {country: 'kenya', label: 'Kenya'},
        {country: 'columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({country, label}) => {
        const active = props.filter === country;
        const clazz = active ? 'btn-active' : 'btn-filter';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={country}
                    onClick={() => props.onFilterSelect(country)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}
export default CoffeeFilter;
