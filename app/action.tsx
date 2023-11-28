"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import axios from "axios"

export const fetchAnime = async (page: number) => {
    const { data } = await axios.get(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
    ));
}