/**
 * 获取当前时间段
 * @returns {string} 时间
 */
export const getTimeState = () => {
  // 获取当前小时
  const hours = new Date().getHours()
  // 设置默认文字
  let text = ''
  // 判断当前时间段
  if (hours >= 0 && hours <= 6) {
    text = '凌晨'
  } else if (hours > 6 && hours <= 10) {
    text = '早上'
  } else if (hours > 10 && hours <= 12) {
    text = '中午'
  } else if (hours > 12 && hours <= 18) {
    text = '下午'
  } else if (hours > 18 && hours <= 24) {
    text = '晚上'
  }
  return text
}
/**
 * 缓冲函数
 * @param {Number} position 当前滚动位置
 * @param {Number} destination 目标位置
 * @param {Number} rate 缓动率
 * @param {Function} callback 缓动结束回调函数 两个参数分别是当前位置和是否结束
 */
export const easeOut = function (position, destination = 0, rate = 2, callback) {
  if (position === destination || typeof destination !== 'number') {
    return false
  }

  // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17)
    }
  }

  const step = function () {
    position = position + (destination - position) / rate
    if (Math.abs(destination - position) < 1) {
      callback(destination, true)
      return
    }
    callback(position, false)
    requestAnimationFrame(step)
  }
  step()
}
