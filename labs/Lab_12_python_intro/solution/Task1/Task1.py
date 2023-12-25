file = open('text1.txt')
number = file.read()
N, M = map(int, number.split())
a = []

for i in range(N):
    a.append([0] * M)
a[0][0] = 1
for i in range(1, N):
    for j in range(1, M):
        if i - 2 >= 0 and j - 1 >= 0:
            a[i][j] += a[i - 2][j - 1]
        if i - 1 >= 0 and j - 2 >= 0:
            a[i][j] += a[i - 1][j - 2]
output = open('output1.txt', 'w')
output.write(str(a[N - 1][M - 1]))

