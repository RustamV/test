import React, { Component } from 'react';

import Catfood from "./Catfood";

import "../styles/Products.scss";

class Products extends Component {
    render() {
        return (
            <div className="products">
                <div className="products__container">
                    <div className="products__header">
                        <h2>Ты сегодня покормил кота?</h2>
                    </div>
                    <div className="products__content">
                        <div className="products__column">
                            <Catfood    addition="с фуа-гра" 
                                        weight="0,5"
                                        portion="10"
                                        portionText="порций"
                                        phrase="Печень утки разварная с артишоками."
                                        mouseCount="1"
                                        mouseText="мышь в подарок"
                                        disabled={false}
                                        additionalText=""
                            />
                        </div>
                        <div className="products__column">
                            <Catfood    addition="с рыбой" 
                                        weight="2"
                                        portion="40"
                                        portionText="порций"
                                        phrase="Головы щучьи с чесноком да свежайшая сёмгушка."
                                        mouseCount="2"
                                        mouseText="мыши в подарок"
                                        disabled={false}
                                        additionalText=""
                            />
                        </div>
                        <div className="products__column">
                            <Catfood    addition="с курой" 
                                        weight="5" 
                                        portion="100"
                                        portionText="порций"
                                        phrase="Филе из цыплят с трюфелями в бульоне."
                                        mouseCount="5"
                                        mouseText="мышей в подарок"
                                        disabled={true}
                                        additionalText="заказчик доволен"
                            />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Products;
