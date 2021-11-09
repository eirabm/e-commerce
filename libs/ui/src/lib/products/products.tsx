import { useState, useEffect } from 'react';
import styles from './products.module.scss';
import Pagination from '@mui/material/Pagination';
import { useGetGenerationQuery } from '@ecm/store';
import ProductCard from './productCard';
import { GeneralPokeDataT as GPDT } from '../Types';

/* eslint-disable-next-line */
export interface ProductsProps {
  isGrid: boolean;
  generation: string;
  sort: string;
}

export function Products(props: ProductsProps) {
  const { data, error, isLoading } = useGetGenerationQuery(props.generation);
  const [pokemones, setPokemones] = useState<GPDT[]>([]);
  const [itemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentData, setCurrentData] = useState<GPDT[]>([]);

  useEffect(() => {
    if (data) {
      const fetchedData: GPDT[] = [...data['pokemon_species']];

      setPokemones(
        fetchedData.sort((a: GPDT, b: GPDT) => {
          const pokemonA = a.url.toString().split('/')[6];
          const pokemonB = b.url.toString().split('/')[6];

          if (props.sort === 'none') {
            return +pokemonA - +pokemonB;
          } else if (props.sort === 'az') {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
          } else {
            return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
          }
        })
      );

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentData(pokemones.slice(indexOfFirstItem, indexOfLastItem));
      setTotalPages(Math.ceil(pokemones.length / itemsPerPage));
    }
  }, [currentPage, data, itemsPerPage, pokemones, props.sort]);

  return (
    <div className={styles.productsContainer}>
      <div
        className={[styles.product, props.isGrid ? styles.productGrid : '']
          .filter(Boolean)
          .join(' ')}
      >
        {data &&
          currentData.map((pokemon: GPDT) => (
            <ProductCard currentPokemon={pokemon} />
          ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Products;
