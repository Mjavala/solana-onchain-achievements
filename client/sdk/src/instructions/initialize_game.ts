import { type Program } from "@coral-xyz/anchor";
import {
  type PublicKey,
  SystemProgram,
  type TransactionInstruction,
} from "@solana/web3.js";
import { type Soar } from "../idl/soar";

export const initializeGameInstruction = async (
  program: Program<Soar>,
  newGameAddress: PublicKey,
  creator: PublicKey,
  title: string,
  description: string,
  genre: string,
  gameType: string,
  nftMeta: PublicKey,
  authorities: PublicKey[]
): Promise<TransactionInstruction> => {
  return program.methods
    .initializeGame(
      { title, description, genre, gameType, nftMeta },
      authorities
    )
    .accounts({
      creator,
      game: newGameAddress,
      systemProgram: SystemProgram.programId,
    })
    .instruction();
};