var destructivelyAppendKitten = name => {
    return kittens.push(name)
}

var destructivelyPrependKitten = name => {
    return kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
    return kittens.pop()
}

var destructivelyRemoveFirstKitten = () => {
    return kittens.shift()
}

var appendKitten = name => {
    return [...kittens, name]
}
