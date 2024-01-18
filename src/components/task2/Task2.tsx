import React from 'react';
import SearchIcon from '../../assets/icons/search.svg?react';
import { useParams } from 'react-router-dom';
import { titleCase } from 'title-case';
import { useQuery } from '@tanstack/react-query';
import { getCarsByTag } from '@/api/cars';
import { clsx } from 'clsx';

import styles from './Task2.module.scss';

const Task2: React.FC = () => {
  const params = useParams();
  const tag = decodeURIComponent(params.tag ?? '');

  const query = useQuery({
    queryKey: ['cars', tag],
    queryFn: () => getCarsByTag(tag),
    enabled: tag.length > 0,
  });

  return (
    <div className="Task2">
      {tag.length === 0 ? (
        <div className={styles.searchPrompt}>
          <SearchIcon className={styles.searchIcon} />
          <p>Use the search to find vehicles</p>
        </div>
      ) : (
        <div className={query.isLoading ? styles.loading : undefined} aria-live="polite" aria-busy={query.isLoading}>
          <h1 className={clsx(styles.heading, styles.loadingIndicator)}>{titleCase(tag)}</h1>

          <div className={styles.imagesWrapper}>
            {typeof query.data !== 'undefined'
              ? query.data.map((car) => (
                  <div key={car.id} className={styles.imageWrapper}>
                    <img loading="lazy" alt={car.alt_description} className={styles.image} src={`${car.url}.webp`} />
                  </div>
                ))
              : [...Array(6).keys()].map((num) => (
                  <div key={num} className={clsx(styles.imageWrapper, styles.loadingIndicator)}></div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Task2;
