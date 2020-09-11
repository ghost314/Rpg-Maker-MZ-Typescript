declare function Game_CharacterBase(...args: any[]): void;
declare class Game_CharacterBase {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _x: any;
    _y: any;
    _realX: any;
    _realY: any;
    _moveSpeed: any;
    _moveFrequency: any;
    _opacity: any;
    _blendMode: any;
    _direction: any;
    _pattern: any;
    _priorityType: any;
    _tileId: any;
    _characterName: any;
    _characterIndex: any;
    _isObjectCharacter: any;
    _walkAnime: any;
    _stepAnime: any;
    _directionFix: any;
    _through: any;
    _transparent: any;
    _bushDepth: number;
    _animationId: number;
    _balloonId: number;
    _animationPlaying: boolean;
    _balloonPlaying: boolean;
    _animationCount: number;
    _stopCount: number;
    _jumpCount: number;
    _jumpPeak: number;
    _movementSuccess: any;
    pos(x: any, y: any): boolean;
    posNt(x: any, y: any): boolean;
    moveSpeed(): any;
    setMoveSpeed(moveSpeed: any): void;
    moveFrequency(): any;
    setMoveFrequency(moveFrequency: any): void;
    opacity(): any;
    setOpacity(opacity: any): void;
    blendMode(): any;
    setBlendMode(blendMode: any): void;
    isNormalPriority(): boolean;
    setPriorityType(priorityType: any): void;
    isMoving(): boolean;
    isJumping(): boolean;
    jumpHeight(): number;
    isStopping(): boolean;
    checkStop(threshold: any): boolean;
    resetStopCount(): void;
    realMoveSpeed(): any;
    distancePerFrame(): number;
    isDashing(): boolean;
    isDebugThrough(): boolean;
    straighten(): void;
    reverseDir(d: any): number;
    canPass(x: any, y: any, d: any): boolean;
    canPassDiagonally(x: any, y: any, horz: any, vert: any): boolean;
    isMapPassable(x: any, y: any, d: any): any;
    isCollidedWithCharacters(x: any, y: any): any;
    isCollidedWithEvents(x: any, y: any): any;
    isCollidedWithVehicles(x: any, y: any): any;
    setPosition(x: any, y: any): void;
    copyPosition(character: any): void;
    locate(x: any, y: any): void;
    direction(): any;
    setDirection(d: any): void;
    isTile(): boolean;
    isObjectCharacter(): any;
    shiftY(): 0 | 6;
    scrolledX(): any;
    scrolledY(): any;
    screenX(): number;
    screenY(): number;
    screenZ(): number;
    isNearTheScreen(): boolean;
    update(): void;
    updateStop(): void;
    updateJump(): void;
    updateMove(): void;
    updateAnimation(): void;
    animationWait(): number;
    updateAnimationCount(): void;
    updatePattern(): void;
    maxPattern(): number;
    pattern(): any;
    setPattern(pattern: any): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    refreshBushDepth(): void;
    isOnLadder(): any;
    isOnBush(): any;
    terrainTag(): any;
    regionId(): any;
    increaseSteps(): void;
    tileId(): any;
    characterName(): any;
    characterIndex(): any;
    setImage(characterName: any, characterIndex: any): void;
    setTileImage(tileId: any): void;
    checkEventTriggerTouchFront(d: any): void;
    checkEventTriggerTouch(): boolean;
    isMovementSucceeded(): any;
    setMovementSuccess(success: any): void;
    moveStraight(d: any): void;
    moveDiagonally(horz: any, vert: any): void;
    jump(xPlus: any, yPlus: any): void;
    hasWalkAnime(): any;
    setWalkAnime(walkAnime: any): void;
    hasStepAnime(): any;
    setStepAnime(stepAnime: any): void;
    isDirectionFixed(): any;
    setDirectionFix(directionFix: any): void;
    isThrough(): any;
    setThrough(through: any): void;
    isTransparent(): any;
    bushDepth(): number;
    setTransparent(transparent: any): void;
    startAnimation(): void;
    startBalloon(): void;
    isAnimationPlaying(): boolean;
    isBalloonPlaying(): boolean;
    endAnimation(): void;
    endBalloon(): void;
}
