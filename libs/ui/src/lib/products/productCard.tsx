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
  const [currentPokemonData, setCurrentPokemonData] = useState<any>(null);
  const { data, error, isLoading } = useIndividualPokemonQuery(
    currentPokemon.url.toString().split('/')[6]
  );

  useEffect(() => {
    if (data) {
      setCurrentPokemonData(data);
    }
  }, [data]);

  console.log(currentPokemonData);

  return (
    <div className={styles.pokemonCard} key={currentPokemon.num}>
      <div className={styles.info}>
        <h3 className={styles.name}>
          {currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1)}{' '}
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;
