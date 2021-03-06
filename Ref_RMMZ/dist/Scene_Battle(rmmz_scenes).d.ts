declare function Scene_Battle(...args: any[]): void;
declare class Scene_Battle {
    constructor(...args: any[]);
    constructor: typeof Scene_Battle;
    initialize(): void;
    create(): void;
    start(): void;
    update(): void;
    updateVisibility(): void;
    updateBattleProcess(): void;
    isTimeActive(): boolean;
    isAnyInputWindowActive(): any;
    changeInputWindow(): void;
    stop(): void;
    terminate(): void;
    shouldAutosave(): boolean;
    needsSlowFadeOut(): boolean;
    updateLogWindowVisibility(): void;
    updateStatusWindowVisibility(): void;
    shouldOpenStatusWindow(): boolean;
    updateStatusWindowPosition(): void;
    statusWindowX(): any;
    updateInputWindowVisibility(): void;
    needsInputWindowChange(): boolean;
    updateCancelButton(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    _spriteset: Spriteset_Battle;
    createAllWindows(): void;
    createLogWindow(): void;
    _logWindow: Window_BattleLog;
    logWindowRect(): Rectangle;
    createStatusWindow(): void;
    _statusWindow: Window_BattleStatus;
    statusWindowRect(): Rectangle;
    createPartyCommandWindow(): void;
    _partyCommandWindow: Window_PartyCommand;
    partyCommandWindowRect(): Rectangle;
    createActorCommandWindow(): void;
    _actorCommandWindow: Window_ActorCommand;
    actorCommandWindowRect(): Rectangle;
    createHelpWindow(): void;
    _helpWindow: Window_Help;
    helpWindowRect(): Rectangle;
    createSkillWindow(): void;
    _skillWindow: Window_BattleSkill;
    skillWindowRect(): Rectangle;
    createItemWindow(): void;
    _itemWindow: Window_BattleItem;
    itemWindowRect(): Rectangle;
    createActorWindow(): void;
    _actorWindow: Window_BattleActor;
    actorWindowRect(): Rectangle;
    createEnemyWindow(): void;
    _enemyWindow: Window_BattleEnemy;
    enemyWindowRect(): Rectangle;
    helpAreaTop(): number;
    helpAreaBottom(): any;
    helpAreaHeight(): any;
    buttonAreaTop(): any;
    windowAreaHeight(): any;
    createButtons(): void;
    createCancelButton(): void;
    _cancelButton: Sprite_Button;
    closeCommandWindows(): void;
    hideSubInputWindows(): void;
    startPartyCommandSelection(): void;
    commandFight(): void;
    commandEscape(): void;
    startActorCommandSelection(): void;
    commandAttack(): void;
    commandSkill(): void;
    commandGuard(): void;
    commandItem(): void;
    commandCancel(): void;
    selectNextCommand(): void;
    selectPreviousCommand(): void;
    startActorSelection(): void;
    onActorOk(): void;
    onActorCancel(): void;
    startEnemySelection(): void;
    onEnemyOk(): void;
    onEnemyCancel(): void;
    onSkillOk(): void;
    onSkillCancel(): void;
    onItemOk(): void;
    onItemCancel(): void;
    onSelectAction(): void;
    endCommandSelection(): void;
}
