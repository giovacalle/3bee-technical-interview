import GameBoard from "@/components/GameBoard";
import BoardBlock from "@/components/BoardBlock";
import { IBoardGamePlayer, IBoardGameState } from "@/types/boardGame";
import { useBoard } from "@/stores/BoardContext";
import { BOARD_SIZE } from "@/data/boardGame";
import { useMutation } from "react-query";
import { API_URL } from "@/env";
import Modal from "@/components/Modal";
import { useState } from "react";
import { IModalProps } from "@/types/modal";

export default function Home() {
  const [modal, setModal] = useState<IModalProps | undefined>();
  const { movesCount, setPlayer } = useBoard();

  const checkWinner = useMutation({
    mutationFn: ({
      board,
      player
    }: {
      board: IBoardGameState[][];
      player: IBoardGamePlayer;
    }) => {
      return fetch(`${API_URL}/get-winner`, {
        mode: "no-cors",
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
      const { winner } = data;

      setPlayer((prev) => (prev === "X" ? "O" : "X"));

      if (!winner) {
        if (movesCount === Math.pow(BOARD_SIZE, 2) - 1) {
          setModal({
            title: "Draw",
            text: `Game is a draw`,
            onClose: () => setModal(undefined)
          });
        }
        return;
      }

      // modal winner
      setModal({
        title: "Winner",
        text: `The winner is ${winner}`,
        onClose: () => setModal(undefined)
      });
    },
    onError: (error) => {
      setModal({
        title: "Error",
        text: `Something went wrong`,
        onClose: () => setModal(undefined)
      });
    }
  });

  const handleChange = (
    boardState: IBoardGameState[][],
    currentPlayer: IBoardGamePlayer
  ) => {
    // check if there are other moves available
    // fetch api to check if there is a winner
    // if winner open modal to show who is the winner
    // if no winner but moves available keep going
    // if no winner and no move is available show modal
    checkWinner.mutate({ board: boardState, player: currentPlayer });
  };

  return (
    <>
      {modal && <Modal {...modal} />}
      <main>
        <GameBoard onChange={handleChange}>
          {(i) => <BoardBlock index={i} />}
        </GameBoard>
      </main>
    </>
  );
}

