1. Removed standard files from React App.
2. Create a components Square, Board, Game.
3. Add onClick={() => setValue('X') in Square component.
4. Add state [] in Board 
```
const [square, setSquare] = useState(Array(9).fill(null));
```
5. Add fn handleClick in Board
6. Passed down two props from Board to Square: value and onClick
```
const renderSquare = (i) => {
      return <Square 
                value={square[i]} 
                onClick={() => handleClick(i)}
            />;
    }
```
Результат тот же, что в 3 пункте, но теперь parent - Board знает состояние каждой клетки.

7. Add state x in Board, add squares[i] = x ? 'X' : 'O'.

8. Add fn calculateWinner 
Check array squares in fn calculateWinner(squares).
9. Add state - score in Board, add variant result - draw.
10. Transfer state from Board in Game.