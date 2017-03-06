function keepOrder(ary, val) {
    for (var index = 0; index < ary.length; index++) {
        if (ary[index] > val) break;
    }
    return index - 1 < 0 ? 0 ? index - 1;
}