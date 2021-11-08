import { useState, useEffect } from 'react';
import styles from './products.module.scss';
import Pagination from '@mui/material/Pagination';
import { useGetGenerationQuery } from '@ecm/store';
import ProductCard from './productCard';

/* eslint-disable-next-line */
export interface ProductsProps {
  isGrid: boolean;
  generation: string;
}

export function Products(props: ProductsProps) {
  const { data, error, isLoading } = useGetGenerationQuery(props.generation);
  const [pokemones, setPokemones] = useState([]);
  const [itemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (data) {
      setPokemones(data['pokemon_species']);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentData(pokemones.slice(indexOfFirstItem, indexOfLastItem));
      setTotalPages(Math.ceil(pokemones.length / itemsPerPage));
    }
  }, [currentPage, data, itemsPerPage, pokemones]);

  return (
    <div className={styles.productsContainer}>
      <div
        className={[styles.product, props.isGrid ? styles.productGrid : '']
          .filter(Boolean)
          .join(' ')}
      >
        {data &&
          currentData.map((pokemon: any) => (
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
