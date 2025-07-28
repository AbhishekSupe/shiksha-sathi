import nurseryData from './nursery_data';
import juniorKgData from './junior_kg_data';
import seniorKgData from './senior_kg_data';
// import seniorKgData from './senior_kg_data'; // in future

const shikshaData = {
  ...nurseryData,
  ...juniorKgData,
  ...seniorKgData
};

export default shikshaData;
