declare function Window_Selectable(...args: any[]): void;
declare class Window_Selectable {
    constructor(...args: any[]);
    constructor: typeof Window_Selectable;
    initialize(rect: any): void;
    _index: any;
    _cursorFixed: any;
    _cursorAll: any;
    _helpWindow: any;
    _handlers: {};
    _doubleTouch: boolean;
    _canRepeat: boolean;
    index(): any;
    cursorFixed(): any;
    setCursorFixed(cursorFixed: any): void;
    cursorAll(): any;
    setCursorAll(cursorAll: any): void;
    maxCols(): number;
    maxItems(): number;
    colSpacing(): number;
    rowSpacing(): number;
    itemWidth(): number;
    itemHeight(): any;
    contentsHeight(): any;
    maxRows(): number;
    overallHeight(): number;
    activate(): void;
    deactivate(): void;
    select(index: any): void;
    forceSelect(index: any): void;
    smoothSelect(index: any): void;
    deselect(): void;
    reselect(): void;
    cursorVisible: boolean;
    row(): number;
    topRow(): number;
    maxTopRow(): number;
    setTopRow(row: any): void;
    maxPageRows(): number;
    maxPageItems(): number;
    maxVisibleItems(): number;
    isHorizontal(): boolean;
    topIndex(): number;
    itemRect(index: any): Rectangle;
    itemRectWithPadding(index: any): Rectangle;
    itemLineRect(index: any): Rectangle;
    setHelpWindow(helpWindow: any): void;
    showHelpWindow(): void;
    hideHelpWindow(): void;
    setHandler(symbol: any, method: any): void;
    isHandled(symbol: any): boolean;
    callHandler(symbol: any): void;
    isOpenAndActive(): any;
    isCursorMovable(): boolean;
    cursorDown(wrap: any): void;
    cursorUp(wrap: any): void;
    cursorRight(wrap: any): void;
    cursorLeft(wrap: any): void;
    cursorPagedown(): void;
    cursorPageup(): void;
    isScrollEnabled(): any;
    update(): void;
    processCursorMove(): void;
    processHandling(): void;
    processTouch(): void;
    isHoverEnabled(): boolean;
    onTouchSelect(trigger: any): void;
    onTouchOk(): void;
    onTouchCancel(): void;
    hitIndex(): number;
    hitTest(x: any, y: any): number;
    isTouchOkEnabled(): any;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    isOkTriggered(): boolean;
    isCancelTriggered(): boolean;
    processOk(): void;
    callOkHandler(): void;
    processCancel(): void;
    callCancelHandler(): void;
    processPageup(): void;
    processPagedown(): void;
    updateInputData(): void;
    ensureCursorVisible(smooth: any): void;
    callUpdateHelp(): void;
    updateHelp(): void;
    setHelpWindowItem(item: any): void;
    isCurrentItemEnabled(): boolean;
    drawAllItems(): void;
    drawItem(): void;
    clearItem(index: any): void;
    drawItemBackground(index: any): void;
    drawBackgroundRect(rect: any): void;
    redrawItem(index: any): void;
    redrawCurrentItem(): void;
    refresh(): void;
    paint(): void;
    refreshCursor(): void;
    refreshCursorForAll(): void;
}
