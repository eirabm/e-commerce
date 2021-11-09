import { useState, useEffect } from 'react';
import styles from './products.module.scss';
import Pagination from '@mui/material/Pagination';
import { useIndividualPokemonQuery } from '@ecm/store';

import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface ProductCardProps {
  currentPokemon: any;
}

export function ProductCard(props: ProductCardProps) {
  const currentPokemon = props.currentPokemon;
  const pokemonId = currentPokemon.url.toString().split('/')[6];
  const { data, isLoading } = useIndividualPokemonQuery(pokemonId);

  if (isLoading) {
    return (
      <div className={styles.pokemonCard} key={pokemonId}>
        <div className={styles.imgContainer}>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pokemonCard} key={pokemonId}>
      <div className={styles.imgContainer}>
        <img src={data?.image} />
      </div>
      <div className={styles.info}>
        <span className={styles.number}> # {pokemonId} </span>
        <h3 className={styles.name}>
          {currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1)}
        </h3>
        <small className={styles.type}></small>
      </div>
    </div>
  );
}

export default ProductCard;
