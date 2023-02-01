import { checkWinner } from "@/utils/boardGame";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get board state and currentPlayer
  // If no winner return 404
  // IF winner return 200 body {winner: "X"}

  const { board, currentPlayer } = req.body;

  if (!board || !currentPlayer) {
    return res.status(404).json({ message: "No winner" });
  }

  const winner = checkWinner(board, currentPlayer);

  if (!winner) {
    return res.status(404).json({ message: "No winner" });
  }

  res.status(200).json({ winner });
}

