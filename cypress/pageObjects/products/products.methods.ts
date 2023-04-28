import { ProductElements } from "./products.elements";

export class ProductMethods{
    addItemToBasket(item: string){
        ProductElements.ElementsProduct.getBtnSearch().click();
        ProductElements.ElementsProduct.getTxtSearch().type(item);
        ProductElements.ElementsProduct.getTxtSearch().type('{enter}');
        ProductElements.ElementsProduct.getBtnAddToBasket().click();
    }
    verifyItemAddedToBasket(numAdded: string){
        ProductElements.ElementsProduct.getLblNotification().should('have.text', numAdded)
    }
    deleteItemFromBasket(){
        ProductElements.ElementsProduct.getBtnBasket().click();
        ProductElements.ElementsProduct.getBtnDeleteFromBasket().click();
    }
    verifyEmptyBasket(){
        ProductElements.ElementsProduct.getTxtBasket().should('have.text', 'Total Price: 0¤');
    }
}