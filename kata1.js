var arcs =
    [
        { start: 'a', end: 'b' },
        { start: 'b', end: 'c' },
        { start: 'c', end: 'a' },
        { start: 'c', end: 'd' },
        { start: 'e', end: 'a' }
    ];

function solve_graph(start, end, arcs) {
    console.log(start, end, arcs);
    var found = false;
    for (var i = 0; i < arcs.length; i++) {
        if (arcs[i].start != start) continue;
        if (start == end || arcs[i].end == end) return true;
        else if (i + 1 >= arcs.length) break;
        else if (arcs[i].end == arcs[i + 1].start && arcs[i].end != start) {
            if (arcs[i + 1].end == end) { found = true; return found; }
            else { continue; }
        } if (arcs[i].end == start) continue; else {
            found = false;
            return found;
        };
    }
    return found;
}
console.log(solve_graph('a', 'd', arcs));

