import React,{ Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shopdata';


class Shop extends Component {
    constructor() {
        super();
        this.state = {
          collection : SHOP_DATA   
        }
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collection.map(collection => <CollectionPreview key={collection.id} {...collection}/>)
                }
            </div>
        )
    }
}

export default Shop;