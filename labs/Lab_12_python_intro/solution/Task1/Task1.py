file = open('text1.txt')
number = file.read()
n, m  = map(int, number.split())
deskPosition = []

for i in range(n):
    deskPosition.append([0] * m)
deskPosition[0][0] = 1

for i in range(1, n):
    for j in range(1, m):
        if i - 2 >= 0 and j - 1 >= 0:
            deskPosition[i][j] += deskPosition[i - 2][j - 1]
        if i - 1 >= 0 and j - 2 >= 0:
            deskPosition[i][j] += deskPosition[i - 1][j - 2]

output = open('output1.txt', 'w')
output.write(str(deskPosition[n - 1][m - 1]))

