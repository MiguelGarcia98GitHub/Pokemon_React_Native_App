import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { URL_API_BASE } from "../config/config";
import { calcCurrentPageValues } from "../helpers/calcCurrentPageValue";

export const usePokemonStore = create(
  devtools((set) => ({
    dataOf20Pokemons: [],
    currentPage: 1,
    errorMessage: "",
    initialFetchOf20Pokemons: async () => {
      const arrayOfURLsToFetch = [];
      for (let i = 1; i < 21; i++) {
        arrayOfURLsToFetch.push(`${URL_API_BASE}/pokemon/${i}`);
      }
      const promises = arrayOfURLsToFetch.map((url) => fetch(url));
      Promise.all(promises)
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((data) => {
          set((state) => ({
            ...state,
            dataOf20Pokemons: data,
          }));
        })
        .catch((_error) => {
          set((state) => ({
            ...state,
            errorMessage:
              "There was an error trying to fetch the list of Pokemons",
          }));
        });
    },
    fetchOf20Pokemons: async (page, value) => {
      const { initialNum, finalNum } = calcCurrentPageValues(page + value);
      console.log(initialNum, finalNum);

      console.log();
      const arrayOfURLsToFetch = [];
      for (let i = initialNum; i < finalNum; i++) {
        arrayOfURLsToFetch.push(`${URL_API_BASE}/pokemon/${i}`);
      }
      const promises = arrayOfURLsToFetch.map((url) => fetch(url));
      Promise.all(promises)
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((data) => {
          set((state) => ({
            ...state,
            currentPage: page + value,
            dataOf20Pokemons: data,
          }));
        })
        .catch((_error) => {
          set((state) => ({
            ...state,
            errorMessage:
              "There was an error trying to fetch the list of Pokemons",
          }));
        });
    },

    // fetchInitialList20Pokemons: async () => {
    //   const arrayOfURLsToFetch = [];

    //     //   for (let i = 1; i < 21; i++) {
    //     //     arrayOfURLsToFetch.push(`${URL_API_BASE}/pokemon/${i}`);
    //     //   }

    //     //   const promises = arrayOfURLsToFetch.map((url) => fetch(url));
    //     //   Promise.all(promises)
    //     //     .then((responses) =>
    //     //       Promise.all(responses.map((response) => response.json()))
    //     //     )
    //     //     .then((data) => {
    //     //       set((state) => ({
    //     //         ...state,

    //     //         dataOf20Pokemons: data,
    //     //       }));
    //     //     })
    //     //     .catch((_error) => {
    //     //       set((state) => ({
    //     //         ...state,
    //     //         errorMessage:
    //     //           "There was an error trying to fetch the list of Pokemons",
    //     //       }));
    //     //     });
    //     // },
    //     // fetchNext20Pokemons: async (initialNumber, finalNumber) => {
    //     //   const arrayOfURLsToFetch = [];

    //     //   for (let i = initialNumber; i < finalNumber; i++) {
    //     //     arrayOfURLsToFetch.push(`${URL_API_BASE}/pokemon/${i}`);
    //     //   }

    //     //   const promises = arrayOfURLsToFetch.map((url) => fetch(url));
    //     //   Promise.all(promises)
    //     //     .then((responses) =>
    //     //       Promise.all(responses.map((response) => response.json()))
    //     //     )
    //     //     .then((data) => {
    //     //       this.initialListNumber += 20;
    //     //       this.finalListNumber += 20;
    //     //       set((state) => ({
    //     //         ...state,
    //     //         initialListNumber: (initialNumber += 20),
    //     //         finalListNumber: (finalNumber += 20),
    //     //         dataOf20Pokemons: data,
    //     //       }));
    //     //     })
    //     //     .catch((_error) => {
    //     //       set((state) => ({
    //     //         ...state,
    //     //         errorMessage:
    //     //           "There was an error trying to fetch the list of Pokemons",
    //     //       }));
    //     //     });
    //     // },
    //     // fetchPrev20Pokemons: async (initialNumber, finalNumber) => {
    //     //   const arrayOfURLsToFetch = [];

    //     //   for (let i = initialNumber; i < finalNumber; i++) {
    //     //     arrayOfURLsToFetch.push(`${URL_API_BASE}/pokemon/${i}`);
    //     //   }

    //     //   const promises = arrayOfURLsToFetch.map((url) => fetch(url));
    //     //   Promise.all(promises)
    //     //     .then((responses) =>
    //     //       Promise.all(responses.map((response) => response.json()))
    //     //     )
    //     //     .then((data) => {
    //     //       set((state) => ({
    //     //         ...state,
    //     //         initialListNumber: (initialNumber += 20),
    //     //         finalListNumber: (finalNumber += 20),
    //     //         dataOf20Pokemons: data,
    //     //       }));
    //     //     })
    //     //     .catch((_error) => {
    //     //       set((state) => ({
    //     //         ...state,
    //     //         errorMessage:
    //     //           "There was an error trying to fetch the list of Pokemons",
    //     //       }));
    //     //     });
    //     // },
  }))
);
