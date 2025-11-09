import { Component } from "react";
import { Container, FilterInput, FilterLabel, FilterCheckbox } from "./Filter.styled";

class Filter extends Component {
    doneFilter = (e) => {
        const checked = e.target.checked;
        if (this.props.onOnlyDoneChange) {
            this.props.onOnlyDoneChange(checked);
        }
    }

    nameFilter = (e) => {
        const value = e.target.value;
        if (this.props.onFilterChange) {
            this.props.onFilterChange(value);
        }
    }

    render() {
        const { value = '', onlyDone = false } = this.props;

        return (
                <Container>
                    <FilterInput
                        type="text"
                        placeholder="Фільтр завдань"
                        value={value}
                        onChange={this.nameFilter}
                    />
                    <FilterLabel>
                        <FilterCheckbox type="checkbox" checked={onlyDone} onChange={this.doneFilter} />
                        Тільки виконані
                    </FilterLabel>
                </Container>
        );
    }
}

export default Filter;