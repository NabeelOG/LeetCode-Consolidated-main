function countValidPartitions(itemCategories: string, k: number): number {
    const n = itemCategories.length;
    const aCode = "a".charCodeAt(0);
    const prefixSeen = new Array(26).fill(false);
    const suffixFreq = new Array(26).fill(0);
    let shared = 0;
    let result = 0;

    // Fill suffix frequency map
    for (let i = 0; i < n; i++) {
        const idx = itemCategories.charCodeAt(i) - aCode;
        suffixFreq[idx]++;
    }

    for (let i = 0; i < n - 1; i++) {
        const idx = itemCategories.charCodeAt(i) - aCode;

        suffixFreq[idx]--;

        if (!prefixSeen[idx]) {
            prefixSeen[idx] = true;
            if (suffixFreq[idx] > 0) shared++;
        } else if (suffixFreq[idx] === 0) {
            shared--;
        }

        if (shared >= k) {
            result++;
        }
    }

    return result;
}

console.log(countValidPartitions('acbca',2))

// acbca length:5

// a cbca
// ac bca
// acb ca
// acbc a

// a:1, b:0, c:0

// prefixseen={a:true,b:true,c:true}

// shared = 1