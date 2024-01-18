import Header from '../header/Header';
import Task2 from '../task2/Task2';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { RouterProvider } from 'react-aria-components';

import styles from './App.module.scss';

/*
 * Available endpoints
 * http://localhost:8000/api/tags - to return all tags in
 * http://localhost:8000/api/tags?tag=fe - to return matching tags
 * http://localhost:8000/api/cars - to return all cars
 * http://localhost:8000/api/cars?tag=ferrari - to return matching cars
 */

const queryClient = new QueryClient();

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Task2 />} />
            <Route path="/cars/:tag" element={<Task2 />} />
          </Routes>
        </main>
      </QueryClientProvider>
    </RouterProvider>
  );
};

export default App;
