export const useInfoUser = (data) => {
  return {
    valeur: `${data?.userInfos?.firstName} ${data?.userInfos?.lastName}`,
  };
};
