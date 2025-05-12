import {useState, useEffect} from 'react';
import {HomeRepositoryImpl} from '@home/infrastructure/repositories';
import injections from '../di';
import {CryptoEntity} from '@home/domain/entities';
import {ErrorHandlerModels} from '@core/errorHandler/models';

const MINIMUM_POSITION = 0;

const useGetCryptoList = () => {
  const [cryptoList, setCryptoList] = useState<CryptoEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [areAllItems, setAreAllItems] = useState<boolean>(false);
  useEffect(() => {
    getCryptoList();
  }, []);
  const getCryptoList = async () => {
    setIsLoading(true);
    setIsError(false);
    setAreAllItems(false);
    setCryptoList([]);
    try {
      const response = await injections.homeUseCases.getCryptoList(
        MINIMUM_POSITION,
      );
      if (response.length === 0) {
        setAreAllItems(true);
        return;
      }
      setCryptoList(response);
    } catch (error: any) {
      setIsError(true);
      throw new Error(
        `[${ErrorHandlerModels.Type.HOOK}-useGetCryptoList]: error get crypto list ${error.message}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreCryptoList = async () => {
    if (areAllItems || isLoadingMore || isLoading) {
      return;
    }
    setIsError(false);
    setIsLoadingMore(true);
    const newStartItem = cryptoList.length + HomeRepositoryImpl.ITEMS_PER_PAGE;
    try {
      const response = await injections.homeUseCases.getCryptoList(
        newStartItem,
      );
      if (response.length === 0) {
        setAreAllItems(true);
        return;
      }
      setCryptoList(prev => [...prev, ...response]);
    } catch (error: any) {
      setIsError(true);
      throw new Error(
        `[${ErrorHandlerModels.Type.HOOK}-useGetCryptoList]: error get more crypto list ${error.message}`,
      );
    } finally {
      setIsLoadingMore(false);
    }
  };

  return {
    isLoadingGetCryptoList: isLoading,
    isLoadingMoreGetCryptoList: isLoadingMore,
    isErrorGetCryptoList: isError,
    cryptoList,
    getCryptoList,
    getMoreCryptoList,
  };
};

export default useGetCryptoList;
