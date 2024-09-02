export const joinStyles = (initialObj: object, overrideVals: object) => {
    const empty = {};
    Object.assign(empty, {...initialObj, ...overrideVals})
    //console.log(empty)
    return empty
}