declare function Game_Actor(...args: any[]): void;
declare class Game_Actor {
    constructor(...args: any[]);
    constructor: typeof Game_Actor;
    get level(): any;
    initialize(actorId: any): void;
    initMembers(): void;
    _actorId: any;
    _name: any;
    _nickname: any;
    _classId: any;
    _level: any;
    _characterName: any;
    _characterIndex: any;
    _faceName: any;
    _faceIndex: any;
    _battlerName: any;
    _exp: {};
    _skills: any[];
    _equips: any[];
    _actionInputIndex: number;
    _lastMenuSkill: Game_Item;
    _lastBattleSkill: Game_Item;
    _lastCommandSymbol: any;
    setup(actorId: any): void;
    _profile: any;
    actorId(): any;
    actor(): any;
    name(): any;
    setName(name: any): void;
    nickname(): any;
    setNickname(nickname: any): void;
    profile(): any;
    setProfile(profile: any): void;
    characterName(): any;
    characterIndex(): any;
    faceName(): any;
    faceIndex(): any;
    battlerName(): any;
    clearStates(): void;
    _stateSteps: {};
    eraseState(stateId: any): void;
    resetStateCounts(stateId: any): void;
    initImages(): void;
    expForLevel(level: any): number;
    initExp(): void;
    currentExp(): any;
    currentLevelExp(): number;
    nextLevelExp(): number;
    nextRequiredExp(): number;
    maxLevel(): any;
    isMaxLevel(): boolean;
    initSkills(): void;
    initEquips(equips: any): void;
    equipSlots(): number[];
    equips(): any[];
    weapons(): any[];
    armors(): any[];
    hasWeapon(weapon: any): boolean;
    hasArmor(armor: any): boolean;
    isEquipChangeOk(slotId: any): boolean;
    changeEquip(slotId: any, item: any): void;
    forceChangeEquip(slotId: any, item: any): void;
    tradeItemWithParty(newItem: any, oldItem: any): boolean;
    changeEquipById(etypeId: any, itemId: any): void;
    isEquipped(item: any): boolean;
    discardEquip(item: any): void;
    releaseUnequippableItems(forcing: any): void;
    clearEquipments(): void;
    optimizeEquipments(): void;
    bestEquipItem(slotId: any): any;
    calcEquipItemPerformance(item: any): any;
    isSkillWtypeOk(skill: any): boolean;
    isWtypeEquipped(wtypeId: any): boolean;
    refresh(): void;
    hide(): void;
    isActor(): boolean;
    friendsUnit(): any;
    opponentsUnit(): any;
    index(): any;
    isBattleMember(): any;
    isFormationChangeOk(): boolean;
    currentClass(): any;
    isClass(gameClass: any): boolean;
    skillTypes(): any;
    skills(): any[];
    usableSkills(): any[];
    traitObjects(): any;
    attackElements(): any;
    hasNoWeapons(): boolean;
    bareHandsElementId(): number;
    paramBase(paramId: any): any;
    paramPlus(paramId: any): any;
    attackAnimationId1(): any;
    attackAnimationId2(): any;
    bareHandsAnimationId(): number;
    changeExp(exp: any, show: any): void;
    levelUp(): void;
    levelDown(): void;
    findNewSkills(lastSkills: any): any[];
    displayLevelUp(newSkills: any): void;
    gainExp(exp: any): void;
    finalExpRate(): number;
    benchMembersExpRate(): 1 | 0;
    shouldDisplayLevelUp(): boolean;
    changeLevel(level: any, show: any): void;
    learnSkill(skillId: any): void;
    forgetSkill(skillId: any): void;
    isLearnedSkill(skillId: any): boolean;
    hasSkill(skillId: any): boolean;
    changeClass(classId: any, keepExp: any): void;
    setCharacterImage(characterName: any, characterIndex: any): void;
    setFaceImage(faceName: any, faceIndex: any): void;
    setBattlerImage(battlerName: any): void;
    isSpriteVisible(): any;
    performActionStart(action: any): void;
    performAction(action: any): void;
    performActionEnd(): void;
    performAttack(): void;
    performDamage(): void;
    performEvasion(): void;
    performMagicEvasion(): void;
    performCounter(): void;
    performCollapse(): void;
    performVictory(): void;
    performEscape(): void;
    makeActionList(): Game_Action[];
    makeAutoBattleActions(): void;
    makeConfusionActions(): void;
    makeActions(): void;
    onPlayerWalk(): void;
    updateStateSteps(state: any): void;
    showAddedStates(): void;
    showRemovedStates(): void;
    stepsForTurn(): number;
    turnEndOnMap(): void;
    checkFloorEffect(): void;
    executeFloorDamage(): void;
    basicFloorDamage(): number;
    maxFloorDamage(): any;
    performMapDamage(): void;
    clearActions(): void;
    inputtingAction(): any;
    selectNextCommand(): boolean;
    selectPreviousCommand(): boolean;
    lastSkill(): any;
    lastMenuSkill(): any;
    setLastMenuSkill(skill: any): void;
    lastBattleSkill(): any;
    setLastBattleSkill(skill: any): void;
    lastCommandSymbol(): any;
    setLastCommandSymbol(symbol: any): void;
    testEscape(item: any): any;
    meetsUsableItemConditions(item: any): any;
    onEscapeFailure(): void;
}
