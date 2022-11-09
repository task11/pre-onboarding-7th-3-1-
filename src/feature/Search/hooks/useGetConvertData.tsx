import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/create';
import { ConvertSearchDataListProps } from '../../../types/convertSearchData';
import { SearchResultDataListProps } from '../../../types/search';

export default function useGetConvertData(
  initialState: ConvertSearchDataListProps,
) {
  const { data } = useSelector((state: RootState) => state.search.searchData);
  const [convertDataList, setConvertDataList] =
    useState<ConvertSearchDataListProps>(initialState);

  const initDataList = useCallback(
    (value: string) => {
      if (value === '') {
        setConvertDataList([]);
      }
    },
    [setConvertDataList],
  );

  useEffect(() => {
    const convertSearchData = (results: SearchResultDataListProps | null) => {
      if (!results) {
        return [];
      }

      const convertResults = results.reduce<ConvertSearchDataListProps>(
        (acc, curr) => {
          return [
            ...acc,
            {
              sickCd: curr.sickCd,
              fullName: curr.sickNm,
              convertName: curr.sickNm,
            },
          ];
        },
        [],
      );

      return convertResults;
    };
    setConvertDataList(convertSearchData(data));
  }, [data?.length]);

  return { convertDataList, initDataList };
}
