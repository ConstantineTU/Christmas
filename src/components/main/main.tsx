import * as React from 'react';
import { Dispatch, useState, SetStateAction, useEffect } from 'react';
import './main.scss';

import Home from './components/home/home';
import FiltersAndToys from './components/filters&toys/filters&toys';
import Tree from './components/tree/tree';

type Props = {
  activePage: string;
  toysData: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  }[];
  favoriteToys: number;
  setFavoriteToys: Dispatch<SetStateAction<number>>;
  selectedToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

type toysDataType = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export default function Main({ activePage, toysData, favoriteToys, setFavoriteToys, selectedToys }: Props) {
  // Позже переделать все состояния в объект ниже

  // const [filters, setFilters] = useState({
  //   search: '',
  //   sorting: 'By title(A-Z)',
  //   shapeFilter: ['Ball'],
  //   colourFilter: ['Red'],
  //   sizeFilter: ['Big'],
  //   quantityFilter: { min: '', max: '' },
  //   purchaseYearFilter: { min: '', max: '' },
  //   favoriteFilter: true,
  // });

  function SortArray(a: toysDataType, b: toysDataType): number {
    if (sorts === 'AZ') {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    } else if (sorts === 'ZA') {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    } else if (sorts === 'yearAscending') {
      return Number(a.year) - Number(b.year);
    } else if (sorts === 'yearDescending') {
      return Number(b.year) - Number(a.year);
    } else {
      return 0;
    }
  }

  const pages = ['домашняя', 'игрушки', 'ёлка'];
  // search
  const [search, setSearch] = useState<string>(() => {
    const saved = localStorage.getItem('search');
    const initialValue = saved ? saved : undefined;
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);
  // sorts
  const [sorts, setSorts] = useState<string>(() => {
    const saved = localStorage.getItem('sorts');
    const initialValue = saved ? saved : undefined;
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('sorts', sorts);
  }, [sorts]);
  // shapeFilter
  const [shapeFilter, setShapeFilter] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('shapeFilter');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || ['колокольчик', 'шар', 'шишка', 'звезда', 'снежинка', 'фигурка'];
  });
  const [selectedShape, setSelectedShape] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('selectedShape');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || [];
  });
  useEffect(() => {
    localStorage.setItem('selectedShape', selectedShape.join());
    localStorage.setItem('shapeFilter', shapeFilter.join());
  }, [selectedShape.length]);
  // ColorFilter
  const [colorFilter, setColorFilter] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('colorFilter');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || ['белый', 'желтый', 'красный', 'синий', 'зелёный'];
  });
  const [selectedColors, setSelectedColors] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('selectedColors');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || [];
  });
  useEffect(() => {
    localStorage.setItem('selectedColors', selectedColors.join());
    localStorage.setItem('colorFilter', colorFilter.join());
  }, [selectedColors.length]);
  // sizeFilter
  const [sizeFilter, setSizeFilter] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('sizeFilter');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || ['большой', 'средний', 'малый'];
  });
  const [selectedSizes, setSelectedSizes] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('selectedSizes');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || [];
  });
  useEffect(() => {
    localStorage.setItem('selectedSizes', selectedSizes.join());
    localStorage.setItem('sizeFilter', sizeFilter.join());
  }, [sizeFilter.length]);
  // favoriteFilter
  const [favoriteFilter, setFavoriteFilter] = useState<boolean>(() => {
    const saved = localStorage.getItem('favoriteFilter');
    const initialValue = saved === 'true' ? true : false;
    return initialValue || false;
  });
  const [selectedFavoriteFilter, setSelectedFavoriteFilter] = useState<Array<string>>(() => {
    const saved = localStorage.getItem('selectedFavoriteFilter');
    const initialValue = saved ? saved.split(',') : undefined;
    return initialValue || [];
  });
  useEffect(() => {
    localStorage.setItem('favoriteFilter', String(favoriteFilter));
    localStorage.setItem('selectedFavoriteFilter', selectedFavoriteFilter.join());
  }, [favoriteFilter]);
  // quantityValues
  const [quantityValues, setQuantityValues] = useState<Array<number>>(() => {
    const saved = localStorage.getItem('quantityValues');
    const initialValue = saved ? saved.split(',').map(parseFloat) : undefined;
    return initialValue || [1, 12];
  });
  // const [selectedQuantityValues, setSelectedQuantityValues] = useState<Array<string>>(() => {
  //   const saved = localStorage.getItem('selectedQuantityValues');
  //   const initialValue = saved ? saved.split(',') : undefined;
  //   return initialValue || [];
  // });
  useEffect(() => {
    // localStorage.setItem('selectedSizes', selectedSizes.join());
    localStorage.setItem('quantityValues', quantityValues.join());
  }, [quantityValues]);
  // purchaseYearValues
  const [purchaseYearValues, setPurchaseYearValues] = useState<Array<number>>(() => {
    const saved = localStorage.getItem('purchaseYearValues');
    const initialValue = saved ? saved.split(',').map(parseFloat) : undefined;
    return initialValue || [1940, 2021];
  });
  useEffect(() => {
    // localStorage.setItem('selectedSizes', selectedSizes.join());
    localStorage.setItem('purchaseYearValues', purchaseYearValues.join());
  }, [purchaseYearValues]);
  const shapeFilterToysData = toysData.filter((toy) => {
    for (let i = 0; i < shapeFilter.length; i++) {
      if (toy.shape.includes(shapeFilter[i])) {
        return toy.shape.includes(shapeFilter[i]);
      }
    }
    return;
  });
  const colorFilterToysData = shapeFilterToysData.filter((toy) => {
    for (let i = 0; i < colorFilter.length; i++) {
      if (toy.color.includes(colorFilter[i])) {
        return toy.color.includes(colorFilter[i]);
      }
    }
    return;
  });
  const sizeFilterToysData = colorFilterToysData.filter((toy) => {
    for (let i = 0; i < sizeFilter.length; i++) {
      if (toy.size.includes(sizeFilter[i])) {
        return toy.size.includes(sizeFilter[i]);
      }
    }
    return;
  });
  const favoriteFilterToysData = sizeFilterToysData.filter((toy) => {
    if (favoriteFilter) {
      if (toy.favorite) return toy.favorite;
    } else return true;
    return;
  });
  const quantityFilterToysData = favoriteFilterToysData.filter(
    (toy) => +toy.count >= quantityValues[0] && +toy.count <= quantityValues[1]
  );
  const purchaseFilterToysData = quantityFilterToysData.filter(
    (toy) => +toy.year >= purchaseYearValues[0] && +toy.year <= purchaseYearValues[1]
  );
  const newToysData = purchaseFilterToysData
    .filter((toy) => toy.name.toLowerCase().includes(search.toLowerCase()))
    .sort(SortArray);
  return (
    <main className="main">
      {activePage === pages[0] && <Home />}
      {activePage === pages[1] && (
        <FiltersAndToys
          toysData={newToysData}
          favoriteToys={favoriteToys}
          setFavoriteToys={setFavoriteToys}
          search={{ value: search, setValue: setSearch }}
          sorts={{ value: sorts, setValue: setSorts }}
          shapeFilter={{ value: shapeFilter, setValue: setShapeFilter }}
          colorFilter={{ value: colorFilter, setValue: setColorFilter }}
          sizeFilter={{ value: sizeFilter, setValue: setSizeFilter }}
          favoriteFilter={{ value: favoriteFilter, setValue: setFavoriteFilter }}
          quantityValues={{ value: quantityValues, setValue: setQuantityValues }}
          purchaseYearValues={{ value: purchaseYearValues, setValue: setPurchaseYearValues }}
          selectedToys={selectedToys}
          selectedShape={{ value: selectedShape, setValue: setSelectedShape }}
          selectedColors={{ value: selectedColors, setValue: setSelectedColors }}
          selectedSizes={{ value: selectedSizes, setValue: setSelectedSizes }}
          selectedFavoriteFilter={{ value: selectedFavoriteFilter, setValue: setSelectedFavoriteFilter }}
          activePage={activePage}
        />
      )}
      {activePage === pages[2] && <Tree />}
    </main>
  );
}
