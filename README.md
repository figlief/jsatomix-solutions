# jsatomix-solutions

This package provides solutions for jsatomix levels that have been submitted to various websites over a period of many years.

Currently (April 2016) the website is running at:
 
> https://figlief.pythonanywhere.com/ 

a csv file containing all the solutions submitted to that site can be found at:

> https://figlief.pythonanywhere.com/backup.csv

Both the raw csv file and a list object containig each solution in the form of an of a Solution object.

## Solution object.

a Solution object has the following properties.
* uid - a unique identifier for this solution,
* date - the date the solution was submitted,
* levelSet - which levelset the level came from
* level - which level in the levelSet
* user - the name the user used to claim credit for the solution,
* history - the actual solution

The history is a string consisting of letters a-z. It represents a list of moves that will solve the puzzle.

Each move is represented by a group of four letters.  The first two letters represent the current position of an atom the second pair of letters represent the new position of the atom.

rows are labeled from 'a' (top row) to 'z'

cols are labeled from 'a' (left column) to 'z'

So "bcbe"  means move the atom on the second row and third column to the fith column of the second row.

 
