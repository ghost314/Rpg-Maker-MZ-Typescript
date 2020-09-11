declare function Sprite_Animation(...args: any[]): void;
declare class Sprite_Animation {
    constructor(...args: any[]);
    constructor: typeof Sprite_Animation;
    initialize(): void;
    initMembers(): void;
    _targets: any;
    _animation: any;
    _mirror: any;
    _delay: any;
    _previous: any;
    _effect: any;
    _handle: any;
    _playing: boolean;
    _started: boolean;
    _frameIndex: number;
    _maxTimingFrames: any;
    _flashColor: any;
    _flashDuration: any;
    _viewportSize: number;
    _originalViewport: any;
    z: number;
    destroy(options: any): void;
    setup(targets: any, animation: any, mirror: any, delay: any, previous: any): void;
    update(): void;
    canStart(): boolean;
    shouldWaitForPrevious(): boolean;
    updateEffectGeometry(): void;
    updateMain(): void;
    processSoundTimings(): void;
    processFlashTimings(): void;
    checkEnd(): void;
    updateFlash(): void;
    isPlaying(): boolean;
    setRotation(x: any, y: any, z: any): void;
    _render(renderer: any): void;
    setProjectionMatrix(renderer: any): void;
    setCameraMatrix(): void;
    setViewport(renderer: any): void;
    targetPosition(renderer: any): Point;
    targetSpritePosition(sprite: any): any;
    saveViewport(renderer: any): void;
    resetViewport(renderer: any): void;
    onBeforeRender(renderer: any): void;
    onAfterRender(renderer: any): void;
}
