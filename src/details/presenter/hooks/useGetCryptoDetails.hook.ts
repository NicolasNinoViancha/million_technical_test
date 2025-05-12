import {useState, useEffect} from 'react';
import injections from '../di';
import {CryptoDetailsEntity} from '@details/domain/entities';
import {ErrorHandlerModels} from '@core/errorHandler/models';

const useGetCryptoDetails = (cryptoID: string) => {
  const [cryptoDetails, setCryptDetails] = useState<
    CryptoDetailsEntity | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    if (cryptoID) {
      getCryptoDetails(cryptoID);
    }
  }, [cryptoID]);
  const getCryptoDetails = async (id: string) => {
    setIsLoading(true);
    setIsError(false);
    setCryptDetails(undefined);
    try {
      const response = await injections.detailsUseCases.getCryptoDetails(id);
      setCryptDetails(response);
    } catch (error: any) {
      setIsError(true);
      throw new Error(
        `[${ErrorHandlerModels.Type.HOOK}-useGetCryptoDetails]: error get crypto details ${error.message}`,
      );
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoadingGetCryptoDetails: isLoading,
    isErrorGetCryptoDetails: isError,
    cryptoDetails,
  };
};

export default useGetCryptoDetails;
