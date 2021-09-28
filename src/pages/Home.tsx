import React, {FC, useState} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";

type itemType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}

type HomePropsType = {
    items: Array<itemType>
}

const Home: FC <HomePropsType> = ({items}) => {

    const [activeItem, setActiveItem] = useState(1)

    const itemsCategories =[
        {id: 1, value:'Все' },
        {id: 2, value:'Мясные' },
        {id: 3, value:'Вегетарианская' },
        {id: 4, value:'Гриль' },
        {id: 5, value:'Острые' },
        {id: 6, value:'Закрытые' },
    ]
    console.log(items)
    return (

            <div className="container">
                <div className="content__top">

                    <Categories
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        items={itemsCategories}
                    />

                    <SortPopup
                        itemsSort = {['популярности', 'цене', 'алфавиту']}
                    />


                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items.map((item: any) =>
                        <PizzaBlock
                        key={item.id}
                        {...item}
                        />
                    )}



                </div>
            </div>


    )};

export default Home;