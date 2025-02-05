"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VOUtils = void 0;
const result_vo_1 = require("../vo/result.vo");
class VOUtils {
    static success(data) {
        const resultVo = new result_vo_1.ResultVO();
        resultVo.setCode(0);
        resultVo.setMsg('接口调用成功');
        resultVo.setData(data || null);
        return resultVo;
    }
    static error(code, msg) {
        const resultVo = new result_vo_1.ResultVO();
        resultVo.setCode(code);
        resultVo.setMsg(msg);
        return resultVo;
    }
}
exports.VOUtils = VOUtils;
//# sourceMappingURL=voUtils.js.map