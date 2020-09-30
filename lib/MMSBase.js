const {
    Tools
} = require("./Tools");

class MMSBase {
    /**
     * 基类
     * @param {string[]} list 列表数据
     */
    constructor(list) {
        this.list = list;
    }
    /** 列表数据 */
    list = []
    /**
     * 输出
     * @returns {string} 内容
     */
    output() {
        return this.list[Tools.randomInt(0, this.list.length - 1)];
    }
}

exports.MMSBase = MMSBase;