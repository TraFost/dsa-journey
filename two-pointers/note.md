# Two Pointers Pattern

**Pattern recognition is the absolute superpower of coding interviews.** It is the difference between staring blankly at a screen and immediately knowing how to attack a problem.

When you are reading a LeetCode prompt or listening to an interviewer describe a question, you are listening for specific **clues** or keywords.

Here is exactly how to spot a **Two Pointers** problem in the wild. If you see two or more of these clues in the prompt, alarm bells should go off in your head:

> "Ah! This is Two Pointers!"

---

## 1. The **Sorted** Clue _(The Biggest Red Flag)_

If a problem explicitly tells you the array is sorted (or asks you to sort it first), Two Pointers is almost certainly the intended solution (or Binary Search).

> **Why?** Because the Two Pointers pattern relies on knowing that moving left makes numbers smaller, and moving right makes numbers bigger.

**Keywords to look for:**

- "Given a sorted integer array"
- "non-decreasing order"
- "ascending order"

---

## 2. The **Pair** or **Target** Clue

Whenever a problem asks you to find a combination of elements that meet a specific condition, think Two Pointers.

**Keywords to look for:**

- "Find two numbers"
- "Find a pair"
- "Sum to a specific target"
- "Triplets that add to zero"

> **Logic:** Instead of using a slow loop-inside-a-loop to check every possible combination, you use two pointers to squeeze inward and find the match in a single pass.

---

## 3. The **Opposite Ends** Clue _(Palindromes & Reversing)_

If you need to compare the beginning of a sequence to the end of a sequence, Two Pointers is your go-to tool.

**Keywords to look for:**

- "Is it a valid palindrome"
- "Reverse the string"
- "Reverse the array"

> **Logic:** You put one pointer at index 0 and one at length - 1. You swap their values (or compare them), and then move them both one step toward the middle.

---

## 4. The **In-Place** Clue _(Same-Direction Pointers)_

There is a variation of Two Pointers where both pointers start at index 0 and move in the same direction at different speeds. This is often called the **Fast & Slow Pointers** technique.

**Keywords to look for:**

- "Modify the array in-place"
- "Do not allocate extra space"
- "Remove duplicates"
- "Move all zeros to the end"

> **Logic:** One pointer acts as an "explorer" rushing ahead to find specific values, while the slower pointer acts as the "writer," keeping track of where the next valid item should be placed.
