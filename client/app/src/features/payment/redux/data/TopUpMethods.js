import bitapsIcon from '../../view/icons/topUp/bitcoin_PNG47.png';
import funtik from '../../view/icons/topUp/funtik.png';
const RequisitesTypes = {
  PHONE: 'phone',
  TEXT: 'text',
  NONE: 'none',
};
  
const TopUpMethods = {
  BITAPS: {
    id: 0,
    title: 'Bitaps',
    destinationPlaceholder: 'Bitaps',
    iconFileNames: [bitapsIcon],
    isPaySystem: true,
    requisitesType: RequisitesTypes.NONE,
  },

  CANDYWRAPPERS: {
    id: 1,
    title: 'CandryWrappers',
    destinationPlaceholder: 'CandryWrappers',
    iconFileNames: [funtik],
    isPaySystem: true,
    requisitesType: RequisitesTypes.NONE,
  },
};

  
export default TopUpMethods;
export {
    RequisitesTypes,
  };
  
