import GameBoard from "@/components/GameBoard";
import BoardBlock from "@/components/BoardBlock";
import { IBoardGamePlayer, IBoardGameState } from "@/types/boardGame";
import { useBoard } from "@/stores/BoardContext";
import { BOARD_SIZE } from "@/data/boardGame";
import { useMutation } from "react-query";
import { API_URL } from "@/env";

export default function Home() {
  const { movesCount } = useBoard();

  const checkWinner = useMutation({
    mutationFn: ({
      board,
      player
    }: {
      board: IBoardGameState[][];
      player: IBoardGamePlayer;
    }) => {
      return fetch(`${API_URL}/checkWinner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          board,
          player
        })
      }).then((res) => res.json());
    },
    onSuccess: (data) => {
      console.log(data);
    }
  });

  const handleChange = (
    boardState: IBoardGameState[][],
    currentPlayer: IBoardGamePlayer
  ) => {
    // check if there are other moves available
    if (movesCount === Math.pow(BOARD_SIZE, 2) - 1) {
      // show modal
      return;
    }

    checkWinner.mutate({ board: boardState, player: currentPlayer });
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

