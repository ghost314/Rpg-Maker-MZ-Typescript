declare function Scene_Shop(...args: any[]): void;
declare class Scene_Shop {
    constructor(...args: any[]);
    constructor: typeof Scene_Shop;
    initialize(): void;
    prepare(goods: any, purchaseOnly: any): void;
    _goods: any;
    _purchaseOnly: any;
    _item: any;
    create(): void;
    createGoldWindow(): void;
    _goldWindow: Window_Gold;
    goldWindowRect(): Rectangle;
    createCommandWindow(): void;
    _commandWindow: Window_ShopCommand;
    commandWindowRect(): Rectangle;
    createDummyWindow(): void;
    _dummyWindow: Window_Base;
    dummyWindowRect(): Rectangle;
    createNumberWindow(): void;
    _numberWindow: Window_ShopNumber;
    numberWindowRect(): Rectangle;
    createStatusWindow(): void;
    _statusWindow: Window_ShopStatus;
    statusWindowRect(): Rectangle;
    createBuyWindow(): void;
    _buyWindow: Window_ShopBuy;
    buyWindowRect(): Rectangle;
    createCategoryWindow(): void;
    _categoryWindow: Window_ItemCategory;
    categoryWindowRect(): Rectangle;
    createSellWindow(): void;
    _sellWindow: Window_ShopSell;
    sellWindowRect(): Rectangle;
    statusWidth(): number;
    activateBuyWindow(): void;
    activateSellWindow(): void;
    commandBuy(): void;
    commandSell(): void;
    onBuyOk(): void;
    onBuyCancel(): void;
    onCategoryOk(): void;
    onCategoryCancel(): void;
    onSellOk(): void;
    onSellCancel(): void;
    onNumberOk(): void;
    onNumberCancel(): void;
    doBuy(number: any): void;
    doSell(number: any): void;
    endNumberInput(): void;
    maxBuy(): number;
    maxSell(): any;
    money(): any;
    currencyUnit(): any;
    buyingPrice(): any;
    sellingPrice(): number;
}
