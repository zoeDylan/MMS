/** 工具 */
exports.Tools = new class {
    /**
     * 获取范围内随机值(整数)
     * @param {number} min 最小值
     * @param {?number} max 最大值
     * @returns {number} 随机数字
     * @description 如果不传最大值，将获取 0 到指定的随机整数
     * 
     * @example
     * ```
     * randomInt(0,5); // 0|1|2|3|4|5
     * randomInt(-1,5); // -1|0|1|2|3|4|5
     * ```
     */
    randomInt(min, max) {
        if (typeof max === 'undefined') {
            max = min;
            min = 0;
        }
        // 大小处理
        ;
        [min, max] = min > max ? [max, min] : [min, max];
        return Math.floor(this.randomFloat(min, max + 1));
    }

    /**
     * 获取范围内随机值（小数）
     * @param {number} min 最小值
     * @param {?number} max 最大值
     * @returns {number} 随机数字
     * @example
     * ```
     * randomFloat(0,5); // 0 - 5小数
     * randomFloat(-1,5); // -1 - 5小数
     * ```
     */
    randomFloat(min, max) {
        if (typeof max === 'undefined') {
            max = min;
            min = 0;
        }
        // 大小处理
        ;
        [min, max] = min > max ? [max, min] : [min, max];
        return min + Math.random() * (max - min);
    }
}