file = open('text3.txt')
SymbolList = file.read()
countSymbol = {}

for symbol in SymbolList:
    if symbol != ' ' and symbol != '\n':
        countSymbol[symbol] = countSymbol.get(symbol, 0) + 1

    sort = sorted(countSymbol.keys())
    max_count = max(countSymbol.values())

    for symbol in sort:
        count = countSymbol[symbol]
        histogram = '#' * count
        histogram += ' ' * (max_count - count)
        print(histogram + ' ' + symbol)


