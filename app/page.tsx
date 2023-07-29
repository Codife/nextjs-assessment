'use client';

import { Product } from '@/components';
import globalClasses from '@/constants/globalClasses';

export default function Home() {
  return (
    <main className={globalClasses.mainContainer}>
      <header className={globalClasses.headerContainer}>
        <h1 className={globalClasses.heading}>Books</h1>
        <div className={globalClasses.topImageContainer}>
          <img src="/galleryIcon.png" className={globalClasses.topImage} />
        </div>
      </header>
      <section className={globalClasses.productsContainer}>
        {Array(10)
          .fill(2)
          .map((e) => {
            return <Product />;
          })}
      </section>
    </main>
  );
}
