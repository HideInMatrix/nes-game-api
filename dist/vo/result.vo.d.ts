export declare class ResultVO<T> {
    private code;
    private msg;
    private data;
    getCode(): number;
    setCode(value: number): void;
    getMsg(): string;
    setMsg(value: string): void;
    getData(): T | null;
    setData(value: T | null): void;
}
