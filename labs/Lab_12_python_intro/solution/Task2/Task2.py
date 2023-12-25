file = open('text2.txt')
n = int(file.readline())
Sub = file.readline().split()
X = list(map(int, Sub))
medians = []

for i in range(n):
    sequence = X[:i + 1]
    sequence.sort()

    if (i + 1) % 2 != 0:
        medianSeq = sequence[(i + 1) // 2]
    else:
        medianSeq = sequence[i // 2]
    medians.append(medianSeq)
medianSum = sum(medians)

output = open('output.txt', 'w')
output.write(str(medianSum))


