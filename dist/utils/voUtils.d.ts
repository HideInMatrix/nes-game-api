import { ResultVO } from '@/vo/result.vo';
export declare class VOUtils {
    static success<T>(data?: T): ResultVO<T>;
    static error(code: number, msg: string): ResultVO<null>;
}
