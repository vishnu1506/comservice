interface TabGroup {
    index: number;
    name: string;
}
export interface TabGroupConfig {
    list: TabGroup[];
    tabActive: number;
};