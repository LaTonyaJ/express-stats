const {verifyArray, findMean, findMode, findMedian} = require('./helpers');

test('to Numbers', () => {
    
    let nums = verifyArray([1,'foo',3]);
    expect(nums).toBeInstanceOf(Error)
})

test('findMean', () => {
    expect(findMean([1,3,5,7])).toEqual(4)
    expect(findMean([2,4,6])).toEqual(4)
    expect(findMean([-1,3,5,7])).toEqual(3.5)

})

test('findMedian', () => {
    expect(findMedian([1,3,5,7])).toEqual(4)
    expect(findMedian([2,4,6])).toEqual(4)
    expect(findMedian([-1,3,5,7])).toEqual(4)

})

test('findMode', () => {
    expect(findMode([1,3,5,7,5])).toEqual(5)
    expect(findMode([2,4,6])).toEqual(2)
    expect(findMode([1,3,-5,7,7])).toEqual(7)

})
