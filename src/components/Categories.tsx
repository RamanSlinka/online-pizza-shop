import React, {FC} from 'react';

type CategoriesPropsType = {
    items: Array<{ id: number, value: string }>
    activeItem: number
    setActiveItem: (id: number) => void
}

const Categories: FC<CategoriesPropsType> = ({items, activeItem, setActiveItem}) => {


    const onSelectItem = (id: number) => {
        setActiveItem(id)
    }
    return (
        <div className="categories">
            <ul>
                {items && items.map(item =>
                    <li key={item.id}
                        className={item.id === activeItem ? "active" : ""}
                        onClick={() => onSelectItem(item.id)}
                    >{item.value}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;