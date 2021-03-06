# CSCI 310: Advanced Javascript - Project 2

## DESCRIPTION OF ASSIGNMENT
- Create an account on Kattis, if you do not already have one using your real name and make sure your affiliation is set to Colorado Mesa University
- Create a project folder called kattis and sub-folders with problem id as names for each problems
- Pick and solve problems with varying difficulty levels to receive the corresponding grade
- Solutions must be accepted (with green check box) by the Kattis online judge to receive a grade. You can re-submit solutions to a problem many times. However, you must strive to get your solutions accepted in as few submissions as possible - preferably on the first attempt
- Solutions must be fomulated in a way that can be tested by writing automated test cases. Test thoroughly with corner test cases that check for esp. the extremes (max, min) input cases. Purpose of testing is to find input/cases/situations where your code/function/solution may fail under the given constraints!
---
<br>

## Problem 1 - Sanic
### Problem ID: sanic
### Difficulty: 2.3

---

### Instructions

Sanic Hegehog likes to go fast. While Sanic can run, he especially enjoys curling himself up into a ball and rolling really fast downhill through loops. Sanic tries and fails to count the number of rotations he makes while spinning through a loop: spinning so fast makes him dizzy and confused. You, Sanic’s faithful sidekick, try to help with the counting but it’s futile – all you see is a blue blur of movement when Sanic rolls around a loop so fast. Perhaps you can write a program to calculate the number of rotations instead?

To simplify things, we measure the world in terms of Sanic radii. While spinning through a loop, Sanic can be accurately modeled as a circle of radius 1. Furthermore, the inside of the loops Sanic spins through can be modeled as circles with radius <i>r</i> (measured in Sanic radii). We also know that <i>r</i> will always be at least 1.10

as Sanic does not attempt to spin through smaller loops. Sanic spins clockwise and he follows the loop counter-clockwise, as illustrated in the diagram.

You need to compute <i>x</i>, the number of revolutions it takes for Sanic to make exactly one complete lap in the loop. Sanic does not slip - he always has perfect contact with the inside of the loop. The loops are rigid and do not move at all. Remember to go fast and compute the answer quickly!

### Input

The input contains a single line with one decimal number <i>r</i>: the radius of the loop relative to the radius of Sanic. The number <i>r</i> is given in decimal form with exactly two digits and satisfying 1.10 ≤ <i>r</i> ≤ 1000.00.

### Output

Print <i>x</i>, as specified above, with a relative or absolute error of at most 10<sup>−6</sup>.

---
<br>

## Problem 2 - Math Homework
### Problem ID: mathhomework
### Difficulty: 2.0

---

### Instructions

Since entering 2<sup>nd</sup> grade Theta has daily math homework sheets. The problems on her worksheet usually go like this:

<i>There is a certain number of birds, dogs, and cats on a farm. Together they have 14 legs. How many birds, dogs, and cats could there be? Write down as many answers as you can! </i>

It is always the same problem, just written in different ways: sometimes with horses, cows, sheep, goats, chickens, beetles, or even spiders – but never with snakes or fishes!

Can you write a program to double-check Theta’s answers?

### Input

Input consists of a single line with 4
integers: <i>b</i>, <i>d</i>, <i>c</i>, and <i>l</i>, with <i>b</i>, <i>d</i>, and <i>c</i> representing the numbers of legs the first, second, and third type of animal has. You are given that 0 < <i>b</i>,<i>c</i>,<i>d</i> ≤ 100 because some farm animals in these math problems may be centipedes. The total number of legs is given by <i>l</i> (0≤ <i>l</i> ≤ 250).

### Output

Output all possible answers, each on a separate line, in lexicographical order so that they are sorted by the number of the first animal, ties broken by the second and third animal numbers’, respectively. Separate the number of the first, second, and third animal with spaces. If there are no possible solutions, output `impossible` on a single line!

<br>

---

<br>

## Self grading
Given the project requirements I would give myself a 100%. I did two Kattis problems, both above difficulty 1.7. I created 3 automated test cases using Jest and provided screenshots of the program passing the tests. I also followed the instructions for the diliverables and submissions.