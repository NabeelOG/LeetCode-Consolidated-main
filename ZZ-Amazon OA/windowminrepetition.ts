function calculateMinRepetition(purchaseHistory,minRepetition) {
    const n = purchaseHistory.length
    let result = 0

    for(let i = 0;i<n;i++) {
        const freq = {}
        for(let j = i;j<n;j++) {
            const index = purchaseHistory.charCodeAt(j)-97
            freq[index]++

            if(freq[index]>=minRepetition) {
                result = result + (n - j)
                break;
            }
        }
    }
    return result
}

calculateMinRepetition('cecca',4)