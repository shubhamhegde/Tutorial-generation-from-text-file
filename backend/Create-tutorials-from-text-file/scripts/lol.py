from random import randint
tid=''
choice=[1,0]
for i in range(4):
    x=randint(0,1)
    if choice[x]==1:
        tid+=chr(randint(65,91))
    else:
        tid+=str(randint(0,9))
print(tid)