import { GameQuery } from "../App";
import { useData } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}

export const useGames = (gameQuery: GameQuery) => {
  const { genre, platform } = gameQuery;

  return useData<Game>({
    endpoint: "/games",
    requestConfig: {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
      },
    },
    deps: [gameQuery],
  });
};
