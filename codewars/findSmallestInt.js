class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => a - b)
        return args[0]
    }
}

sif.findSmallestInt([78,56,232,12,8])  //8