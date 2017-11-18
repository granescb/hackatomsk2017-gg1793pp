import bitapsIcon from '../../view/icons/topUp/bitaps_logo.png';
const RequisitesTypes = {
  PHONE: 'phone',
  TEXT: 'text',
  NONE: 'none',
};
  
const TopUpMethods = {
  BITAPS: {
    id: 'Bitaps',
    title: '',
    destinationPlaceholder: 'Bitaps',
    iconFileNames: [bitapsIcon],
    isPaySystem: true,
    requisitesType: RequisitesTypes.NONE,
  },
};
  
export default TopUpMethods;
export {
    RequisitesTypes,
  };
  
