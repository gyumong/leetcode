/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    let count = 0;


    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) return;
        if (grid[r][c] === '0') return;

        const key = `${r},${c}`;
        if (visited.has(key)) return;
        visited.add(key);

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
                count += 1
                dfs(r, c)
            }
        }
    }
    return count
};