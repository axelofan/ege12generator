/**
 * Функция создания случайного числа из промежутка
 *
 * @param {Number} min начальное значение
 * @param {Number} max конечное значение
 * @returns {Number} случайное число из промежутка [min; max]
 */
function randint(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

/**
 * Функция создания случайного IP адреса
 *
 * @returns {Array<Number>} случайный IP адрес в виде 4 целых чисел из диапазона 0..255
 */
function generateIp() {
    const result=[]
    for(let i=0;i<4;i++) result.push(randint(10,223))
    return result
}

/**
 * Функция создания маски сети по количеству единиц в ней
 *
 * @param {Number} count1 количество единиц в маске сети
 * @returns {Array<Number>} маска сети в виде 4 целых чисел из диапазона 0..255
 */
function generateMask(count1) {
    const result=[]
    const byte = [0, 128, 192, 224, 240, 248, 252, 254, 255]
    for(let i=0;i<4;i++) {
        if (count1>8) result.push(byte[8]); else result.push(byte[count1])
        count1 = (count1>=8) ? count1-=8 : 0
    }
    return result
}

/**
 * Функция создания случайного адреса сети, подходящего под предложенную маску
 *
 * @param {Array<Number>} mask маска сети в виде 4 целых числа из диапазона 0..255
 * @returns {Array<Number>} случайный адрес сети в виде 4 целых чисел из диапазона 0..255
 */
function generateNet(mask) {
    let result=[]
    let ip = generateIp()
    for(let i=0;i<4;i++) result.push(ip[i] & mask[i])
    return result
}

/**
 * Функция создания случайного IP адреса, находящегося в данной сети
 *
 * @param {Array<Number>} net адрес сети в виде 4 целых числа из диапазона 0..255
 * @param {Array<Number>} mask маска сети в виде 4 целых числа из диапазона 0..255
 * @returns {Array<Number>} случайный IP адрес в виде 4 целых чисел из диапазона 0..255
 */
function getRandomIp(net, mask) {
    const result=[]
    for(let i=0; i<4; i++) {
        if (mask[i]===255) result.push(net[i])
        else result.push(net[i]+randint(1,255-mask[i]-1))
    }
    return result
}


const mask = generateMask( randint(17,23) )
const net = generateNet(mask)
const ip = getRandomIp(net, mask)

let maskCount=0
let minCount = 33
let maxCount = -1

for(let i=0; i<=32; i++) {
    let tempMask = generateMask(i)
    if (tempMask.every((_el,j)=>(ip[j] & tempMask[j]) === net[j])) {
        maskCount++
        if(i<minCount) minCount = i
        if(i>maxCount) maxCount = i 
    }
}


export default {mask, net, ip, maskCount, minCount, maxCount, minMask : generateMask(minCount), maxMask: generateMask(maxCount)}