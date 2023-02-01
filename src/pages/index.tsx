import GameBoard from "@/components/GameBoard";
import BoardBlock from "@/components/BoardBlock";

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
        <GameBoard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </GameBoard>
      </main>
    </>
  );
}

