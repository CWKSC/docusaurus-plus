# Separable 可分離, Homogeneous 齊次, Exact 恰當 Equation

## Content 內容:

- Separable Equation 可分離方程式 / 分離變數法

- Homogeneous Equations 齊次方程式

- Exact Equations 恰當方程式

## Order and Degree 階與次

Order 階是指 $\frac{dy}{dx}$ 的最高階數， $\frac{dy}{dx}$ 是一階， $\frac{d^2y}{dx^2}$ 是二階

Degree 次是指 $\frac{dy}{dx}$ 最高的冪數， $\frac{dy}{dx}$ 是一次， $\frac{dy}{dx}^2$ 是二次

## Solution form 解答形式

依型態可分為：

- Expilcit Solution 顯解

- Implicit Solution 隱解

依意義可分為：

- General Solution 通解

- Particular Solution 特解

- Singular Solution 奇異解

## Separable Equation 可分離方程式 / 分離變數法

把變數分離到方程的兩邊

$$
F(x, y, y') = 0
$$

$$
\begin{align}

g(y) dy &= f(x) dx \\
\int g(y)dy &= \int f(x)dx 

\end{align}
$$

### 例題 1：

$$
\begin{align} 

x \frac{dy}{dx} &= 5y \\
x dy &= 5 y dx \\
\frac{1}{y} dy &= \frac{5}{x} dx \\
\int \frac{dy}{y} &= 5 \int \frac{dx}{x} \\
ln y &= 5 ln x + C \\
y &= Cx^5

\end{align}
$$

### 例題 2：

$$
\begin{align} 
y' &= ay \\
\frac{dy}{y} &= a dx \\
ln y &= ax + C \\
y &= Ce^{ax}
\end{align}
$$

### 例題 3：

$$
\begin{align} 
y' + ay + b &= 0 \text{, where } a \not= 0 \\
dy &= -(ay + b) dx \\
\frac{dy}{y + \frac{b}{a}} &= -a dx \\
ln(y + \frac{b}{a}) &= -a x + C \\
y &= Ce^{-ax} - \frac{b}{a}
\end{align}
$$

## Homogeneous Equations 齊次方程式

若 $f(\lambda x, \lambda y) = \lambda^m f(x, y)$ ，則稱 $f(x, y)$ 為 $m$ 次齊次

若一階微分方程式可以以下形式表示：

$$
M(x, y) dx + N(x, y) dy = 0
$$

當中 $M(x, y)$ $N(x, y)$ 為同次齊次，則稱為 Homogeneous Differential Equaltions 齊次微分方程式

### 例題 1:

Prove $f(x, y) = x^3 + 10 x^2 y + 3xy^2 + y^3$ is homogeneous of degree 3 三次齊次函數

$$
\begin{align} 
&f(\lambda x, \lambda y) \\
&= (\lambda x)^3 + 10(\lambda x)^2(\lambda y) + 3 (\lambda x) (\lambda y)^2 + (\lambda y)^3 \\
&= \lambda^3 x^3 + 10 \lambda^3 x^2 y + 3 \lambda^3 x y^2 + \lambda^3 y^3 \\
&= \lambda^3 f(x, y)
\end{align}
$$

若果微分方程不能以 可分離方程式 / 分離變數法 求解

但本身為齊次微分方程式，即 $M(x, y) dx + N(x, y) dy = 0$

這種形式的方程可經過代換成為可分離，做法如下：

$dx$ 前面的函數 $M(x, y)$ 較簡單， $\text{Let } x = vy, dx = v dy + y dv$ 

$dy$ 前面的函數 $N(x, y)$ 較簡單， $\text{Let } y = ux, dy = u dx + x du$ 

### 例題 2:

求解 $y dx = (2x + y) dy$

$$
\text{Let }x = vy, dx = vdy + y dv, v = \frac{x}{y}
$$

$$
\begin{align}
y(vdy + y dv) &= (2vy + y) dy \\
vdy + ydv &= (2v+1) dy \\
y dv &= (v + 1) dy \\
\frac{dv}{v + 1} &= \frac{dy}{y} \\
ln(v + 1) &= ln y + C\\
v + 1 &= Cy\\
\frac{x}{y} + 1 &= Cy\\
y + x &= C y^2
\end{align}
$$

## Exact Equations 恰當方程式

對於 $M(x, y) dx + N(x, y) dy = 0$ 

若 $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ ，稱為 Exact 恰當

則存在 Potential Function 位勢函數 $F(x, y)$，當中：

$$
\partial F = \frac{\partial F}{\partial x} dx + \frac{\partial F}{\partial y} dy
$$

$$
\begin{align} 
\frac{\partial F}{\partial x} &= M & \frac{\partial F}{\partial y} &= N \\
F &= \int M dx + k(y) & F &= \int N dy + k(x)  \\
\frac{\partial F}{\partial y} &= \frac{\partial}{\partial y} [\int M dx + k(y)] & \frac{\partial F}{\partial x} &= \frac{\partial}{\partial x} [\int N dy + k(x)] \\
N &= \frac{\partial}{\partial y}[ \int M dx + k(y)] & M &= \frac{\partial}{\partial x}[ \int N dy + k(x)]
\end{align}
$$

而 $F = C$ 是微分方程式的解

### 例題 1:

解 $xy' + y + 4 = 0$ 

改寫為 $M(x, y) dx + N(x, y) dy = 0$ 的形式

$$
\begin{align}
(y + 4) dx + x dy &= 0 \\
M(x, y) &= y + 4 \\
N(x, y) &= x
\end{align}
$$

$$
\text{Since } \frac{\partial M}{\partial y} = 1 = \frac{\partial N}{\partial x}, \text{It is exact} 
$$

Method 1 (Use $M(x, y)$ first, then $N(x, y)$ ):

$$
\begin{align}
F(x, y) &= \int M(x, y) dx + k(y) \\
&= \int (y + 4) dx + k(y) \\
&= x (y + 4) + k(y)\\
\text{Since } \frac{\partial F}{\partial y} &= N \\
\frac{\partial }{\partial y} [x(y + 4) + k(y)] &= x\\
x + k'(y) &= x \\
k'(y) &= 0 \\
k(y) &= C \\
F(x, y) &= x(y + 4) + C\\
\text{Solution is } F(x, y) &= C \\
x(y + 4) &= C 
\end{align}
$$

Method 2 (Use $N(x, y)$ first, then $M(x, y)$ ):

$$
\begin{align}
F(x, y) &= \int N(x, y) dy + k(x) \\
&= \int x dy + k(x) \\
&= x y + k(x)\\
\text{Since } \frac{\partial F}{\partial x} &= M \\
\frac{\partial }{\partial x} [x y + k(x)] &= y + 4\\
y + k'(x) &= y + 4 \\
k'(x) &= 4 \\
k(x) &= 4x + C \\
F(x, y) &= xy + 4x + C\\
\text{Solution is } F(x, y) &= C \\
xy + 4x &= C \\
x(y + 4) &= C 
\end{align}
$$

有另一個比較方便的公式

$$
\int^{x}_{a} M(x, y) dx + \int^{y}_{b} N(a, y) dy = C
$$

注意是 $N(a, y)$ 而不是 $N(x, y)$ 

以下公式推導：

$$
\begin{align}
F(x, y) &= \int^{x}_{a} M(x, y) dx + k(y) \\
\frac{\partial F}{\partial y} &= \frac{\partial}{\partial y} [ \int^{x}_{a} M(x, y) dx ] + k'(y) \\
\frac{\partial F}{\partial y} &= N \\
N(x, y) &= \int^{x}_{a} \frac{\partial M(x, y)}{\partial y} dx + k'(y) \\
\frac{\partial M}{\partial y} &= \frac{\partial N}{\partial x} \\
N(x, y) &= \int^{x}_{a} \frac{\partial N(x, y)}{\partial x} dx + k'(y) \\
N(x, y) &= N(x, y) - N(a, y) + k'(y) \\
k'(y) &= N(a, y) \\
k(y) &= \int^y_b N(a, y) dy
\end{align}
$$

$$
\begin{align}
F(x, y) &= \int^{x}_{a} M(x, y) dx + k(y) \\
&= \int^{x}_{a} M(x, y) dx + \int^y_b N(a, y) dy
\end{align}
$$

### 例題 2:

解 $(2x^3+3y)dx+(3x+y-1)dy=0$ 

$$
\frac{\partial M}{\partial y} = 3 = \frac{\partial N}{\partial x}, \text{It is exact}
$$

$$
\begin{align}
\int^{x}_{a} M(x, y) dx + \int^{y}_{b} N(a, y) dy &= C \\
\int^{x}_{a} (2x^3 + 3y) dx + \int^{y}_{b} (3a + y - 1) dy &= C \\
\left[  \frac{1}{2} x^4 + 3xy \right]^x_a + \left[ 3ay + \frac{1}{2}y^2 - y \right]^y_b &= C \\
[\frac{1}{2} x^4 + 3xy - \frac{1}{2}a^4 - 3ay] \ + \ &  \\
 [3ay + \frac{1}{2} y^2 - y - 3ab - \frac{1}{2} b^2 + b] &= C \\
\frac{1}{2} x^4 + 3xy + \frac{1}{2} y^2 - y &= C \\
x^4 + 6xy + y^2 - 2y &= C 
\end{align}
$$

### 例題 3:

解上面做過的 $xy' + y + 4 = 0$ 

$$
(y + 4) dx + x dy = 0
$$

$$
\frac{\partial M}{\partial y} = 1 = \frac{\partial N}{\partial x}, \text{It is exact}
$$

$$
\begin{align}
\int^x_a (y + 4) dx + \int^y_b a dy &= C \\
\left[ x(y+4) \right]^x_a + \left[ ay \right]^y_b &= C \\
x(y+4) &= C
\end{align}
$$

