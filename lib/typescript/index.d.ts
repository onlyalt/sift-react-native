declare type SiftReactNativeType = {
    setSiftConfig(accountId: string, beaconKey: string, disallowCollectingLocationData: boolean, serverUrlFormat: string): void;
    setUserId(userId: string): void;
    unsetUserId(): void;
    upload(): void;
};
declare const _default: SiftReactNativeType;
export default _default;
