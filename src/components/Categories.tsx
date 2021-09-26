import React, {FC, useState} from 'react';

type CategoriesPropsType = {
    items: string[]
    onClick: () => void
}

const Categories: FC<CategoriesPropsType> = ({items, onClick}) => {

    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index: number) => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li>Все</li>
                {items.map((name: string, index) =>
                    <li className={activeItem === index ? "active" : ''}
                        onClick={() => onSelectItem(index)}
                        key={index}>{name}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;