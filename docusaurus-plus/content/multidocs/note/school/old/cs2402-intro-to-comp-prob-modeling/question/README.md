# Question

## Star and bar 隔板法

```
x1 + x2 + x3 + x4 = 20
where x1 >= 0, x2 >= 1, x3 >= 2, x4 >= 3
How many integer solution?
```

```
C(20 + ((1 - 0) + (1 - 1) + (1 - 2) + (1 - 3)) - 1, 4 - 1)
= C(20 + (1 + 0 + -1 + -2) - 1, 4 - 1)
= 680
```
