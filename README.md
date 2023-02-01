# Getting started

- This repository uses pnpm (follow the instructions here https://pnpm.io/installation)
- Run `pnpm` in your terminal to install all the dependencies
- Run `pnpm dev` in your terminal to start your dev server

# Task

Create a TicTacToe app like this:

![image](./example.png)

## Requirements

You **must** follow this implementation:

```jsx
export default function Home() {
  const handleChange = (boardState, currentPlayer) => {
    // check if there are other moves available
    // fetch api to check if there is a winner
    // if winner open modal to show who is the winner
    // if no winner but moves available keep going
    // if no winner and no move is available show modal
  };

  return (
    <>
      <main>
        <Gameboard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </Gameboard>
      </main>
    </>
  );
}
```

- No other props are allowed on the Gameboard and BoardBlock components. (Tip: You can use context internally)

- Setup a get-winner endpoint in the api folder to check if someone won or it's a draw.

- Fetch results from the endpoint on every change (Bonus points if you manage to use react query mutations)

- Bonus points if you manage to do some tests

- Explain how to move from SINGLE console player to a multiplayer version (remote)

  In order to create multiplayer version we could use websockets to communicate between players
  we could use a library like socket.io to handle the communication
  and then set the game restriction to only 2 players per game
  so when a player joins a game we could create a room for them (with shareable link)

- Use Tailwind

- Use Typescript

- After deploy

