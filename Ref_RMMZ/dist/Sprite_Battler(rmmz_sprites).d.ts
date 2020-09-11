declare function Sprite_Battler(...args: any[]): void;
declare class Sprite_Battler {
    constructor(...args: any[]);
    constructor: typeof Sprite_Battler;
    initialize(battler: any): void;
    initMembers(): void;
    _battler: any;
    _damages: any[];
    _homeX: any;
    _homeY: any;
    _offsetX: any;
    _offsetY: any;
    _targetOffsetX: any;
    _targetOffsetY: any;
    _movementDuration: any;
    _selectionEffectCount: number;
    setBattler(battler: any): void;
    checkBattler(battler: any): boolean;
    mainSprite(): Sprite_Battler;
    setHome(x: any, y: any): void;
    update(): void;
    bitmap: any;
    updateVisibility(): void;
    visible: boolean;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    x: any;
    y: any;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupDamagePopup(): void;
    createDamageSprite(): void;
    destroyDamageSprite(sprite: any): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: any, y: any, duration: any): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    isMoving(): boolean;
    inHomePosition(): boolean;
    onMouseEnter(): void;
    onPress(): void;
    onClick(): void;
}
